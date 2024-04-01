export default function TailwindDivExample({ hoverState = false }) {
  return (
    <div className="flex justify-center">
      <div
        className={`w-4/5 border-8 border-blue-600 ${
          !hoverState ? "bg-red-600 hover:bg-yellow-400" : "bg-yellow-400"
        } p-5 shadow-2xl`}
      >
        The best div ever
      </div>
    </div>
  );
}
