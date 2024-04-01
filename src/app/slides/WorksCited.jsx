const sources = [
  "“DaisyUI — Tailwind CSS Components.” Daisyui.com, daisyui.com/.",
  "Gonschorek, Anne. “The Story of Tailwind CSS Feat. Adam Wathan.” The OfferZen Community Blog, 13 Sept. 2022, www.offerzen.com/blog/adam-wathan-story-tailwind-css.",
  "shadcn. “Shadcn/Ui.” Shadcn/Ui, 2023, ui.shadcn.com/.",
  "“Tailwind UI.” Www.tailwindui.com, 2024, tailwindui.com/.",
  "tailwindcss. “Tailwind CSS - Rapidly Build Modern Websites without Ever Leaving Your HTML.” Tailwindcss.com, 2023, tailwindcss.com/.",
  "Vercel. “Getting Started | Next.js.” Nextjs.org, 2024, nextjs.org/docs.",
];

export default function WorksCited() {
  return (
    <div className="h-full w-full overflow-y-auto rounded-2xl bg-neutral-100 p-8 pt-10 opacity-85 shadow-lg 2xl:p-16 2xl:pt-20">
      <h1 className="text-3xl font-bold lg:text-7xl 2xl:text-9xl">
        Works Cited
      </h1>
      <ul className="mr-10 mt-5 w-2/3 self-start pl-10 text-lg lg:text-3xl 2xl:mt-10 2xl:self-center 2xl:text-5xl">
        {sources.map((citation, index) => (
          <li key={index} className="my-7 2xl:my-20">
            {citation}
          </li>
        ))}
      </ul>
    </div>
  );
}
