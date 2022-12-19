function Video({ title, width = 500, height = "auto", src, ...rest }) {
  return (
    <video className="rounded overflow-hidden" width={width} height={height} controls {...rest}>
      <source src={src.match(/^https?:/) ? src : `/videos/${src}`} type="video/mp4" />
      {title}
    </video>
  );
}

export default Video;
