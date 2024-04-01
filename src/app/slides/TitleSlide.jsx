import TailwindCSSLogo from "@/app/ui/logos/TailwindCSSLogo";

export default function TitleSlide() {
  return (
    <div className="h-full w-full rounded-2xl opacity-85 bg-neutral-100 p-16 pt-20 shadow-lg flex flex-col justify-center">
      <div className="w-3/5">
        <TailwindCSSLogo />
      </div>
      <h3 className="mt-20 text-5xl font-bold">Evan Griffith</h3>
      <h4 className="mt-5 text-5xl">April 2024</h4>
    </div>
  );
}
