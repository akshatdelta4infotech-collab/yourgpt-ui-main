"use client";

import { Eye, Code2, Maximize } from "lucide-react";

interface PreviewCodeHeaderProps {
  activeTab: "preview" | "code";
  setActiveTab: (tab: "preview" | "code") => void;
}

const PreviewCodeHeader = ({
  activeTab,
  setActiveTab,
}: PreviewCodeHeaderProps) => {
  return (
    <header className="relative w-full">
      {/* Container for lines */}
      <div className="absolute inset-x-0 h-full">
        {/* Top line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-border"></div>
        {/* Bottom line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-border"></div>
      </div>

      {/* Content container with max width */}
      <div className="max-w-[1400px] mx-auto relative">
        {/* Header content - aligned with vertical lines */}
        <div className="relative flex items-center min-h-[48px] ">
          <div className="flex items-center space-x-0">
            {/* Preview Button */}
            <button
              onClick={() => setActiveTab("preview")}
              className={`flex items-center space-x-2 px-4 py-2 text-sm font-medium rounded-md ${
                activeTab === "preview"
                  ? "bg-secondary text-secondary-foreground"
                  : "text-muted-foreground"
              }`}
            >
              <Eye className="w-4 h-4" />
              <span>Preview</span>
            </button>

            {/* Code Button */}
            <button
              onClick={() => setActiveTab("code")}
              className={`flex items-center space-x-2 px-4 py-2 text-sm font-medium rounded-md ${
                activeTab === "code"
                  ? "bg-secondary text-secondary-foreground"
                  : "text-muted-foreground"
              }`}
            >
              <Code2 className="w-4 h-4" />
              <span>Code</span>
            </button>

            {/* Divider */}
            <span className="w-px h-6 bg-border mx-2"></span>

            {/* Zoom */}
            <button className="ml-2 p-2 rounded-md hover:bg-muted hover:text-foreground transition-colors duration-200 cursor-pointer">
              <Maximize className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default PreviewCodeHeader;
