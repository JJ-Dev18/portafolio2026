import { cn } from "@/lib/utils";

export interface Stat {
  label: string;
  value: string;
}

export function StatBar({ stats, className }: { stats: Stat[]; className?: string }) {
  return (
    <div
      className={cn(
        "not-prose flex flex-wrap divide-x divide-border border-y",
        className
      )}
    >
      {stats.map((stat) => (
        <div key={stat.label} className="flex-1 min-w-[8rem] px-6 py-4 first:pl-0">
          <div className="text-2xl font-semibold tracking-tight md:text-3xl">
            {stat.value}
          </div>
          <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
