import React from "react";
import {
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  Stat,
} from "@chakra-ui/react";
const AssetTile = ({ item }) => {
  return (
    <>
      <div>
        <a href="#" className="block h-64 rounded-lg shadow-lg bg-white"></a>
        <div className="flex flex-col border-red-500">
          <div className="flex justify-between items-center mt-3">
            <div>
              <a href="#" className="font-medium">
                {item.name}
              </a>
              <a className="flex items-center" href="#">
                <span className="text-xs font-medium text-gray-600">place</span>
                <span className="text-xs font-medium ml-1 text-indigo-500">
                  {item.location}
                </span>
              </a>
            </div>
            <div>
              <Stat>
                <StatLabel>Tokens</StatLabel>

                <StatHelpText>
                  <StatArrow type="increase" />
                  <b className="text-black">{item.total_tokens_released}</b>
                </StatHelpText>
              </Stat>
            </div>
            
          </div>
          <div className="flex justify-between mt-2">
            <Stat>
              <StatLabel>IRR</StatLabel>

              <StatHelpText>
                <StatArrow type="increase" />
                <b className="text-black">{item.IRR}%</b>
              </StatHelpText>
            </Stat>
            <Stat>
              <StatLabel>COC</StatLabel>

              <StatHelpText>
                <StatArrow type="increase" />
                <b className="text-black">{item.COC}%</b>
              </StatHelpText>
            </Stat>
            <Stat>
              <StatLabel>Price Of Token</StatLabel>

              <StatHelpText>
                <StatArrow type="increase" />
                <b className="text-black">${item.price_each_token}</b>
              </StatHelpText>
            </Stat>
          </div>
        </div>
      </div>
    </>
  );
};

export default AssetTile;
