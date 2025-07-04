import {
  FaInstagram, FaTiktok, FaTwitter, FaDiscord,
  FaLinkedin, FaReddit, FaYoutube, FaEnvelope
} from "react-icons/fa";

export default function Footer() {
  const socialLinks = [
    { icon: FaEnvelope, href: "mailto:hello@windsurf.com", label: "Mail" },
    { icon: FaInstagram, href: "https://www.instagram.com/windsurf_ai/", label: "Instagram" },
    { icon: FaTiktok, href: "https://www.tiktok.com/@windsurf", label: "TikTok" },
    { icon: FaTwitter, href: "https://x.com/windsurf_ai", label: "Twitter" },
    { icon: FaDiscord, href: "https://discord.gg/GjCYNGChrw", label: "Discord" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/company/windsurf/", label: "LinkedIn" },
    { icon: FaReddit, href: "https://reddit.com/r/windsurf", label: "Reddit" },
    { icon: FaYoutube, href: "https://www.youtube.com/@windsurf_ai", label: "YouTube" },
  ];

  const footerColumns = [
    {
      heading: "Product",
      links: [
        { label: "Editor", href: "/editor" },
        { label: "Plugins", href: "/plugins" },
        { label: "Windsurf Reviews", href: "/reviews" },
        { label: "Pricing", href: "/pricing" },
        { label: "Windsurf for Enterprise", href: "/enterprise" },
      ],
    },
    {
      heading: "Capabilities",
      links: [
        { label: "Cascade", href: "/cascade" },
        { label: "Tab", href: "/tab" },
        { label: "JetBrains Plugin", href: "/plugins/jetbrains" },
      ],
    },
    {
      heading: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Blog", href: "/blog" },
        { label: "Careers", href: "/careers" },
        { label: "Contact", href: "/contact" },
        { label: "Partnerships", href: "/partnerships" },
        { label: "Terms of Service", href: "/terms" },
        { label: "Privacy Policy", href: "/privacy" },
      ],
    },
    {
      heading: "Resources",
      links: [
        { label: "Docs", href: "/docs" },
        { label: "Changelog", href: "/changelog" },
        { label: "Releases", href: "/releases" },
        { label: "Support", href: "/support" },
        { label: "Feature Requests", href: "/features" },
        { label: "University", href: "/university" },
      ],
    },
    {
      heading: "Connect",
      links: [
        { label: "Contact", href: "/contact" },
        { label: "Events", href: "/events" },
        { label: "Hackathons", href: "/hackathons" },
        { label: "Community", href: "/community" },
        { label: "Students", href: "/students" },
      ],
    },
  ];

  return (
    <footer className="relative bg-[#011e3c] text-white">
      {/* Desktop wave background */}
      <img
        src="https://windsurf.com/static/images/footer/footer_wave_desktop.svg"
        alt="Footer wave"
        className="hidden md:block absolute bottom-0 left-1/2 -translate-x-1/2 w-[2000px] h-[350px] pointer-events-none select-none"
      />

      {/* Mobile wave background */}
      <img
        src="https://exafunction.github.io/public/images/website/mobile_footer_wave.png"
        alt="Footer mobile wave"
        className="md:hidden absolute inset-0 h-full w-full object-bottom object-contain"
      />

      <div className="relative z-10 px-6 pt-16 pb-8 max-w-7xl mx-auto">
        {/* Logo + Social */}
        <div className="lg:flex lg:justify-between lg:items-start mb-12">
          <div className="space-y-4 max-w-sm mb-10 lg:mb-0">
            <img
              src="/logo/windsurf-white-wordmark.svg"
              alt="Windsurf Logo"
              className="h-4"
            />
            <p className="text-sm text-white/60">Built to keep you in flow state.</p>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map(({ icon: Icon, href, label }, i) => (
                <a key={i} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                  <Icon className="w-5 h-5 hover:opacity-80" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Link Columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
            {footerColumns.map((col, idx) => (
              <div key={idx}>
                <h4 className="text-sm font-semibold uppercase mb-3">{col.heading}</h4>
                <ul className="space-y-2 text-sm text-white/60">
                  {col.links.map((link, i) => (
                    <li key={i}>
                      <a href={link.href} className="hover:text-white transition-colors">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-6 flex flex-col sm:flex-row items-center justify-between text-sm text-white/60">
          <p>© 2025 Exafunction, Inc. All rights reserved.</p>
          <p>Windsurf Inc.</p>
        </div>
      </div>
    </footer>
  );
}
