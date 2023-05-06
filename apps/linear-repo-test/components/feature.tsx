import classNames from 'classnames';
import React from 'react';
import { InView, useInView } from 'react-intersection-observer';
import { Container } from './container';

type FeatureProps = {
  children: React.ReactNode;
};

type IMainFeatureProps = {
  title: React.ReactNode;
  image: string;
  text: string;
};

export const Feature = ({ children }: FeatureProps) => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: false });
  return (
    <section
      ref={ref}
      className={classNames(
        'before:absolute before:h-[40rem] before:inset-0 flex flex-col w-full  before:bg-[conic-gradient(from_90deg_at_80%_50%,#000212,rgb(var(--feature-color-dark))),conic-gradient(from_270deg_at_20%_50%,rgb(var(--feature-color-dark)),#000212)]  relative  before:bg-no-repeat after:bg-[radial-gradient(ellipse_100%_40%_at_50%_60%,rgba(var(--feature-color),0.2),transparent)] after:absolute after:inset-0 before:transition-[transform, opacity] before:duration-1000 before:ease-in before:[mask:radial-gradient(100%_50%_at_center_center,_black,_transparent)]  before:[background-size:50%_100%] before:[background-position:1%_0%,99%_0%]',
        inView &&
          'is_visible before:opacity-100 before:[transform:rotate(180deg)_scale(2)] ',
        !inView && 'before:rotate-180 before:opacity-40'
      )}
      style={
        {
          '--feature-color': '194,97,254',
          '--feature-color-dark': '53,42,97',
        } as React.CSSProperties
      }
    >
      <div className="mt-[12.8rem] mb-16 w-full md:mt-[25.2rem] md:mb-[12.8rem]">
        {children}
      </div>
    </section>
  );
};

export interface IFeatureGrid {
  features: {
    title: string;
    text: string;
  }[];
}

const FeatureGrid = ({ features }: IFeatureGrid) => {
  return (
    <Container className="my-5 ">
      <div className="mb-16 grid w-full grid-cols-2 place-items-center gap-y-3 text-sm text-primary-text md:mb-[14rem] md:grid-cols-3 md:text-md">
        {features.map((feature, id) => {
          return (
            <div key={id} className="flex [&_p]:mr-2  aspect-[1.1/1]">
              <p>{feature.text}</p>
              <p className={classNames('max-w-[31rem]')}>{feature.title}</p>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

const FeatureCard = ({ features }: IFeatureGrid) => {
  return (
    <Container>
      <div className="grid grid-cols-2 gap-3">
        {features.map((feat, id) => {
          return (
            <div
              key={id}
              className=" h-[28rem] border border-transparent-white rounded-md p-5 bg-[linear-gradient(rgba(255,_255,_255,_0.5),_rgba(32,_23,_32,_0.8))] "
            >
              <p> {feat.text}</p>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

const MainFeature = ({ title, image, text }: IMainFeatureProps) => {
  return (
    <>
      <div className="  text-center mt-5 flex  flex-col space-y-9 justify-center">
        <h2 className="text-6xl">{title}</h2>
        <div
          className={classNames(` relative z-10 before:absolute  before:rounded-md backdrop-blur-md before:inset-0 before:bg-[linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0)_120%)] before:p-[1px] 
        before:[mask:linear-gradient(black,_black)_content-box_content-box,_linear-gradient(black,_black)] before:[mask-composite:xor] after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit] after:bg-[rgba(255,_255,_255,_0.15)] after:[mask:linear-gradient(black,transparent)]
        `)}
        >
          {/* <img src="/tableimg.jpeg" alt="noimage" className="  w-full" /> */}
        </div>

        <div>
          <p className="text-2xl text-gray">{text}</p>
        </div>
      </div>
    </>
  );
};

Feature.Main = MainFeature;
Feature.Grid = FeatureGrid;
Feature.Card = FeatureCard;
