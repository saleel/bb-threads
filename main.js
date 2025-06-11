const doc = document.getElementById("proof-result");

function print(text) {
  console.log(text);
  doc.innerHTML += text + "<br/>";
}

const generateProof = async () => {
  try {
    print("Initializing...");

    const numThreads = document.getElementById("num-threads").value;

    const { UltraHonkBackend, Barretenberg } = await import("@aztec/bb.js");
    const { Noir } = await import("@noir-lang/noir_js");
    const circuit = await import("./assets/circuit.json");

    const noir = new Noir(circuit);

    const backend = new UltraHonkBackend(circuit.bytecode, {
      threads: numThreads,
      logger: (msg) => {
        console.log(msg);
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
