import { CONCEPTS } from "../constants";

const Concepts = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">Concepts</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {CONCEPTS.map((concept, index) => (
          <div
            key={index}
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <h6 className="mb-2 font-semibold">{concept.val}</h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Concepts;
