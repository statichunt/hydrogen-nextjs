import config from "@config/config.json";
import Base from "@layouts/Baseof";
import ImageFallback from "@layouts/components/ImageFallback";
import Post from "@layouts/components/Post";
import Social from "@layouts/components/Social";
import { getListPage, getSinglePage } from "@lib/contentParser";
import { sortByDate } from "@lib/utils/sortFunctions";
import { markdownify } from "@lib/utils/textConverter";
const { blog_folder } = config.settings;

const Home = ({ profile, posts }) => {
  const sortPostByDate = sortByDate(posts);
  // const showPost = 4;

  return (
    <Base>
      {/* profile */}
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="mx-auto text-center lg:col-8">
              <ImageFallback
                className="mx-auto rounded-full"
                src={profile.avatar}
                width={220}
                height={220}
                priority={true}
                alt=""
              />
              {markdownify(
                profile.name,
                "h1",
                "mt-12 text-6xl lg:text-8xl font-semibold"
              )}
              {markdownify(profile.position, "p", "mt-6 text-primary text-xl")}
              {markdownify(profile.details, "p", "mt-4 leading-9 text-xl")}
              <Social
                source={profile.socials}
                className="profile-social-icons mt-8"
              />
            </div>
          </div>
        </div>
      </div>

      {/* posts */}
      <div className="pt-4">
        <div className="container">
          <div className="row">
            <div className="mx-auto lg:col-10">
              <div className="row">
                {posts.map((post, i) => (
                  <Post
                    className="col-12 mb-6 sm:col-6"
                    key={"key-" + i}
                    post={post}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Base>
  );
};

export default Home;

// for homepage data
export const getStaticProps = async () => {
  const homepage = await getListPage("content/_index.md");
  const { frontmatter } = homepage;
  const posts = getSinglePage(`content/${blog_folder}`);
  return {
    props: {
      profile: frontmatter,
      posts: posts,
    },
  };
};
