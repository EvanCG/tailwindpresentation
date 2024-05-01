import TailwindCSSLogo from "@/app/ui/logos/TailwindCSSLogo";

export default function TitleSlide() {
  const currentDate = new Date();

  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const writtenDate = `${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}`;

  return (
    <div className="flex h-full w-full flex-col justify-center rounded-2xl bg-neutral-100 p-16 pt-20 opacity-85 shadow-lg">
      <div className="w-3/5">
        <TailwindCSSLogo />
      </div>
      <h3 className="mt-20 text-5xl font-bold">Evan Griffith</h3>
      <h4 className="mt-5 text-5xl">{writtenDate}</h4>
    </div>
  );
}
