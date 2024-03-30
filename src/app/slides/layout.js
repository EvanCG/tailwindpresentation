
export default function RootLayout({ children }) {
  
  return (
    <div id="slidesLayout" className="h-dvh flex flex-col">
      <div id="slideContainer">{children}</div>
    </div>
  );
}
