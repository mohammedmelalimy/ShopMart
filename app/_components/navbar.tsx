import NavLink from './navLink';
import { ModeToggle } from './Toggle';

export default function Navbar() {
  return (
    <header className="bg-white shadow-md dark:bg-black sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto flex flex-col gap-4 md:flex-row md:gap-10 items-center justify-between px-6 py-4">
        <h1 className="text-xl font-bold hover:text-sky-500 dark:hover:text-sky-400 cursor-pointer">ShopMart</h1>

        <ul className="flex items-center gap-6 text-gray-700 font-medium dark:text-white">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/products">Products</NavLink>
          <NavLink href="/about">About</NavLink>
          <ModeToggle />
        </ul>
      </nav>
    </header>
  );
}
