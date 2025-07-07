import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/blogs", label: "Blogs" },
    { href: "/team", label: "Team" },
    { href: "/work", label: "Work" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="top-head h-3 bg-black"></div>
      <div className="container mx-auto max-w-screen-lg">
        <div className="flex justify-between items-center px-4 py-3 relative mt-0 lg:-mt-3">
          {/* Logo */}
          <div className="bg-black lg:hidden p-2">
            <div className="w-14">
              <Image
                src="/img/ft-logo.png"
                width={327}
                height={187}
                alt="logo"
              />
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-white p-2 z-50 bg-black"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>

          {/* Navigation */}
          <nav
            className={`fixed top-0 right-0 h-full w-64 text-white shadow-lg transform bg-black lg:bg-transparent ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            } transition-transform lg:static lg:translate-x-0 lg:w-full lg:flex`}
          >
            <ul className="menu flex flex-col lg:flex-row gap-6 p-6 lg:p-0 lg:gap-8 lg:justify-evenly lg:w-full mt-24 lg:mt-0">
              {menuItems.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={`flex items-center gap-2 text-[22px] font-semibold uppercase transition-all duration-300 ${
                      router.pathname === href ? "text-white" : "text-gray-400"
                    }`}
                    onClick={() => setIsMenuOpen(false)} // Close mobile menu
                  >
                    {/* Active Indicator */}
                    <span
                      className={`transition-all duration-300 w-5 ${
                        router.pathname === href ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 50 73"
                        fill="none"
                      >
                        <path
                          d="M26.9707 0.594299L26.9707 25.7614H49.8377L25.2021 72.1569L25.2021 51.9631H0.0493164L26.9707 0.594299Z"
                          fill="#B1FF00"
                        />
                      </svg>
                    </span>
                    <span>{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="head-trans hidden md:block"></div>
        </div>
      </div>
    </header>
  );
}
