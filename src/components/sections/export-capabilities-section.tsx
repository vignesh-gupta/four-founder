"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { SectionHeader } from "@/components/ui/section-header"
import { Card, CardContent } from "@/components/ui/card"
import { exportCapabilities } from "@/data"
import { 
  Container as ContainerIcon, 
  Package, 
  Ship, 
  FileText, 
  Package2, 
  Headphones 
} from "lucide-react"

const iconMap = {
  "container": ContainerIcon,
  "package": Package,
  "ship": Ship,
  "file-text": FileText,
  "package-2": Package2,
  "headphones": Headphones
}

export function ExportCapabilitiesSection() {
  const exportSteps = [
    {
      step: "1",
      title: "Order Confirmation",
      description: "Submit requirements and receive detailed quotation with specifications"
    },
    {
      step: "2", 
      title: "Quality Assurance",
      description: "Hand-sorting and quality verification before packaging"
    },
    {
      step: "3",
      title: "Export Documentation", 
      description: "Prepare all certificates and shipping documents"
    },
    {
      step: "4",
      title: "Secure Packaging",
      description: "Moisture-proof packaging designed for long-distance shipping"
    },
    {
      step: "5",
      title: "Port Delivery",
      description: "Direct delivery to UAE ports with tracking support"
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-background">
      <Container>
        <SectionHeader
          subtitle="Export Capabilities"
          title="From India to UAE with Excellence"
          description="Streamlined export processes and comprehensive support for seamless international trade"
          className="mb-16"
        />

        {/* Export Process Steps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="font-serif text-2xl font-semibold text-foreground text-center mb-8">
            Our Export Process
          </h3>
          <div className="grid md:grid-cols-5 gap-4">
            {exportSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="text-center"
              >
                <div className="relative">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                    {step.step}
                  </div>
                  {index < exportSteps.length - 1 && (
                    <div className="hidden md:block absolute top-6 left-12 w-full h-0.5 bg-primary/20"></div>
                  )}
                </div>
                <h4 className="font-medium text-foreground mb-2">{step.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {exportCapabilities.map((capability, index) => {
            const IconComponent = iconMap[capability.icon as keyof typeof iconMap] || Package
            
            return (
              <motion.div
                key={capability.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-border/20">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                        {capability.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {capability.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* UAE Focus Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-muted/20 p-8 rounded-2xl text-center"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
              Specialized UAE Market Expertise
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              With deep understanding of UAE import regulations and market preferences, we ensure smooth 
              delivery to major ports including Dubai, Abu Dhabi, and Sharjah. Our established shipping 
              routes and documentation expertise eliminate delays and complications.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">15+ Days</div>
                <div className="text-sm text-muted-foreground">Average Shipping Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Documentation Support</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">5+ Years</div>
                <div className="text-sm text-muted-foreground">UAE Export Experience</div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}