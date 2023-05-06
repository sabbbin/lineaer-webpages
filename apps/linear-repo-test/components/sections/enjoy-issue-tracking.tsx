import React from 'react';
import { Feature } from '../feature';

const FeatureGridConst = [
  {
    text: 'text1',
    title: 'this is title one',
  },
  {
    text: 'text2',
    title: 'this is title two',
  },
  {
    text: 'text3',
    title: ' this is title three',
  },
];

const EnjoyIssueTracking = () => {
  return (
    <Feature>
      <Feature.Main
        image="noImage.png"
        text={
          ' Crate task in seconds, discuss issues in context, and breeze throught your work in views'
        }
        title={
          <>
            {' '}
            Issue Tracking <br /> youll enjoy using
          </>
        }
      ></Feature.Main>
      <div className="bg-grey-dark border-none h-[1px]"></div>
      <Feature.Grid features={FeatureGridConst}></Feature.Grid>
      <Feature.Card features={FeatureGridConst} />
    </Feature>
  );
};

export default EnjoyIssueTracking;
