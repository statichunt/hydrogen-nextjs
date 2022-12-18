import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

function Youtube({ id, title, ...rest }) {
  return <LiteYouTubeEmbed id={id} title={title} />;
}

export default Youtube;
