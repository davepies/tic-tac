import styled from '@emotion/styled';
import { darken } from 'polished';

const boardContainerBgColor = ({ theme }) =>
    darken(.6, theme.colors.secondary);

export const BoardContainer = styled.div`
    background: ${boardContainerBgColor};
    border-right: .4em solid ${boardContainerBgColor};
    border-bottom: .4em solid ${boardContainerBgColor};
`;

export const BoardRow = styled.div`
    display: flex;
`;