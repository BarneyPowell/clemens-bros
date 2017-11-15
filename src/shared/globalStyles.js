import { injectGlobal } from 'styled-components';

injectGlobal`
    body {
        margin: 0;
        padding: 0;
        font-family: 'Lato', sans-serif;
        background-color: #222;
        color: #eee;
    }

    section {
        overflow: auto;
    }

    p {
        line-height: 1.5em;
        margin-top: 0;
    }

    h1 {
        font-size: 2em;
        font-family: 'Quicksand', sans-serif;
    }
`;