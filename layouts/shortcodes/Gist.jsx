function Gist({ src }) {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.rawgit.com/lonekorean/gist-syntax-themes/d49b91b3/stylesheets/cobalt.css"
      />
      <script
        type="application/javascript"
        src={`https://gist.github.com/${src}.js`}
      />
    </>
  );
}

export default Gist;
