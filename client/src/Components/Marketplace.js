import React, { useContext } from "react";
import AssetTile from "./AssetTile";
import {
  Select,
  Tabs,
  TabList,
  Tab,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Box,
  Spinner,
} from "@chakra-ui/react";
import { CreateContext } from "../utils/CreateContext";
const Marketplace = () => {
  const {
    marketData,
    marketLoader,
    getMarketAllData,
    getMarketDataByCity,
    getMarketDataByCategory,
  } = useContext(CreateContext);
  return (
    <>
      <div className="flex w-full p-5 flex-col">
        <div className="flex justify-between">
          <div className="flex">
            <Select
              color="black"
              placeholder="Assets Category"
              borderBlock="primary"
              width={60}
              onChange={(e) => getMarketDataByCategory(e.target.value)}
            >
              <option
                value="Commercial Real Estate"
                className="text-black bg-slate-700"
              >
                Commercial Real Estate
              </option>
              <option value="Art"> Art </option>
              <option value="Bonds"> Bonds </option>
              <option value="Private Equity">Private Equity </option>
            </Select>
            <Select
              color="black"
              className="mx-2"
              placeholder="Cities"
              borderBlock="primary"
              width={40}
              onChange={(e) => getMarketDataByCity(e.target.value)}
            >
              <option value="Udaipur" className="text-black bg-slate-700">
                Udaipur
              </option>
              <option value="Mumbai"> Mumbai </option>
              <option value="Goa"> Goa </option>
              <option value="Panji"> Panji </option>
            </Select>
          </div>
          {/* <div className="w-1/2">
            <Slider aria-label="slider-ex-4" className=" w-1/2" defaultValue={30}>
              <SliderTrack bg="red.100">
                <SliderFilledTrack bg="tomato" />
              </SliderTrack>
              <SliderThumb boxSize={6}>
                <Box color="tomato" />
              </SliderThumb>
            </Slider>
          </div> */}
          <div className="flex">
            <Tabs variant="line" colorScheme="green" color="black">
              <TabList>
                <Tab onClick={getMarketAllData}>All</Tab>
                <Tab>Latest</Tab>
                <Tab>Upcoming</Tab>
              </TabList>
            </Tabs>
          </div>
        </div>
        <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-6 gap-y-12 w-full mt-6">
          {marketLoader ? (
            <Spinner />
          ) : (
            marketData.map((item, i) => <AssetTile key={i} item={item} />)
          )}
        </div>
      </div>
    </>
  );
};

export default Marketplace;
