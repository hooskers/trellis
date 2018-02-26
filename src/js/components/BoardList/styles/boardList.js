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
  background-color:silver;
  background-image: 
  radial-gradient(circle at 100% 150%, silver 24%, white 25%, white 28%, silver 29%, silver 36%, white 36%, white 40%, transparent 40%, transparent),
  radial-gradient(circle at 0    150%, silver 24%, white 25%, white 28%, silver 29%, silver 36%, white 36%, white 40%, transparent 40%, transparent),
  radial-gradient(circle at 50%  100%, white 10%, silver 11%, silver 23%, white 24%, white 30%, silver 31%, silver 43%, white 44%, white 50%, silver 51%, silver 63%, white 64%, white 71%, transparent 71%, transparent),
  radial-gradient(circle at 100% 50%, white 5%, silver 6%, silver 15%, white 16%, white 20%, silver 21%, silver 30%, white 31%, white 35%, silver 36%, silver 45%, white 46%, white 49%, transparent 50%, transparent),
  radial-gradient(circle at 0    50%, white 5%, silver 6%, silver 15%, white 16%, white 20%, silver 21%, silver 30%, white 31%, white 35%, silver 36%, silver 45%, white 46%, white 49%, transparent 50%, transparent);
  background-size:100px 50px;

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
    padding-left: 20px;
    padding-top: 10px;
  }

  a, a:visited {
    text-decoration: none;
    font-size: 2em;
    color: inherit;
  }
`;

export { boardListStyle, boardWithBackgroundStyle };
