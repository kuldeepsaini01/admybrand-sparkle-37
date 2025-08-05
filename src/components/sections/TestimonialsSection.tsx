import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionHeader } from "@/components/ui/section-header"
import { TestimonialCard } from "@/components/ui/testimonial-card"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Marketing Director",
    company: "TechFlow Inc",
    content: "ADmyBRAND AI Suite completely transformed our marketing strategy. We saw a 347% increase in lead quality and our ROI improved by 280% in just 3 months. The predictive analytics are incredibly accurate.",
    rating: 5
  },
  {
    name: "Marcus Rodriguez",
    role: "CEO",
    company: "GrowthLab",
    content: "The AI insights have been game-changing for our campaigns. We can now predict customer behavior with 95% accuracy and optimize our spend automatically. It's like having a team of data scientists at our fingertips.",
    rating: 5
  },
  {
    name: "Emily Zhang",
    role: "Performance Marketing Manager", 
    company: "ScaleUp Digital",
    content: "Implementation was seamless and the results were immediate. Our cost per acquisition dropped by 65% while conversion rates increased by 180%. The platform pays for itself within weeks.",
    rating: 5
  },
  {
    name: "David Thompson",
    role: "CMO",
    company: "Innovation Corp",
    content: "The automation capabilities freed up our team to focus on strategy while AI handled optimization. We've launched 10x more campaigns with better results than ever before. Absolutely revolutionary.",
    rating: 5
  },
  {
    name: "Lisa Park",
    role: "Marketing Operations Lead",
    company: "Future Brands",
    content: "The real-time analytics and predictive modeling have given us insights we never had before. We can now make data-driven decisions instantly and our campaigns perform consistently better.",
    rating: 5
  },
  {
    name: "James Wilson",
    role: "Digital Strategy Director",
    company: "NextGen Marketing",
    content: "ADmyBRAND's AI doesn't just automate our campaigns—it makes them smarter. The machine learning continuously improves performance, and we're seeing our best results ever across all channels.",
    rating: 5
  }
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleTestimonials, setVisibleTestimonials] = useState(3)

  useEffect(() => {
    const updateVisibleTestimonials = () => {
      if (window.innerWidth < 768) {
        setVisibleTestimonials(1)
      } else if (window.innerWidth < 1024) {
        setVisibleTestimonials(2)
      } else {
        setVisibleTestimonials(3)
      }
    }

    updateVisibleTestimonials()
    window.addEventListener("resize", updateVisibleTestimonials)
    return () => window.removeEventListener("resize", updateVisibleTestimonials)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => 
        (prev + visibleTestimonials) >= testimonials.length ? 0 : prev + 1
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [visibleTestimonials])

  const nextTestimonials = () => {
    setCurrentIndex((prev) => 
      (prev + visibleTestimonials) >= testimonials.length ? 0 : prev + 1
    )
  }

  const prevTestimonials = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? Math.max(0, testimonials.length - visibleTestimonials) : prev - 1
    )
  }

  const getVisibleTestimonials = () => {
    const visible = []
    for (let i = 0; i < visibleTestimonials; i++) {
      const index = (currentIndex + i) % testimonials.length
      visible.push(testimonials[index])
    }
    return visible
  }

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 scroll-reveal">
          <SectionHeader
            badge="Customer Success"
            title="Trusted by marketing leaders worldwide"
            description="See how businesses like yours are achieving unprecedented growth with ADmyBRAND AI Suite."
          />
        </div>
        
        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {getVisibleTestimonials().map((testimonial, index) => (
              <div
                key={`${testimonial.name}-${currentIndex}-${index}`}
                className="animate-fade-in"
              >
                <TestimonialCard
                  name={testimonial.name}
                  role={testimonial.role}
                  company={testimonial.company}
                  content={testimonial.content}
                  rating={testimonial.rating}
                />
              </div>
            ))}
          </div>
          
          {/* Navigation */}
          <div className="flex items-center justify-center space-x-4">
            <Button
              variant="glass"
              size="icon"
              onClick={prevTestimonials}
              className="shrink-0"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {Array.from({ length: Math.ceil(testimonials.length / visibleTestimonials) }).map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    Math.floor(currentIndex / visibleTestimonials) === index
                      ? "bg-primary w-8"
                      : "bg-muted-foreground/30"
                  }`}
                  onClick={() => setCurrentIndex(index * visibleTestimonials)}
                />
              ))}
            </div>
            
            <Button
              variant="glass"
              size="icon"
              onClick={nextTestimonials}
              className="shrink-0"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        {/* Social Proof */}
        <div className="text-center mt-16 scroll-reveal">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">500+</div>
              <div className="text-sm text-muted-foreground">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">4.9/5</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">$50M+</div>
              <div className="text-sm text-muted-foreground">Revenue Generated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}