import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import './styles/fonts.css';
import './styles/base.css';
import './styles/atoms.css';
import './styles/site.css';

const favicon = (size: number, file: string) => ({ url: `/assets/images/${file}`, sizes: `${size}x${size}`, type: 'image/png' });
const touch = (size: number, file: string) => ({ url: `/assets/images/${file}`, sizes: `${size}x${size}` });

export const metadata: Metadata = {
  metadataBase: new URL('https://lovethyneighborhhc.com'),
  authors: [{ name: 'lovethyneighborhhc.com' }],
  generator: 'Starfield Technologies; Go Daddy Website Builder 8.0.0000',
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

// Hide the cookie banner before first paint for visitors who already accepted it.
const cookieBannerScript = `try{if(/(?:^|;\\s*)cookie_terms=accepted/.test(document.cookie))document.documentElement.classList.add('cookies-accepted')}catch(e){}`;

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en-PH" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: cookieBannerScript }} />
      </head>
      <body className="x x-fonts-league-spartan x-fonts-montserrat x-fonts-fredoka-one x-fonts-archivo-black">
        {children}
        <Script src="https://cdn.trustedsite.com/js/1.js?position=bottomLeft&offset=15" strategy="afterInteractive" />
      </body>
    </html>
  );
}
