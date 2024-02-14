import { Plate } from '@udecode/plate-common';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';


import { Editor } from '@/components/plate-ui/editor';
import { FixedToolbar } from '@/components/plate-ui/fixed-toolbar';
import { FixedToolbarButtons } from '@/components/plate-ui/fixed-toolbar-buttons';
import { FloatingToolbar } from '@/components/plate-ui/floating-toolbar';
import { FloatingToolbarButtons } from '@/components/plate-ui/floating-toolbar-buttons';
import { TooltipProvider } from '@/components/plate-ui/tooltip';
import plugins from '../pale-plugins/Plugin';




type Props = {
    initialValue: any;
};


const PlateEditor = ({ initialValue }: Props) => {
    return (
        <TooltipProvider
            disableHoverableContent
            delayDuration={500}
            skipDelayDuration={0}
        >
            <DndProvider backend={HTML5Backend}>
                <Plate plugins={plugins} initialValue={initialValue}>
                    <FixedToolbar>
                        <FixedToolbarButtons />
                    </FixedToolbar>

                    <Editor />

                    <FloatingToolbar>
                        <FloatingToolbarButtons />
                    </FloatingToolbar>
                </Plate>
            </DndProvider>
        </TooltipProvider>
    );
}

export default PlateEditor;