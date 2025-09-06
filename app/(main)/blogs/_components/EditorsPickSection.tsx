import SectionHeader from "../../../../components/SectionHeader";
import { allBlogArticles } from "../_data/blog-articles";

import { ArticleCard } from "./ArticleCard";

export default function EditorsPickSection() {
  const editorsPickArticles = allBlogArticles.slice(0, 3);
  return (
    <div>
      <div className="mx-auto my-16 flex w-full max-w-[1200px] flex-col justify-between gap-5 px-4 md:gap-0 lg:flex-row">
        <div className="flex max-w-[352px] flex-col gap-8">
          <SectionHeader className="w-fit">Editor’s picks</SectionHeader>
          <p className="font-outfit text-3xl font-semibold lg:text-4xl">Insights You Can’t Miss</p>
          <p className="text-muted-foreground font-inter text-base md:mt-5 md:text-lg">
            Explore handpicked articles packed with expert insights, trending topics, and valuable
            tips. These recommended reads are carefully selected to keep you informed, inspired, and
            ahead in the world of healthcare AI.
          </p>
        </div>
        <div className="animate-in fade-in-50 slide-in-from-bottom-4 max-w-[744px] space-y-8 duration-500 md:space-y-10">
          {editorsPickArticles.map(article => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
}
