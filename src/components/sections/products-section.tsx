"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { products } from "@/data";
import { Package, Clock, Truck, MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/utils";

export function ProductsSection() {
  const handleProductInquiry = (productName: string) => {
    const message = `Hello! I'm interested in getting a quote for ${productName}. Please provide pricing and availability details for export to Global.`;
    window.open(getWhatsAppUrl(message), "_blank");
  };

  return (
    <section className="py-16 md:py-24 bg-background">
      <Container>
        <SectionHeader
          subtitle="Premium Products"
          title="Our Garlic Collection"
          description="Hand-selected and processed with care to deliver the finest garlic products for international markets"
          className="mb-16"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300 border-border/20">
                {/* Product Image Placeholder */}
                <div className="aspect-square bg-muted/30 rounded-t-xl flex items-center justify-center">
                  <Package className="w-12 h-12 text-primary/60" />
                </div>

                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-serif font-semibold text-foreground">
                    {product.name}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                </CardHeader>

                <CardContent className="grow space-y-4 pt-0">
                  {/* Key Features */}
                  <div>
                    <h4 className="text-sm font-medium text-foreground mb-2">
                      Key Features:
                    </h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {product.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="w-1 h-1 bg-primary rounded-full mt-2 mr-2 shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Packaging Info */}
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Package className="w-3 h-3" />
                    <span>
                      Available: {product.packaging.slice(0, 3).join(", ")}
                    </span>
                  </div>

                  {/* Shelf Life */}
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    <span>{product.shelfLife}</span>
                  </div>

                  {/* Export Ready Badge */}
                  <div className="inline-flex items-center gap-1 bg-primary/10 text-primary text-xs font-medium px-2 py-1 rounded-full">
                    <Truck className="w-3 h-3" />
                    Export Ready
                  </div>
                </CardContent>

                <CardFooter className="pt-4">
                  <Button
                    onClick={() => handleProductInquiry(product.name)}
                    variant="outline"
                    size="sm"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Request Quote
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center space-y-6 bg-muted/20 p-8 rounded-2xl"
        >
          <h3 className="font-serif text-2xl font-semibold text-foreground">
            Need Custom Packaging or Bulk Quantities?
          </h3>
          <p className="text-muted-foreground">
            We offer flexible packaging solutions and competitive pricing for
            large orders. Contact us to discuss your specific requirements.
          </p>
          <Button
            onClick={() =>
              document
                .getElementById("inquiry-form")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Get Custom Quote
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
