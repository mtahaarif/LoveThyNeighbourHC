import type { Metadata } from 'next';
import HighlightPage from '@/components/highlights/HighlightPage';
import { getHighlight } from '@/content/highlights';
import { pageMetadata } from '@/content/metadata';

export const metadata: Metadata = pageMetadata['/individualized-care-plans'];

export default function Page() {
  return <HighlightPage highlight={getHighlight('individualized-care-plans')!} />;
}
