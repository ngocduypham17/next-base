import { createGlobalStyle } from 'styled-components';
import { TEXT_COLOR_PRIMARY, WHITE_COLOR } from './colors';

const GlobalStyles = createGlobalStyle`
    html, body {
        background-color: ${WHITE_COLOR};
        color: ${TEXT_COLOR_PRIMARY};
        font-family: 'Roboto', sans-serif !important;
        font-size: 16px;
        line-height: 1.5;
        min-height: 100vh;
        margin: auto;
    }
`;

export default GlobalStyles;