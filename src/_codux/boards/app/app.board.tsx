import { createBoard } from '@wixc3/react-board';
import App from '../../../app';

export default createBoard({
    name: '🍀 App',
    Board: () => <App />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1096,
        canvasMargin: {
            left: 0,
            right: 0,
            top: 1
        }
    },
});
