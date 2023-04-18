import { createContext, useContext } from "react";
import posts from "../.json/posts.json";

const HeaderContext = createContext();
export const TaxonomySlugProvider = ({ children }) => {
  const categories = [
    ...new Set(
      posts.reduce((acc, post) => [...acc, ...post.frontmatter.categories], [])
    ),
  ].map((item) => ({
    name: item.replace(/-/g, " "), 
    url: `/categories/${item.toLowerCase().replace(/\s+/g, '-')}`,
  }));
  return (
    <HeaderContext.Provider value={{ categories }}>
      {children}
    </HeaderContext.Provider>
  );
};
export const useHeaderContext = () => {
  return useContext(HeaderContext);
};
