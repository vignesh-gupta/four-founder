"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Container } from "@/components/ui/container"
import { SectionHeader } from "@/components/ui/section-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { products } from "@/data"
import { Check, Send, AlertCircle } from "lucide-react"
import { getWhatsAppUrl } from "@/lib/utils"

const inquirySchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  productInterest: z.array(z.string()).min(1, "Please select at least one product"),
  quantity: z.string().min(1, "Please specify quantity requirement"),
  message: z.string().min(10, "Please provide more details about your requirements")
})

type InquiryFormData = z.infer<typeof inquirySchema>

export function InquiryFormSection() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [selectedProducts, setSelectedProducts] = useState<string[]>([])

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue
  } = useForm<InquiryFormData>({
    resolver: zodResolver(inquirySchema)
  })

  const handleProductToggle = (productId: string) => {
    const updatedProducts = selectedProducts.includes(productId)
      ? selectedProducts.filter(id => id !== productId)
      : [...selectedProducts, productId]
    
    setSelectedProducts(updatedProducts)
    setValue("productInterest", updatedProducts)
  }

  const onSubmit = async (data: InquiryFormData) => {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // In a real app, you would send this data to your backend
    console.log("Form data:", data)
    
    // For now, open WhatsApp with the inquiry details
    const selectedProductNames = products
      .filter(p => data.productInterest.includes(p.id))
      .map(p => p.name)
      .join(", ")

    const whatsappMessage = `
New Bulk Order Inquiry:

Name: ${data.name}
Company: ${data.company}
Email: ${data.email}
Phone: ${data.phone}

Products of Interest: ${selectedProductNames}
Quantity Required: ${data.quantity}

Message: ${data.message}

Please provide detailed quotation and availability information.
    `.trim()

    window.open(getWhatsAppUrl(whatsappMessage), "_blank")
    
    setIsSubmitted(true)
    reset()
    setSelectedProducts([])
  }

  if (isSubmitted) {
    return (
      <section id="inquiry-form" className="py-16 md:py-24 bg-muted/20">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 text-primary" />
            </div>
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
              Thank You for Your Inquiry!
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              We've received your bulk order inquiry and our team will contact you within 24 hours 
              with detailed quotation and availability information. We've also opened WhatsApp for 
              immediate assistance if needed.
            </p>
            <Button
              onClick={() => setIsSubmitted(false)}
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Submit Another Inquiry
            </Button>
          </motion.div>
        </Container>
      </section>
    )
  }

  return (
    <section id="inquiry-form" className="py-16 md:py-24 bg-muted/20">
      <Container>
        <SectionHeader
          subtitle="Get In Touch"
          title="Bulk Order Inquiry"
          description="Ready to partner with us? Fill out the form below and our export team will provide you with detailed quotations and support"
          className="mb-16"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="border-border/20 bg-background/80">
            <CardHeader>
              <CardTitle className="font-serif text-2xl text-center text-foreground">
                Request Your Custom Quote
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      {...register("name")}
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <p className="text-destructive text-sm flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name *</Label>
                    <Input
                      id="company"
                      {...register("company")}
                      placeholder="Your company name"
                    />
                    {errors.company && (
                      <p className="text-destructive text-sm flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.company.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email")}
                      placeholder="your@company.com"
                    />
                    {errors.email && (
                      <p className="text-destructive text-sm flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      {...register("phone")}
                      placeholder="+971 XX XXX XXXX"
                    />
                    {errors.phone && (
                      <p className="text-destructive text-sm flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-3">
                  <Label>Products of Interest * (Select all that apply)</Label>
                  <div className="grid md:grid-cols-2 gap-3">
                    {products.map((product) => (
                      <div
                        key={product.id}
                        className={`p-3 rounded-lg border cursor-pointer transition-all ${
                          selectedProducts.includes(product.id)
                            ? "border-primary bg-primary/10 text-primary"
                            : "border-border hover:border-primary/50 hover:bg-muted/50"
                        }`}
                        onClick={() => handleProductToggle(product.id)}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium">{product.name}</span>
                          {selectedProducts.includes(product.id) && (
                            <Check className="w-4 h-4" />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                  {errors.productInterest && (
                    <p className="text-destructive text-sm flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.productInterest.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="quantity">Quantity Requirement *</Label>
                  <Input
                    id="quantity"
                    {...register("quantity")}
                    placeholder="e.g., 5 tons, 100kg monthly, 1 container load"
                  />
                  {errors.quantity && (
                    <p className="text-destructive text-sm flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.quantity.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Additional Requirements *</Label>
                  <Textarea
                    id="message"
                    {...register("message")}
                    placeholder="Please provide details about your packaging preferences, delivery timeline, quality specifications, or any other requirements..."
                    className="min-h-24"
                  />
                  {errors.message && (
                    <p className="text-destructive text-sm flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
                >
                  {isSubmitting ? (
                    "Submitting..."
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Submit Inquiry
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </Container>
    </section>
  )
}