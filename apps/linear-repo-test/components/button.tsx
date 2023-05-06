import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import classNames from 'classnames';
import Link from 'next/link';

type ButtonBaseProps = VariantProps<typeof buttonClasses> & {
  children: React.ReactNode;
};

interface ButtonAsAnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

interface ButtonAsButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: never;
}

type IButtonProps = ButtonBaseProps &
  (ButtonAsAnchorProps | ButtonAsButtonProps);

const buttonClasses = cva('rounded-full inline-flex items-center', {
  variants: {
    variant: {
      primary: [
        'bg-primary-gradient hover:text-shadow hover:box-shadow-primary transition-[shadow, text-shadow]',
        ' [&_.hightlight]:ml-2',
      ],

      secondary: [
        'text-off-white bg-white bg-opacity-10 border border-transparent-white backdrop-filter-[12px] hover:bg-opacity-20 transistion-colors',
        '[&_.hightlight]:bg-transparent-white [&_.hightlight]:rounded-full [&_.highlight]:px-2 [&_.highlight:last-child]:ml-2 [&_.hightlight:last-child]:-mr-2 [&_.highlight:first-child]:-ml-2 [&_.highlight:first-child]:mr-2',
      ],
    },
    size: {
      small: 'text-xs px-3 h-7',
      medium: ' text-md px-4 h-8',
      large: ' text-lg px-6 h-12',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'medium',
  },
});

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => <span className={classNames('highlight', className)}> {children} </span>;

export const Button = ({ children, variant, size, ...props }: IButtonProps) => {
  const classes = buttonClasses({ variant, size, className: props.className });

  if ('href' in props && props.href != undefined) {
    return (
      <Link {...props} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button {...props} className={classes}>
      {children}
    </button>
  );
};
