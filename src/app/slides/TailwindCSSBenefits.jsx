import VerticalColumn from '@/app/ui/VerticalColumn';

export default function TailwindCSSBenefits() {
  return (
    <div className="h-full w-full overflow-y-auto rounded-2xl bg-neutral-100 p-8 pt-10 opacity-85 shadow-lg 2xl:p-16 2xl:pt-20">
      <h1 className="text-3xl font-bold lg:text-7xl 2xl:text-9xl">
        And how this compares with Tailwind CSS:
      </h1>
      <div className="flex flex-col justify-start">
        <div className="m-2 2xl:m-5">
          <h3 className="mx-5 mb-5 mt-7 2xl:mt-20 font-mono text-5xl font-bold">
            index.html
          </h3>
          <div className="mockup-code text-2xl max-w-fit">
            <pre data-prefix="1">
              <code>
                <span>{"<"}</span>
                <span className="text-red-500">div</span>{" "}
                <span className="text-orange-500">class</span>
                <span className="text-cyan-400">=</span>
                <span className="text-lime-400">{'"flex justify-center"'}</span>
                <span>{">"}</span>
              </code>
            </pre>
            <pre data-prefix="2">
              <code>
                <span>{"  <"}</span>
                <span className="text-red-500">div</span>{" "}
                <span className="text-orange-500">class</span>
                <span className="text-cyan-400">=</span>
                <span className="text-lime-400">
                  {
                    '"w-4/5 border-8 border-blue-600 bg-red-600 hover:bg-yellow-400 p-5 shadow-2xl"'
                  }
                </span>
                <span>{">"}</span>The Best Div Ever
                <span>{"</"}</span>
                <span className="text-red-500">div</span>
                <span>{">"}</span>
              </code>
            </pre>
            <pre data-prefix="3">
              <code>
                <span>{"</"}</span>
                <span className="text-red-500">div</span>
                <span>{">"}</span>
              </code>
            </pre>
          </div>
        </div>
        <div className="m-2 2xl:m-5">
          <VerticalColumn />
        </div>
      </div>
    </div>
  );
}
