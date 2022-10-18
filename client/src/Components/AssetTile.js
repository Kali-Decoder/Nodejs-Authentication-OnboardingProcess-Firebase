import React from "react";
import {
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  Stat,
} from "@chakra-ui/react";
import DropDown from "./DropDown";
const AssetTile = ({ item }) => {
  return (
    <>
      <div>
        <a
          href={`/api/singl-asset/${item.id}`}
          className="block h-64 rounded-lg shadow-lg bg-white"
        ></a>

        <div className="flex flex-col mt-2 w-full p-4">
          <div className="flex justify-between border-red-700">
            <a className="font-medium">{item.name}</a>
            <span className="text-sm  font-medium ml-1 text-indigo-500">
              <strong>{item.location}</strong>
            </span>
          </div>
          <div className="mt-2">
              <DropDown item={item} />
          </div>
        </div>
      </div>
    </>
  );
};

export default AssetTile;
