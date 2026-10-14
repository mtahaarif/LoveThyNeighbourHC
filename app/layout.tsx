import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { League_Spartan, Manrope } from 'next/font/google';
import SiteNavbar from '@/components/layout/SiteNavbar';
import SiteFooter from '@/components/layout/SiteFooter';
import CookieConsent from '@/components/layout/CookieConsent';
import ScrollProgress from '@/components/layout/ScrollProgress';
import MotionProvider from '@/components/layout/MotionProvider';
import { SITE_URL, TRUSTEDSITE_ENABLED } from '@/lib/site-url';
import { SITE_NAME } from '@/content/metadata';
import './globals.css';

const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope', display: 'swap' });
const leagueSpartan = League_Spartan({ subsets: ['latin'], variable: '--font-league-spartan', display: 'swap' });

const favicon = (size: number, file: string) => ({ url: `/assets/images/${file}`, sizes: `${size}x${size}`, type: 'image/png' });
const touch = (size: number, file: string) => ({ url: `/assets/images/${file}`, sizes: `${size}x${size}` });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  authors: [{ name: `${SITE_NAME}, Inc.` }],
  manifest: '/manifest.webmanifest',
  verification: { google: 'bC8nyUB4hW8_GfkHZG1eZdBNNgew6zpvcWPRk1fBLHA' },
  icons: {
    icon: [
      favicon(16, 'b1fefd7f-995f-4b4f-8a2c-55f6b0b3fe5c-3d5dfec2.png'),
      favicon(24, 'b1fefd7f-995f-4b4f-8a2c-55f6b0b3fe5c-18d7e1a9.png'),
      favicon(32, 'b1fefd7f-995f-4b4f-8a2c-55f6b0b3fe5c-71ec1a5a.png'),
      favicon(48, 'b1fefd7f-995f-4b4f-8a2c-55f6b0b3fe5c-e16312dc.png'),
      favicon(64, 'b1fefd7f-995f-4b4f-8a2c-55f6b0b3fe5c-034e5de9.png'),
    ],
    apple: [
      touch(57, 'Love-Thy-Neighbor-Home-Health-Care-Inc-1-bbe9e40c.png'),
      touch(60, 'Love-Thy-Neighbor-Home-Health-Care-Inc-1-98121e8a.png'),
      touch(72, 'Love-Thy-Neighbor-Home-Health-Care-Inc-1-fcba89d7.png'),
      touch(114, 'Love-Thy-Neighbor-Home-Health-Care-Inc-1-df4f64d9.png'),
      touch(120, 'Love-Thy-Neighbor-Home-Health-Care-Inc-1-f043244b.png'),
      touch(144, 'Love-Thy-Neighbor-Home-Health-Care-Inc-1-7533e3d2.png'),
      touch(152, 'Love-Thy-Neighbor-Home-Health-Care-Inc-1-2a581f21.png'),
      touch(180, 'Love-Thy-Neighbor-Home-Health-Care-Inc-1-f16b93ab.png'),
    ],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#115793',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en-US" className={`${manrope.variable} ${leagueSpartan.variable}`}>
      <body>
        <MotionProvider>
          <ScrollProgress />
          <SiteNavbar />
          <main id="main">{children}</main>
          <SiteFooter />
          <CookieConsent />
        </MotionProvider>
        {/* The seal is registered for lovethyneighborhhc.com; on any other host its config request fails (403). */}
        {TRUSTEDSITE_ENABLED && <Script src="https://cdn.trustedsite.com/js/1.js?position=bottomLeft&offset=15" strategy="lazyOnload" />}
      </body>
    </html>
  );
}
