import styled from 'styled-components';

export const SignInContainer = styled.div`
    width: 380px;
    display: flex;
    flex-direction: column;
    &.title {
    margin: 10px 0;
    }

    @media screen and (max-width: 800px) {
        margin-bottom: 3rem;
    }
`;

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;