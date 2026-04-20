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
    <footer id="contact" className="border-t border-slate-200 bg-white">
      <Container className="px-4 py-14 md:px-6">
        <div className="mb-10 flex items-center justify-between gap-6">
          <Image src="/algorion-logo.png" alt="Algorion Logo" width={188} height={28} />

          <ul className="flex items-center gap-6 text-slate-500">
            <li>
              <a href="#" aria-label="LinkedIn" className="rounded-md p-2 transition-colors hover:bg-slate-100 hover:text-slate-700">
                <IconBrandLinkedin size={32} />
              </a>
            </li>
            <li>
              <a href="#" aria-label="Instagram" className="rounded-md p-2 transition-colors hover:bg-slate-100 hover:text-slate-700">
                <IconBrandInstagram size={32} />
              </a>
            </li>
            <li>
              <a href="#" aria-label="Twitter" className="rounded-md p-2 transition-colors hover:bg-slate-100 hover:text-slate-700">
                <IconBrandTwitter size={32} />
              </a>
            </li>
            <li>
              <a href="#" aria-label="YouTube" className="rounded-md p-2 transition-colors hover:bg-slate-100 hover:text-slate-700">
                <IconBrandYoutube size={32} />
              </a>
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-1 gap-10 border-b border-slate-200 pb-10 text-sm text-slate-600 sm:grid-cols-2 lg:grid-cols-4">
          {links.map((group) => (
            <div key={group.heading}>
              <h3 className="mb-3 text-base font-semibold text-slate-800">{group.heading}</h3>
              <ul className="space-y-2.5">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-start justify-between gap-2 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center">
          <p>&copy; {new Date().getFullYear()} Algorion Research & Analysis Private Limited.</p>
          <div className="flex gap-4">
            <span>All rights reserved</span>
            <span>hr@myalgorion.tech</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;