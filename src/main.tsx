import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {extendTheme, ChakraProvider} from "@chakra-ui/react";
import {Provider} from "react-redux";
import store from "./store/config";

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
};

const theme = extendTheme({config});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <ChakraProvider resetCSS theme={theme}>
            <Provider store={store}>
                <App/>
            </Provider>
        </ChakraProvider>
    </React.StrictMode>
)
