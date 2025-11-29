"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { MessageCircle, Mail } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/utils";

export function HeroSection() {
  const handleWhatsAppClick = () => {
    const message =
      "Hello! I'm interested in learning more about Four Founders Garlic Company's premium garlic products for export to UAE. Please provide more information about bulk orders.";
    window.open(getWhatsAppUrl(message), "_blank");
  };

  const handleInquiryClick = () => {
    document
      .getElementById("inquiry-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-linear-to-br from-background via-muted/30 to-secondary/20">
      {/* Background texture overlay */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='a' width='20' height='20' patternUnits='userSpaceOnUse'%3E%3Ccircle cx='10' cy='10' r='1' fill='%23000' opacity='0.05'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='20' height='20' fill='url(%23a)'/%3E%3C/svg%3E")`,
        }}
      ></div>

      <Container className="relative z-10">
        <div className="text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            {/* Logo placeholder */}
            <div className="mx-auto w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center border-2 border-primary/20">
              <span className="font-serif font-bold text-2xl text-primary">
                4F
              </span>
            </div>

            {/* Main headline */}
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              Premium Indian Garlic
              <br />
              <span className="text-primary">For UAE Markets</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Four founders united by a commitment to sustainable farming and
              excellence. Delivering naturally grown, hand-sorted premium garlic
              with the bold flavor and exceptional quality your business
              demands.
            </p>

            {/* Value propositions */}
            <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-primary">
              <span className="bg-primary/10 px-3 py-1 rounded-full">
                Premium Quality
              </span>
              <span className="bg-primary/10 px-3 py-1 rounded-full">
                Natural Farming
              </span>
              <span className="bg-primary/10 px-3 py-1 rounded-full">
                Export Ready
              </span>
              <span className="bg-primary/10 px-3 py-1 rounded-full">
                UAE Delivery
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              onClick={handleInquiryClick}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 py-3 h-auto"
            >
              <Mail className="w-5 h-5 mr-2" />
              Inquire for Bulk Orders
            </Button>

            <Button
              onClick={handleWhatsAppClick}
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-medium px-8 py-3 h-auto"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp Us
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="pt-8 border-t border-border/20"
          >
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">
              Certified & Trusted
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <span>FSSAI Certified</span>
              <span>APEDA Registered</span>
              <span>Export Documentation</span>
              <span>UAE Port Delivery</span>
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-muted-foreground/50 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}
