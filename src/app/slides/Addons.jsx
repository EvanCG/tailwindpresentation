import Image from "next/image";

const addonContent = [
  {
    header: "Tailwind CSS IntelliSence",
    src: "/autocomplete.png",
    subtitle: "Provides autocomplete, syntax highlighting, and linting",
  },
  {
    header: "Prettier Plugin Tailwind CSS",
    src: "/prettier.jpg",
    subtitle:
      "Automatically sort tailwind utility classes in the intended order",
  },
];

export default function Addons() {
  return (
    <div className="h-full w-full overflow-y-auto rounded-2xl bg-neutral-100 p-8 pt-10 opacity-85 shadow-lg 2xl:p-16 2xl:pt-20">
      <h1 className="text-3xl font-bold lg:text-7xl 2xl:text-9xl">
        Try out these addons!
      </h1>
      <div className="flex h-4/5 flex-row justify-between">
        {addonContent.map((column) => (
          <div
            key={column.header}
            className="flex flex-col items-start justify-between p-2"
          >
            <h3 className="mt-10 p-5 text-7xl font-extrabold">
              {column.header}
            </h3>
            <Image
              src={column.src}
              width={2080}
              height={1170}
              alt={column.header + " screenshot"}
              className="z-40 my-5 max-w-4xl self-center border-2 p-6 shadow-2xl"
            />
            <p className="mt-5 self-start text-lg font-normal lg:text-3xl 2xl:mt-10 2xl:text-5xl">
              {column.subtitle}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
