import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import React, { useRef } from 'react';
import { Button, Highlight } from '../button';
import Commandmenu from '../command-menu';
import { LogoLightIllustration } from '../illustration/logo-light';
import { ZapIllustration } from '../illustration/zap';
import { KeyboardShortcuts } from '../keyboardIllustration';

const UnlikeAnyTool = () => {
  return (
    <div className="text-white">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-3">
          Unlike any tool you have used before
        </h2>
        <p className="text-md text-gray-11">
          Designed to the last pixel and engineered with unforgiving <br />
          precision , liner combine Ui eleganece with world-class performance
        </p>
      </div>

      <div className="h-[48rem]  overflow-hidden md:h-full   ">
        <div className="flex pb-6 snap-x snap-mandatory overflow-x-auto md:overflow-hidden md:flex-wrap   gap-4  ">
          <div className="relative shrink-0 px-8  snap-center  min-h-[48rem]  flex flex-col justify-end border rounded-[48px]  border-transparent-white  p-12 bg-glass-gradient  w-full  md:max-w-[calc(66.66%-16px)] md:basis-[calc(66.66%-16px)]">
            <KeyboardShortcuts />
            <p className=" text-3xl">Build for your keyboard</p>
            <p className="text-md">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Aspernatur, reiciendis.
            </p>
          </div>

          <div className="  border snap-center    shrink-0 items-cente snap-centerr min-h-[48rem]  flex flex-col justify-end relative rounded-[48px]  border-transparent-white  p-12 bg-glass-gradient  w-full  md:basis-[calc(33.33%-16px)]">
            <div className="mask-linear-faded absolute top-[-9.2rem]">
              <ZapIllustration />
            </div>
            <p className=" text-3xl">Build for your keyboard</p>
            <p className="text-md">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Aspernatur, reiciendis.
            </p>
          </div>
          <div className="border snap-center  shrink-0 group relative  items-cente snap-centerr min-h-[48rem]  flex flex-col justify-end rounded-[48px]  border-transparent-white  p-12 bg-glass-gradient   w-full  md:basis-[calc(33.33%-16px)]">
            <div className="absolute   width-[130%]">
              <LogoLightIllustration />
            </div>
            <Button
              className="absolute bottom-[22rem] translate-y-[30%]  scale-[0.8] opacity-0  transition-[transform,opacity] group-hover:transform-none group-hover:opacity-100"
              variant="secondary"
            >
              <Highlight>Liner method</Highlight>
              Proudct principle
              <Highlight>
                <ChevronRightIcon />
              </Highlight>
            </Button>

            <p className=" text-3xl">Build for your keyboard</p>
            <p className="text-md">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Aspernatur, reiciendis.
            </p>
          </div>

          <div className="relative border snap-center   shrink-0  min-h-[48rem]  flex flex-col justify-start  rounded-[48px]   md:max-w-[calc(66.66%-16px)] border-transparent-white  p-12 bg-glass-gradient  w-full  md:basis-[calc(66.66%-16px)]">
            <Commandmenu />
            <div className="transition-opacity md:[.opened+&]:opacity-0">
              <p className=" text-3xl">Build for your keyboard</p>
              <p className="text-md">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aspernatur, reiciendis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnlikeAnyTool;
