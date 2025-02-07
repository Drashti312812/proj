import localFont from "next/font/local";
import "../styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <header className="bg-blue-600 text-white p-4 shadow-md">
          <h1 className="text-3xl font-bold text-center">My eCommerce Store</h1>
          <nav className="text-center mt-2">
            <a href="/" className="mx-4 hover:underline">Home</a>
            <a href="/products" className="mx-4 hover:underline">Products</a>
          </nav>
        </header>
        <main className="p-6">{children}</main>
        <footer className="bg-gray-800 text-white text-center p-4 mt-10">
          <p>© 2025 My eCommerce Store</p>
        </footer>
      </body>
    </html>
  );
}
