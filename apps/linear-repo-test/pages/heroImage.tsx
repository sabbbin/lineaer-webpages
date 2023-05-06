import classNames from 'classnames';

import { CSSProperties, useEffect, useRef, useState } from 'react';

import { useInView } from 'react-intersection-observer';

const randomNumberBetween = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

interface Line {
  id: string;
  direction: 'to top' | 'to left';
  size: number;
  duration: number;
}

export const HeroImage = () => {
  const { ref, inView } = useInView({ threshold: 0.4, triggerOnce: true });
  const [lines, setLines] = useState<Line[]>([]);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const removeLine = (id: string) => {
    setLines((prev) => prev.filter((line) => line.id !== id));
  };

  useEffect(() => {
    if (!inView) return;

    const renderLine = (timeout: number) => {
      timeoutRef.current = setTimeout(() => {
        setLines((lines) => [
          ...lines,
          {
            direction: Math.random() > 0.5 ? 'to top ' : ' to left',
            duration: randomNumberBetween(1300, 4500),
            size: randomNumberBetween(10, 30),
            id: Math.random().toString(35).substring(8),
          },
        ]);
        renderLine(randomNumberBetween(800, 2500));
      }, timeout);
    };
    renderLine(randomNumberBetween(800, 1300));

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [inView, setLines]);

  return (
    <div ref={ref} className="mt-[12.8rem] ">
      <div
        className={classNames(
          'relative rounded-lg  border border-transparent-white bg-white bg-opacity-[0.01] bg-hero-gradient',
          '[transform:rotateX(25deg)]',
          'before:absolute before:top-0 before:left-0 before:h-full before:w-full before:bg-hero-glow before:opacity-0 before:[filter:blur(120px)]',
          'before:animate-image-glow'
        )}
      >
        <div className="absolute top-0 left-0  h-full w-full block">
          <span
            className={classNames(
              'absolute top-0  h-[10px] w-[10px] bg-white',

              'left-0 h-[10px] w-[2px] animate-glow-line-horizontal'
            )}
          ></span>
        </div>
        <svg
          className={classNames(
            'absolute left-0 top-0 h-full w-full',
            '[&_path]:stroke-white [&_path]:[strokeOpacity:0.2] [&_path]:[stroke-dasharray:1] [&_path]:[stroke-dashoffset:1]',
            '[&_path]:animate-sketch-lines '
          )}
          width="100%"
          viewBox="0 0 1499 778"
          fill="none"
        >
          <path pathLength="1" d="M1500 72L220 72"></path>
          <path pathLength="1" d="M1500 128L220 128"></path>
          <path pathLength="1" d="M1500 189L220 189"></path>
          <path pathLength="1" d="M220 777L220 1"></path>
          <path pathLength="1" d="M538 777L538 128"></path>
        </svg>

        <div
          className={classNames(
            'relative z-10 transition-opacity delay-[700ms] rounded-md p-5 h-[500px] opacity-100'
          )}
        >
          Image
        </div>
      </div>
    </div>
  );
};
