import React from "react";
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
} from "@chakra-ui/react";
const Marketplace = () => {
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
            >
              <option value="option1" className="text-black bg-slate-700">
                Commercial Real Estate
              </option>
              <option value="option2"> Art </option>
              <option value="option2"> Bonds </option>
              <option value="option3">Private Equity </option>
            </Select>
            <Select
              color="black"
              className="mx-2"
              placeholder="Cities"
              borderBlock="primary"
              width={40}
            >
              <option value="option1" className="text-black bg-slate-700">
                Udaipur
              </option>
              <option value="option2"> Mumbai </option>
              <option value="option2"> Goa </option>
              <option value="option3"> Panji </option>
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
                <Tab>All</Tab>
                <Tab>Latest</Tab>
                <Tab>Upcoming</Tab>
              </TabList>
            </Tabs>
          </div>
        </div>
        <div class="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-6 gap-y-12 w-full mt-6">
          {[1, 2, 3, 4, 5, 6, 7].map((item) => (
            <AssetTile key={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Marketplace;
