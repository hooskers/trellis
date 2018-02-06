import { css } from 'react-emotion';
import { cardBackgroundStyle } from '../../Card/styles/card';

/** Styles for list component */
export const listStyle = css`
  background-color: #d0d0d0;
  border-radius: 5px;
  box-shadow: 0px 0px 3px 1px #0000005c;
  display: flex;
  flex-direction: column;
  min-width: 15vw;
  width: 15vw;
  padding: 8px;
  margin-left: 7px;
  margin-right: 7px;
  overflow-y: auto;
  max-height: 96%;
  position: relative;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    min-width: 85vw;
    overflow-y: scroll;
  }

  .cards {
    min-height: 20px;
  }
`;

/** Styles for list title element */
export const listTitleStyle = css`
  margin-bottom: 0.25em;

  &::after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
  }

  .list-title {
    float: left;
  }

  .list-delete {
    float: right;
    cursor: pointer;
    &:hover {
      color: red;
    }
  }
`;

/** Styles for add card button */
export const newCardButtonStyle = css`
  ${cardBackgroundStyle}
  box-shadow: none;
  cursor: pointer;
  padding-left: 8px;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-right: 8px;
`;
