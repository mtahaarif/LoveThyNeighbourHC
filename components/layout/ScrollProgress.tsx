/** Thin brand-gradient bar along the top edge showing how far the page has been read (CSS scroll timeline). */
export default function ScrollProgress() {
  return (
    <div
      aria-hidden
      className="scroll-progress fixed inset-x-0 top-0 z-[80] h-[3px] bg-gradient-to-r from-brand-500 via-teal-brand to-accent-400"
    />
  );
}
