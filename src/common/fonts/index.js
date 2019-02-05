import {
    css
} from '@emotion/core';

import Lazer84ttf from './Lazer84.ttf';
import Lazer84woff from './Lazer84.woff';
import Lazer84woff2 from './Lazer84.woff2';

export const mixinFontFaceLazer84 = css `
    @font-face {
        font-family: 'Lazer84';
        src: url(${Lazer84ttf}) format('woff2'), /* Super Modern Browsers */
            url(${Lazer84woff}) format('woff'), /* Pretty Modern Browsers */
            url(${Lazer84woff2})  format('truetype'); /* Safari, Android, iOS */
    }
`;