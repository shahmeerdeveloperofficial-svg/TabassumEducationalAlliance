"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const links = [
  ["About us", "#about"],
  ["Our work", "#work"],
  ["Impact", "#impact"],
  ["Contact", "#contact"],
];

export default function TeaNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="tea-nav">
      <div className="tea-shell tea-nav-inner">
        <Link href="/" className="tea-brand" onClick={() => setOpen(false)}>
          <Image src="/tea-logo.png" width={84} height={84} alt="Tabassum Educational Alliance logo" className="tea-brand-logo" priority />
          <span><strong>Tabassum</strong><small>Educational Alliance</small></span>
        </Link>
        <nav className={open ? "tea-links tea-links-open" : "tea-links"}>
          {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
          <a className="tea-nav-cta" href="#contact" onClick={() => setOpen(false)}>Get involved <span>↗</span></a>
        </nav>
        <button className="tea-menu" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>
    </header>
  );
}
