import Image from "next/image";

export default function HowToUseTailwind() {
  return (
    <div className="h-full w-full overflow-y-auto rounded-2xl bg-neutral-100 p-8 pt-10 opacity-85 shadow-lg 2xl:p-16 2xl:pt-20">
      <h1 className="text-3xl font-bold lg:text-7xl 2xl:text-9xl">
        How do I use Tailwind?
      </h1>
      <h3 className="mt-10 py-5 text-5xl font-bold italic">
        Visit <a href="https://tailwindcss.com/" className="text-blue-600">tailwindcss.com</a> to view the
        docs
      </h3>
      <div className="flex items-center justify-between lg:flex-row">
      <div className="flex w-2/5 flex-col items-center justify-center p-2 left-5">
          <div className="mockup-browser bg-base-300 -rotate-3 border shadow-2xl ">
            <div className="mockup-browser-toolbar">
              <div className="input">{`tailwindcss.com/`}</div>
            </div>
            <div className="flex justify-center bg-neutral-50">
              <Image
                src="/TailwindCSSWebsite.png"
                width={1536}
                height={1024}
                alt="TailwindCSS.com Website"
              />
            </div>
          </div>
        </div>
        <ol className="mt-5 w-3/5 list-decimal self-start ml-36 text-lg lg:text-3xl 2xl:mt-10 2xl:self-center 2xl:text-7xl font-bold">
          <li className="my-7 2xl:my-20">Tailwind CLI<span className="font-normal text-gray-600"> - best general purpose</span></li>
          <li className="my-7 2xl:my-20">PostCSS<span className="font-normal text-gray-600"> - ideal for build tools</span></li>
          <li className="my-7 2xl:my-20">Play CDN<span className="font-normal text-gray-600"> - don&apos;t use in production!</span></li>
          <li className="my-7 2xl:my-20">Framework-specific Guides<span className="font-normal text-gray-600"> - many popular frameworks included</span></li>
        </ol>
        
      </div>
    </div>
  );
}
