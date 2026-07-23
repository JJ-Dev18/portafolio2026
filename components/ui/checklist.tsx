import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function Checklist({ items, className }: { items: string[]; className?: string }) {
  return (
    <ul className={cn("not-prose grid gap-2 sm:grid-cols-2", className)}>
      {items.map((item) => (
        <li key={item} className="flex items-center gap-2 text-sm">
          <Check className="h-4 w-4 shrink-0 text-primary" />
          {item}
        </li>
      ))}
    </ul>
  );
}
