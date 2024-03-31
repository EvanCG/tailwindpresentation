import Link from "next/link";

export default function SlideList() {
  const links = [];

  for (let i = 0; i < 5; i++) {
    links.push(
      <li className="hover:underline">
        <Link href={`/slides/${i}`}>Slide {i}</Link>
      </li>,
    );
  }

  return (
    <div className="mt-10 flex justify-center text-lg">
      <div>
        <h1 className="font-bold ">Tailwind CSS Presentation</h1>
        <ul className="list-disc pl-5">{links}</ul>
      </div>
    </div>
  );
}
