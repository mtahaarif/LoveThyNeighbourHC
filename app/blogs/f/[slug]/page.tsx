import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PageShell from '@/components/site/PageShell';
import SiteHeader from '@/components/site/SiteHeader';
import SocialLinks from '@/components/site/SocialLinks';
import Footer from '@/components/site/Footer';
import CookieBanner from '@/components/site/CookieBanner';
import { getPost, posts } from '@/content/blog';

// Every post is prerendered via generateStaticParams; navigation may block on the (static) payload.
export const instant = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<'/blogs/f/[slug]'>): Promise<Metadata> {
  const { slug } = await params;
  return getPost(slug)?.metadata ?? {};
}

export default async function BlogPostPage({ params }: PageProps<'/blogs/f/[slug]'>) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  return (
    <PageShell>
      <SiteHeader path={`/blogs/f/${slug}`} />
      <post.Component />
      <SocialLinks />
      <Footer />
      <div id="580074ac-e6cd-4405-8831-00bbf462f97a" className="widget widget-messaging widget-messaging-messaging-1">
        <div data-ux="Element" id="bs-u12" className="x-el x-el-div gblnuxzq gcyjxnld gdyvsvip giffmze9 glzkfomy gr1xwajw gyebw4d9 gyylpd4a">
          <span data-ux="Element" className="x-el x-el-span gblnuxzq gcyjxnld gdyvsvip giffmze9 glzkfomy gr1xwajw gyebw4d9 gyylpd4a">
            <div data-ux="Block" className="x-el x-el-div g9s5kbrx gblnuxzq gc5listd gcyjxnld gdvejhly gdyvsvip giffmze9 gl84owbc glzkfomy gm5rc0nd gmmx7zqh gr1xwajw gv60jas9 gyebw4d9 gyylpd4a">
              <div>
                <div />
              </div>
            </div>
          </span>
        </div>
      </div>
      <div id="80f4084f-618c-402d-aa43-044dbefe795a" className="widget widget-popup widget-popup-popup-1" />
      <div id="9e65371f-f167-42fb-84f1-f53de633d681" className="widget widget-trustedsite widget-trustedsite-trusted-site-1" />
      <CookieBanner />
    </PageShell>
  );
}
