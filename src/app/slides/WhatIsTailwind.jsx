export default function WhatIsTailwind() {
  return (
    <div className="overflow-y-auto opacity-95 h-full w-full rounded-2xl bg-neutral-100 p-16 pt-20 shadow-lg">
      <h1 className="text-8xl font-bold">
        Ok, so what exactly <span className="font-extrabold italic">is</span>{" "}
        Tailwind CSS?
      </h1>
      <ul className="mt-10 list-disc pl-10 text-5xl">
        <li className="my-16">
          Set of small{" "}
          <span className="font-bold text-blue-600">utility classes</span> which
          represent common pieces of CSS functionality
        </li>
        <li className="my-16">
          When ready to view changes – Tailwind CLI takes these classes and{" "}
          <span className="font-bold text-blue-600">compiles</span> them into a
          small CSS file with only the utilities that you actually need
        </li>
        <li className="my-16">
          Tailwind CSS is{" "}
          <span className="font-bold text-blue-600">unopinionated</span> – there
          are no-prebuilt styles, you’re just performing basic operations
        </li>
      </ul>
    </div>
  );
}
