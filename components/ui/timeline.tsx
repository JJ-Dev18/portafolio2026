import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface TimelineItem {
  date: string;
  title: string;
  description?: ReactNode;
}

export function Timeline({ items, className }: { items: TimelineItem[]; className?: string }) {
  return (
    <ol className={cn("not-prose relative border-l pl-6", className)}>
      {items.map((item, i) => (
        <li key={i} className={cn("relative", i !== items.length - 1 && "pb-8")}>
          <span className="absolute -left-[1.6rem] top-1 h-2.5 w-2.5 rounded-full border-2 border-background bg-primary" />
          <time className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
            {item.date}
          </time>
          <h3 className="mt-1 font-semibold">{item.title}</h3>
          {item.description && (
            <div className="mt-1 text-sm text-muted-foreground">{item.description}</div>
          )}
        </li>
      ))}
    </ol>
  );
}
