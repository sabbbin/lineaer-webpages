import React from 'react';
import classnames from 'classnames';

export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={classnames('max-w-[120rem] mx-auto px-8', className)}>
      {children}
    </div>
  );
};
