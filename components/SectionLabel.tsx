/**
 * Carries the "How We Work" timeline motif (orange-ringed mono number +
 * signal rail) across every section of the page.
 */
export default function SectionLabel({
  n,
  children,
  center = false,
}: {
  n: string;
  children: React.ReactNode;
  center?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-3 ${center ? "justify-center" : ""}`}
    >
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-signal/50 bg-ink font-mono text-[11px] text-signal shadow-[inset_0_1px_0_0_rgba(255,200,140,0.2),0_0_10px_0_rgba(255,122,26,0.3)]">
        {n}
      </span>
      <span className="h-px w-10 shrink-0 bg-gradient-to-r from-signal/70 to-transparent" />
      <span className="font-mono text-[11px] uppercase tracking-widest2 text-signal">
        {children}
      </span>
    </div>
  );
}
