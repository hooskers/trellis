import React from 'react';
import PropTypes from 'prop-types';

import backgroundPickerPanelStyle from './styles/backgroundPicker';
import * as backgrounds from './styles/backgrounds';

const BackgroundPicker = () => {
  console.log(backgrounds);

  return (
    <div
      id="background-picker-panel"
      className={backgroundPickerPanelStyle}
    >
      {Object.entries(backgrounds).map((kv) => {
        const name = kv[0];
        const value = kv[1];

        return (
          <div
            key={name}
            className={`background-button ${value}`}
          />
        );
      })}
    </div>
  );
};

export default BackgroundPicker;
