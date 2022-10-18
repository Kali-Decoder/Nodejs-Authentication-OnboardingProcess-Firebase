import React from "react";

const DropDown = ({ item }) => {
  return (
    <>
      <div className=" inline-block text-left w-full">
        <div
          className=" right-0  mt-0 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabindex="-1"
        >
          <div className="py-1" role="none">
            <a
              href="#"
              className="text-gray-700 flex justify-between px-4 py-2 text-sm"
              role="menuitem"
              tabindex="-1"
              id="menu-item-2"
            >
              Category
              <span className="font-bold">{item.category}</span>
            </a>
            <a
              href="#"
              className="text-gray-700  px-4 py-2 text-sm flex justify-between"
              role="menuitem"
              tabindex="-1"
              id="menu-item-0"
            >
              Total Tokens
              <span className="font-bold">{item.total_tokens_released}</span>
            </a>
            <a
              href="#"
              className="text-gray-700 flex justify-between px-4 py-2 text-sm"
              role="menuitem"
              tabindex="-1"
              id="menu-item-1"
            >
              Price One Token
              <span className="font-bold">${item.price_each_token}</span>
            </a>
            <a
              href="#"
              className="text-gray-700 flex justify-between px-4 py-2 text-sm"
              role="menuitem"
              tabindex="-1"
              id="menu-item-2"
            >
              Tokens Sold
              <span className="font-bold">{item.total_tokens_sold}</span>
            </a>
            <a
              href="#"
              className="text-gray-700 flex justify-between px-4 py-2 text-sm"
              role="menuitem"
              tabindex="-1"
              id="menu-item-2"
            >
              Yield
              <span className="font-bold">{item.yield}</span>
            </a>
            <a
              href="#"
              className="text-gray-700 flex justify-between px-4 py-2 text-sm"
              role="menuitem"
              tabindex="-1"
              id="menu-item-2"
            >
              IRR
              <span className="font-bold">{item.IRR}%</span>
            </a>
            <a
              href="#"
              className="text-gray-700 flex justify-between px-4 py-2 text-sm"
              role="menuitem"
              tabindex="-1"
              id="menu-item-2"
            >
              COC
              <span className="font-bold">{item.COC}%</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default DropDown;
