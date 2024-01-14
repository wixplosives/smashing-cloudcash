import { createBoard } from '@wixc3/react-board';
import { PageSubtitle } from '../../../components/page-header/page-subtitle/page-subtitle';

export default createBoard({
    name: 'PageSubtitle',
    Board: () => (
        <PageSubtitle text="Get a summary of your weekly online transactions here" />
    ),
    isSnippet: true,
});
