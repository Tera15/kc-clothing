import styled from 'styled-components';

export const CollectionPreviewContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;

    @media screen and (max-width: 800px) {
      align-items: center;
    }
`;

export const TitleComponent = styled.h1`
      font-size: 28px;
      margin-bottom: 25px;
      padding-left:12.5px;
      cursor: pointer;
      &:hover{
        border-left: 2px solid black;
        padding-left: 10.5px 
      }
`;

export const PreviewContainer = styled.div`
      display: flex;
      justify-content: space-between;

      @media screen and (max-width: 800px) {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 15px;
      }
`;