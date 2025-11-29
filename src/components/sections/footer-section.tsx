import { Container } from "@/components/ui/container";
import { CONTACT_NUMBER, getFormattedPhoneNumber } from "@/lib/utils";
import { Leaf, Mail, MapPin, Phone } from "lucide-react";

export function FooterSection() {
  return (
    <footer className="bg-foreground text-background py-16">
      <Container>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <Leaf className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-serif font-bold text-xl">
                Four Founders
              </span>
            </div>
            <p className="text-background/80 leading-relaxed">
              Premium Indian garlic company dedicated to sustainable farming and
              exceptional quality. Four founders, one vision - delivering
              excellence to UAE markets.
            </p>
            <div className="flex flex-col space-y-2 text-sm">
              <span className="text-primary font-medium">
                Premium • Natural • Sustainable • Unified
              </span>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-serif font-semibold text-lg mb-4">
              Our Products
            </h3>
            <ul className="space-y-2 text-background/80">
              <li>Fresh Garlic Bulbs</li>
              <li>Garlic Powder</li>
              <li>Garlic Paste</li>
              <li>Garlic Flakes</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-serif font-semibold text-lg mb-4">
              Export Services
            </h3>
            <ul className="space-y-2 text-background/80">
              <li>Bulk Orders</li>
              <li>Custom Packaging</li>
              <li>UAE Port Delivery</li>
              <li>Documentation Support</li>
              <li>Quality Assurance</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif font-semibold text-lg mb-4">
              Contact Info
            </h3>
            <div className="space-y-3 text-background/80">
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 text-primary" />
                <div>
                  <a
                    href="mailto:the4founder@gmail.com"
                    className="hover:text-primary transition-colors"
                  >
                    the4founder@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 text-primary" />
                <div>
                  <a
                    href={`tel:${CONTACT_NUMBER}`}
                    className="hover:text-primary transition-colors"
                  >
                    {getFormattedPhoneNumber()}
                  </a>
                  <p className="text-xs text-background/60">
                    WhatsApp Available
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-primary" />
                <div>
                  <p>Serving UAE Markets</p>
                  <p className="text-xs text-background/60">
                    Dubai • Abu Dhabi • Sharjah
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications & Trust */}
        <div className="border-t border-background/20 pt-8 mb-8">
          <h4 className="font-medium mb-4 text-center">
            Certifications & Quality Assurance
          </h4>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-background/60">
            <span className="bg-background/10 px-3 py-1 rounded-full">
              FSSAI Certified
            </span>
            <span className="bg-background/10 px-3 py-1 rounded-full">
              APEDA Registered
            </span>
            <span className="bg-background/10 px-3 py-1 rounded-full">
              Export Documentation
            </span>
            <span className="bg-background/10 px-3 py-1 rounded-full">
              Quality Assured
            </span>
            <span className="bg-background/10 px-3 py-1 rounded-full">
              Sustainable Farming
            </span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/60">
          <div className="flex flex-col md:flex-row gap-2 md:gap-4">
            <p>
              &copy; 2024 Four Founders Garlic Company. All rights reserved.
            </p>
            <p className="hidden md:block">•</p>
            <p>Built for premium UAE market exports</p>
          </div>

          <div className="flex gap-1 text-xs">
            <span>Content sourced from company documentation</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
