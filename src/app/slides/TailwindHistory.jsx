import Image from "next/image";

export default function TailwindHistory() {
  return (
    <div className="h-full w-full overflow-y-auto rounded-2xl bg-neutral-100 p-8 pt-10 opacity-85 shadow-lg 2xl:p-16 2xl:pt-20">
      <h1 className="text-3xl font-bold lg:text-7xl 2xl:text-9xl">
        Tailwind CSS: Story Time
      </h1>
      <div className="flex items-center lg:flex-row">
        <ul className="mr-10 mt-5 w-2/3 list-disc self-start pl-10 text-lg lg:text-3xl 2xl:self-center 2xl:mt-10 2xl:text-7xl">
          <li className="my-7 2xl:my-20">
            Primarily authored by Adam Wathan in 2017
          </li>{" "}
          <li className="my-7 2xl:my-20">
            Was working on a set of startup ideas, found himself copying small
            ‘utility classes’ between projects
          </li>{" "}
          <li className="my-7 2xl:my-20">
            Was streaming his work and people kept asking about his CSS:{" "}
            <span className="font-bold text-blue-600">
              Tailwind CSS was born
            </span>
          </li>
          <li className="my-7 2xl:my-20">
            Today, Tailwind is downloaded{" "}
            <span className="font-bold text-blue-600">34M+</span> times per
            month and is used by some of the worlds largest companies
          </li>
        </ul>
        <div className="flex w-1/3 flex-col items-center justify-center p-2">
          <Image
            src="/AdamWathan.png"
            width={408}
            height={408}
            alt="Picture of Adam Wathan"
            className="z-40 max-w-72 rotate-6 rounded-lg border-2 bg-gray-50 p-6 pb-16 shadow-2xl 2xl:max-w-min"
          />
          <Image
            src="/TailwindPresentation.png"
            width={1536}
            height={1024}
            alt="Picture from Tailwind's first conference"
            className="relative -top-20 max-w-sm  -rotate-6 rounded-lg border-2 bg-gray-50 p-6 pb-16 shadow-2xl 2xl:max-w-min"
          />
        </div>
      </div>
    </div>
  );
}
