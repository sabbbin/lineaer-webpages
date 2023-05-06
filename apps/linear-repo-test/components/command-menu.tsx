import { IconJarLogoIcon } from '@radix-ui/react-icons';
import classNames from 'classnames';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { Button } from './button';

const Department = [
  {
    name: 'Computer',
    icons: '',
    subMenu: [
      {
        name: 'computer lab',
        icons: '',
      },
      {
        name: 'communiction lab',
        icons: '',
      },
    ],
  },
  {
    name: 'Electrical',
    icons: '',
    subMenu: [
      {
        name: 'Electrical lab',
        icons: '',
      },
      {
        name: 'machine lab',
        icons: '',
      },
    ],
  },
] as const;
const Commandmenu = () => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const commandMenuRef = useRef<HTMLDivElement>(null);
  const [opened, setOpened] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    const toggleCommandMenu = (e: MouseEvent) => {
      if (!commandMenuRef.current) return;
      const isMenuButton =
        e.target instanceof Element &&
        e.target.classList.contains('command-menu-button');
      const clickedOutside =
        !isMenuButton && !commandMenuRef.current?.contains(e.target as Node);

      setOpened(clickedOutside ? false : true);
    };
    window.addEventListener('click', toggleCommandMenu);
    return () => {
      window.removeEventListener('click', toggleCommandMenu);
    };
  }, []);

  const onSelectSubMenu = useMemo(() => {
    const options =
      selectedOption == null ? Department : Department[selectedOption]?.subMenu;

    if (searchValue == '') {
      return options;
    }
    return [...options].filter((option) =>
      option.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    );
  }, [selectedOption, searchValue]);

  return (
    <div className={classNames(opened && 'opened')} ref={commandMenuRef}>
      <div
        className={classNames(
          `absolute p-5
          w-[90vw]  max-w-[55rem]
         rounded-lg bg-white-a08 flex space-y-2 flex-col transistion-[transform, opacity] w-[70%]d left-1/2 -translate-x-1/2 -translate-y-1/2 `,
          opened
            ? ' translate-y-[2.4rem] opacity-100'
            : ' translate-y-[12rem] opacity-60'
        )}
      >
        <p> helo this is linear test</p>
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className="outline-none h-7 px-3 rounded bg-gray"
        />

        <div className="flex flex-col space-y-2 ">
          {onSelectSubMenu.map(({ name, icons, ...menuItem }, id) => (
            <Button
              onClick={() => {
                const clickedRooItem = 'subMenu' in menuItem;
                setSelectedOption(clickedRooItem ? id : null);
                if (!clickedRooItem) {
                  setOpened(false);
                }
              }}
              key={id}
              className=" cursor-pointer command-menu-button"
            >
              {icons}
              {name}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Commandmenu;
