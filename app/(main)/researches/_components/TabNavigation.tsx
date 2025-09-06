interface TabNavigationProps {
  activeTab: "recent" | "saved";
  onTabChange: (_tab: "recent" | "saved") => void;
}

export default function TabNavigation({ activeTab, onTabChange }: TabNavigationProps) {
  return (
    <div className="mb-6 flex items-center justify-center gap-8 border-b md:mb-9">
      <div className="relative flex items-center gap-6">
        <button
          onClick={() => onTabChange("recent")}
          className={`relative pb-2 font-bold transition-all duration-300 ${
            activeTab === "recent"
              ? "text-foreground"
              : "text-muted-foreground/70 hover:text-foreground"
          }`}
        >
          Most Recent
          {activeTab === "recent" && (
            <div className="bg-foreground animate-in slide-in-from-right-full absolute right-0 bottom-0 left-0 h-0.5 duration-300" />
          )}
        </button>
        <button
          onClick={() => onTabChange("saved")}
          className={`relative pb-2 font-bold transition-all duration-300 ${
            activeTab === "saved"
              ? "text-foreground"
              : "text-muted-foreground/70 hover:text-foreground"
          }`}
        >
          Saved
          {activeTab === "saved" && (
            <div className="bg-foreground animate-in slide-in-from-left-full absolute right-0 bottom-0 left-0 h-0.5 duration-300" />
          )}
        </button>
      </div>
    </div>
  );
}
