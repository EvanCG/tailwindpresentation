export default function WhatIsTailwind() {
  return (
    <div className="h-full w-full overflow-y-auto rounded-2xl bg-neutral-100 p-8 pt-10 opacity-85 shadow-lg 2xl:p-16 2xl:pt-20">
      <h1 className="text-3xl font-bold lg:text-7xl 2xl:text-9xl">
        Ok, so what exactly <span className="font-extrabold italic">is</span>{" "}
        Tailwind CSS?
      </h1>
      <ul className="mr-10 mt-5 w-2/3 list-disc self-start pl-10 text-lg lg:text-3xl 2xl:mt-10 2xl:self-center 2xl:text-7xl">
        <li className="my-7 2xl:my-20">
          Set of small{" "}
          <span className="font-bold text-blue-600">utility classes</span> which
          represent common pieces of CSS functionality
        </li>
        <li className="my-7 2xl:my-20">
          When ready to ship – Tailwind CLI takes these classes and{" "}
          <span className="font-bold text-blue-600">compiles</span> them into a
          small CSS file with only the utilities that you actually need
        </li>
        <li className="my-7 2xl:my-20">
          Tailwind CSS itself is{" "}
          <span className="font-bold text-blue-600">unopinionated</span> – there
          are no-prebuilt components, you’re just performing CSS styles
        </li>
      </ul>
    </div>
  );
}
