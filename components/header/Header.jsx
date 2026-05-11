import Logo from "./Logo";
import Navbar from "./Navbar";
import MobileNavigation from "./MobileNavigation";

export default function Header() {
  return (
    <header
      id="site-header"
      className="sticky top-0 z-50 border-b border-zinc-200/90 bg-white/90 shadow-[0_1px_0_rgba(9,9,11,0.04)] backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:max-w-[1200px]">
        <Logo />
        <Navbar className="hidden lg:flex lg:flex-row" />
        <MobileNavigation />
      </div>
    </header>
  );
}
