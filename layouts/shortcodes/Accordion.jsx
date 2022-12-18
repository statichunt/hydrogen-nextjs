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
        <svg
          className={`absolute right-4 top-1/2 m-0 -translate-y-1/2 w-4 h-4 ${
            show && "rotate-180"
          }`}
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 512.011 512.011"
          style={{ enableBackground: "new 0 0 512.011 512.011" }}
          xmlSpace="preserve"
        >
          <path
            fill="#fff"
            d="M505.755,123.592c-8.341-8.341-21.824-8.341-30.165,0L256.005,343.176L36.421,123.592c-8.341-8.341-21.824-8.341-30.165,0
          			s-8.341,21.824,0,30.165l234.667,234.667c4.16,4.16,9.621,6.251,15.083,6.251c5.462,0,10.923-2.091,15.083-6.251l234.667-234.667
          			C514.096,145.416,514.096,131.933,505.755,123.592z"
          />
        </svg>
      </button>
      <div className={`px-4 py-3.5 ${!show && "hidden"}`}>{children}</div>
    </div>
  );
};

export default Accordion;
