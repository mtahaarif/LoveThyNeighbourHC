import type { Metadata } from 'next';
import ServicePage from '@/components/services/ServicePage';
import { getService } from '@/content/services';
import { pageMetadata } from '@/content/metadata';

export const metadata: Metadata = pageMetadata['/non-skilled-care'];

export default function Page() {
  return <ServicePage service={getService('non-skilled-care')!} />;
}
