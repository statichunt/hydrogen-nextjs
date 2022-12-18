import config from "@config/config.json";
import { markdownify } from "@lib/utils/textConverter";
import { MDXRemote } from "next-mdx-remote";
import shortcodes from "./shortcodes/all";

const Contact = ({ data }) => {
  const { frontmatter, mdxContent } = data;
  const { title } = frontmatter;
  const { contact_form_action } = config.params;
  return (
    <section className="section pt-[72px]">
      <div className="container">
        <div className="row">
          <div className="mx-auto lg:col-8">
            <div className="content">
              {<MDXRemote {...mdxContent} components={shortcodes} />}
            </div>
            <div className="mt-12 pt-12">
              {markdownify(title, "h3", "h5 font-normal text-3xl")}
              <form className="contact-form mt-6" action={contact_form_action}>
                <div className="row mb-6">
                  <div className="md:col-6">
                    <label className="mb-2 block" htmlFor="name">
                      Name
                    </label>
                    <input
                      className="form-input w-full"
                      name="name"
                      type="text"
                      placeholder="Alex Smith"
                      required
                    />
                  </div>
                  <div className="mt-6 md:mt-0 md:col-6">
                    <label className="mb-2 block" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="form-input w-full"
                      name="email"
                      type="email"
                      placeholder="hello@gmail.com"
                      required
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label className="mb-2 block" htmlFor="subject">
                    Subject
                  </label>
                  <input
                    className="form-input w-full"
                    name="subject"
                    type="text"
                    placeholder="Reasons for contact"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label className="mb-2 block" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    className="form-textarea w-full"
                    rows="6"
                    placeholder="Your message"
                  />
                </div>
                <button className="btn btn-primary rounded text-sm">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
