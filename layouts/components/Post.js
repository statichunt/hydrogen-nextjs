import config from "@config/config.json";
import { dateFormat } from "@lib/utils/dateFormat";
import Link from "next/link";
const { blog_folder } = config.settings;

const Post = ({ post, className }) => {
  return (
    <div className={className}>
      <div className="card">
        <ul className="flex items-center space-x-4">
          {post.frontmatter.categories.map((category, index) => (
            <li key={index}>
              <Link
                className="text-primary"
                href={`/categories/${category.toLowerCase()}`}
              >
                {category}
              </Link>
            </li>
          ))}
        </ul>
        <p className="my-4">{dateFormat(post.frontmatter.date)}</p>
        <h2 className="h3 mb-2 font-normal">
          <Link href={`/${blog_folder}/${post.slug}`} className="block">
            {post.frontmatter.title}
          </Link>
        </h2>
        <Link
          className="btn-link mt-7 inline-flex items-center hover:text-primary"
          href={`/${blog_folder}/${post.slug}`}
        >
          Continue Reading
          <svg
            className="ml-1"
            width="22"
            height="11"
            viewBox="0 0 16 8"
            fill="currentcolor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M15.3536 4.35355c.1952-.19526.1952-.51184.0-.7071L12.1716.464467C11.9763.269205 11.6597.269205 11.4645.464467c-.1953.195262-.1953.511845.0.707103L14.2929 4 11.4645 6.82843c-.1953.19526-.1953.51184.0.7071C11.6597 7.7308 11.9763 7.7308 12.1716 7.53553l3.182-3.18198zM-.437114e-7 4.5H15v-1H.437114e-7l-.874228e-7 1z"></path>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Post;
