import { createGlobalStyle } from 'styled-components';
import media from 'styled-media-query';

const GlobalStyles = createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
  */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  html {
    font-size: 62.5%;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  * {
    box-sizing: border-box;
  }
  body {
    background: var(--body-bg);
    font-weight: 400;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";

    font-size: 1.5rem !important;
    line-height: 160%;
    ${media.greaterThan('large')`
      font-size: 1.7rem !important;
    `}
  }
  img {
    display: block;
  	max-width: 100%;
  	height: auto;
  }

  :root { 
    --gray-extra-light: #eaeaea; 
    --gray-light: #747d8d;  
    --gray: #475060;
    --gray-dark: #2e333e;

    --primary-color: #0066f9;
    --secondary-color: #2e333e;
    --thirdy-color: #001ff9;

    --body-bg: #FFFFFF; 

    --bg-light: var(--gray-extra-light);
    --bg-dark: var(--gray-dark);

    --border-light: var(--gray-light);
    --border-dark: var(--gray-dark);
    
    --link-color: var(--primary-color);
    --link-color-hover: var(--thirdy-color);

    --text-color: var(--gray);
    --text-light:var(--gray-extra-light);
    --text-dark: var(--gray-dark);

    --width-container: 1040px;

    --space: 2rem;
    --space-sm: 1rem;
    --space-lg: 3rem;

  }

  .dropdown-menu {
    font-size: 1.7rem !important;

    &:active {
      color: #fff;
    }
  }

  .dropdown-toggle {
    color: var(--text-light) !important;
  }

  .dropdown-menu {
    background-color: #112 !important;
  }

  .dropdown-item:hover {
    background-color: #4b4d5e !important;
  }

  .dropdown-item.active {
    background-color: inherit !important;
  }
`;
export default GlobalStyles;
