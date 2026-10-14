import Image, { type ImageProps } from 'next/image';
import type { Img } from '@/content/types';

type Props = Omit<ImageProps, 'src' | 'alt' | 'width' | 'height' | 'fill' | 'sizes'> & {
  image: Img;
  /** Overrides the image's own alt text (e.g. '' where the photo is decorative). */
  alt?: string;
  /** Required: the rendered width per breakpoint, so the srcset uses width descriptors. */
  sizes: string;
};

/**
 * A photo that covers its positioned parent, like `<Image fill>`, but keeps the intrinsic width/height
 * attributes (crawlers and the browser's aspect-ratio hint both see real dimensions).
 */
export default function CoverImage({ image, alt, className = '', ...rest }: Props) {
  return (
    <Image
      src={image.src}
      width={image.width}
      height={image.height}
      alt={alt ?? image.alt}
      className={`absolute inset-0 size-full object-cover ${className}`}
      {...rest}
    />
  );
}
