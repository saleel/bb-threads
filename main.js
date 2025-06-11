import packagejson from "./package.json";

print(`bb.js version: ${packagejson.dependencies["@aztec/bb.js"]}`);

const doc = document.getElementById("proof-result");

function print(text) {
  console.log(text);

  document.getElementById("logs").innerHTML += text + "<br/>";
}

const generateProof = async () => {
  try {
    document.getElementById("logs").innerHTML = "";

    print("Initializing...");

    const numThreads = document.getElementById("num-threads").value;

    const { UltraHonkBackend, Barretenberg } = await import("@aztec/bb.js");
    const { Noir } = await import("@noir-lang/noir_js");
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
  const { Barretenberg } = await import("@aztec/bb.js");
  document.getElementById("logs").innerHTML = "";

  try {
  print("Barretenberg.new");
  const bb = await Barretenberg.new({
    threads: Number(document.getElementById("threads").value),
    logger: (msg) => print(msg),
    memory: {
      initial: Number(document.getElementById("initial-memory").value),
      maximum: Number(document.getElementById("maximum-memory").value),
    },
  });

  print("Barretenberg.getNumThreads");
  const numThreads = await bb.getNumThreads();
  print(`Barretenberg.getNumThreads: ${numThreads}`);

  print("Barretenberg.initSRSForCircuitSize");
  await bb.initSRSForCircuitSize(Number(document.getElementById("circuit-size").value));
  print("Barretenberg.initSRSForCircuitSize done");

    print("Barretenberg.new done");
  } catch (e) {
    print("\n\n\nError\n\n\n");
    print(e);
  }
}

document.getElementById("load-wasm").addEventListener("click", loadWasm);
