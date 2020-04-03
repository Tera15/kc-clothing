import React from 'react';

import { SpinnerContainer, SpinnerOverlay } from './with-spinner.styles';


//HoC to render a loading spinner if page is loading.

const WithSpinner = WrappedComponent => {
    const Spinner =  ({isLoading, ...otherProps}) => {
        return isLoading ? (
            <SpinnerOverlay>
                <SpinnerContainer/>
            </SpinnerOverlay>
        ) : (
            <WrappedComponent {...otherProps}/>
        );
    }
    return Spinner
}


export default WithSpinner;