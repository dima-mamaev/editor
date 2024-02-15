import { Plate } from '@udecode/plate-common';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';


import { Editor } from '@/components/plate-ui/Editor/editor';
import { FloatingToolbar } from '@/components/plate-ui/Toolbars/FloatingToolbar/floating-toolbar';
import { FloatingToolbarButtons } from '@/components/plate-ui/Toolbars/FloatingToolbar/floating-toolbar-buttons';
import { TooltipProvider } from '../plate-ui/ToolTip/tooltip';
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
                <Plate plugins={plugins} initialValue={initialValue} onChange={v => console.log("State editor change", v)}>
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