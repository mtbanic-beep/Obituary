import { TopBar } from "./components/TopBar";
import { MainNav } from "./components/MainNav";

export const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 w-full z-[999]">
      <TopBar />
      <MainNav />
    </div>
  );
};
