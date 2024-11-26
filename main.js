import { UltraHonkBackend, Barretenberg } from "@aztec/bb.js";
import { Noir } from "@noir-lang/noir_js";
import circuit from "./assets/circuit.json";
import vkey from "./assets/circuit-vkey.json";
import initNoirC from '@noir-lang/noirc_abi';
import initACVM from '@noir-lang/acvm_js';

const generateProof = async () => {
  const api = await Barretenberg.new();
  console.log(await api.getNumThreads());
  await Promise.all([
    initACVM(new URL('@noir-lang/acvm_js/web/acvm_js_bg.wasm', import.meta.url).toString()),
    initNoirC(
      new URL('@noir-lang/noirc_abi/web/noirc_abi_wasm_bg.wasm', import.meta.url).toString(),
    ),
  ]);

  const noir = new Noir(circuit);

  const backend = new UltraHonkBackend(circuit.bytecode);

  const startTime = performance.now();
  const { witness } = await noir.execute({ x: 3, y: 3 });
  const proof = await backend.generateProof(witness);
  const provingTime = performance.now() - startTime;

  console.log(`Proof generated in ${provingTime}ms`, proof);

  const verified = await backend.verifyProof(proof);
  console.log("Proof verified:", verified);
};

window.generateProof = generateProof;
