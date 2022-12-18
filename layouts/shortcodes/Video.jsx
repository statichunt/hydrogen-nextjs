function Video({ title, width = 500, height = "auto", src, ...rest }) {
  return (
    <video width={width} height={height} controls {...rest}>
      <source src={src} type="video/mp4" />
      {title}
    </video>
  );
}

export default Video;
