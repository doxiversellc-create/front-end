import { formatBlogDate } from "@/lib/utils";
import { Author } from "@/types/blogs.types";

interface WriterInfoProps {
  author: Author;
  publicationDate: string;
}
export default function WriterInfo({ author, publicationDate }: WriterInfoProps) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex flex-col gap-1">
        {author && (
          <p className="font-outfit text-lg font-medium">
            {author.first_name} {author.last_name}
          </p>
        )}
        <p className="font-inter text-muted-foreground text-sm">
          {formatBlogDate(publicationDate)}
        </p>
      </div>
    </div>
  );
}
