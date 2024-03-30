import Image from "next/image";

export default function SponsorSlide({imageUrl}) {
  return (
    <div className="flex items-stretch justify-center">
      <Image
        src={imageUrl}
        alt="Bractlet sponsor title page"
        fill={true}
      />
    </div>
  );
}
