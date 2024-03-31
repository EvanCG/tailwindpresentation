import Link from "next/link";
import { redirect } from "next/navigation";

export default function Home() {

  redirect('/slides/0', 'replace');

  return (
    <div>
      <h1>Tailwind CSS Presentation</h1>
      <Link href="/slides/0" className="underline">
        Presentation
      </Link>
    </div>
  );
}
