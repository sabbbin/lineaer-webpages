import { ChevronUpIcon } from '@radix-ui/react-icons';
import classNames from 'classnames';
import React from 'react';
import { Button, Highlight } from '../components/button';
import { Container } from '../components/container';
import { Hero, HeroSubTitle, HeroTitle } from '../components/hero';
import EnjoyIssueTracking from '../components/sections/enjoy-issue-tracking';
import UnlikeAnyTool from '../components/sections/unlikeAnyTool';
import Client from './client';
import { HeroImage } from './heroImage';

export default function test() {
  return (
    <div>
      <Container>
        <Hero>
          <HeroTitle>Linear is a better way to build product</HeroTitle>
          <HeroSubTitle>
            Meet the new standard for modern software
            <br
              className="hidden md:block
             "
            />
            development Streamine issues, sprints adn product roadmaps
          </HeroSubTitle>
        </Hero>

        <Button className="animate-fade-in   [--animation-delay:600ms]">
          <span>Get Started</span>
          <Highlight>
            <ChevronUpIcon />
          </Highlight>
        </Button>
        <HeroImage />

        <Client />
        <div
          // className={classNames(
          //   'mask-radial-faded pointer-events-none relative z-[-1] my-[-12.8rem] h-[60rem] overflow-hidden',
          //   '[--color:#7877C6] before:absolute before:inset-3 before:bg-radial-faded before:opacity-[0.4]',
          //   'after:absolute after:top-1/2 after:-left-1/2 after:h-[100.8%] after:w-[200%] after:rounded-[50%] after:border-t after:border-[rgba(120,_119,_198,_0.4)] after:bg-background'
          // )}
          className="relative mask-radial-faded z-[-1] overflow-hidden my-[-12rem] h-[60rem]
           before:w-full before:opacity-[0.4]
            before:bg-radial-faded  before:absolute  before:inset-0 after:border after:border-b-gray-11 w-full  after:rounded-[50%] after:absolute after:bg-gray-1 after:top-1/2  after:w-[200%]  after:h-[100%] after:-left-1/2"
        ></div>
        <UnlikeAnyTool />
        <EnjoyIssueTracking />
        {/* <BuildMomentum />
           <SetDirection />  */}
      </Container>
    </div>
  );
}
