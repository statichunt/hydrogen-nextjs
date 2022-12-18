import Card from "@layouts/components/Card";

const Posts = ({ posts }) => {
  return (
    <div className="row">
      {posts.map((post, i) => (
        <Card className="col-12 mb-6 sm:col-6" key={"key-" + i} post={post} />
      ))}
    </div>
  );
};

export default Posts;
