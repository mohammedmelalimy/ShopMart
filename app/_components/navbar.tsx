import NavLink from './navLink';

export default function Navbar() {
  return (
    <header className="bg-white shadow-md">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-xl font-bold text-blue-600">ShopMart</h1>

        <ul className="flex items-center gap-6 text-gray-700 font-medium">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/products">Products</NavLink>
          <NavLink href="/about">About</NavLink>
        </ul>
      </nav>
    </header>
  );
}
