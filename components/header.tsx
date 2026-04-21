"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";
import Container from "./container";
import Button from "./button";
import { useRouter } from "next/navigation";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  const links = [
    { title: "Features", href: "/features" },
    { title: "Pricing", href: "/pricing" },
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
  ];

  return (
    <div className="sticky z-40 md:top-4 xl:top-8 md:px-4">
      <Container className="md:rounded-xl bg-white shadow-md">
        <div className="flex items-center justify-between">
        {/* Logo and Desktop Navigation */}
        <div className="flex items-center gap-2 md:gap-4 px-3 sm:px-4 py-3 sm:py-4 flex-1">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image
              src="/algorion-logo.png"
              alt="Algorion Logo"
              width={100}
              height={20}
              priority
              className="w-24 sm:w-28 h-auto"
            />
          </Link>

          <div className="hidden sm:block h-6 mx-2 md:mx-4 w-px bg-slate-300" />
          <nav className="hidden items-center gap-3 md:gap-6 font-medium text-xs sm:text-sm text-slate-600 sm:flex">
            {links.map((link) => (
              <Link key={link.title} href={link.href} className="transition-colors hover:text-sky-700">
                {link.title}
              </Link>
            ))}
          </nav>
        </div>
            
        {/* Desktop Buttons */}
        <div className="hidden sm:flex items-center gap-2 px-2 sm:px-4 py-3 sm:py-4">
          <Button variant="outline" onClick={() => router.push("/auth/login")} className="px-2 sm:px-3 py-1.5 text-xs sm:text-sm cursor-pointer">
            Login
          </Button>
          <Button variant="primary" className="px-2 sm:px-3 py-1.5 text-xs sm:text-sm whitespace-nowrap">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="sm:hidden flex items-center justify-center p-2 text-slate-600 hover:bg-slate-100 rounded-md mr-2"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white border-t border-slate-200 shadow-md">
          <nav className="flex flex-col py-3">
            {links.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="px-4 py-3 text-sm text-slate-600 hover:bg-slate-50 hover:text-sky-700 transition-colors border-b border-slate-100 last:border-b-0"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.title}
              </Link>
            ))}
          </nav>
          <div className="flex gap-2 px-3 py-3 border-t border-slate-100">
            <Button variant="outline" className="flex-1 px-2 py-1.5 text-xs">
              Login
            </Button>
            <Button variant="primary" className="flex-1 px-2 py-1.5 text-xs">
              Get Started
            </Button>
          </div>
        </div>
      )}
      </Container>
    </div>
  );
}

export default Header;