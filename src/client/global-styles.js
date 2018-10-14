import { injectGlobal } from 'styled-components';
import LoginBG from './assets/background.jpg';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    background: url(${LoginBG}) repeat-y top;
    background-size: 100% auto;
    height: 100vh;
    width: 100%;
    margin:0;
    padding:0;    
    text-align: center;    
  }
  body {
    font-family: 'Open Sans', sans-serif;
    color: #2a303c!important;    
    background-color:#eee;
  }
  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
 
  .content {
    margin: auto 5em;
  }

  .center {
    display: flex;
    justify-content: center;
  }

  .right {
    display: flex;
    justify-content: flex-end;
    margin: .5rem;
  }

  .right > * {
    margin: auto 1.2rem 
  }

  .ant-notification{
    text-align: left;
  }
   
`;
