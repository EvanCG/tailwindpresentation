import { GeistSans } from 'geist/font/sans';

import TailwindUILogo from "@/app/ui/logos/TailwindUILogo";
import DaisyUILogo from "@/app/ui/logos/DaisyUILogo";

export default function ComponentLibraries() {
  return (
    <div className="h-full w-full overflow-y-auto rounded-2xl bg-neutral-100 p-8 pt-10 opacity-85 shadow-lg 2xl:p-16 2xl:pt-20">
      <h1 className="text-3xl font-bold lg:text-7xl 2xl:text-9xl">
        Check out some component libraries:
      </h1>
      <div className="flex flex-col items-center justify-between mt-10">
        <div className="m-28 w-3/5">
          <TailwindUILogo />
        </div>
        <div className="flex justify-around items-center">
          <div className="m-24 w-1/3">
            <DaisyUILogo />
          </div>
          <div className={`${GeistSans.className} m-24 w-2/5 flex justify-center items-center`}>
            <p className="font-bold text-9xl">shadcn/ui</p>
          </div>
        </div>
      </div>
    </div>
  );
}
