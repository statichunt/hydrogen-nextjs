import Pagination from "@components/Pagination";
import config from "@config/config.json";
import Post from "@layouts/components/Post";
import { getSinglePage } from "@lib/contentParser";
import { sortByDate } from "@lib/utils/sortFunctions";
const { blog_folder } = config.settings;

// blog pagination
const BlogPagination = ({ posts, currentPage, pagination }) => {
  const indexOfLastPost = currentPage * pagination;
  const indexOfFirstPost = indexOfLastPost - pagination;
  const totalPages = Math.ceil(posts.length / pagination);

  const currentPosts = sortByDate(
    posts.slice(indexOfFirstPost, indexOfLastPost)
  );

  return (
    <div className="section container">
      <div className="row">
        <div className="mx-auto lg:col-10">
          <div className="row">
            {currentPosts.map((post, i) => (
              <Post
                className="col-12 mb-6 sm:col-6"
                key={"key-" + i}
                post={post}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="mt-12">
        <Pagination totalPages={totalPages} currentPage={currentPage} />
      </div>
    </div>
  );
};

export default BlogPagination;

// get blog pagination slug
export const getStaticPaths = () => {
  const getAllSlug = getSinglePage(`content/${blog_folder}`);
  const allSlug = getAllSlug.map((item) => item.slug);
  const { pagination } = config.settings;
  const totalPages = Math.ceil(allSlug.length / pagination);
  let paths = [];

  for (let i = 1; i < totalPages; i++) {
    paths.push({
      params: {
        slug: (i + 1).toString(),
      },
    });
  }

  return {
    paths,
    fallback: false,
  };
};

// get blog pagination content
export const getStaticProps = async ({ params }) => {
  const currentPage = parseInt((params && params.slug) || 1);
  const { pagination } = config.settings;
  const posts = getSinglePage(`content/${blog_folder}`);

  return {
    props: {
      pagination: pagination,
      posts: posts,
      currentPage: currentPage,
    },
  };
};
