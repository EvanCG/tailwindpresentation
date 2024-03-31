import TailwindDivExample from "./TailwindDivExample";

export default function ExampleDiv() {
  return (
    <div className="h-full w-full overflow-y-auto rounded-2xl bg-neutral-100 p-16 pt-20 opacity-85 shadow-lg">
      <h1 className="text-9xl font-bold">Lets check out an example div:</h1>
      <div className="flex flex-row justify-around">
        <div className="m-5">
          <h3 className="mx-5 mb-5 mt-20 text-5xl font-bold">Default</h3>
          <div className="mockup-browser bg-base-300 border shadow-2xl">
            <div className="mockup-browser-toolbar">
              <div className="input">//localhost:3000</div>
            </div>
            <div className="bg-neutral-50 flex justify-center px-4 py-16">
              <TailwindDivExample />
            </div>
          </div>
        </div>
        <div className="m-5">
          <h3 className="mx-5 mb-5 mt-20 text-5xl font-bold">On Hover</h3>
          <div className="mockup-browser bg-base-300 border shadow-2xl">
            <div className="mockup-browser-toolbar">
              <div className="input">//localhost:3000</div>
            </div>
            <div className="bg-neutral-50 flex justify-center px-4 py-16">
              <TailwindDivExample hoverState={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
