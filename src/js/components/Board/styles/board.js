import { css } from 'react-emotion';

export const boardContainerStyle = css`
  width: 100vw;
  height: 100vh;
  overflow: scroll;
`;

export const boardHeaderStyle = css`
  display: flex;
  align-items: center;
  position: sticky;
  left: 0px;
  padding-top: 2.5px;
  padding-bottom: 2.5px;
  min-height: 40px;
  max-height: 40px;
  box-sizing: border-box;
  box-shadow: 0px 1px 7px 3px #0000001f;
  background-color: white;
`;

export const boardTitleStyle = css`
  position: sticky;
  float: left;
  left: 0;
  font-size: 2em;
  padding-left: 15px;
  
  &.new-list-form-open {
    @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
      display: none;
    }
  }
`;

export const addListBtnStyle = css`
  width: 1em;
  right: 0px;
  padding: inherit;
  font-size: 1.15em;
  cursor: pointer;
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 7px;
  padding-right: 0px;
  margin-right: 20px;
  outline: none;
  margin-left: auto;
  position: sticky;
  right: 15px;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    padding-right: 0px;
  }

  &.new-list-form-open {
    width: 33%;

    @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
      width: 100%
      padding-left: 0px;
    }
  }

  .text {
    margin-right: 8px;
    @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
      display: none;
    }
  }

  .icon {
    transition: transform 0.25s ease;
    margin: 0px !important;

    @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
      margin: auto 25px auto 25px;
    }
  }

  &.new-list-form-open {
    .icon {
      padding: 0px;
      transform: rotate(0deg);
    }

    &.new-list-form-empty {
      .icon {
        transform: rotate(135deg);
      }
    }
  }

  #new-list-form {
    float: left;
    margin-bottom: 0;
    height: 100%
    display: flex;
    font-size: 1.5em;
    padding: inherit;
    padding-left: 0px;
    margin-left: auto;
    margin-right: 0px;
    transition: visibility 0s linear 0s, width 0.25s ease;

    &.closed {
      width: 0%;
      visibility: hidden;
      transition-delay: 0.25s, 0s;
    }

    &.open {
      width: 100%;
      visibility: visible;
    }

    @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
      &.open {
        width: 100%;
      }

      margin-right: 0px;
      margin-left: auto;
    }

    input {
      font-size: 1em;
      width: 100%;
      padding-left: 7px;
      border-right: 1px solid #0000001a;
      border-bottom: none;
      border-left: 1px solid #0000001a;
      border-top: none;

      @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
        border-left: none;
      }
    }

    &.closed input {
      border: none;
    }

    &.open input {
      margin-right: 10px;
    }
  }
`;

export const listsStyle = css`
  display: inline-flex;
  padding-top: 15px;
  align-items: flex-start;
  box-sizing: border-box;
  min-height: 100%;
  min-width: 100vw;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    font-size: 1.5em;
  }
`;
