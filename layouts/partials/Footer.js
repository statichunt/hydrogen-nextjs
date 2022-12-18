import config from "@config/config.json";
import { markdownify } from "@lib/utils/textConverter";

const Footer = () => {
  const { copyright } = config.params;
  return (
    <footer className="pt-16 pb-16">
      <div className="container text-center">
        {/* copyright */}
        {markdownify(copyright, "p", "text-text")}
      </div>
    </footer>
  );
};

export default Footer;
