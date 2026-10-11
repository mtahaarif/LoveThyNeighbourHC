import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, CalendarDays, Clock3 } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import PageTransition from '@/components/ui/PageTransition';
import RichText from '@/components/ui/RichText';
import { FacebookIcon, XIcon } from '@/components/ui/BrandIcons';
import { blog, getPost, posts } from '@/content/blog';
import { pageMetadata } from '@/content/metadata';
import { formatDate } from '@/lib/dates';

// Every post is prerendered via generateStaticParams; navigation may block on the (static) payload.
export const instant = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<'/blogs/f/[slug]'>): Promise<Metadata> {
  const { slug } = await params;
  return pageMetadata[`/blogs/f/${slug}`] ?? {};
}

export default async function BlogPostPage({ params }: PageProps<'/blogs/f/[slug]'>) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const index = posts.indexOf(post);
  const newer = posts[index - 1];
  const older = posts[index + 1];
  const recent = posts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const url = `https://lovethyneighborhhc.com/blogs/f/${post.slug}`;
  const share = [
    { label: 'Facebook', href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, Icon: FacebookIcon },
    { label: 'X', href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(post.title)}`, Icon: XIcon },
  ];

  return (
    <PageTransition>
      <PageHero
        title={post.title}
        description={post.excerpt}
        crumbs={[{ label: blog.title, href: '/blogs' }, { label: post.title }]}
        image={post.image}
        imageTransitionName={`post-${post.slug}`}
      >
        <p className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[14px] font-semibold text-brand-100">
          <span className="flex items-center gap-2"><CalendarDays className="size-4 text-accent-300" aria-hidden />{formatDate(post.date)}</span>
          <span className="flex items-center gap-2"><Clock3 className="size-4 text-accent-300" aria-hidden />{post.readingMinutes} min read</span>
        </p>
      </PageHero>

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto grid max-w-[1320px] gap-14 px-4 sm:px-6 lg:grid-cols-[1fr_20rem] lg:px-8">
          <article className="min-w-0">
            <RichText html={post.html} size="lg" className="mx-auto max-w-3xl" />
          </article>

          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-[1.75rem] bg-brand-50/70 p-6 ring-1 ring-brand-100">
              <p className="text-[12px] font-bold tracking-[0.2em] text-brand-600 uppercase">Categories</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {blog.categories.map((c) => (
                  <li key={c}>
                    <Link href="/blogs" className={`inline-block rounded-full px-4 py-2 text-[13px] font-bold transition-colors ${post.categories.includes(c) ? 'bg-brand-600 text-white' : 'bg-white text-brand-800 hover:bg-brand-100'}`}>{c}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[1.75rem] bg-white p-6 shadow-soft ring-1 ring-slate-900/5">
              <p className="text-[12px] font-bold tracking-[0.2em] text-brand-600 uppercase">Recent Posts</p>
              <ul className="mt-4 space-y-4">
                {recent.map((p) => (
                  <li key={p.slug}>
                    <Link href={`/blogs/f/${p.slug}`} className="group flex gap-4">
                      <span className="relative size-16 shrink-0 overflow-hidden rounded-xl bg-brand-100">
                        <Image src={p.image.src} alt={p.image.alt} fill sizes="64px" className="object-cover transition-transform duration-500 group-hover:scale-110" />
                      </span>
                      <span>
                        <span className="line-clamp-2 text-[14px] font-bold text-brand-950 transition-colors group-hover:text-brand-600">{p.title}</span>
                        <span className="mt-1 block text-[12px] text-slate-500">{formatDate(p.date)}</span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[1.75rem] bg-brand-950 p-6 text-white">
              <p className="text-[12px] font-bold tracking-[0.2em] text-accent-300 uppercase">Share this post</p>
              <ul className="mt-4 flex gap-3">
                {share.map(({ label, href, Icon }) => (
                  <li key={label}>
                    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={`Share on ${label}`} className="grid size-11 place-items-center rounded-full bg-white/10 ring-1 ring-white/15 transition-all hover:-translate-y-1 hover:bg-accent-500 hover:text-brand-950">
                      <Icon className="size-5" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <nav aria-label="More posts" className="border-t border-brand-100 bg-gradient-to-b from-brand-50/50 to-white">
        <div className="mx-auto grid max-w-[1320px] gap-5 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:px-8">
          {older ? (
            <Link href={`/blogs/f/${older.slug}`} className="group rounded-[1.75rem] bg-white p-7 shadow-soft ring-1 ring-slate-900/5 transition-all hover:-translate-y-1 hover:shadow-glow">
              <span className="flex items-center gap-2 text-[13px] font-bold text-brand-500"><ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" aria-hidden />Previous</span>
              <span className="mt-2 block font-display text-xl font-bold text-brand-950">{older.title}</span>
            </Link>
          ) : <span />}
          {newer && (
            <Link href={`/blogs/f/${newer.slug}`} className="group rounded-[1.75rem] bg-white p-7 text-right shadow-soft ring-1 ring-slate-900/5 transition-all hover:-translate-y-1 hover:shadow-glow">
              <span className="flex items-center justify-end gap-2 text-[13px] font-bold text-brand-500">Next<ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden /></span>
              <span className="mt-2 block font-display text-xl font-bold text-brand-950">{newer.title}</span>
            </Link>
          )}
        </div>
      </nav>
    </PageTransition>
  );
}
