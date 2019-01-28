import React from 'react';
import { configure, addDecorator } from '@storybook/react';

import { ThemeProvider } from 'styled-components';
import theme from '../src/common/theme';

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /.stories.jsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

const StyledComponentsThemeDecorator = (storyFn) =>
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>

addDecorator(StyledComponentsThemeDecorator);

configure(loadStories, module);
