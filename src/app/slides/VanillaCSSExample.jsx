import TailwindDivExample from "./TailwindDivExample";

export default function VanillaCSSExample() {
  return (
    <div className="h-full w-full overflow-y-auto rounded-2xl bg-neutral-100 p-16 pt-20 opacity-85 shadow-lg">
      <h1 className="text-9xl font-bold">
        Let&apos;s check out an example div:
      </h1>
      <div className="flex flex-row justify-around">
        <div className="m-5">
          <h3 className="mx-5 mb-5 mt-20 font-mono text-5xl font-bold">
            index.html
          </h3>
          <div className="mockup-code">
            <pre data-prefix="1">
              <code>
                <span>{"<"}</span>
                <span className="text-red-500">div</span>{" "}
                <span className="text-orange-500">id</span>
                <span className="text-cyan-400">=</span>
                <span className="text-lime-400">{'"divContainer"'}</span>
                <span>{">"}</span>
              </code>
            </pre>
            <pre data-prefix="2">
              <code>
                <span>{"  <"}</span>
                <span className="text-red-500">div</span>{" "}
                <span className="text-orange-500">id</span>
                <span className="text-cyan-400">=</span>
                <span className="text-lime-400">{'"myDiv"'}</span>
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
        <div className="m-5">
          <h3 className="mx-5 mb-5 mt-20 font-mono text-5xl font-bold">
            styles.css
          </h3>
          <div className="mockup-code">
            <pre data-prefix="1">
              <code>
                <span className="text-cyan-400">#divContainer</span> {"{"}
              </code>
            </pre>
            <pre data-prefix="2">
              <code>
                <span className="text-orange-500"> display: </span>
                <span className="text-red-500">flex</span>;
              </code>
            </pre>
            <pre data-prefix="3">
              <code>
                <span className="text-orange-500">justify-content: </span>
                <span className="text-red-500">center</span>;
              </code>
            </pre>
            <pre data-prefix="4">
              <code>{"}"}</code>
            </pre>
            <pre data-prefix="5"></pre>
            <pre data-prefix="6">
              <code>
                <span className="text-cyan-400">#myDiv</span> {"{"}
              </code>
            </pre>
            <pre data-prefix="7">
              <code>
                {"  "}
                <span className="text-orange-500"> background-color: </span>
                <span className="text-red-500">#dc2626</span>;
              </code>
            </pre>
            <pre data-prefix="8">
              <code>
                {"  "}
                <span className="text-orange-500"> border-width: </span>
                <span className="text-red-500">8px</span>;
              </code>
            </pre>
            <pre data-prefix="9">
              <code>{"}"}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
