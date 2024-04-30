import Link from "next/link";
import InputSearch from "./InputSearch";
import UserActionButton from "./UserActionButton";

const Navbar = () => {
  return (
    <header className="bg-color-accent">
      <div className="flex md:flex-row flex-col justify-between md:items-center p-4 gap-3">
        <Link href="/" className="font-bold text-2xl flex justify-center">
          RyoNimeList
        </Link>
        <div className="flex gap-3">
          <InputSearch />
          <UserActionButton />
        </div>
      </div>
    </header>
  );
};
export default Navbar;
