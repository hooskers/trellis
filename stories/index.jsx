import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import BackgroundPicker from '../src/js/components/BackgroundPicker/BackgroundPicker';

storiesOf('BackgroundPicker', module)
  .add('test', () => (
    <div
      style={{
        height: '200px',
        width: '150px',
        overflowY: 'auto',
      }}
    >
      <BackgroundPicker boardId="test" />
    </div>
  ));
