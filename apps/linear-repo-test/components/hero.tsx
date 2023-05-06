import React from 'react';

interface IHeroprops {
  children: React.ReactNode;
}

interface IHeroElProps {
  children: React.ReactNode;
}

export const Hero = ({ children }: IHeroprops) => {
  return <div className="text-center my">{children}</div>;
};

export const HeroTitle = ({ children }: IHeroElProps) => {
  return <h1 className="text-5xl my-6"> {children} </h1>;
};
export const HeroSubTitle = ({ children }: IHeroElProps) => {
  return <p className="text-md mb-12"> {children} </p>;
};
