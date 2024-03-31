export default function BackgroundAnimation() {
  return (
    <div className=" absolute size-full overflow-hidden">
      <div class="animate-blob absolute -left-4 top-0 size-6/12 rounded-full bg-violet-300 opacity-40 mix-blend-multiply blur-2xl filter"></div>
      <div class="animate-blob animation-delay-6000 absolute inset-x-2/3 inset-y-2/3 top-96 size-8/12 rounded-full bg-teal-300 opacity-40 mix-blend-multiply blur-2xl filter"></div>
      <div class="animate-blob animation-delay-10000 absolute -bottom-32 left-64 size-6/12 rounded-full bg-blue-300 opacity-40 mix-blend-multiply blur-2xl filter"></div>
    </div>
  );
}
