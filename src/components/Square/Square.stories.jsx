import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';

import Square from '.';

storiesOf('Square', module)
  .add('Default', () => {
    const value = text('Value', 'X');
    return (
      <Square onClick={action('clicked the square')} value={value} />
    );
  });
