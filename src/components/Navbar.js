import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md flex justify-between items-center">
      <h1 className="text-3xl font-bold">My eCommerce Store</h1>
      <nav className="flex items-center space-x-6">
        <a href="/" className="hover:underline">Home</a>
        <a href="/products" className="hover:underline">Products</a>
        <ThemeToggle />
      </nav>
    </header>
  );
}
