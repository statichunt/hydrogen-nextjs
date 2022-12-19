import config from "@config/config.json";
import { dateFormat } from "@lib/utils/dateFormat";
import { readingTime } from "@lib/utils/readingTime";
import { similerItems } from "@lib/utils/similarItems";
import { humanize, markdownify, slugify } from "@lib/utils/textConverter";
import shortcodes from "@shortcodes/all";
import { DiscussionEmbed } from "disqus-react";
import { MDXRemote } from "next-mdx-remote";
import Image from "next/image";
import Link from "next/link";
import Base from "./Baseof";
import Post from "./components/Post";
const PostSingle = ({ post, mdxContent, slug, posts }) => {
  const { frontmatter, content } = post[0];
  let { description, title, date, image, categories } = frontmatter;
  description = description ? description : content.slice(0, 120);
  const similarPosts = similerItems(post, posts, slug);

  return (
    <Base title={title} description={description}>
      <section className="pt-20 pb-6">
        <div className="container">
          <div className="row">
            <div className="mx-auto lg:col-10">
              <Link
                className="mb-12  inline-flex items-center text-primary hover:underline"
                href="/"
              >
                <svg
                  className="mr-2"
                  width="21"
                  height="16"
                  viewBox="0 0 21 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M.292892 7.29289c-.3905235.39053-.3905235 1.02369.0 1.41422L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711 8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8 8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107.928932 7.68054.538408 7.04738.538408 6.65685.928932L.292892 7.29289zM21 7H1V9H21V7z"
                    fill="currentcolor"
                  ></path>
                </svg>
                Back to Home
              </Link>
              <article>
                {image && (
                  <Image
                    className="w-full"
                    src={image}
                    height="500"
                    width="1000"
                    alt={title}
                    priority={true}
                  />
                )}
                {markdownify(title, "h1", "h2 mt-12")}
                <ul className="mt-4 mb-8 text-text">
                  <li className="mb-2 mr-4 inline-block">
                    <ul>
                      {categories.map((category, i) => (
                        <li className="inline-block" key={`category-${i}`}>
                          <Link
                            href={`/categories/${slugify(category)}`}
                            className="mr-3 text-primary"
                          >
                            {humanize(category)}
                          </Link>
                        </li>
                      ))}
                      |
                    </ul>
                  </li>
                  <li className="mb-2 mr-4 inline-block">
                    <span className="mr-2 inline-block">
                      {dateFormat(date)}
                    </span>{" "}
                    |
                  </li>
                  <li className="mb-2 mr-4 inline-block">
                    {readingTime(content)}
                  </li>
                </ul>
                <div className="content text-left">
                  <MDXRemote {...mdxContent} components={shortcodes} />
                </div>
              </article>

              {config.disqus.enable && (
                <DiscussionEmbed
                  shortname={config.disqus.shortname}
                  config={config.disqus.settings}
                />
              )}
            </div>
          </div>

          <div className="pt-12">
            <h2 className="h2 text-center">Related Posts</h2>
            <div className="row mt-12 justify-center">
              {similarPosts.map((post, i) => (
                <Post
                  className="col-12 mb-6 md:col-4"
                  key={"key-" + i}
                  post={post}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </Base>
  );
};

export default PostSingle;
