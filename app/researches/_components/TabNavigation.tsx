interface TabNavigationProps {
  activeTab: "recent" | "saved";
  onTabChange: (_tab: "recent" | "saved") => void;
}

export default function TabNavigation({ activeTab, onTabChange }: TabNavigationProps) {
  return (
    <div className="flex items-center justify-center gap-8 mb-6 md:mb-9 border-b">
      <div className="flex items-center gap-6 relative">
        <button
          onClick={() => onTabChange("recent")}
          className={`font-bold pb-2 transition-all duration-300 relative ${
            activeTab === "recent"
              ? "text-foreground"
              : "text-muted-foreground/70 hover:text-foreground"
          }`}
        >
          Most Recent
          {activeTab === "recent" && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-foreground animate-in slide-in-from-right-full duration-300" />
          )}
        </button>
        <button
          onClick={() => onTabChange("saved")}
          className={`font-bold pb-2 transition-all duration-300 relative ${
            activeTab === "saved"
              ? "text-foreground"
              : "text-muted-foreground/70 hover:text-foreground"
          }`}
        >
          Saved
          {activeTab === "saved" && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-foreground animate-in slide-in-from-left-full duration-300" />
          )}
        </button>
      </div>
    </div>
  );
}
