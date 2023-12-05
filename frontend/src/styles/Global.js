import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

/* #546e7a 0px 3px 20px 0px */


:root {
        --color-primary: rgb(95, 103, 236);
        --color-secondary: rgb(120, 139, 149);
        --color-header: rgb(17, 23, 26);
        --color-text: rgb(38, 50, 56);
        --color-gradient: linear-gradient(#6627FF 0%, #0066CC 100%);
        --bg-category: rgb(219, 221, 222);
        --shadow-article: 0px 0px 11px 0px rgb(50 50 50 / 47%);

        // font-family
        --font-primary: 'Montserrat', sans-serif; 
        --font-text:  'Merriweather', serif;
        
}

html {
        box-sizing: border-box;
        font-size: 62.5%;
    }

*, *:before, *:after {
        box-sizing: inherit;
        padding: 0;
        margin: 0;
    }

body {
        font-family: 'Montserrat', sans-serif; 
        font-size: 1.6rem;
        line-height: 2;
    }

a {
        text-decoration: none;
        
    }

a:visited {
  color: inherit;
}

input,
textarea,
select,
button {
  outline: none;
}

input {
  line-height: normal;
}

label,
button {
  cursor: pointer;
}

img {
  display: block;
  max-width: 100%;
}


`;
