import { css } from 'emotion';

const backgroundPickerBtnStyle = css`
  width: 30px;
  height: 30px;
  border-radius: 360px;
  border: solid 2px black;
  
  &:hover {
    cursor: pointer;
  }

  background-color:silver;
  background-image: 
  radial-gradient(circle at 100% 150%, silver 24%, white 25%, white 28%, silver 29%, silver 36%, white 36%, white 40%, transparent 40%, transparent),
  radial-gradient(circle at 0    150%, silver 24%, white 25%, white 28%, silver 29%, silver 36%, white 36%, white 40%, transparent 40%, transparent),
  radial-gradient(circle at 50%  100%, white 10%, silver 11%, silver 23%, white 24%, white 30%, silver 31%, silver 43%, white 44%, white 50%, silver 51%, silver 63%, white 64%, white 71%, transparent 71%, transparent),
  radial-gradient(circle at 100% 50%, white 5%, silver 6%, silver 15%, white 16%, white 20%, silver 21%, silver 30%, white 31%, white 35%, silver 36%, silver 45%, white 46%, white 49%, transparent 50%, transparent),
  radial-gradient(circle at 0    50%, white 5%, silver 6%, silver 15%, white 16%, white 20%, silver 21%, silver 30%, white 31%, white 35%, silver 36%, silver 45%, white 46%, white 49%, transparent 50%, transparent);
  background-size:100px 50px;

`;

const backgroundPickerPanelStyle = (x, y) => css`
  width: 300px;
  height: 400px;
  position: absolute;
  top: ${y}px;
  left: ${x}px;
  background-color: white;
`;

export { backgroundPickerBtnStyle, backgroundPickerPanelStyle };
