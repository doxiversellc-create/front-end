import { getNewsList } from "@/actions/news.actions";
import NewsGrid from "./NewsGrid";

interface NewsGridContainerProps {
  page: string;
}
const NewsGridContainer = async ({ page }: NewsGridContainerProps) => {
  const { newsList, count } = await getNewsList({ page });
  const totalPages = count ? Math.ceil(count / 20) : 0;
  if (newsList)
    return (
      <NewsGrid newsList={newsList} currentPage={parseInt(page) || 1} totalPages={totalPages} />
    );
};

export default NewsGridContainer;
