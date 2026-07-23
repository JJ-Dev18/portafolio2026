import type { ReactNode } from "react";
import { AlertTriangle, GitBranch, Scale, Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";

type CalloutType = "problem" | "solution" | "tradeoffs" | "lessons" | "note";

const CONFIG: Record<CalloutType, { label: string; icon: typeof AlertTriangle; className: string }> = {
  problem: {
    label: "Problem",
    icon: AlertTriangle,
    className: "border-l-destructive/60",
  },
  solution: {
    label: "Solution",
    icon: GitBranch,
    className: "border-l-primary",
  },
  tradeoffs: {
    label: "Trade-offs",
    icon: Scale,
    className: "border-l-amber-500/70",
  },
  lessons: {
    label: "Lessons learned",
    icon: Lightbulb,
    className: "border-l-blue-600/60",
  },
  note: {
    label: "Note",
    icon: Lightbulb,
    className: "border-l-muted-foreground/40",
  },
};

export function Callout({ type, children }: { type: CalloutType; children: ReactNode }) {
  const { label, icon: Icon, className } = CONFIG[type];

  return (
    <div className={cn("not-prose my-6 rounded-md border border-l-4 bg-muted/30 p-4", className)}>
      <div className="mb-2 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-foreground">
        <Icon className="h-4 w-4" />
        {label}
      </div>
      <div className="prose prose-sm dark:prose-invert max-w-none [&>p:first-child]:mt-0 [&>p:last-child]:mb-0">
        {children}
      </div>
    </div>
  );
}
