import Image from "next/image";

export default function ExampleDiv() {
  return (
    <div className="h-full w-full overflow-y-auto rounded-2xl bg-neutral-100 p-16 pt-20 opacity-85 shadow-lg">
      <h1 className="text-9xl font-bold">Lets check out an example div:</h1>
      <div className="flex flex-row justify-around">
        <div className="m-5">
          <h3 className="mx-5 mb-5 mt-20 text-5xl font-bold">Default</h3>
          <Image
            src="/divSCreenshotDefault.png"
            width={1780}
            height={1582}
            alt="Screenshot of default state div"
            className="size-11/12 shadow-2xl"
          />
        </div>
        <div className="m-5">
          <h3 className="mx-5 mb-5 mt-20 text-5xl font-bold">On Hover</h3>
          <Image
            src="/divSCreenshotHover.png"
            width={1780}
            height={1582}
            alt="Screenshot of hover state div"
            className="size-11/12 shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
}
