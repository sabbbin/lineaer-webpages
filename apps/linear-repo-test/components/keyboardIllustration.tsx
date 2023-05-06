import { useRef } from 'react';
import { Button, Highlight } from './button';
import { KeyboardIllustration } from './illustration/keyboard';

const shortcuts = [
  { text: 'open Command Line', keys: 'k' },
  { text: 'Assign issue to me', keys: 'i' },
  { text: 'Assing issue to ', keys: 'a' },
  { text: 'Change issue status', keys: 'p' },
  { text: 'Set due date', keys: 'd' },
  { text: 'open Command Line', keys: 'k' },
  { text: 'Assign issue to me', keys: 'i' },
  { text: 'Assing issue to ', keys: 'a' },
  { text: 'Change issue status', keys: 'p' },
  { text: 'Set due date', keys: 'd' },
];

export const KeyboardShortcuts = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const illustraionWrapperRef = useRef<HTMLDivElement>(null);

  const onShortCutButtonClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    keys
  ) => {
    e.preventDefault();
    if (!wrapperRef.current) return;
    wrapperRef.current.scrollTo({
      left: e.currentTarget.offsetLeft - wrapperRef.current.clientWidth / 2,
      behavior: 'smooth',
    });
    if (!illustraionWrapperRef.current) return;

    const keyArray = keys.split('');
    console.log('keyArrya,', keyArray);

    illustraionWrapperRef.current
      .querySelectorAll('.active')
      .forEach((el) => el.classList.remove('active'));

    const keyElements = keyArray.map((key) =>
      illustraionWrapperRef?.current?.querySelector(`[data-key="${key}"]`)
    );
    console.log('keyElement', keyElements);

    keyElements.forEach((element) => {
      element.classList.add('active');
    });
  };

  return (
    <>
      <div
        ref={illustraionWrapperRef}
        className="  absolute top-0 -left-12 mask-keyboard h-full w-[200%] md:relative md:left-auto md:w-full"
      >
        <KeyboardIllustration />;
      </div>
      <div className="h-[20rem] overflow-hidden">
        <div
          ref={wrapperRef}
          className="pb-7 mask-shortcutkeys snap-x snap-mandatory  gap-3 min-h-[20rem] flex overflow-hidden overflow-x-auto max-w-full"
        >
          {shortcuts.map((shortcut, i) => (
            <Button
              className="shrink-0 snap-center last:mr-[50vw] first:ml-[50vw]"
              key={i}
              onClick={(e) => onShortCutButtonClick(e, shortcut.keys)}
              variant="secondary"
            >
              <Highlight>{shortcut.keys}</Highlight>
              {shortcut.text}
            </Button>
          ))}
        </div>
      </div>
    </>
  );
};
