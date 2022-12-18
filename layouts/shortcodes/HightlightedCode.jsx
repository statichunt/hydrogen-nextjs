import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from "../../node_modules/react-syntax-highlighter/dist/esm/styles/prism";

const HighlightedCode = ({children}) => {
  return (
    <SyntaxHighlighter language="javascript" style={atomDark}>
      {children}
    </SyntaxHighlighter>
  );
};

export default HighlightedCode

