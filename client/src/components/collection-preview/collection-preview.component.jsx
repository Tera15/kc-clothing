import React from 'react';
import { withRouter } from 'react-router-dom';
import CollectionItem from '../collection-item/collection-item.component';

import { 
  CollectionPreviewContainer,
  TitleComponent,
  PreviewContainer
} from './collection-preview.styles'



const CollectionPreview = ({ title, items, routeName, history, match }) => (
  <CollectionPreviewContainer>
    <TitleComponent
    onClick={() => history.push(`${match.path}/${routeName}`)}
    >{title.toUpperCase()}</TitleComponent>
    <PreviewContainer>
      {items
        .filter((item, idx) => idx < 4)
        .map( item => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </PreviewContainer>
  </CollectionPreviewContainer>
);


export default withRouter(CollectionPreview);