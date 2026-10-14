import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import PageTransition from '@/components/ui/PageTransition';
import Reveal from '@/components/ui/Reveal';
import BlogBrowser from '@/components/blog/BlogBrowser';
import PostCard from '@/components/blog/PostCard';
import { socialIcon } from '@/components/ui/BrandIcons';
import { blog, posts } from '@/content/blog';
import { site } from '@/content/site';
import { pageMetadata } from '@/content/metadata';

export const metadata: Metadata = pageMetadata['/blogs'];

export default function BlogsPage() {
  const [featured] = posts;
  const cards = Object.fromEntries(posts.map((p) => [p.slug, <PostCard key={p.slug} post={p} readMore={blog.readMore} />]));
  return (
    <PageTransition>
      <PageHero background={{ desktop: '/blog-banner-desktop.png', mobile: '/blog-banner-mobile.png', focus: { desktop: 'center 50%', mobile: 'center 50%' } }} title={blog.title} crumbs={[{ label: blog.title }]} />

      <section className="bg-gradient-to-b from-brand-50/60 to-white py-16 lg:py-24">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
          <BlogBrowser
            categories={blog.categories}
            posts={posts}
            cards={cards}
            featuredSlug={featured.slug}
            featured={<PostCard post={featured} readMore={blog.readMore} featured />}
          />
        </div>
      </section>

      <section aria-labelledby="connect-title" className="relative isolate overflow-hidden bg-brand-950 py-20 text-center">
        <div aria-hidden className="absolute top-1/2 left-1/2 -z-10 size-[32rem] -translate-1/2 rounded-full bg-brand-600/40 blur-3xl" />
        <Reveal>
          <h2 id="connect-title" className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">{site.socialTitle}</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <ul className="mt-10 flex justify-center gap-5">
            {site.social.map((s) => {
              const Icon = socialIcon(s.label);
              return (
                <li key={s.href}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="grid size-16 place-items-center rounded-2xl text-white transition-all duration-300 glass-dark hover:-translate-y-1.5 hover:bg-accent-500 hover:text-brand-950"
                  >
                    <Icon className="size-7" />
                  </a>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </section>
    </PageTransition>
  );
}
