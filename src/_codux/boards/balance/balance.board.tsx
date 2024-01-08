import { createBoard } from '@wixc3/react-board';
import { Balance } from '../../../components/balance/balance';

export default createBoard({
    name: '🧩 Balance',
    Board: () => <Balance />,
    environmentProps: {
        canvasWidth: 874,
    },
    isSnippet: true,
});
