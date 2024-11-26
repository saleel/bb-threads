import { UltraHonkBackend, Barretenberg } from "@aztec/bb.js";
import { Noir } from "@noir-lang/noir_js";
import circuit from "./assets/circuit.json";
import vkey from "./assets/circuit-vkey.json";
import initNoirC from '@noir-lang/noirc_abi';
import initACVM from '@noir-lang/acvm_js';

const doc = document.getElementById("proof-result");

function print(text) {
  console.log(text);
  doc.innerHTML = text;
}

const generateProof = async () => {
  try {
    print("Initializing...");

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
    print(`Proof generated in ${provingTime}ms`);

    const verified = await backend.verifyProof(proof);
    print(`Proof verified: ${verified}`);
  } catch (e) {
    print(e);
  }
};

window.generateProof = generateProof;
