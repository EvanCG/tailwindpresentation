import BackgroundAnimation from "../ui/BackgroundAnimation";
export default function RootLayout({ children }) {
  return (
    <div id="slidesLayout" className="flex h-dvh flex-col">
      <div id="slideContainer">{children}</div>
    </div>
  );
}
