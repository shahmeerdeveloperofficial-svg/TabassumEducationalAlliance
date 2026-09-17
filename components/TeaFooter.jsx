import Image from "next/image";
import Link from "next/link";

export default function TeaFooter() {
  return (
    <footer className="tea-footer" id="contact">
      <div className="tea-shell tea-footer-grid">
        <div>
          <Image src="/tea-logo.png" width={92} height={92} alt="Tabassum Educational Alliance logo" className="tea-footer-logo" />
          <p className="tea-footer-tag">Empowering communities through learning, compassion, and opportunity.</p>
        </div>
        <div><p className="tea-footer-title">Explore</p><Link href="#about">About us</Link><Link href="#work">Our work</Link><Link href="#impact">Our impact</Link></div>
        <div><p className="tea-footer-title">Connect</p><a href="mailto:hello@tabassumalliance.org">hello@tabassumalliance.org</a><a href="tel:+923007441617">+92 300 744 1617</a><span>Pakistan</span></div>
      </div>
      <div className="tea-shell tea-footer-bottom"><span>© 2026 Tabassum Educational Alliance</span><span>Learning today. Brighter tomorrows.</span></div>
    </footer>
  );
}
