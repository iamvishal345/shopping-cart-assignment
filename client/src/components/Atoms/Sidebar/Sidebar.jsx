import React, { useState } from "react";
import "./styles.scss";

export const Sidebar = ({ menuList, selectedCallback }) => {
  const [selectedMenu, setSelectedMenu] = useState({
    key: "all",
    name: "All Categories",
  });
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="sidebar-container">
      <div className="mobile-dropdown">
        <p>{selectedMenu.name}</p>
        <button
          type="button"
          onClick={() => setShowMenu(!showMenu)}
          aria-label={`${showMenu ? "Hide Dropdown" : " Show Dropdown"}`}
        >
          <svg
            viewBox="0 0 140 140"
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path
                d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z"
                fill="white"
              />
            </g>
          </svg>
        </button>
      </div>
      <aside>
        <ul className={`menu-list ${showMenu ? "mobile-active" : ""}`}>
          <li className="menu-item">
            <button
              className={`${selectedMenu.key === "all" ? "active" : ""}`}
              type="button"
              onClick={() => {
                setSelectedMenu({
                  key: "all",
                  name: "All Categories",
                });
                selectedCallback("all");
              }}
            >
              All Categories
            </button>
          </li>
          {menuList.map((menu) => (
            <li className="menu-item" key={menu.id}>
              <button
                className={`${selectedMenu.key === menu.key ? "active" : ""}`}
                type="button"
                onClick={() => {
                  setSelectedMenu(menu);
                  selectedCallback(menu.id);
                }}
              >
                {menu.name}
              </button>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
};
