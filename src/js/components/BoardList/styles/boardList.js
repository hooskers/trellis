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

  .board-info-container {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    background: #fff9;
    background: linear-gradient(to right, rgba(255,255,255,1) 10%,rgba(255,255,255,0) 100%); 
  }

  .background-picker {
    height: 100%;
    width: 100px;
    overflow: auto;
    display: inline-block;
    float: left;
  }

  a, a:visited {
    text-decoration: none;
    font-size: 2em;
    color: inherit;
  }
`;

export { boardListStyle, boardWithBackgroundStyle };
