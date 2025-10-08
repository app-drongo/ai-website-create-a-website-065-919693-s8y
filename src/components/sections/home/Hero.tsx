'use client';

/**
 * @editableContentMap
 * {
 *   "text-0": "badge",
 *   "text-1": "title",
 *   "text-2": "titleHighlight",
 *   "text-3": "description",
 *   "text-4": "features[0]",
 *   "text-5": "features[1]",
 *   "text-6": "features[2]",
 *   "text-7": "features[3]",
 *   "text-8": "primaryCTA",
 *   "text-9": "secondaryCTA",
 *   "text-10": "imageAlt",
 *   "text-11": "statsLabel1",
 *   "text-12": "statsValue1",
 *   "text-13": "statsLabel2",
 *   "text-14": "statsValue2"
 * }
 */

import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, Play } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface HeroProps {
  badge?: string;
  title?: string;
  titleHighlight?: string;
  description?: string;
  features?: string[];
  primaryCTA?: string;
  secondaryCTA?: string;
  imageUrl?: string;
  imageAlt?: string;
  statsLabel1?: string;
  statsValue1?: string;
  statsLabel2?: string;
  statsValue2?: string;
}

export default function Hero({
  badge = 'New: Enterprise-Grade Security',
  title = 'Scale your business with',
  titleHighlight = 'Acme SaaS Platform',
  description = 'Streamline operations, boost productivity, and accelerate growth with our comprehensive SaaS solution designed for modern businesses.',
  features = [
    '99.9% uptime guarantee',
    'Advanced analytics dashboard',
    'Real-time collaboration tools',
    'Enterprise-grade security',
  ],
  primaryCTA = 'Start Free Trial',
  secondaryCTA = 'View Demo',
  imageUrl = 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1920&auto=format&fit=crop',
  imageAlt = 'Acme SaaS Dashboard Interface',
  statsLabel1 = 'Customer Growth',
  statsValue1 = '300% faster',
  statsLabel2 = 'Data Processing',
  statsValue2 = '10x speed',
}: HeroProps) {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // ACTION_PLACEHOLDER_START
  const handlePrimaryAction = () => {
    router.push('/pricing');
  };

  const handleSecondaryAction = () => {
    setIsModalOpen(true);
  };
  // ACTION_PLACEHOLDER_END

  return (
    <section id="hero" className="relative overflow-hidden bg-background">
      {/* Subtle gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.04)_1px,transparent_1px)] [background-size:24px_24px] opacity-50" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 py-20 sm:py-24 lg:grid-cols-2 lg:gap-20 lg:py-32">
          {/* LEFT: Content */}
          <div className="flex flex-col justify-center">
            {/* Badge */}
            <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary">
              <span className="inline-block h-2 w-2 rounded-full bg-primary"></span>
              <span data-editable-id="text-0">{badge}</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              <span data-editable-id="text-1">{title}</span>
              <span
                className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"
                data-editable-id="text-2"
              >
                {titleHighlight}
              </span>
            </h1>

            {/* Description */}
            <p
              className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground"
              data-editable-id="text-3"
            >
              {description}
            </p>

            {/* Feature list */}
            <ul className="mt-6 grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
              {features.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-primary" />
                  <span data-editable-id={`text-${4 + idx}`}>{item}</span>
                </li>
              ))}
            </ul>

            {/* CTA buttons */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                className="group px-7 text-base"
                onClick={handlePrimaryAction}
                data-action-type="primary-cta"
                data-editable-id="text-8"
              >
                {primaryCTA}
                <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base"
                onClick={handleSecondaryAction}
                data-action-type="secondary-cta"
                data-editable-id="text-9"
              >
                <Play className="mr-2 size-5" />
                {secondaryCTA}
              </Button>
            </div>
          </div>

          {/* RIGHT: Visual */}
          <div className="relative">
            {/* Mockup container */}
            <div className="relative overflow-hidden rounded-2xl border bg-card shadow-2xl">
              <div className="aspect-[16/10] relative">
                <Image src={imageUrl} alt={imageAlt} fill className="object-cover" priority />
              </div>
              {/* Tag overlay */}
              <div className="absolute left-4 top-4 rounded-full bg-background/80 px-3 py-1 text-xs font-medium shadow">
                <span data-editable-id="text-10">{imageAlt}</span>
              </div>
            </div>

            {/* Floating accents */}
            <div className="absolute -right-6 -top-6 hidden w-36 rounded-xl border bg-background/90 p-3 shadow-xl sm:block">
              <p className="text-xs text-muted-foreground" data-editable-id="text-11">
                {statsLabel1}
              </p>
              <p className="text-sm">
                <span className="font-semibold" data-editable-id="text-12">
                  {statsValue1}
                </span>
              </p>
            </div>
            <div className="absolute -left-6 -bottom-6 hidden w-36 rounded-xl border bg-background/90 p-3 shadow-xl sm:block">
              <p className="text-xs text-muted-foreground" data-editable-id="text-13">
                {statsLabel2}
              </p>
              <p className="text-sm">
                <span className="font-semibold" data-editable-id="text-14">
                  {statsValue2}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
