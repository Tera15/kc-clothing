import styled from 'styled-components';

export const SignInAndSignUpDiv = styled.div`
    width: 850px;
    display: flex;
    justify-content: space-between;
    margin: 30px auto;

    @media screen and (max-width: 800px) {
        width: 50vw;
        flex-direction: column;
        align-items: center;
    }
`;