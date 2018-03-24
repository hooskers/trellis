import { css } from 'react-emotion';
import { cardStyle } from '../../Card/styles/card';
import cardListInputStyle from '../../../styles/inputs';

/** Styles for the form to add a new card */
const newCardFormStyle = css`
  ${cardStyle}

  grid-template-rows: 2em auto 1.5em;
  grid-template-columns: 1fr 1fr;
  grid-gap: 5px;
  
  input.new-title {
    width: 100%;
    grid-column-start: 1;
    grid-column-end: 3;

    ${cardListInputStyle}
  }

  textarea.new-description {
    width: 100%;
    grid-column-start: 1;
    grid-column-end: 3;

    ${cardListInputStyle}
    font-weight: normal;
  }

  button.new-card-submit {
    width: 100%;
    grid-column-start: 1;
    grid-column-end: 3;
  }
`;

export default newCardFormStyle;
