import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import * as themes from "react-syntax-highlighter/dist/esm/styles/prism";
const HighlightedCode = ({ children, theme }) => {
  return (
    <SyntaxHighlighter language="javascript" style={themes[theme]}>
      {children}
    </SyntaxHighlighter>
  );
};

export default HighlightedCode;
