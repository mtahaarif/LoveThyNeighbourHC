import Link from 'next/link';
import { ViewTransition } from 'react';
import { ArrowUpRight, CalendarDays, Clock3 } from 'lucide-react';
import type { BlogPost } from '@/content/types';
import { formatDate } from '@/lib/dates';
import CoverImage from '@/components/ui/CoverImage';

type Props = { post: BlogPost; readMore: string; featured?: boolean; /** h2 on the blog index, h3 where cards sit under a section heading. */ headingLevel?: 'h2' | 'h3' };

/** Blog card; the photo is a shared element that morphs into the post page hero. */
export default function PostCard({ post, readMore, featured = false, headingLevel: Heading = 'h2' }: Props) {
  return (
    <Link
      href={`/blogs/f/${post.slug}`}
      className={`group relative flex h-full overflow-hidden rounded-[2rem] bg-white shadow-soft ring-1 ring-slate-900/5 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-glow ${
        featured ? 'flex-col lg:grid lg:grid-cols-[1.15fr_1fr]' : 'flex-col'
      }`}
    >
      <ViewTransition name={`post-${post.slug}`} share="morph" default="none">
        <div className={`relative overflow-hidden bg-brand-100 ${featured ? 'aspect-[16/10] lg:aspect-auto lg:min-h-[26rem]' : 'aspect-[16/10]'}`}>
          <CoverImage
            image={post.image}
            loading={featured ? 'eager' : 'lazy'}
            fetchPriority={featured ? 'high' : 'auto'}
            sizes={featured ? '(min-width: 1024px) 700px, 100vw' : '(min-width: 1024px) 420px, (min-width: 640px) 50vw, 100vw'}
            className="transition-transform duration-[1.2s] ease-out group-hover:scale-110"
          />
          {post.categories.length > 0 && (
            <span className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-[12px] font-bold text-brand-700 backdrop-blur">{post.categories[0]}</span>
          )}
        </div>
      </ViewTransition>
      <div className={`flex flex-1 flex-col ${featured ? 'p-8 sm:p-12' : 'p-6 sm:p-7'}`}>
        <p className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[13px] font-semibold text-slate-500">
          <span className="flex items-center gap-1.5"><CalendarDays className="size-4 text-brand-400" aria-hidden />{formatDate(post.date)}</span>
          <span className="flex items-center gap-1.5"><Clock3 className="size-4 text-brand-400" aria-hidden />{post.readingMinutes} min read</span>
        </p>
        <Heading className={`mt-4 font-display font-bold tracking-tight text-brand-950 transition-colors group-hover:text-brand-600 ${featured ? 'text-3xl sm:text-4xl' : 'text-[1.4rem] leading-snug'}`}>
          {post.title}
        </Heading>
        {post.excerpt && <p className={`mt-3 text-slate-600 ${featured ? 'text-[17px] leading-relaxed' : 'line-clamp-3 text-[15px]'}`}>{post.excerpt}</p>}
        <span className="mt-auto inline-flex items-center gap-2 pt-6 text-[14px] font-bold text-brand-600">
          {readMore}
          <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
        </span>
      </div>
    </Link>
  );
}
