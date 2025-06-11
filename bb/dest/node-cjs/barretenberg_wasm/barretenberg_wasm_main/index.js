"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BarretenbergWasmMain = void 0;
const index_js_1 = require("../helpers/index.js");
const index_js_2 = require("../barretenberg_wasm_thread/factory/node/index.js");
const index_js_3 = require("../barretenberg_wasm_base/index.js");
const heap_allocator_js_1 = require("./heap_allocator.js");
const index_js_4 = require("../../log/index.js");
/**
 * This is the "main thread" implementation of BarretenbergWasm.
 * It spawns a bunch of "child thread" implementations.
 * In a browser context, this still runs on a worker, as it will block waiting on child threads.
 */
class BarretenbergWasmMain extends index_js_3.BarretenbergWasmBase {
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
    async init(module, threads = Math.min((0, index_js_1.getNumCpu)(), BarretenbergWasmMain.MAX_THREADS), logger = (0, index_js_4.createDebugLogger)('bb_wasm'), initial = 32, maximum = 2 ** 16) {
        this.logger = logger;
        const initialMb = (initial * 2 ** 16) / (1024 * 1024);
        const maxMb = (maximum * 2 ** 16) / (1024 * 1024);
        const shared = (0, index_js_1.getSharedMemoryAvailable)();
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
            this.workers = await Promise.all(Array.from({ length: threads - 1 }).map(index_js_2.createThreadWorker));
            this.remoteWasms = await Promise.all(this.workers.map((index_js_1.getRemoteBarretenbergWasm)));
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
        const alloc = new heap_allocator_js_1.HeapAllocator(this);
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
exports.BarretenbergWasmMain = BarretenbergWasmMain;
BarretenbergWasmMain.MAX_THREADS = 32;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYmFycmV0ZW5iZXJnX3dhc20vYmFycmV0ZW5iZXJnX3dhc21fbWFpbi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFQSxrREFBcUc7QUFDckcsZ0ZBQXVGO0FBRXZGLGlFQUEwRTtBQUMxRSwyREFBb0Q7QUFDcEQsaURBQXVEO0FBRXZEOzs7O0dBSUc7QUFDSCxNQUFhLG9CQUFxQixTQUFRLCtCQUFvQjtJQUE5RDs7UUFFVSxZQUFPLEdBQWEsRUFBRSxDQUFDO1FBQ3ZCLGdCQUFXLEdBQW1DLEVBQUUsQ0FBQztRQUNqRCxlQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsaUJBQVksR0FBRyxDQUFDLENBQUM7SUFtSDNCLENBQUM7SUFqSFEsYUFBYTtRQUNsQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQ7O09BRUc7SUFDSSxLQUFLLENBQUMsSUFBSSxDQUNmLE1BQTBCLEVBQzFCLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUEsb0JBQVMsR0FBRSxFQUFFLG9CQUFvQixDQUFDLFdBQVcsQ0FBQyxFQUNqRSxTQUFnQyxJQUFBLDRCQUFpQixFQUFDLFNBQVMsQ0FBQyxFQUM1RCxPQUFPLEdBQUcsRUFBRSxFQUNaLE9BQU8sR0FBRyxDQUFDLElBQUksRUFBRTtRQUVqQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUVyQixNQUFNLFNBQVMsR0FBRyxDQUFDLE9BQU8sR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDdEQsTUFBTSxLQUFLLEdBQUcsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQ2xELE1BQU0sTUFB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