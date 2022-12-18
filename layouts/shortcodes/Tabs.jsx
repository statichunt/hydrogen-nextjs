import { useEffect, useRef } from "react";

function Tabs({ children }) {
  //select tabItems
  const tabItemsRef = useRef(null);

  //change tab item  on  click
  const handleChangTab = (event, index) => {
    const tabLinks = [...event.currentTarget.parentElement.children];
    const items = [...tabItemsRef.current.children];
    const activeItem = items.find((item) => !item.classList.contains("hidden"));
    const activeTabLink = tabLinks.find((item) =>
      item.classList.contains("active")
    );
    if (activeItem === items[index]) return;
    activeTabLink.classList.remove("active");
    event.currentTarget.classList.add("active");
    activeItem.classList.add("hidden");
    items[index].classList.remove("hidden");
  };

  //show first tab-item
  useEffect(() => {
    let allItems = [...tabItemsRef.current.children];
    allItems[0].classList.remove("hidden");
  }, []);

  return (
    <div className="relative">
      <ul className="mb-0 flex list-none items-center space-x-4 pl-0">
        {children.map((item, index) => (
          <li
            key={index}
            className={`tab-link m-0 cursor-pointer rounded px-8 py-3 text-sm ${
              index === 0 && "active"
            }`}
            onClick={(e) => handleChangTab(e, index)}
          >
            {item.props.name}
          </li>
        ))}
      </ul>
      <ul
        className="tab-items mt-1 mb-0 list-none rounded bg-[#242e38] p-6"
        ref={tabItemsRef}
      >
        {children}
      </ul>
    </div>
  );
}

export default Tabs;
