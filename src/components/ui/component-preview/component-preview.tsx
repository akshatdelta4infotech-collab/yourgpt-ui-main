"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Copy, Check, Code2, Eye } from "lucide-react";
import { cn } from "@/lib/utils";
import CodeView from "./code-view";

interface ComponentPreviewProps {
  /**
   * The React component to preview
   */
  children: React.ReactNode;
  /**
   * The source code to display in the code tab
   */
  code: string;
  /**
   * The programming language for syntax highlighting
   * @default "tsx"
   */
  language?: string;
  /**
   * Additional CSS classes for the preview container
   */
  className?: string;
  /**
   * Whether to show the copy button
   * @default true
   */
  showCopy?: boolean;
  /**
   * Custom title for the component
   */
  title?: string;
  /**
   * Description of the component
   */
  description?: string;
  /**
   * Whether to show the border around the preview
   * @default true
   */
  showBorder?: boolean;
  /**
   * Background style for the preview area
   * @default "default"
   */
  background?: "default" | "dots" | "grid" | "none";
}

export function ComponentPreview({
  children,
  code,
  language = "tsx",
  className,
  showCopy = true,
  title,
  description,
  showBorder = true,
  background = "default",
}: ComponentPreviewProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getBackgroundPattern = () => {
    switch (background) {
      case "dots":
        return "radial-gradient(circle, hsl(var(--muted)) 1px, transparent 1px)";
      case "grid":
        return "linear-gradient(hsl(var(--muted)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--muted)) 1px, transparent 1px)";
      case "none":
        return "none";
      default:
        return "none";
    }
  };

  const getBackgroundSize = () => {
    switch (background) {
      case "dots":
        return "20px 20px";
      case "grid":
        return "20px 20px";
      default:
        return "auto";
    }
  };

  return (
    <div className={cn("w-full space-y-4", className)}>
      {/* Header */}
      {(title || description) && (
        <div className="space-y-2">
          {title && <h3 className="text-lg font-semibold">{title}</h3>}
          {description && (
            <p className="text-sm text-muted-foreground">{description}</p>
          )}
        </div>
      )}

      {/* Preview and Code Tabs */}
      <Tabs defaultValue="preview" className="w-full">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <TabsList className="grid w-fit grid-cols-2">
            <TabsTrigger value="preview" className="flex items-center gap-2">
              <Eye className="h-4 w-4" />
              <span className="hidden sm:inline">Preview</span>
            </TabsTrigger>
            <TabsTrigger value="code" className="flex items-center gap-2">
              <Code2 className="h-4 w-4" />
              <span className="hidden sm:inline">Code</span>
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="preview" className="mt-4">
          <div
            className={cn(
              "relative flex min-h-[250px] sm:min-h-[350px] w-full items-center justify-center p-4 sm:p-8 rounded-lg overflow-auto",
              showBorder && "border border-border",
              "bg-background"
            )}
            style={{
              backgroundImage: getBackgroundPattern(),
              backgroundSize: getBackgroundSize(),
            }}
          >
            {children}
          </div>
        </TabsContent>

        <TabsContent value="code" className="mt-4">
          <div className="relative rounded-lg border border-border overflow-hidden">
            {showCopy && (
              <div className="absolute top-3 right-3 z-20">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleCopy}
                  className="flex items-center gap-2"
                >
                  {copied ? (
                    <Check className="h-4 w-4 text-green-500" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                  <span className="hidden sm:inline">
                    {copied ? "Copied!" : "Copy"}
                  </span>
                </Button>
              </div>
            )}
            <CodeView code={code} language={language} showCopy={false} />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
