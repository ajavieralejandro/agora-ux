import React from 'react'
import { SpinnerOverlay, SpinnerContainer } from './spiner.styles';

export const WithSpinner =WrappedComponent => ({isLoading,otherProps}) => {
   
    return isLoading? (<SpinnerOverlay><SpinnerContainer /></SpinnerOverlay>) : (<WrappedComponent {...otherProps} />)
}

export const Spinner = () =>{
    return(<SpinnerOverlay><SpinnerContainer /></SpinnerOverlay>)
}