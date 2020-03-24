import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

//write css here and pass into different components using string interpolation
// usefull for styles that are going to be used in more than one place
// const OptionContainerStyles = css`
// padding: 10px 15px;
// cursor: pointer;
// `;

//creates a style component of the element specified, this case a div.
export const HeaderContainer = styled.div`
height: 70px;
width: 100%;
display: flex;
justify-content: space-between;
margin-bottom: 25px;
`;

// If you want to style a component such Link from react-router-dom,
// pass the component in as an arg to styled and use backticks the same as making
//a component
export const LogoContainer = styled(Link)`
height: 100%;
width: 70px;
padding: 25px;
`;

export const OptionsContainer = styled.div`
width: 50%;
height: 100%;
display: flex;
align-items: center;
justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
padding: 10px 15px;
cursor: pointer;
`
//
// export const OptionDiv = styled.div`
// ${OptionContainerStyles}
// `;