import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NavArrows({ currentSlide, slideCount }) {
  const router = useRouter();

  /* set up keyboard listener */
  const body = document.querySelector("body");
  body.addEventListener("keydown", (e) => {
    if (e.code === "ArrowLeft" && currentSlide > 0) {
      // go back
      console.log("left arrow");
      router.push(`/slides/${Number(currentSlide) - 1}`);
    } else if (e.code === "ArrowRight" && currentSlide < slideCount) {
      // go forward
      console.log("right arrow");
      router.push(`/slides/${Number(currentSlide) + 1}`);
    }
  });

  return (
    <div className="flex space-x-2 rounded-full border-2 bg-gray-100 p-3">
      <Link
        href={currentSlide == 0 ? "#" : `/slides/${Number(currentSlide) - 1}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
          />
        </svg>
      </Link>
      <p className="font-bold">{currentSlide}</p>
      <Link href={currentSlide > slideCount ? "#" : `/slides/${Number(currentSlide) + 1}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
          />
        </svg>
      </Link>
    </div>
  );
}
