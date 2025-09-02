"use client";

import { useEffect, useState } from "react";
import { highlight } from "@/lib/highlighter";
import { Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type CodeViewProps = {
  code: string;
  language?: string;
  className?: string;
  showCopy?: boolean;
  maxHeight?: string;
};

export default function CodeView({
  code,
  language = "tsx",
  className,
  showCopy = true,
  maxHeight = "400px",
}: CodeViewProps) {
  const [html, setHtml] = useState<string>("Loading...");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    highlight(code, language).then(setHtml);
  }, [code, language]);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={cn("relative w-full bg-muted/30", className)}>
      {/* Copy Button */}
      {showCopy && (
        <div className="absolute top-3 right-3 z-10">
          <Button
            variant="outline"
            size="sm"
            onClick={handleCopy}
            className="h-8 px-2 text-xs"
          >
            {copied ? (
              <Check className="w-3 h-3 text-green-500" />
            ) : (
              <Copy className="w-3 h-3" />
            )}
            <span className="ml-1">{copied ? "Copied" : "Copy"}</span>
          </Button>
        </div>
      )}

      {/* Code block */}
      <div
        className={cn(
          "text-sm overflow-auto rounded-lg bg-muted/30",
          "[&_pre]:!bg-transparent [&_pre]:!p-4 [&_pre]:!m-0",
          "[&_.line]:flex [&_.line]:items-baseline",
          "[&_.line-number]:w-8 [&_.line-number]:text-right [&_.line-number]:mr-4",
          "[&_.line-number]:text-muted-foreground [&_.line-number]:select-none",
          "[&_.line-number:hover]:text-foreground"
        )}
        style={{ maxHeight }}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}
