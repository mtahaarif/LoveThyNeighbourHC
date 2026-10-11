import type { Metadata } from 'next';
import HighlightPage from '@/components/highlights/HighlightPage';
import { getHighlight } from '@/content/highlights';
import { pageMetadata } from '@/content/metadata';

export const metadata: Metadata = pageMetadata['/patient-experience-and'];

export default function Page() {
  return <HighlightPage highlight={getHighlight('patient-experience-and')!} />;
}
