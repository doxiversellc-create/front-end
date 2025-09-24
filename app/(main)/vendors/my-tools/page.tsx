import MyToolsList from "@/app/(main)/vendors/my-tools/_components/MyToolsList";

interface MyToolsPageProps {
  searchParams: Promise<{ page: string }>;
}

const MyToolsPage = async ({ searchParams }: MyToolsPageProps) => {
  const { page } = await searchParams;
  return (
    <div>
      <MyToolsList page={page} />
    </div>
  );
};

export default MyToolsPage;
