import React from 'react';
import { cn } from '@udecode/cn';
import { PlateContent } from '@udecode/plate-common';
import { cva } from 'class-variance-authority';

import type { PlateContentProps } from '@udecode/plate-common';
import type { VariantProps } from 'class-variance-authority';

const editorVariants = cva(
  cn(
    'relative whitespace-pre-wrap break-words',
    'min-h-[300px] w-full rounded-md bg-white px-[4.5rem] py-5 text-sm ring-offset-white placeholder:text-slate-500 focus-visible:outline-none dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400',
    '[&_[data-slate-placeholder]]:text-slate-500 [&_[data-slate-placeholder]]:!opacity-100 dark:[&_[data-slate-placeholder]]:text-slate-400',
    '[&_[data-slate-placeholder]]:top-[auto_!important]',
    '[&_strong]:font-bold'
  ),
  {
    variants: {
      disabled: {
        true: 'cursor-not-allowed opacity-50',
      },
    },
  }
);

export type EditorProps = PlateContentProps &
  VariantProps<typeof editorVariants>;

const Editor = React.forwardRef<HTMLDivElement, EditorProps>(
  (
    {
      className,
      disabled,
      readOnly,

      ...props
    },
    ref
  ) => {
    return (
      <div ref={ref} className='relative w-full'>
        <PlateContent
          className={cn(
            editorVariants({
              disabled,

            }),
            className
          )}
          disableDefaultStyles
          readOnly={disabled ?? readOnly}
          aria-disabled={disabled}
          {...props}
        />
      </div>
    );
  }
);
Editor.displayName = 'Editor';

export { Editor };
