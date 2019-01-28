import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import FancySquare from './';

storiesOf('FancySquare', module)
  .add('Front', () => <FancySquare value='X' />)
