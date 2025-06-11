import { getNumCpu, getRemoteBarretenbergWasm, getSharedMemoryAvailable } from '../helpers/index.js';
import { createThreadWorker } from '../barretenberg_wasm_thread/factory/node/index.js';
import { BarretenbergWasmBase } from '../barretenberg_wasm_base/index.js';
import { HeapAllocator } from './heap_allocator.js';
import { createDebugLogger } from '../../log/index.js';
/**
 * This is the "main thread" implementation of BarretenbergWasm.
 * It spawns a bunch of "child thread" implementations.
 * In a browser context, this still runs on a worker, as it will block waiting on child threads.
 */
export class BarretenbergWasmMain extends BarretenbergWasmBase {
    constructor() {
        super(...arguments);
        this.workers = [];
        this.remoteWasms = [];
        this.nextWorker = 0;
        this.nextThreadId = 1;
    }
    getNumThreads() {
        return this.workers.length + 1;
    }
    /**
     * Init as main thread. Spawn child threads.
     */
    async init(module, threads = Math.min(getNumCpu(), BarretenbergWasmMain.MAX_THREADS), logger = createDebugLogger('bb_wasm'), initial = 32, maximum = 2 ** 16) {
        this.logger = logger;
        const initialMb = (initial * 2 ** 16) / (1024 * 1024);
        const maxMb = (maximum * 2 ** 16) / (1024 * 1024);
        const shared = getSharedMemoryAvailable();
        this.logger(`Initializing bb wasm: initial memory ${initial} pages ${initialMb}MiB; ` +
            `max memory: ${maximum} pages, ${maxMb}MiB; ` +
            `threads: ${threads}; shared memory: ${shared}`);
        this.logger('saleel: calling new WebAssembly.Memory');
        this.memory = new WebAssembly.Memory({ initial, maximum, shared });
        this.logger('saleel: calling new WebAssembly.Memory done');
        this.logger('saleel: calling WebAssembly.instantiate');
        const instance = await WebAssembly.instantiate(module, this.getImportObj(this.memory));
        this.logger('saleel: calling WebAssembly.instantiate done');
        this.logger('saleel: calling _initialize');
        this.instance = instance;
        // Init all global/static data.
        this.call('_initialize');
        // Create worker threads. Create 1 less than requested, as main thread counts as a thread.
        if (threads > 1) {
            this.logger(`Creating ${threads} worker threads`);
            this.workers = await Promise.all(Array.from({ length: threads - 1 }).map(createThreadWorker));
            this.remoteWasms = await Promise.all(this.workers.map((getRemoteBarretenbergWasm)));
            await Promise.all(this.remoteWasms.map(w => w.initThread(module, this.memory)));
        }
    }
    /**
     * Called on main thread. Signals child threads to gracefully exit.
     */
    async destroy() {
        await Promise.all(this.workers.map(w => w.terminate()));
    }
    getImportObj(memory) {
        const baseImports = super.getImportObj(memory);
        /* eslint-disable camelcase */
        return {
            ...baseImports,
            wasi: {
                'thread-spawn': (arg) => {
                    arg = arg >>> 0;
                    const id = this.nextThreadId++;
                    const worker = this.nextWorker++ % this.remoteWasms.length;
                    // this.logger(`spawning thread ${id} on worker ${worker} with arg ${arg >>> 0}`);
                    this.remoteWasms[worker].call('wasi_thread_start', id, arg).catch(this.logger);
                    // this.remoteWasms[worker].postMessage({ msg: 'thread', data: { id, arg } });
                    return id;
                },
            },
            env: {
                ...baseImports.env,
                env_hardware_concurrency: () => {
                    // If there are no workers (we're already running as a worker, or the main thread requested no workers)
                    // then we return 1, which should cause any algos using threading to just not create a thread.
                    return this.remoteWasms.length + 1;
                },
            },
        };
        /* eslint-enable camelcase */
    }
    callWasmExport(funcName, inArgs, outLens) {
        const alloc = new HeapAllocator(this);
        const inPtrs = alloc.getInputs(inArgs);
        const outPtrs = alloc.getOutputPtrs(outLens);
        this.call(funcName, ...inPtrs, ...outPtrs);
        const outArgs = this.getOutputArgs(outLens, outPtrs, alloc);
        alloc.freeAll();
        return outArgs;
    }
    getOutputArgs(outLens, outPtrs, alloc) {
        return outLens.map((len, i) => {
            if (len) {
                return this.getMemorySlice(outPtrs[i], outPtrs[i] + len);
            }
            const slice = this.getMemorySlice(outPtrs[i], outPtrs[i] + 4);
            const ptr = new DataView(slice.buffer, slice.byteOffset, slice.byteLength).getUint32(0, true);
            // Add our heap buffer to the dealloc list.
            alloc.addOutputPtr(ptr);
            // The length will be found in the first 4 bytes of the buffer, big endian. See to_heap_buffer.
            const lslice = this.getMemorySlice(ptr, ptr + 4);
            const length = new DataView(lslice.buffer, lslice.byteOffset, lslice.byteLength).getUint32(0, false);
            return this.getMemorySlice(ptr + 4, ptr + 4 + length);
        });
    }
}
BarretenbergWasmMain.MAX_THREADS = 32;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYmFycmV0ZW5iZXJnX3dhc20vYmFycmV0ZW5iZXJnX3dhc21fbWFpbi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLEVBQUUsU0FBUyxFQUFFLHlCQUF5QixFQUFFLHdCQUF3QixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDckcsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFFdkYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDMUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXZEOzs7O0dBSUc7QUFDSCxNQUFNLE9BQU8sb0JBQXFCLFNBQVEsb0JBQW9CO0lBQTlEOztRQUVVLFlBQU8sR0FBYSxFQUFFLENBQUM7UUFDdkIsZ0JBQVcsR0FBbUMsRUFBRSxDQUFDO1FBQ2pELGVBQVUsR0FBRyxDQUFDLENBQUM7UUFDZixpQkFBWSxHQUFHLENBQUMsQ0FBQztJQW1IM0IsQ0FBQztJQWpIUSxhQUFhO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRDs7T0FFRztJQUNJLEtBQUssQ0FBQyxJQUFJLENBQ2YsTUFBMEIsRUFDMUIsT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLEVBQUUsb0JBQW9CLENBQUMsV0FBVyxDQUFDLEVBQ2pFLFNBQWdDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxFQUM1RCxPQUFPLEdBQUcsRUFBRSxFQUNaLE9BQU8sR0FBRyxDQUFDLElBQUksRUFBRTtRQUVqQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUVyQixNQUFNLFNBQVMsR0FBRyxDQUFD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