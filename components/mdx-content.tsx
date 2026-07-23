"use client";

import { useMDXComponent } from "next-contentlayer2/hooks";
import { useParams } from "next/navigation";
import Link from "next/link";
import { MermaidDiagram } from "@/components/mdx/mermaid-diagram";
import { Callout } from "@/components/mdx/callout";
import { StatBar } from "@/components/ui/stat-tile";
import { Timeline } from "@/components/ui/timeline";
import { Checklist } from "@/components/ui/checklist";

interface MDXContentProps {
  code: string;
}

function MDXLink({ href = "", children, ...props }: React.ComponentProps<"a">) {
  const params = useParams();
  const lang = params.lang as string;

  if (!href.startsWith("/")) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    );
  }

  const resolvedHref = href.startsWith(`/${lang}/`) || href === `/${lang}` ? href : `/${lang}${href}`;
  return (
    <Link href={resolvedHref} {...props}>
      {children}
    </Link>
  );
}

const mdxComponents = {
  a: MDXLink,
  pre: ({ children }: React.ComponentProps<"pre">) => {
    const child = children as React.ReactElement<{ className?: string; children?: string }>;
    const className = child?.props?.className ?? "";
    if (className === "language-mermaid") {
      return <MermaidDiagram chart={child.props.children ?? ""} />;
    }
    return <pre className={className}>{children}</pre>;
  },
  Callout,
  StatBar,
  Timeline,
  Checklist,
};

/* eslint-disable react-hooks/static-components */
export function MDXContent({ code }: MDXContentProps) {
  const Component = useMDXComponent(code);
  return <Component components={mdxComponents} />;
}
