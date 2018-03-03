import { css } from 'emotion';

const backgroundPickerPanelStyle = css`
  display: grid;
  grid-template-columns: repeat(auto-fill, 35px);
  grid-gap: 4px;
  justify-content: space-around;
  padding: 10px;

  .background-button {
    width: 35px;
    height: 35px;
    border-radius: 360px;
    border: 2px solid black;
    box-sizing: border-box;
    cursor: pointer;
  }
`;

export default backgroundPickerPanelStyle;
