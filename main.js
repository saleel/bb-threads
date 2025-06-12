import packagejson from "./package.json";
import { UltraHonkBackend, Barretenberg } from "@aztec/bb.js";
import { Noir } from "@noir-lang/noir_js";

print(`bb.js version: ${packagejson.dependencies["@aztec/bb.js"]}`);

function print(text) {
  console.log(text);

  document.getElementById("logs").innerHTML += text + "<br/>";
}

const generateProof = async () => {
  try {
    document.getElementById("logs").innerHTML = "";

    print("Initializing...");

    const numThreads = Number(document.getElementById("threads").value);

    const circuit = await import("./assets/circuit.json");

    const noir = new Noir(circuit);

    const backend = new UltraHonkBackend(circuit.bytecode, {
      threads: Number(numThreads),
      logger: (msg) => {
        print(msg);
      },
    });

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

document
  .getElementById("generate-proof")
  .addEventListener("click", generateProof);

async function loadWasm() {
  document.getElementById("logs").innerHTML = "";

  try {
    const initial = Number(document.getElementById("initial-memory").value);
    const maximum = Number(document.getElementById("maximum-memory").value);
    const threads = Number(document.getElementById("threads").value);
    const shared = true;
    const initialMb = (initial * 2 ** 16) / (1024 * 1024);
    const maxMb = (maximum * 2 ** 16) / (1024 * 1024);

    print("Calling new WebAssembly.Memory directly");
    print(
      `Initializing bb wasm: initial memory ${initial} pages ${initialMb}MiB; ` +
        `max memory: ${maximum} pages, ${maxMb}MiB;`
    );
    const mem = new WebAssembly.Memory({
      initial,
      maximum,
      shared: true,
    });
    print("Calling new WebAssembly.Memory done\n\n");

    print("Calling  Barretenberg.new");
    const bb = await Barretenberg.new({
      threads,
      logger: (msg) => print(msg),
      memory: {
        initial,
        maximum,
      },
    });
    print("Barretenberg.new done");
  } catch (e) {
    print("\n\n\nError\n\n\n");
    print(e);
  }
}

document.getElementById("load-wasm").addEventListener("click", loadWasm);
