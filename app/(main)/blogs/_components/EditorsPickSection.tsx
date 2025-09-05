import SectionHeader from "../../../../components/SectionHeader";
import { allBlogArticles } from "../_data/blog-articles";
import { ArticleCard } from "./ArticleCard";

export default function EditorsPickSection() {
  const editorsPickArticles = allBlogArticles.slice(0, 3);
  return (
    <div>
      <div className="flex flex-col my-16 lg:flex-row gap-5 md:gap-0 justify-between w-full max-w-[1200px] mx-auto px-4">
        <div className="flex flex-col gap-8 max-w-[352px]">
          <SectionHeader className="w-fit">Editor’s picks</SectionHeader>
          <p className="text-3xl lg:text-4xl font-semibold font-outfit">Insights You Can’t Miss</p>
          <p className="text-base md:text-lg md:mt-5 text-muted-foreground font-inter">
            Explore handpicked articles packed with expert insights, trending topics, and valuable
            tips. These recommended reads are carefully selected to keep you informed, inspired, and
            ahead in the world of healthcare AI.
          </p>
        </div>
        <div className="space-y-8 md:space-y-10 animate-in fade-in-50 slide-in-from-bottom-4 duration-500 max-w-[744px]">
          {editorsPickArticles.map(article => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
}
