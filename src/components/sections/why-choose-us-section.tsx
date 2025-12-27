"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { SectionHeader } from "@/components/ui/section-header"
import { Card, CardContent } from "@/components/ui/card"
import { usps } from "@/data"
import { 
  ShieldCheck, 
  Hand, 
  Sparkles, 
  Truck, 
  Clock, 
  Leaf 
} from "lucide-react"

const iconMap = {
  "shield-check": ShieldCheck,
  "hand": Hand,
  "sparkles": Sparkles,
  "truck": Truck,
  "clock": Clock,
  "leaf": Leaf
}

export function WhyChooseUsSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/20">
      <Container>
        <SectionHeader
          subtitle="Why Choose Us"
          title="Premium Quality, Trusted Service"
          description="Our commitment to excellence and sustainable practices makes us your ideal partner for premium garlic exports to Global"
          className="mb-16"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {usps.map((usp, index) => {
            const IconComponent = iconMap[usp.icon as keyof typeof iconMap] || ShieldCheck
            
            return (
              <motion.div
                key={usp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-border/20 bg-background/80 group hover:bg-background">
                  <CardContent className="p-8 text-center space-y-6">
                    <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    
                    <div>
                      <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                        {usp.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {usp.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Additional Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-background/50 p-8 rounded-2xl border border-border/10">
            <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
              Trusted by Global Importers
            </h3>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex flex-col items-center">
                <span className="font-semibold text-lg text-primary">100%</span>
                <span>Natural Farming</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-semibold text-lg text-primary">FSSAI</span>
                <span>Certified</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-semibold text-lg text-primary">APEDA</span>
                <span>Registered</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-semibold text-lg text-primary">24/7</span>
                <span>Export Support</span>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}