import {
  Building2,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Linkedin,
  Instagram,
  Twitter,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Buy Property", href: "#" },
    { name: "Sell Property", href: "#" },
    { name: "Rent Property", href: "#" },
    { name: "Property Listings", href: "#" },
    { name: "Featured Properties", href: "#" },
  ];

  const services = [
    { name: "Property Management", href: "#" },
    { name: "Investment Consulting", href: "#" },
    { name: "Property Valuation", href: "#" },
    { name: "Legal Services", href: "#" },
    { name: "Mortgage Assistance", href: "#" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
  ];

  return (
    <footer className="bg-[#0A0A0A] text-white">
      <div className="max-w-7xl mx-auto px-6 py-14">
        {/* Grid: 2x2 on mobile, 4 columns on lg */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Logo + Summary */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Building2 className="w-8 h-8 text-primary" />
              <span className="text-xl font-bold tracking-wide">
                PremiumRealEstateManagement
              </span>
            </div>
            <p className="text-base opacity-90">
              Your Trusted Real Estate Partner
            </p>
            <p className="text-sm opacity-70 leading-relaxed">
              Delivering premium property management with unmatched expertise for over two decades.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold uppercase tracking-wide">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <a className="text-sm opacity-75 hover:opacity-100 transition" href={item.href}>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold uppercase tracking-wide">
              Services
            </h3>
            <ul className="mt-4 space-y-2">
              {services.map((item) => (
                <li key={item.name}>
                  <a className="text-sm opacity-75 hover:opacity-100 transition" href={item.href}>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold uppercase tracking-wide">
              Contact Us
            </h3>
            <div className="mt-4 space-y-3 ">
              {/* <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-primary" />
                <p className="text-sm opacity-75">
                  <br />Noida
                </p>
              </div> */}

              <div className="flex gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <a href="tel:+1234567890" className="text-sm opacity-75 hover:opacity-100">
                  +91 8527533067
                </a>
              </div>

              <div className="flex gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:premiumrealestatemanagement@gmail.com" className="text-sm opacity-75 hover:opacity-100">
                  premiumrealestatemanagement@gmail.com
                </a>
              </div>

              {/* Social Icons */}
              <div className="flex gap-3 mt-2">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="p-2 rounded-full bg-white/10 hover:bg-primary transition"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between border-t border-white/10 gap-4">
          <p className="text-sm opacity-70 text-center sm:text-left">
            © {currentYear} Rinku Codexus.
          </p>
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-6">
            {legalLinks.map((link, index) => (
              <span key={index} className="text-sm opacity-70 hover:opacity-100 cursor-pointer">
                {link.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
