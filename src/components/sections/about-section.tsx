"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Leaf, Award, Globe } from "lucide-react"

export function AboutSection() {
  const values = [
    {
      icon: Users,
      title: "Unity",
      description: "Four founders, one shared purpose - delivering excellence through collaboration and unified vision."
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "Natural cultivation methods that respect the land and produce premium garlic without synthetic chemicals."
    },
    {
      icon: Award,
      title: "Quality",
      description: "Premium garlic selected and grown with care, hand-sorted to ensure only the finest reaches our customers."
    },
    {
      icon: Globe,
      title: "Innovation",
      description: "Continuous improvement in farming practices and exploration of new varieties for international markets."
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-muted/20">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Story Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <p className="text-sm font-medium text-primary tracking-wider uppercase mb-4">
                Our Story
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Four Founders, One Vision
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Four Founders Garlic Company was established by four individuals with a shared passion 
                  for agriculture, authenticity, and high-quality produce. United by a commitment to 
                  sustainable farming and excellence in cultivation, our founders built a brand rooted 
                  in trust, tradition, and craftsmanship.
                </p>
                <p>
                  Specializing in premium garlic varieties, we focus on delivering fresh, flavorful, 
                  and naturally grown garlic to UAE markets. Every bulb carries the essence of careful 
                  cultivation, responsible farming practices, and the combined expertise of our founders.
                </p>
                <p>
                  From carefully selected varieties to meticulous farming practices, our garlic is 
                  rooted in tradition and grown with unity. With every harvest, we bring bold flavor, 
                  exceptional quality, and the strength of four founders working as one.
                </p>
              </div>
            </div>

            {/* Mission Statement */}
            <div className="bg-background/50 p-6 rounded-lg border border-border/10">
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide customers with fresh, flavorful, and sustainably grown garlic while honoring 
                the values and teamwork that define our four founders - connecting Indian agriculture 
                excellence with UAE business markets.
              </p>
            </div>
          </motion.div>

          {/* Values Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-border/20 bg-background/80">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <value.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                        {value.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  )
}