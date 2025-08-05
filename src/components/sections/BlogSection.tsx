import { motion } from "framer-motion"
import { SectionHeader } from "@/components/ui/section-header"
import { GlassCard } from "@/components/ui/glass-card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight, BookOpen, TrendingUp, Zap } from "lucide-react"

const blogPosts = [
  {
    title: "The Future of AI in Digital Marketing: 2025 Trends",
    excerpt: "Explore how artificial intelligence is revolutionizing marketing strategies and what to expect in the coming year.",
    category: "AI Trends",
    readTime: "8 min read",
    date: "Dec 15, 2024",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
    featured: true
  },
  {
    title: "Maximizing ROI with Automated Campaign Optimization",
    excerpt: "Learn proven strategies to increase your marketing ROI using AI-powered automation and smart optimization techniques.",
    category: "Strategy",
    readTime: "6 min read",
    date: "Dec 12, 2024",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop"
  },
  {
    title: "Customer Segmentation Using Machine Learning",
    excerpt: "Discover how advanced ML algorithms can help you identify and target your most valuable customer segments.",
    category: "Analytics",
    readTime: "10 min read",
    date: "Dec 10, 2024",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop"
  },
  {
    title: "Cross-Channel Marketing Automation Best Practices",
    excerpt: "Master the art of coordinated marketing campaigns across email, social media, and paid advertising channels.",
    category: "Automation",
    readTime: "7 min read",
    date: "Dec 8, 2024",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop"
  }
]

const resources = [
  {
    title: "AI Marketing Playbook",
    description: "Complete guide to implementing AI in your marketing strategy",
    type: "Guide",
    icon: BookOpen,
    downloadCount: "2.3k"
  },
  {
    title: "ROI Calculator Template",
    description: "Calculate and track your marketing campaign performance",
    type: "Template",
    icon: TrendingUp,
    downloadCount: "1.8k"
  },
  {
    title: "Quick Start Checklist",
    description: "Get up and running with ADmyBRAND in 30 minutes",
    type: "Checklist",
    icon: Zap,
    downloadCount: "3.1k"
  }
]

export function BlogSection() {

  return (
    <section className="py-24 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="scroll-reveal">
          <div className="text-center mb-16">
            <SectionHeader
              badge="Knowledge Hub"
              title="Stay Ahead with Expert Insights"
              description="Discover the latest trends, strategies, and best practices in AI-powered marketing from industry experts."
            />
          </div>

          {/* Featured Blog Post */}
          <div className="mb-16 scroll-reveal">
            <GlassCard className="overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <img
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-gradient-primary text-white text-sm font-medium rounded-full">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                    <span className="px-2 py-1 bg-accent/20 text-accent rounded-full">
                      {blogPosts[0].category}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{blogPosts[0].date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{blogPosts[0].readTime}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-space-grotesk font-bold text-foreground mb-4">
                    {blogPosts[0].title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {blogPosts[0].excerpt}
                  </p>
                  <Button variant="outline" className="self-start group">
                    Read Article
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 scroll-reveal">
            {blogPosts.slice(1).map((post, index) => (
              <div key={post.title} className="scroll-reveal"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <GlassCard className="overflow-hidden h-full group cursor-pointer">
                  <div className="relative h-48">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-2 py-1 bg-background/80 backdrop-blur-sm text-xs font-medium rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-3 text-xs text-muted-foreground mb-3">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <h4 className="font-space-grotesk font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </GlassCard>
              </div>
            ))}
          </div>

          {/* Resources Section */}
          <div className="scroll-reveal">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-space-grotesk font-bold gradient-text mb-4">
                Free Resources
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Download our expert-created templates, guides, and tools to accelerate your marketing success.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {resources.map((resource, index) => (
                <div key={resource.title} className="scroll-reveal"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <GlassCard className="p-6 text-center group cursor-pointer">
                    <div className="w-16 h-16 bg-gradient-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-gradient-primary/20 transition-colors">
                      <resource.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">{resource.title}</h4>
                    <p className="text-sm text-muted-foreground mb-4">{resource.description}</p>
                    <div className="flex items-center justify-center space-x-2 text-xs text-muted-foreground mb-4">
                      <span className="px-2 py-1 bg-accent/20 text-accent rounded-full">
                        {resource.type}
                      </span>
                      <span>{resource.downloadCount} downloads</span>
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      Download Free
                    </Button>
                  </GlassCard>
                </div>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="scroll-reveal">
              <GlassCard className="p-8 text-center">
                <h3 className="text-2xl font-space-grotesk font-bold gradient-text mb-4">
                  Stay Updated
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Get the latest AI marketing insights, tips, and resources delivered to your inbox weekly.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-background/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 backdrop-blur-sm"
                  />
                  <Button variant="gradient">
                    Subscribe
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-3">
                  No spam. Unsubscribe anytime.
                </p>
              </GlassCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}