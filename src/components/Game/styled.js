import styled from '@emotion/styled';

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Status = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    color: ${({ theme }) => theme.colors.secondary };

    strong {
        display: inline-block;
        margin-left: .25em;
        font-size: 1.5em;
        color: ${({ theme }) => theme.colors.primary }
    }
`;

export const Info = styled.div`
    margin-left: 20px;
`;

export const ResetButton = styled.button`
    background: green;
`;