import "../styles/globals.css";
import { ThemeProvider } from "../context/ThemeContext";
import Navbar from "../components/Navbar";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body className="bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-200 transition-colors">
      <ThemeProvider>
        <Navbar />
        <main className="p-6">{children}</main>
        <footer className="bg-gray-800 text-white text-center p-4 mt-10">
          <p>© 2025 My eCommerce Store</p>
        </footer>
      </ThemeProvider>
    </body>
  </html>
  );
}
