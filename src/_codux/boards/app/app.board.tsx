import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App',
    Board: () => <App />,
    environmentProps: {
        canvasWidth: 1920,
        windowWidth: 1920,
        windowHeight: 788,
        canvasMargin: {
            top: 1,
        },
    },
    isSnippet: true,
});
