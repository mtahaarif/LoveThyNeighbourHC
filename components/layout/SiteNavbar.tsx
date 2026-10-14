'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState, useSyncExternalStore } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'motion/react';
import {
  ArrowUpRight, Baby, BedDouble, ChevronDown, ConciergeBell, HeartHandshake, Menu, Phone, Stethoscope, UserRound, X,
} from 'lucide-react';
import { accountLinks, isActive, phone, primaryNav, type NavLink } from '@/content/navigation';

const serviceIcons: Record<string, typeof Stethoscope> = {
  '/skilled-nursing-care': Stethoscope,
  '/non-skilled-care': HeartHandshake,
  '/private-duty-nursing': BedDouble,
  '/pediatric-private-nurse': Baby,
  '/concierge-services': ConciergeBell,
};

const panel = {
  initial: { opacity: 0, y: 8, scale: 0.98 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: 6, scale: 0.98 },
  transition: { duration: 0.18, ease: [0.16, 1, 0.3, 1] as const },
};

const noopSubscribe = () => () => {};

function useOutsideClose(open: boolean, close: () => void) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => { if (!ref.current?.contains(e.target as Node)) close(); };
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') close(); };
    document.addEventListener('pointerdown', onDown);
    document.addEventListener('keydown', onKey);
    return () => { document.removeEventListener('pointerdown', onDown); document.removeEventListener('keydown', onKey); };
  }, [open, close]);
  return ref;
}

function ServicesMenu({ items, active, pathname }: { items: NavLink[]; active: boolean; pathname: string }) {
  const [open, setOpen] = useState(false);
  const ref = useOutsideClose(open, () => setOpen(false));
  return (
    <div ref={ref} className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="menu"
        onClick={() => setOpen((o) => !o)}
        className={`flex cursor-pointer items-center gap-1 rounded-full border-0 px-3.5 py-2 text-[14px] font-semibold transition-colors ${
          active || open ? 'bg-brand-50 text-brand-700' : 'bg-transparent text-slate-700 hover:bg-slate-100 hover:text-brand-700'
        }`}
      >
        Services
        <ChevronDown className={`size-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} aria-hidden />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div {...panel} className="absolute top-full left-1/2 z-50 -translate-x-1/2 pt-3">
            <ul role="menu" className="m-0 w-80 list-none rounded-2xl bg-white p-2 shadow-card ring-1 ring-slate-900/5">
              {items.map((item) => {
                const Icon = serviceIcons[item.href] ?? Stethoscope;
                const current = isActive(pathname, item.href);
                return (
                  <li key={item.href} role="none">
                    <Link
                      role="menuitem"
                      href={item.href}
                      className={`group flex items-center gap-3 rounded-xl px-3 py-2.5 no-underline transition-colors ${
                        current ? 'bg-brand-50' : 'hover:bg-slate-50'
                      }`}
                    >
                      <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                        <Icon className="size-5" aria-hidden />
                      </span>
                      <span className={`flex-1 text-[14px] font-semibold ${current ? 'text-brand-700' : 'text-slate-800'}`}>{item.label}</span>
                      <ArrowUpRight className="size-4 text-slate-400 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:text-brand-600 group-hover:opacity-100" aria-hidden />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function AccountMenu() {
  const [open, setOpen] = useState(false);
  const ref = useOutsideClose(open, () => setOpen(false));
  return (
    <div ref={ref} className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button
        type="button"
        aria-label="Account"
        aria-expanded={open}
        aria-haspopup="menu"
        onClick={() => setOpen((o) => !o)}
        className="grid size-10 cursor-pointer place-items-center rounded-full border-0 bg-slate-100 text-slate-700 transition-colors hover:bg-brand-50 hover:text-brand-700"
      >
        <UserRound className="size-5" aria-hidden />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div {...panel} className="absolute top-full right-0 z-50 pt-3">
            <ul role="menu" className="m-0 w-48 list-none rounded-2xl bg-white p-2 shadow-card ring-1 ring-slate-900/5">
              {accountLinks.map((l) => (
                <li key={l.href} role="none">
                  <Link role="menuitem" href={l.href} className="block rounded-xl px-3 py-2.5 text-[14px] font-semibold text-slate-800 no-underline hover:bg-slate-50 hover:text-brand-700">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MobileSheet({ open, onClose, pathname }: { open: boolean; onClose: () => void; pathname: string }) {
  const [servicesOpen, setServicesOpen] = useState(() => primaryNav.some((i) => 'children' in i && i.children.some((c) => isActive(pathname, c.href))));
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    return () => { document.body.style.overflow = prev; document.removeEventListener('keydown', onKey); };
  }, [open, onClose]);

  // Rendered into <body>: the header's backdrop-filter would otherwise become the containing block of
  // this fixed overlay (confining it to the header's height) and fold it into the header's view transition.
  const mounted = useSyncExternalStore(noopSubscribe, () => true, () => false);
  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[70] xl:hidden" role="dialog" aria-modal="true" aria-label="Site navigation">
          <motion.button
            type="button"
            aria-label="Close menu"
            onClick={onClose}
            className="absolute inset-0 cursor-default border-0 bg-brand-950/40 backdrop-blur-sm"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          />
          <motion.nav
            className="absolute inset-y-0 right-0 flex w-[min(24rem,100%)] flex-col bg-white shadow-2xl"
            initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 380, damping: 38 }}
          >
            <div className="flex h-16 items-center justify-between border-b border-slate-100 px-5">
              <span className="font-display text-lg font-bold text-brand-900">Menu</span>
              <button type="button" onClick={onClose} aria-label="Close menu" className="grid size-10 cursor-pointer place-items-center rounded-full border-0 bg-slate-100 text-slate-700">
                <X className="size-5" aria-hidden />
              </button>
            </div>
            <ul className="m-0 flex-1 list-none space-y-1 overflow-y-auto p-4">
              {primaryNav.map((item, i) => {
                const base = 'flex w-full items-center justify-between rounded-2xl px-4 py-3.5 text-[16px] font-semibold no-underline transition-colors';
                if ('children' in item) {
                  const active = item.children.some((c) => isActive(pathname, c.href));
                  return (
                    <motion.li key={item.label} initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.04 * i }}>
                      <button
                        type="button"
                        aria-expanded={servicesOpen}
                        onClick={() => setServicesOpen((o) => !o)}
                        className={`${base} cursor-pointer border-0 ${active ? 'bg-brand-50 text-brand-700' : 'bg-transparent text-slate-800 hover:bg-slate-50'}`}
                      >
                        {item.label}
                        <ChevronDown className={`size-5 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} aria-hidden />
                      </button>
                      <AnimatePresence initial={false}>
                        {servicesOpen && (
                          <motion.ul
                            className="m-0 list-none overflow-hidden pl-3"
                            initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                          >
                            {item.children.map((c) => {
                              const Icon = serviceIcons[c.href] ?? Stethoscope;
                              const current = isActive(pathname, c.href);
                              return (
                                <li key={c.href}>
                                  <Link href={c.href} onClick={onClose} className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-[15px] font-medium no-underline ${current ? 'text-brand-700' : 'text-slate-600 hover:text-brand-700'}`}>
                                    <span className="grid size-8 place-items-center rounded-lg bg-brand-50 text-brand-600"><Icon className="size-4" aria-hidden /></span>
                                    {c.label}
                                  </Link>
                                </li>
                              );
                            })}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </motion.li>
                  );
                }
                const active = isActive(pathname, item.href);
                return (
                  <motion.li key={item.href} initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.04 * i }}>
                    <Link href={item.href} onClick={onClose} aria-current={active ? 'page' : undefined} className={`${base} ${active ? 'bg-brand-50 text-brand-700' : 'text-slate-800 hover:bg-slate-50'}`}>
                      {item.label}
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
            <div className="space-y-3 border-t border-slate-100 p-5">
              <div className="flex gap-2">
                {accountLinks.map((l) => (
                  <Link key={l.href} href={l.href} onClick={onClose} className="flex-1 rounded-full bg-slate-100 px-4 py-2.5 text-center text-[14px] font-semibold text-slate-700 no-underline">
                    {l.label}
                  </Link>
                ))}
              </div>
              <a href={phone.href} className="flex items-center justify-center gap-2 rounded-full bg-brand-600 px-5 py-3.5 text-[15px] font-bold text-white no-underline shadow-soft">
                <Phone className="size-4" aria-hidden /> Get in Touch
              </a>
            </div>
          </motion.nav>
        </div>
      )}
    </AnimatePresence>,
    document.body,
  );
}

export default function SiteNavbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  // Close the mobile sheet whenever the route changes (adjusting state during render, not in an effect).
  const [sheetPath, setSheetPath] = useState(pathname);
  if (sheetPath !== pathname) {
    setSheetPath(pathname);
    setSheetOpen(false);
  }

  return (
    <header
      style={{ viewTransitionName: 'site-header' }}
      className={`sticky top-0 z-[60] w-full font-sans transition-all duration-300 ${
        scrolled ? 'bg-white/85 shadow-soft backdrop-blur-xl' : 'bg-white/70 backdrop-blur-lg'
      } border-b border-slate-200/60`}
    >
      <div className={`mx-auto flex max-w-[1320px] items-center gap-4 px-4 transition-[height] duration-300 sm:px-6 lg:px-8 ${scrolled ? 'h-16' : 'h-[72px]'}`}>
        <Link href="/" aria-label="Love Thy Neighbor Home Health Care, Inc — Home" className="flex shrink-0 items-center">
          <Image
            src="/assets/images/Love-Thy-Neighbor-Home-Health-Care-Inc.png"
            alt="Love Thy Neighbor Home Health Care, Inc"
            width={160}
            height={53}
            loading="eager"
            className={`w-auto transition-[height] duration-300 ${scrolled ? 'h-11' : 'h-[3.25rem]'}`}
          />
        </Link>

        <nav aria-label="Main" className="ml-auto hidden xl:block">
          <ul className="m-0 flex list-none items-center gap-0.5 p-0">
            {primaryNav.map((item) =>
              'children' in item ? (
                <li key={item.label}>
                  <ServicesMenu items={item.children} pathname={pathname} active={item.children.some((c) => isActive(pathname, c.href))} />
                </li>
              ) : (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive(pathname, item.href) ? 'page' : undefined}
                    className={`block whitespace-nowrap rounded-full px-3.5 py-2 text-[14px] font-semibold no-underline transition-colors ${
                      isActive(pathname, item.href) ? 'bg-brand-50 text-brand-700' : 'text-slate-700 hover:bg-slate-100 hover:text-brand-700'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-2 xl:ml-3">
          <div className="hidden xl:block"><AccountMenu /></div>
          <a
            href={phone.href}
            className="group hidden items-center gap-2 rounded-full bg-brand-600 py-2.5 pr-5 pl-2.5 text-[14px] font-bold whitespace-nowrap text-white no-underline shadow-soft transition-all hover:bg-brand-700 hover:shadow-card sm:inline-flex"
          >
            <span className="grid size-7 place-items-center rounded-full bg-white/15 transition-transform group-hover:rotate-12">
              <Phone className="size-3.5" aria-hidden />
            </span>
            Get in Touch
          </a>
          <button
            type="button"
            onClick={() => setSheetOpen(true)}
            aria-label="Open menu"
            aria-expanded={sheetOpen}
            className="grid size-11 cursor-pointer place-items-center rounded-full border-0 bg-slate-100 text-slate-800 transition-colors hover:bg-brand-50 hover:text-brand-700 xl:hidden"
          >
            <Menu className="size-5" aria-hidden />
          </button>
        </div>
      </div>
      <MobileSheet open={sheetOpen} onClose={() => setSheetOpen(false)} pathname={pathname} />
    </header>
  );
}
