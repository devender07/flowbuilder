'use client'
import React from 'react'
import { Provider } from 'react-redux'
import store from '@/redux/store'
const ProviderContainer = ({ children }) => {
    return (
        // redux store
        <Provider store={store}>
            <div>
                {children}
            </div>
        </Provider>
    )
}

export default ProviderContainer;