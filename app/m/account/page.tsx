import type { Metadata } from 'next';
import AccountPage from '@/components/account/AccountPage';
import { accountPages } from '@/content/account';
import { pageMetadata } from '@/content/metadata';

export const metadata: Metadata = pageMetadata['/m/account'];

export default function Page() {
  return <AccountPage content={accountPages['account']} />;
}
