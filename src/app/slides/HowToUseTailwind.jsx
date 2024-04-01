import Image from "next/image";

export default function HowToUseTailwind() {
  return (
    <div className="h-full w-full overflow-y-auto rounded-2xl bg-neutral-100 p-8 pt-10 opacity-85 shadow-lg 2xl:p-16 2xl:pt-20">
      <h1 className="text-3xl font-bold lg:text-7xl 2xl:text-9xl">
        How do I use Tailwind?
      </h1>
      <h3 className="mt-10 py-5 text-5xl font-bold italic">
        Visit{" "}
        <a
          href="https://tailwindcss.com/"
          className="text-blue-600 hover:underline"
        >
          tailwindcss.com
        </a>{" "}
        to view the docs
      </h3>
      <div className="flex items-center justify-between lg:flex-row">
        <div className="left-5 flex w-2/5 flex-col items-center justify-center p-2">
          <div className="mockup-browser bg-base-300 -rotate-3 border shadow-2xl ">
            <div className="mockup-browser-toolbar">
              <div className="input">{`tailwindcss.com/`}</div>
            </div>
            <div className="flex justify-center bg-neutral-50">
              <Image
                src="/TailwindCSSWebsite.png"
                width={1536 / 2}
                height={1024 / 2}
                alt="TailwindCSS.com Website"
              />
            </div>
          </div>
        </div>
        <ol className="ml-36 mt-5 w-3/5 list-decimal self-start text-lg font-bold lg:text-3xl 2xl:mt-10 2xl:self-center 2xl:text-7xl">
          <li className="my-7 2xl:my-20">
            Tailwind CLI
            <span className="font-normal text-gray-600">
              {" "}
              - best general purpose
            </span>
          </li>
          <li className="my-7 2xl:my-20">
            PostCSS
            <span className="font-normal text-gray-600">
              {" "}
              - ideal for build tools
            </span>
          </li>
          <li className="my-7 2xl:my-20">
            Framework-specific Guides
            <span className="font-normal text-gray-600">
              {" "}
              - many popular frameworks included
            </span>
          </li>
          <li className="my-7 2xl:my-20">
            Play CDN
            <span className="font-normal text-gray-600">
              {" "}
              - don&apos;t use in production!
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
}
