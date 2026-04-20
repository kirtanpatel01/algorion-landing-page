import Image from "next/image";
import Link from "next/link";
import Container from "./container";
import Button from "./button";

function Header() {
  const links = [
    { title: "Features", href: "/features" },
    { title: "Pricing", href: "/pricing" },
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
  ];

  return (
    <Container className="w-full sticky z-40 top-8 ">
      <div className="w-full flex items-center justify-between gap-3 rounded-xl bg-white p-4 shadow-md">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/algorion-logo.png" alt="Algorion Logo" width={124} height={24} priority />
          </Link>

          <div className="h-6 mx-4 w-px bg-slate-300" />
          <nav className="hidden items-center gap-6  font-medium text-slate-600 md:flex">
            {links.map((link) => (
              <Link key={link.title} href={link.href} className="transition-colors hover:text-sky-700">
                {link.title}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" className="px-3 py-1.5">
            Login
          </Button>
          <Button variant="primary" className="px-3 py-1.5">
            Get Started - It&apos;s Free
          </Button>
        </div>
      </div>
    </Container>
  );
}

export default Header;