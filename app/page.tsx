import type { Metadata } from 'next';
import PageTransition from '@/components/ui/PageTransition';
import HomeHero from '@/components/home/HomeHero';
import CredentialsMarquee from '@/components/home/CredentialsMarquee';
import CareHighlights from '@/components/home/CareHighlights';
import PrioritySplit from '@/components/home/PrioritySplit';
import ServicesShowcase from '@/components/home/ServicesShowcase';
import CtaBand from '@/components/home/CtaBand';
import ContactSection from '@/components/home/ContactSection';
import NewsletterSection from '@/components/home/NewsletterSection';
import { pageMetadata } from '@/content/metadata';

export const metadata: Metadata = pageMetadata['/'];

export default function HomePage() {
  return (
    <PageTransition>
      <HomeHero />
      <CredentialsMarquee />
      <CareHighlights />
      <PrioritySplit />
      <ServicesShowcase />
      <CtaBand />
      <ContactSection />
      <NewsletterSection />
    </PageTransition>
  );
}
