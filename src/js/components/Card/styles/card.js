import { css } from 'react-emotion';

/** Common styles shared between the card's title and description elements */
export const cardTitleDescStyle = css`
  background-color: #0000;
  padding-top: 0.25em;
  padding-bottom: 0.25em;
  padding-left: 7px;
  padding-right: 7px;
  margin-top: 0.25em;
  margin-bottom: 0.25em;
  border-radius: 3px;
  border-left: 4px solid #0000;
  border-right: 4px solid #0000;
`;

/** Styles for card's title element */
export const titleStyle = css`
  ${cardTitleDescStyle}
  font-weight: bold;
  grid-row-start: 1;
  grid-column-start: 1;
  grid-column-end: 4;
  height: 1em;
`;

/** Styles for card's description element */
export const descriptionStyle = css`
  ${cardTitleDescStyle}
  grid-row-start: 2;
  grid-column-start: 1;
  grid-column-end: 4;
  min-height: 1em;
  max-height: 5em;
  word-wrap: break-word;
  overflow: auto;
`;

/** Styles for the card's done button */
export const doneStyle = css`
  grid-column-start: 1;
  grid-row-start: 3;
  justify-self: start;
  cursor: pointer;
  &:hover {
    color: mediumseagreen;
  }
`;

/** Styles for the card's delete button */
export const deleteStyle = css`
  grid-column-start: 3;
  grid-row-start: 3;
  justify-self: end;
  cursor: pointer;
  &:hover {
    color: red;
  }
`;

/** Styles for the background card component */
export const cardBackgroundStyle = css`
  border-radius: 5px;
  margin-top: 5px;
  margin-bottom: 5px;
  background-color: whitesmoke;
  padding: 5px;
  box-shadow: #00000061 2px 3px 7px 0px;
`;

/** Styles for the card component */
export const cardStyle = css`
  ${cardBackgroundStyle}
  position: relative;
  display: grid;
  grid-template-columns: 10fr 80fr 10fr;
  grid-template-rows: 2em auto 1em;
  flex: 1 0 auto;
  border-left: 4px solid #0000;
  border-right: 4px solid #0000;
  border-radius: 7px;

  &.done {
    border-left: 4px solid mediumseagreen;
    text-decoration: line-through;
  }
`;
