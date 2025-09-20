import MyToolsList from "@/app/(main)/vendors/my-tools/_components/MyToolsList";

interface MyToolsPageProps {
  searchParams: Promise<{ page: string }>;
}

const MyToolsPage = async ({}: MyToolsPageProps) => {
  return (
    <div>
      <MyToolsList />
    </div>
  );
};

export default MyToolsPage;
