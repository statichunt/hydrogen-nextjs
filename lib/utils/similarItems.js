// similer products
export const similerItems = (currentItem, allItems, slug) => {
  let categories = [];

  // set categories
  if (currentItem[0].frontmatter.categories.length > 0) {
    categories = currentItem[0].frontmatter.categories;
  }

  // filter by categories
  const filterByCategories = allItems.filter((item) =>
    categories.find((category) =>
      item.frontmatter.categories.includes(category)
    )
  );

  // merged after filter
  const mergedItems = [...new Set([...filterByCategories])];

  // filter by slug
  const filterBySlug = mergedItems.filter((product) => product.slug !== slug);

  return filterBySlug;
};
