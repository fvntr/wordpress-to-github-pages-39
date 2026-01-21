import { Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-navy text-primary-foreground py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link
              to="/"
              className="inline-flex items-center rounded-md bg-primary-foreground p-2"
            >
              <img src={logo} alt="Full Spectrum Labs" className="h-12 w-auto" />
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Strengthening and accelerating impactful community solutions through 
              strategic partnerships and capacity building.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/who-we-are" className="text-primary-foreground/70 hover:text-accent transition-colors text-sm">
                  Who We Are
                </Link>
              </li>
              <li>
                <Link to="/initiatives" className="text-primary-foreground/70 hover:text-accent transition-colors text-sm">
                  Initiatives
                </Link>
              </li>
              <li>
                <Link to="/community-stewards-network" className="text-primary-foreground/70 hover:text-accent transition-colors text-sm">
                  Community Stewards Network
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Get in Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-primary-foreground/70 text-sm">
                <Mail className="w-4 h-4 text-accent" />
                info@fullspectrumlabs.org
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/70 text-sm">
                <MapPin className="w-4 h-4 text-accent" />
                Oakland, California
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/10 pt-8 text-center">
          <p className="text-primary-foreground/50 text-sm">
            © {currentYear} Full Spectrum Labs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
