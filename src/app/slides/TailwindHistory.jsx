import Image from "next/image";

export default function TailwindHistory() {
  return (
    <div className="h-full w-full overflow-y-auto rounded-2xl bg-neutral-100 p-16 pt-20 opacity-85 shadow-lg">
      <h1 className="text-9xl font-bold">Tailwind CSS: Story Time</h1>
      <div className="flex items-center">
        <ul className="mt-10 w-2/3 list-disc pl-10 text-7xl">
          <li className="my-20">Primarily authored by Adam Wathan in 2017</li>{" "}
          <li className="my-20">
            Was working on a set of startup ideas, found himself copying small
            ‘utility classes’ between projects
          </li>{" "}
          <li className="my-20">
            Was streaming his work and people kept asking about his CSS:{" "}
            <span className="font-bold text-blue-600">
              Tailwind CSS was born
            </span>
          </li>
          <li className="my-20">
            Today, Tailwind is downloaded <span className="font-bold text-blue-600">34M+</span> times per month and is used by some of the worlds largest companies
            
          </li>
        </ul>
        <div className="flex flex-col w-1/3 items-center justify-center p-2">
          <Image
            src="/AdamWathan.png"
            width={408}
            height={408}
            alt="Picture of Adam Wathan"
            className="z-40 border-2 bg-gray-50 p-6 pb-16 shadow-2xl rotate-6 rounded-lg"
          />
          <Image
            src="/TailwindPresentation.png"
            width={1536}
            height={1024}
            alt="Picture from Tailwind's first conference"
            className="relative -top-20 border-2  bg-gray-50 p-6 pb-16 shadow-2xl -rotate-6 rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
