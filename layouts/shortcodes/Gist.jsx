function Gist({ src }) {
  return (
    <iframe
      width="100%"
      height="350"
      src={`data:text/html;charset=utf-8,
        <head><base target='_blank' /></head>
        <body><script src='${src}'></script>
        </body>
      `}
    />
  );
}

export default Gist;
