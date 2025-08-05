import * as React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Slider } from "./slider"
import { Switch } from "./switch"
import { Button } from "./button"
import { GlassCard } from "./glass-card"
import { Check, Zap, Users, Database } from "lucide-react"

interface PricingConfig {
  campaigns: number
  users: number
  storage: number
  annual: boolean
}

const features = {
  starter: ["Basic Analytics", "Email Marketing", "5 Integrations"],
  professional: ["Advanced Analytics", "Multi-channel Marketing", "15 Integrations", "A/B Testing"],
  enterprise: ["Custom Analytics", "White-label Solutions", "Unlimited Integrations", "Dedicated Support"]
}

export function PricingCalculator() {
  const [config, setConfig] = useState<PricingConfig>({
    campaigns: 10,
    users: 5,
    storage: 100,
    annual: false
  })

  const calculatePrice = () => {
    let basePrice = 49
    
    // Campaign pricing
    if (config.campaigns > 5) basePrice += (config.campaigns - 5) * 8
    if (config.campaigns > 50) basePrice += (config.campaigns - 50) * 5
    
    // User pricing
    if (config.users > 5) basePrice += (config.users - 5) * 12
    
    // Storage pricing
    if (config.storage > 100) basePrice += Math.ceil((config.storage - 100) / 100) * 20
    
    // Annual discount
    if (config.annual) basePrice = basePrice * 0.8
    
    return Math.round(basePrice)
  }

  const getTier = () => {
    const price = calculatePrice()
    if (price < 100) return "starter"
    if (price < 200) return "professional"
    return "enterprise"
  }

  const tier = getTier()
  const price = calculatePrice()

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <GlassCard className="p-8 max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-space-grotesk font-bold gradient-text mb-2">
            Interactive Pricing Calculator
          </h3>
          <p className="text-muted-foreground">
            Customize your plan based on your specific needs
          </p>
        </div>

        <div className="space-y-8">
          {/* Campaign Slider */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Zap className="h-5 w-5 text-accent" />
                <span className="font-medium">AI Campaigns</span>
              </div>
              <span className="text-lg font-bold text-primary">{config.campaigns}</span>
            </div>
            <Slider
              value={[config.campaigns]}
              onValueChange={(value) => setConfig(prev => ({ ...prev, campaigns: value[0] }))}
              min={1}
              max={100}
              step={1}
              className="w-full"
            />
          </div>

          {/* Users Slider */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-accent" />
                <span className="font-medium">Team Members</span>
              </div>
              <span className="text-lg font-bold text-primary">{config.users}</span>
            </div>
            <Slider
              value={[config.users]}
              onValueChange={(value) => setConfig(prev => ({ ...prev, users: value[0] }))}
              min={1}
              max={50}
              step={1}
              className="w-full"
            />
          </div>

          {/* Storage Slider */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Database className="h-5 w-5 text-accent" />
                <span className="font-medium">Storage (GB)</span>
              </div>
              <span className="text-lg font-bold text-primary">{config.storage}GB</span>
            </div>
            <Slider
              value={[config.storage]}
              onValueChange={(value) => setConfig(prev => ({ ...prev, storage: value[0] }))}
              min={50}
              max={1000}
              step={50}
              className="w-full"
            />
          </div>

          {/* Annual Switch */}
          <div className="flex items-center justify-between p-4 bg-background/50 rounded-lg">
            <div>
              <span className="font-medium">Annual Billing</span>
              <p className="text-sm text-muted-foreground">Save 20% with annual billing</p>
            </div>
            <Switch
              checked={config.annual}
              onCheckedChange={(checked) => setConfig(prev => ({ ...prev, annual: checked }))}
            />
          </div>

          {/* Price Display */}
          <motion.div 
            className="text-center p-6 bg-gradient-primary/10 rounded-xl border border-primary/20"
            key={price}
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.2 }}
          >
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground uppercase tracking-wide">
                {tier.charAt(0).toUpperCase() + tier.slice(1)} Plan
              </div>
              <div className="flex items-baseline justify-center space-x-1">
                <span className="text-4xl font-bold gradient-text">${price}</span>
                <span className="text-muted-foreground">/{config.annual ? 'year' : 'month'}</span>
              </div>
              {config.annual && (
                <div className="text-sm text-success">
                  Save ${Math.round((calculatePrice() / 0.8 - calculatePrice()) * 12)} per year
                </div>
              )}
            </div>

            {/* Features for current tier */}
            <div className="mt-6 space-y-2">
              {features[tier as keyof typeof features].map((feature, index) => (
                <div key={index} className="flex items-center justify-center space-x-2 text-sm">
                  <Check className="h-4 w-4 text-accent" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <Button variant="gradient" size="lg" className="w-full mt-6">
              Get Started with {tier.charAt(0).toUpperCase() + tier.slice(1)}
            </Button>
          </motion.div>
        </div>
      </GlassCard>
    </motion.div>
  )
}