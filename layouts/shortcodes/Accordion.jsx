import ImageFallback from "@layouts/components/ImageFallback";
import { useState } from "react";

const Accordion = ({ title, children, className }) => {
  const [show, setShow] = useState(false);

  return (
    <div className={`accordion border border-border rounded ${className}`}>
      <button
        className="relative block w-full bg-[#2e3b47] px-4 py-3.5 text-left text-dark"
        onClick={() => setShow(!show)}
      >
        {title}
        <ImageFallback
          className={`absolute right-4 top-1/2 m-0 -translate-y-1/2 ${
            show && "rotate-180"
          }`}
          src="/images/angle-down.svg"
          width={20}
          height={20}
          alt=""
        />
      </button>
      <div className={`px-4 py-3.5 ${!show && "hidden"}`}>{children}</div>
    </div>
  );
};

export default Accordion;
