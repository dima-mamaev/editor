import { withProps } from '@udecode/cn';
import { createPlugins, PlateLeaf, PlateElement } from '@udecode/plate-common';
import { createParagraphPlugin, ELEMENT_PARAGRAPH } from '@udecode/plate-paragraph';
import { createHeadingPlugin, ELEMENT_H1, ELEMENT_H2, } from '@udecode/plate-heading';
import { createBlockquotePlugin, ELEMENT_BLOCKQUOTE } from '@udecode/plate-block-quote';
import { createImagePlugin, createMediaEmbedPlugin, ELEMENT_MEDIA_EMBED } from '@udecode/plate-media';
import { createCaptionPlugin } from '@udecode/plate-caption';
import { createTablePlugin, ELEMENT_TABLE, ELEMENT_TR, ELEMENT_TD, ELEMENT_TH } from '@udecode/plate-table';
import { createBoldPlugin, MARK_BOLD, createItalicPlugin, MARK_ITALIC, createUnderlinePlugin, MARK_UNDERLINE, createStrikethroughPlugin, MARK_STRIKETHROUGH, createCodePlugin, createSubscriptPlugin, createSuperscriptPlugin, } from '@udecode/plate-basic-marks';
import { createFontColorPlugin, createFontBackgroundColorPlugin, createFontSizePlugin } from '@udecode/plate-font';
import { createAlignPlugin } from '@udecode/plate-alignment';
import { createIndentPlugin } from '@udecode/plate-indent';
import { createIndentListPlugin } from '@udecode/plate-indent-list';
import { createBlockSelectionPlugin } from '@udecode/plate-selection';
import { createComboboxPlugin } from '@udecode/plate-combobox';
import { createDndPlugin } from '@udecode/plate-dnd';
import { createExitBreakPlugin, createSoftBreakPlugin } from '@udecode/plate-break';
import { createNodeIdPlugin } from '@udecode/plate-node-id';
import { createResetNodePlugin } from '@udecode/plate-reset-node';
import { createDeletePlugin } from '@udecode/plate-select';
import { createTabbablePlugin } from '@udecode/plate-tabbable';
import { createTrailingBlockPlugin } from '@udecode/plate-trailing-block';


import { BlockquoteElement } from '@/components/plate-ui/Blockquote/blockquote-element';
import { HeadingElement } from '@/components/plate-ui/Heading/heading-element';
import { MediaEmbedElement } from '@/components/plate-ui/Embed/media-embed-element';
import { ParagraphElement } from '@/components/plate-ui/Paragraph/paragraph-element';
import { TableElement } from '@/components/plate-ui/Table/table-element';
import { TableRowElement } from '@/components/plate-ui/Table/table-row-element';
import { TableCellElement, TableCellHeaderElement } from '@/components/plate-ui/Table/table-cell-element';

import { withPlaceholders } from '@/components/plate-ui/Utils/placeholder';
import { withDraggables } from "../plate-ui/DnD/with-draggables";
import { ELEMENT_LI, ELEMENT_OL, ELEMENT_UL } from '@udecode/plate-list';
import { ListElement } from '../plate-ui/List/list-element';
import { autoformatPlugin } from './autoformat/autoformatPlugin';
import { createAutoformatPlugin } from '@udecode/plate-autoformat';

const plugins = createPlugins(
    [
        createAutoformatPlugin(autoformatPlugin),
        createParagraphPlugin(),
        createHeadingPlugin(),
        createBlockquotePlugin(),
        createImagePlugin(),
        createMediaEmbedPlugin(),
        createCaptionPlugin({
            options: {
                pluginKeys: [
                    // ELEMENT_IMAGE, ELEMENT_MEDIA_EMBED
                ]
            },
        }),
        createTablePlugin(),
        createBoldPlugin(),
        createItalicPlugin(),
        createUnderlinePlugin(),
        createStrikethroughPlugin(),
        createCodePlugin(),
        createSubscriptPlugin(),
        createSuperscriptPlugin(),
        createFontColorPlugin(),
        createFontBackgroundColorPlugin(),
        createFontSizePlugin(),
        createAlignPlugin({
            inject: {
                props: {
                    validTypes: [
                        ELEMENT_PARAGRAPH,
                        ELEMENT_H1,
                        ELEMENT_H2,
                        ELEMENT_BLOCKQUOTE,
                    ],
                },
            },
        }),
        createIndentPlugin({
            inject: {
                props: {
                    validTypes: [
                        ELEMENT_PARAGRAPH,
                        ELEMENT_H1,
                        ELEMENT_H2,
                        ELEMENT_BLOCKQUOTE,
                    ],
                },
            },
        }),
        createIndentListPlugin({
            inject: {
                props: {
                    validTypes: [
                        ELEMENT_PARAGRAPH,
                        ELEMENT_H1,
                        ELEMENT_H2,
                        ELEMENT_BLOCKQUOTE,
                    ],
                },
            },
        }),
        createBlockSelectionPlugin({
            options: {
                sizes: {
                    top: 0,
                    bottom: 0,
                },
            },
        }),
        createComboboxPlugin(),
        createDndPlugin({
            options: { enableScroller: true },
        }),
        createExitBreakPlugin({
            options: {
                rules: [
                    {
                        hotkey: 'mod+enter',
                    },
                    {
                        hotkey: 'mod+shift+enter',
                        before: true,
                    },
                    {
                        hotkey: 'enter',
                        query: {
                            start: true,
                            end: true,
                            // allow: KEYS_HEADING,
                        },
                        relative: true,
                        level: 1,
                    },
                ],
            },
        }),
        createNodeIdPlugin(),
        createResetNodePlugin({
            options: {
                rules: [
                    // Usage: https://platejs.org/docs/reset-node
                ],
            },
        }),
        createDeletePlugin(),
        createSoftBreakPlugin({
            options: {
                rules: [
                    { hotkey: 'shift+enter' },
                    {
                        hotkey: 'enter',
                        query: {
                            allow: [
                                // ELEMENT_CODE_BLOCK, ELEMENT_BLOCKQUOTE, ELEMENT_TD
                            ],
                        },
                    },
                ],
            },
        }),
        createTabbablePlugin(),
        createTrailingBlockPlugin({
            options: { type: ELEMENT_PARAGRAPH },
        }),
    ],
    {
        components: withDraggables(withPlaceholders({
            // Text Elements
            [ELEMENT_PARAGRAPH]: ParagraphElement,
            [ELEMENT_BLOCKQUOTE]: BlockquoteElement,
            [ELEMENT_H1]: withProps(HeadingElement, { variant: 'h1' }),
            [ELEMENT_H2]: withProps(HeadingElement, { variant: 'h2' }),
            // List Elements
            [ELEMENT_LI]: withProps(PlateElement, { as: 'li' }),
            [ELEMENT_UL]: withProps(ListElement, { variant: 'ul' }),
            [ELEMENT_OL]: withProps(ListElement, { variant: 'ol' }),
            // Media Embed Elements
            [ELEMENT_MEDIA_EMBED]: MediaEmbedElement,
            // Table Elements
            [ELEMENT_TABLE]: TableElement,
            [ELEMENT_TR]: TableRowElement,
            [ELEMENT_TD]: TableCellElement,
            [ELEMENT_TH]: TableCellHeaderElement,
            // Marks
            [MARK_BOLD]: withProps(PlateLeaf, { as: 'strong' }),
            [MARK_ITALIC]: withProps(PlateLeaf, { as: 'em' }),
            [MARK_STRIKETHROUGH]: withProps(PlateLeaf, { as: 's' }),
            [MARK_UNDERLINE]: withProps(PlateLeaf, { as: 'u' }),
        })),
    }
);


export default plugins;