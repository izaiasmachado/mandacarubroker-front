'use client'

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%; // 1rem = 10px -> 1o/16px = 62.5% (1.4rem = 14px)
    }
`

export default GlobalStyles;