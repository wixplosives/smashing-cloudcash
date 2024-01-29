import { createBoard } from '@wixc3/react-board';
import App from '../../../app';

export default createBoard({
    name: '🍀 App',
    Board: () => <App />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1020,
        canvasMargin: {
            left: 0,
            right: 0,
            top: 1,
        },
        windowHeight: 836,
    },
});
