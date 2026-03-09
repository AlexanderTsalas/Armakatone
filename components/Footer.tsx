import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/10 pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center space-x-3 mb-6 group">
              <Logo className="w-8 h-8 md:w-10 md:h-10" />
              <div className="flex flex-col justify-center">
                <span className="font-outfit text-lg font-bold tracking-tight text-white group-hover:text-[#F8D9A2] transition-colors leading-none mb-1">
                  ARMAKATONE
                </span>
                <span className="font-outfit text-[0.55rem] font-medium tracking-[0.2em] text-zinc-500 group-hover:text-zinc-400 transition-colors uppercase leading-none">
                  Construction &amp; Renovation
                </span>
              </div>
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6 max-w-sm">
              Premium construction and engineering. Building the future of residential and commercial spaces with cutting-edge technology and human-centric design.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-outfit text-white font-medium mb-6">Company</h3>
            <ul className="space-y-4">
              {["About Us", "Projects", "Process", "Careers"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-zinc-400 text-sm hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-outfit text-white font-medium mb-6">Services</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/services#design" className="text-zinc-400 text-sm hover:text-white transition-colors">
                  Studies & Technical Design
                </Link>
              </li>
              <li>
                <Link href="/services#construction" className="text-zinc-400 text-sm hover:text-white transition-colors">
                  Construction & Renovation
                </Link>
              </li>
              <li>
                <Link href="/services#energy" className="text-zinc-400 text-sm hover:text-white transition-colors">
                  Photovoltaics & Energy
                </Link>
              </li>
              <li>
                <Link href="/services#automation" className="text-zinc-400 text-sm hover:text-white transition-colors">
                  Smart Home Automation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
            <h3 className="font-outfit text-white font-medium mb-6">Connect</h3>
            <ul className="space-y-4 mb-8">
              <li>
                <a href="mailto:info@armakatone.gr" className="text-zinc-400 text-sm hover:text-white transition-colors flex items-center group">
                  info@armakatone.gr
                  <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="tel:+302101234567" className="text-zinc-400 text-sm hover:text-white transition-colors">
                  +30 210 123 4567
                </a>
              </li>
              <li className="text-zinc-400 text-sm">
                Athens, Greece
              </li>
            </ul>
          </div>
        </div>

        {/* Deep Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10">
          <p className="text-zinc-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} ArmakatOne. All rights reserved.
          </p>
          <p className="text-zinc-400 text-sm flex items-center gap-1 hover:text-zinc-300 transition-colors">
            Designed and maintained by {" "}
            <a
              href="https://distarter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-white hover:underline underline-offset-4 decoration-white/30"
            >
              Distarter
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
