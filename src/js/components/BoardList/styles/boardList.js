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

  .board {

  }
`;

const boardWithBackgroundStyle = bg => css`
  ${bg}

  width: 100%;
  height: 10em;
  margin-bottom: 1.5em;
  color: black;
  z-index: 1;

  .board-info-container {
    @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
      background: #fffd;
    }

    box-sizing: border-box;
    width: 100%;
    height: 100%;
    background: #fff9;
    background: linear-gradient(to right, rgba(255,255,255,1) 10%,rgba(255,255,255,0) 100%);
    font-size: 2em;
    text-shadow: 0px 0px 1px #fff5;
  }

  .background-picker {
    height: 100%;
    width: 125px;
    overflow: auto;
    display: inline-block;
    float: left;
    margin-right: 7px;
  }

  .board-link, .board-link:visited {
    text-decoration: none;
    color: inherit;
    width: calc(100% - 132px);
    height: 100%;
    display: inline-block;
  }

  .delete-board {
    margin-left: 7px;

    &:hover {
      cursor: pointer;
      color: red;
    }
  }
`;

export { boardListStyle, boardWithBackgroundStyle };
