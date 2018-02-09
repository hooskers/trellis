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

  &::before {
    content: '';
    width: 100%;
    height: 0%;
    position: absolute;
    top: 0px;
    left: 0px;
    pointer-events: none;
    /*background: linear-gradient(to bottom left, red, rgba(255,0,0,0));*/
    background: #ffc107;
    transition: all 0.33s ease-in-out;
    border-radius: 5px%;
  }

  .list-delete-confirmation {
    opacity: 0;
    transition: opacity 0.15s ease-in-out;
    pointer-events: none;

    display: grid;
    z-index: 2;
    grid-template-columns: 1fr 1fr;
    position: absolute;
    left: 0;
    width: 100%;
    top: 2em;

    .list-delete-message {
      grid-column-start: 1;
      grid-column-end: 3;
      margin-bottom: 10px;
      margin-left: auto;
      margin-right: auto;
      font-weight: bold;
    }

    button {
      width: 50%;
      margin-left: auto;
      margin-right: auto;
      border: none;
      border-radius: 3px;
      box-shadow: 1px 1px 2px 0px #00000045;
      height: 2em;
      color: white;
      cursor: pointer;
      transition: background 0.15s;
    }
    
    .list-delete-confirm {
      background: #dc3545;

      &:hover {
        background: #c82333;
      }
    }

    .list-delete-cancel {
      background: #6c757d;

      &:hover {
        background: #5a6268;
      }
    }
  }

  .cards {
    min-height: 20px;
  }
`;

export const deleteConfirmation = css`
  &::before {
    height: 100%;
  }

  .new-card-button {
    opacity: 0;
    pointer-events: none;
  }

  .cards {
    z-index: 0;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.15s ease-in-out;
  }

  .list-delete-confirmation {
    opacity: 1;
    pointer-events: auto;
  }
`;

/** Styles for list title element */
export const listTitleStyle = css`
  margin-bottom: 0.25em;

  .list-title {
    float: left;
    position: relative;
    z-index: 3;
    font-weight: bold;
  }

  .list-delete {
    float: right;
    cursor: pointer;
    position: relative;
    z-index: 3;

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
