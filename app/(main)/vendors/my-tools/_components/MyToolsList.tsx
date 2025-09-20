import VendorToolsCard from "@/app/(main)/vendors/my-tools/_components/VendorToolsCard";

const dummyTools = [
  {
    tool_id: 1,
    tool_name: "CodeSynth AI",
    logo_url: "",
    total_bookmarks: "1450",
    total_reviews: "235",
    total_clicks: "18900",
    average_rating: "4.8",
  },
  {
    tool_id: 2,
    tool_name: "PixelPerfect",
    logo_url: "",
    total_bookmarks: "876",
    total_reviews: "102",
    total_clicks: "9543",
    average_rating: "4.5",
  },
  {
    tool_id: 3,
    tool_name: "DataWeaver",
    logo_url: "",
    total_bookmarks: "2109",
    total_reviews: "450",
    total_clicks: "32010",
    average_rating: "4.9",
  },
  {
    tool_id: 4,
    tool_name: "FlowState CRM",
    logo_url: "",
    total_bookmarks: "543",
    total_reviews: "88",
    total_clicks: "7654",
    average_rating: "4.2",
  },
  {
    tool_id: 5,
    tool_name: "InnovateHub",
    logo_url: "",
    total_bookmarks: "1124",
    total_reviews: "199",
    total_clicks: "15321",
    average_rating: "4.6",
  },
  {
    tool_id: 6,
    tool_name: "SecureKey Vault",
    logo_url: "",
    total_bookmarks: "301",
    total_reviews: "45",
    total_clicks: "4500",
    average_rating: "4.9",
  },
];

const MyToolsList = () => {
  return (
    <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {dummyTools.map(tool => (
        <div key={tool.tool_id} className="flex justify-center">
          <VendorToolsCard tool={tool} />
        </div>
      ))}
    </div>
  );
};

export default MyToolsList;
