import React from 'react';
import { DropdownMenuProps } from '@radix-ui/react-dropdown-menu';
import { ELEMENT_BLOCKQUOTE } from '@udecode/plate-block-quote';
import {
  focusEditor,
  insertEmptyElement,
  useEditorRef,
} from '@udecode/plate-common';
import { ELEMENT_H1, ELEMENT_H2 } from '@udecode/plate-heading';
import { ELEMENT_PARAGRAPH } from '@udecode/plate-paragraph';

import { Icons } from '@/components/icons';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  useOpenState,
} from './dropdown-menu';
import { ToolbarButton } from '../toolbar';
import { ELEMENT_MEDIA_EMBED, insertMedia } from '@udecode/plate-media';
import { ELEMENT_TABLE, insertTable } from '@udecode/plate-table';


const items = [
  {
    label: 'Basic blocks',
    items: [
      {
        value: ELEMENT_PARAGRAPH,
        label: 'Paragraph',
        description: 'Paragraph',
        icon: Icons.paragraph,
      },
      {
        value: ELEMENT_H1,
        label: 'Heading 1',
        description: 'Heading 1',
        icon: Icons.h1,
      },
      {
        value: ELEMENT_H2,
        label: 'Heading 2',
        description: 'Heading 2',
        icon: Icons.h2,
      },
      {
        value: ELEMENT_BLOCKQUOTE,
        label: 'Quote',
        description: 'Quote (⌘+⇧+.)',
        icon: Icons.blockquote,
      },
      {
        value: ELEMENT_TABLE,
        label: 'Table',
        description: 'Table',
        icon: Icons.table,
      },
      {
        value: 'ul',
        label: 'Bulleted list',
        description: 'Bulleted list',
        icon: Icons.ul,
      },
      {
        value: 'ol',
        label: 'Numbered list',
        description: 'Numbered list',
        icon: Icons.ol,
      },

    ],
  },
  {
    label: 'Media',
    items: [
      {
        value: ELEMENT_MEDIA_EMBED,
        label: 'Embed',
        description: 'Embed',
        icon: Icons.blockquote,
      },
    ],
  },
];

export function InsertDropdownMenu(props: DropdownMenuProps) {
  const editor = useEditorRef();
  const openState = useOpenState();

  return (
    <DropdownMenu modal={false} {...openState} {...props}>
      <DropdownMenuTrigger asChild>
        <ToolbarButton pressed={openState.open} tooltip='Insert' isDropdown>
          <Icons.add />
        </ToolbarButton>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align='start'
        className='flex max-h-[500px] min-w-0 flex-col gap-0.5 overflow-y-auto'
      >
        {items.map(({ items: nestedItems, label }, index) => (
          <React.Fragment key={label}>
            {index !== 0 && <DropdownMenuSeparator />}

            <DropdownMenuLabel>{label}</DropdownMenuLabel>
            {nestedItems.map(
              ({ value: type, label: itemLabel, icon: Icon }) => (
                <DropdownMenuItem
                  key={type}
                  className='min-w-[180px]'
                  onSelect={async () => {
                    switch (type) {
                      case ELEMENT_MEDIA_EMBED: {
                        await insertMedia(editor, {
                          type: ELEMENT_MEDIA_EMBED,
                        });
                        break;
                      }
                      case 'ul':
                      case 'ol': {
                        insertEmptyElement(editor, ELEMENT_PARAGRAPH, {
                          select: true,
                          nextBlock: true,
                        });
                        break;
                      }
                      case ELEMENT_TABLE: {
                        insertTable(editor);
                        break;
                      }
                      default: {
                        insertEmptyElement(editor, type, {
                          select: true,
                          nextBlock: true,
                        });
                      }
                    }

                    focusEditor(editor);
                  }}
                >
                  <Icon className='mr-2 h-5 w-5' />
                  {itemLabel}
                </DropdownMenuItem>
              )
            )}
          </React.Fragment>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
