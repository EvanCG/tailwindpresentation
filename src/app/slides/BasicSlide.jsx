export default function BasicSlide() {
  return (
    <div className="h-full w-full overflow-y-auto rounded-2xl bg-neutral-100 p-16 pt-20 opacity-85 shadow-lg">
      <h1 className="text-9xl font-bold">
        The title <span className="font-extrabold italic">is</span> Emphasized
      </h1>
      <ul className="mt-10 list-disc pl-10 text-7xl">
        <li className="my-20">
          Here is some{" "}
          <span className="font-bold text-blue-600">emphasized</span> text in a
          bullet
        </li>{" "}
        <li className="my-20">
          Here is some{" "}
          <span className="font-bold text-blue-600">emphasized</span> text in a
          bullet
        </li>{" "}
        <li className="my-20">
          Here is some{" "}
          <span className="font-bold text-blue-600">emphasized</span> text in a
          bullet
        </li>
      </ul>
    </div>
  );
}
