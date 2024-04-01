export default function WhatIsHappening() {
  const shadowExamples = [
    {
      tailwind: "shadow-sm",
      properties: "box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);",
    },
    {
      tailwind: "shadow",
      properties:
        "box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);",
    },
    {
      tailwind: "shadow",
      properties:
        "box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);",
    },
    {
      tailwind: "shadow-md",
      properties:
        "box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);",
    },
    {
      tailwind: "shadow-lg",
      properties:
        "box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);",
    },
    {
      tailwind: "shadow-xl",
      properties:
        "box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);",
    },
    {
      tailwind: "shadow-2xl",
      properties: "box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);",
    },
    {
      tailwind: "shadow-inner",
      properties: "box-shadow: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);",
    },
    {
      tailwind: "shadow-none",
      properties: "box-shadow: 0 0 #0000;",
    },
  ];

  return (
    <div className="h-full w-full overflow-y-auto rounded-2xl bg-neutral-100 p-8 pt-10 opacity-85 shadow-lg 2xl:p-16 2xl:pt-20">
      <h1 className="text-3xl font-bold lg:text-7xl 2xl:text-9xl">
        What is happening here?
      </h1>
      <h3 className="text-5xl mt-10 font-extrabold p-5">Box Shadow Utility Classes</h3>
      <table className="table-auto text-5xl mt-5 text-left">
        <thead>
          <th className="p-5 font-semibold underline">Tailwind Class</th>
          <th className="p-5 font-semibold underline">Properties</th>
        </thead>
        <tbody>
          {shadowExamples.map((utility) => (
            <tr key={utility.tailwind}>
              <td className="p-5 text-blue-600">{utility.tailwind}</td>
              <td className="p-5 font-mono">{utility.properties}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
