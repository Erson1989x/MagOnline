import { FC } from 'react';
import BlogPostCard from '../BlogPostCard/BlogPostCard';


type PostGridProps = {
  posts: {
    id: number;
    title: string;
    excerpt: string;
    image: string;
    category: string;
    date: string;
    readTime: string;
  }[];
};

const PostGrid: FC<PostGridProps> = ({ posts }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 relative z-10">
      {posts.map((post, index) => (
        <BlogPostCard key={post.id} post={post} index={index} />
      ))}
    </div>
  );
};

export default PostGrid;