import TailwindDivExample from "./TailwindDivExample";

export default function ExampleDiv() {
  return (
    <div className="h-full w-full overflow-y-auto rounded-2xl bg-neutral-100 p-8 pt-10 opacity-85 shadow-lg 2xl:p-16 2xl:pt-20">
      <h1 className="text-3xl font-bold lg:text-7xl 2xl:text-9xl">
        Let&apos;s check out an example div:
      </h1>
      <div className="flex flex-row justify-around h-4/5">
        <div className="m-2 size-full py-10 pt-0 2xl:m-5 2xl:px-16">
          <h3 className="mx-5 mb-5 mt-7 font-mono text-5xl font-bold 2xl:mt-20">
            Default
          </h3>
          <div className="mockup-browser bg-base-300 border shadow-2xl">
            <div className="mockup-browser-toolbar">
              <div className="input">{`//localhost:3000`}</div>
            </div>
            <div className="flex justify-center bg-neutral-50 py-16 2xl:py-32">
              <TailwindDivExample />
            </div>
          </div>
        </div>
        <div className="m-2 size-full py-10 pt-0 2xl:m-5 2xl:px-16">
          <h3 className="mx-5 mb-5 mt-7 font-mono text-5xl font-bold 2xl:mt-20">
            On Hover
          </h3>
          <div className="mockup-browser bg-base-300 border shadow-2xl">
            <div className="mockup-browser-toolbar">
              <div className="input">{`//localhost:3000`}</div>
            </div>
            <div className="flex justify-center bg-neutral-50 py-16 2xl:py-32">
              <TailwindDivExample hoverState={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
