import { css } from 'emotion';

const boardListStyle = css`
  height: 100%;
  background-color: #5e35b1;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  
  #header {
    width: 100%;
    align-self: flex-start;
    padding: 10px 0px 5px 0px;
    font-size: 2em;
    border-bottom: 1px solid #ffffff33;
    color: white;
    margin-bottom: 2em;
    
    a, a:visited {
      color: inherit;
    }
    
    #site-title {
      padding-left: 10px;
    }
    
    #header-links {
      float: right;
      padding-right: 10px;
    }
  }

  #get-started-msg {
    font-size: 2em;
  }

  #new-board-form {
    margin-bottom: 2em;

    #new-board-input {
      background: #0000;
      border: none;
      border-bottom: 1px solid white;
      font-size: 2.5em;
      margin-top: 40px;
      margin-bottom: 40px;
      text-align: center;
      color: white;
      vertical-align: middle;

      @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
        width: 100%;
      }

      &::placeholder {
        color: #FFFA;
        text-align: center;
      }
    }

    #new-board-submit {
      margin-left: 2em;
      margin-right: auto;
      background-color: #21ce99;
      border: none;
      border-radius: 5px;
      height: 2em;
      font-size: 1.5em;
      color: white;
      text-shadow: 0px 0px 1px #0005;
      padding-left: 15px;
      padding-right: 15px;

      @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
        margin-left: auto;
        margin-right: auto;
        display: block;
      }

      &:hover {
        background-color: #1ae9aa;
        cursor: pointer;
      }
    }
  }
`;

const boardName = css`
  font-size: 1.4em;
`;

const boardItemStyleWithBackground = bg => css`
  ${bg}

  flex-shrink: 0;
  width: 100%;
  height: 10em;
  margin-bottom: 1.5em;
  color: black;
  z-index: 1;
  box-shadow: 0px 7px 13px 3px #00000094

  .board-info-container {
    @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
      background: #fffd;
    }

    box-sizing: border-box;
    width: 100%;
    height: 100%;
    background: #fff9;
    background: linear-gradient(to right, rgba(255,255,255,1) 10%,rgba(255,255,255,0) 100%);
    font-size: 1.6em;
    text-shadow: 0px 0px 1px #fff5;
  }

  .background-picker {
    height: 100%;
    width: 10%;
    min-width: 94px;
    max-width: 133px;
    overflow: auto;
    display: inline-block;
    float: left;
    margin-right: 7px;
  }

  .board-link, .board-link:visited {
    text-decoration: none;
    color: inherit;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .board-name {
    ${boardName}
    margin: 10px 0 auto 10px;
  }

  .edit-board {
    background-color: #fff;
    border: 1px solid black;
    border-radius: 5px;
    height: 2em;
    font-size: 0.7em;
    color: black;
    text-shadow: 0px 0px 1px #0005;
    padding-left: 15px;
    padding-right: 15px;
    margin: auto 0 10px 10px;

    &:hover {
      cursor: pointer;
      color: red;
    }
  }

  .board-editor {
    .rename-board-input {
      ${boardName}
      background: #fffa;
      border: none;
      border-bottom: 1px solid black;
      padding-left: 7px;
    }
  }
`;

export { boardListStyle, boardItemStyleWithBackground };
