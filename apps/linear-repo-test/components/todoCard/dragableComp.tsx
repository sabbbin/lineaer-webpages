import React, { useState } from 'react';
import classNames from 'classnames';

type dropProperties = {
  drop: () => void;
};

export default function DragableComp(props: dropProperties) {
  const { drop } = props;
  const [isVisible, setIsVisible] = useState(false);

  const showArea = () => {
    setIsVisible(true);
  };
  const showHide = () => {
    setIsVisible(false);
  };

  return (
    <div
      onDragEnter={showArea}
      onDragLeave={showHide}
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => {
        e.preventDefault();
        drop();
        showHide();
        // console.log('dropping');
      }}
      className={classNames(
        'relative h-2 transistion-[padding, opacity] before:absolute before:inset-2 before:rounded-xl before:border-2 before:border-dashed before:border-gray-600 ',
        isVisible && ' py-4 opacity-100 ',
        !isVisible && 'opacity-0'
      )}
    >
      sdf
    </div>
  );
}
