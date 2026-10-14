import PostCard from './PostCard';
import Reveal from '@/components/ui/Reveal';
import { Eyebrow } from '@/components/ui/SectionHeading';
import { blog, getPost } from '@/content/blog';
import type { BlogPost } from '@/content/types';

type Props = { slugs: string[]; title?: string; eyebrow?: string; className?: string };

/** A row of blog cards: topic-matched reading on service/highlight pages, "keep reading" on posts. */
export default function RelatedArticles({ slugs, title = 'Helpful Reading', eyebrow = 'From Our Blog', className = '' }: Props) {
  const list = slugs.map(getPost).filter((p): p is BlogPost => Boolean(p));
  if (list.length === 0) return null;
  return (
    <section aria-labelledby="related-articles" className={`py-20 lg:py-24 ${className}`}>
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 id="related-articles" className="mt-4 font-display text-4xl font-bold tracking-tight text-brand-950 sm:text-5xl">{title}</h2>
        </Reveal>
        <ul className={`mt-10 grid gap-7 sm:grid-cols-2 ${list.length >= 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'}`}>
          {list.map((p, i) => (
            <Reveal as="li" key={p.slug} delay={i * 0.06}>
              <PostCard post={p} readMore={blog.readMore} headingLevel="h3" />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
