'use client';

/**
 * @editableContentMap
 * { "text-0": "badge", "text-1": "title", "text-2": "description", "text-3": "billingMonthly", "text-4": "billingAnnual", "text-5": "saveLabel", "text-6": "starterName", "text-7": "starterDescription", "text-8": "starterCTA", "text-9": "professionalName", "text-10": "professionalDescription", "text-11": "professionalCTA", "text-12": "enterpriseName", "text-13": "enterpriseDescription", "text-14": "enterpriseCTA", "text-15": "bottomTitle", "text-16": "bottomDescription", "text-17": "bottomCTA" }
 */

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Star, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Pricing({
  badge = 'Subscription Plans',
  title = 'Scale Your Business with Acme SaaS',
  description = 'Flexible pricing designed for growing tech companies. From startups to enterprise, we have the perfect SaaS solution for your team.',
  billingMonthly = 'Monthly',
  billingAnnual = 'Annual',
  saveLabel = 'Save 25%',
  starterName = 'Startup',
  starterDescription = 'Perfect for early-stage companies and MVPs',
  starterCTA = 'Start Building',
  professionalName = 'Growth',
  professionalDescription = 'Ideal for scaling SaaS companies and teams',
  professionalCTA = 'Accelerate Growth',
  enterpriseName = 'Enterprise',
  enterpriseDescription = 'Custom solutions for large-scale operations',
  enterpriseCTA = 'Contact Sales',
  bottomTitle = 'Ready to transform your business?',
  bottomDescription = 'Join thousands of companies already using Acme SaaS to streamline operations, boost productivity, and drive revenue growth.',
  bottomCTA = 'Book Strategy Call',
}) {
  const router = useRouter();
  const [isAnnual, setIsAnnual] = useState(false);

  // ACTION_PLACEHOLDER_START
  const handleStartupPlan = () => {
    router.push('/');
  };

  const handleGrowthPlan = () => {
    router.push('/');
  };

  const handleEnterprisePlan = () => {
    router.push('/');
  };

  const handleStrategyCall = () => {
    router.push('/');
  };
  // ACTION_PLACEHOLDER_END

  const plans = [
    {
      name: starterName,
      description: starterDescription,
      price: isAnnual ? '$79' : '$99',
      period: '/month',
      badge: null,
      features: [
        'Up to 10,000 API calls',
        'Real-time analytics dashboard',
        'Email support',
        '50GB cloud storage',
        'Basic integrations',
        'SSL security',
      ],
      cta: starterCTA,
      popular: false,
      action: handleStartupPlan,
    },
    {
      name: professionalName,
      description: professionalDescription,
      price: isAnnual ? '$199' : '$249',
      period: '/month',
      badge: 'Most Popular',
      features: [
        'Unlimited API calls',
        'Advanced analytics & reporting',
        'Priority support (24/7)',
        '500GB cloud storage',
        'Premium integrations',
        'Advanced security features',
        'Team collaboration tools',
        'Custom workflows',
        'A/B testing suite',
      ],
      cta: professionalCTA,
      popular: true,
      action: handleGrowthPlan,
    },
    {
      name: enterpriseName,
      description: enterpriseDescription,
      price: 'Custom',
      period: '',
      badge: 'White Glove',
      features: [
        'Everything in Growth plan',
        'Unlimited storage',
        'Dedicated account manager',
        'Custom integrations',
        'Enterprise-grade security',
        '99.99% SLA guarantee',
        'On-premise deployment',
        'Custom training program',
        '24/7 phone support',
      ],
      cta: enterpriseCTA,
      popular: false,
      action: handleEnterprisePlan,
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2" data-editable-id="text-0">
            {badge}
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" data-editable-id="text-1">
            {title.split(' ').slice(0, -2).join(' ')}
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              {title.split(' ').slice(-2).join(' ')}
            </span>
          </h2>
          <p
            className="text-lg text-muted-foreground leading-relaxed mb-8"
            data-editable-id="text-2"
          >
            {description}
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center p-1 bg-muted rounded-lg">
            <button
              className={cn(
                'px-4 py-2 text-sm font-medium rounded-md transition-colors',
                !isAnnual
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              )}
              onClick={() => setIsAnnual(false)}
              data-editable-id="text-3"
            >
              {billingMonthly}
            </button>
            <button
              className={cn(
                'px-4 py-2 text-sm font-medium rounded-md transition-colors',
                isAnnual
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              )}
              onClick={() => setIsAnnual(true)}
              data-editable-id="text-4"
            >
              {billingAnnual}
              <Badge variant="secondary" className="ml-2 text-xs" data-editable-id="text-5">
                {saveLabel}
              </Badge>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={cn(
                'relative overflow-hidden transition-all duration-300 hover:shadow-lg',
                plan.popular
                  ? 'border-primary/50 shadow-lg shadow-primary/10 scale-105'
                  : 'border-border/50 hover:border-primary/20'
              )}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1">
                    <Star className="size-3 mr-1" />
                    {plan.badge}
                  </Badge>
                </div>
              )}

              {/* Background Gradient */}
              {plan.popular && (
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
              )}

              <CardHeader className="relative text-center pb-8">
                {plan.badge && !plan.popular && (
                  <Badge variant="outline" className="mb-4 mx-auto w-fit">
                    {plan.badge}
                  </Badge>
                )}

                <CardTitle className="text-2xl mb-2" data-editable-id={`text-${6 + index * 3}`}>
                  {plan.name}
                </CardTitle>
                <CardDescription
                  className="text-base mb-6"
                  data-editable-id={`text-${7 + index * 3}`}
                >
                  {plan.description}
                </CardDescription>

                <div className="flex items-end justify-center gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-muted-foreground mb-1">{plan.period}</span>}
                </div>
              </CardHeader>

              <CardContent className="relative space-y-6">
                {/* Features List */}
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className="size-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="size-3 text-primary" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  onClick={plan.action}
                  className={cn(
                    'w-full text-base py-6',
                    plan.popular ? 'bg-primary hover:bg-primary/90' : ''
                  )}
                  variant={plan.popular ? 'default' : 'outline'}
                  data-editable-id={`text-${8 + index * 3}`}
                >
                  {plan.popular && <Zap className="size-4 mr-2" />}
                  {plan.cta}
                </Button>

                {plan.name === professionalName && (
                  <p className="text-center text-sm text-muted-foreground">
                    30-day free trial • No setup fees
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16 max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold mb-4" data-editable-id="text-15">
            {bottomTitle}
          </h3>
          <p className="text-muted-foreground mb-6" data-editable-id="text-16">
            {bottomDescription}
          </p>
          <Button
            variant="outline"
            size="lg"
            onClick={handleStrategyCall}
            data-editable-id="text-17"
          >
            {bottomCTA}
          </Button>
        </div>
      </div>
    </section>
  );
}
