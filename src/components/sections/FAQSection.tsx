import { SectionHeader } from "@/components/ui/section-header"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How does ADmyBRAND AI Suite's predictive analytics work?",
    answer: "Our AI uses advanced machine learning algorithms to analyze your historical data, market trends, and customer behavior patterns. It then generates predictions about future performance, optimal timing, and customer actions with 95% accuracy. The system continuously learns and improves its predictions based on new data."
  },
  {
    question: "Can I integrate ADmyBRAND with my existing marketing tools?",
    answer: "Absolutely! ADmyBRAND AI Suite integrates with over 100+ popular marketing tools including Google Ads, Facebook, LinkedIn, HubSpot, Salesforce, Mailchimp, and many more. Our API allows for custom integrations, and our team can help set up any specific integrations you need."
  },
  {
    question: "How long does it take to see results?",
    answer: "Most customers see initial improvements within the first 2 weeks of implementation. Significant results typically appear within 30-60 days as the AI learns your specific market and customer patterns. Our fastest case study showed a 180% ROI increase in just 3 weeks."
  },
  {
    question: "Is my data secure with ADmyBRAND AI Suite?",
    answer: "Security is our top priority. We use bank-grade encryption, are SOC 2 Type II certified, GDPR compliant, and follow strict data protection protocols. Your data is encrypted in transit and at rest, and we never share or sell your information to third parties."
  },
  {
    question: "Do I need technical expertise to use the platform?",
    answer: "Not at all! ADmyBRAND AI Suite is designed for marketers, not developers. Our intuitive interface makes it easy for anyone to set up campaigns, view analytics, and optimize performance. We also provide comprehensive onboarding, training, and ongoing support."
  },
  {
    question: "What kind of support do you offer?",
    answer: "We offer multiple support channels including live chat, email, phone support, and a comprehensive knowledge base. Professional and Enterprise plans include priority support and dedicated account managers. We also provide free onboarding and training sessions."
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Yes, you can cancel your subscription at any time with no cancellation fees. We offer a 30-day money-back guarantee, and if you cancel, you'll retain access until the end of your current billing period. We also offer the option to pause your subscription if needed."
  },
  {
    question: "How is pricing calculated for the Enterprise plan?",
    answer: "Enterprise pricing is customized based on your specific needs, including data volume, number of users, required integrations, and additional features like custom AI model training. Contact our sales team for a personalized quote and demonstration tailored to your organization."
  }
]

export function FAQSection() {
  return (
    <section className="py-16 md:py-24 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16 scroll-reveal">
          <SectionHeader
            badge="FAQ"
            title="Frequently Asked Questions"
            description="Find answers to common questions about ADmyBRAND AI Suite. Can't find what you're looking for? Contact our support team."
          />
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-4 md:p-8 rounded-2xl scroll-reveal">
            <Accordion type="single" collapsible className="space-y-3 md:space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-glass-border/20 rounded-xl px-4 md:px-6 bg-gradient-to-r from-white/5 to-white/2 backdrop-blur-sm"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-4 md:py-6 text-sm md:text-base">
                    <span className="font-medium md:font-semibold text-foreground pr-3 md:pr-4 leading-snug">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 md:pb-6 pt-1 md:pt-2">
                    <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                      {faq.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
        
        {/* Contact CTA */}
        <div className="text-center mt-12 md:mt-16 scroll-reveal">
          <div className="inline-block p-6 md:p-8 glass-card rounded-2xl max-w-lg mx-auto">
            <h3 className="text-xl md:text-2xl font-space-grotesk font-bold gradient-text mb-3 md:mb-4">
              Still have questions?
            </h3>
            <p className="text-muted-foreground mb-4 md:mb-6 text-sm md:text-base">
              Our team is here to help you succeed with ADmyBRAND AI Suite
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <button className="btn-gradient text-sm md:text-base px-4 md:px-6 py-2 md:py-3">
                Contact Support
              </button>
              <button className="btn-glass text-sm md:text-base px-4 md:px-6 py-2 md:py-3">
                Schedule a Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}