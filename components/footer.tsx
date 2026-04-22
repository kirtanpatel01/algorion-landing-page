import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconBrandYoutube,
} from "@tabler/icons-react";
import Image from "next/image";
import Container from "./container";

function Footer() {
  const links = [
    {
      heading: "Company",
      items: ["About Algorion AI", "Privacy Policy", "Terms and Conditions", "Refund Policy"],
    },
    {
      heading: "Resources",
      items: ["Subscription Plans", "Frequently Asked Questions", "Customer Support"],
    },
    {
      heading: "Contact",
      items: ["admin@myalgorion.tech", "Support Mon-Sat 9AM - 6PM", "Sunday Closed"],
    },
    {
      heading: "Legal",
      items: ["Algorion Research & Analysis Private Limited"],
    },
  ];

  return (
    <footer id="contact" className="border-t border-border-default bg-surface">
      <Container className="px-3 sm:px-4 xl:px-0 py-8 sm:py-10 md:py-14">
        {/* Logo and Social Icons */}
        <div className="mb-8 sm:mb-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 sm:gap-4">
          <div className="shrink-0">
            <Image
              src="/algorion-logo.png"
              alt="Algorion Logo"
              width={150}
              height={22}
              className="w-32 sm:w-40 h-auto"
            />
          </div>

          <ul className="flex items-center gap-3 sm:gap-2 text-text-muted flex-wrap">
            <li>
              <a
                href="#"
                aria-label="LinkedIn"
                className="rounded-md p-1.5 sm:p-2 transition-colors hover:bg-surface-muted hover:text-text-secondary"
              >
                <IconBrandLinkedin size={20} className="sm:w-8 sm:h-8 w-5 h-5" />
              </a>
            </li>
            <li>
              <a
                href="#"
                aria-label="Instagram"
                className="rounded-md p-1.5 sm:p-2 transition-colors hover:bg-surface-muted hover:text-text-secondary"
              >
                <IconBrandInstagram size={20} className="sm:w-8 sm:h-8 w-5 h-5" />
              </a>
            </li>
            <li>
              <a
                href="#"
                aria-label="Twitter"
                className="rounded-md p-1.5 sm:p-2 transition-colors hover:bg-surface-muted hover:text-text-secondary"
              >
                <IconBrandTwitter size={20} className="sm:w-8 sm:h-8 w-5 h-5" />
              </a>
            </li>
            <li>
              <a
                href="#"
                aria-label="YouTube"
                className="rounded-md p-1.5 sm:p-2 transition-colors hover:bg-surface-muted hover:text-text-secondary"
              >
                <IconBrandYoutube size={20} className="sm:w-8 sm:h-8 w-5 h-5" />
              </a>
            </li>
          </ul>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 border-b border-border-default pb-8 sm:pb-10 text-xs sm:text-sm text-text-secondary">
          {links.map((group) => (
            <div key={group.heading}>
              <h3 className="mb-3 sm:mb-4 text-sm sm:text-base font-semibold text-brand-darker">
                {group.heading}
              </h3>
              <ul className="space-y-2 sm:space-y-2.5">
                {group.items.map((item) => (
                  <li key={item} className="wrap-break-word">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col gap-4 sm:gap-3 pt-6 sm:pt-8 text-xs sm:text-xs text-text-muted">
          <p className="wrap-break-word">
            &copy; {new Date().getFullYear()} Algorion Research & Analysis Private Limited.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
            <span>All rights reserved</span>
            <span className="hidden sm:inline">•</span>
            <span className="break-all sm:break-normal">hr@myalgorion.tech</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;