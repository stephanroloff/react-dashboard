import { LanguageSwitcher } from "./Languages/LanguageSwitcher";
import { ModeToggle } from "./Theming/ModeToggle";

function Navbar() {
  return (
    <nav className="text-white px-4 py-3 flex justify-end absolute top-0 right-0 gap-4">
      <LanguageSwitcher />
      <ModeToggle />
    </nav>
  );
}

export default Navbar;
