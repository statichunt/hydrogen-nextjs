import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

function Youtube({ id, title, ...rest }) {
  return <div className="rounded overflow-hidden">
    <LiteYouTubeEmbed id={id} title={title} {...rest} />
  </div>;
}

export default Youtube;
