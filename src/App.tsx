import './App.css';
import { css, Global } from '@emotion/react';
import normalize from 'emotion-normalize';
import Routes from './pages/Routes';
import { QueryClient, QueryClientProvider } from 'react-query';

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 3,
        },
    },
});

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <Global
                styles={css`
                    ${normalize}
                    * {
                        box-sizing: border-box;
                        background-color: transparent;
                        border: none;
                        font-family: 'Montserra, sans-serif';
                    }
                    a {
                        text-decoration: none;
                        color: inherit;
                    }
                    button:not([disabled]) {
                        cursor: pointer;
                    }
                    body {
                        background-color: #fff;
                    }
                    h1,
                    h2,
                    h3,
                    h4,
                    h5,
                    h6 {
                        margin: 0;
                        font-family: 'Montserra, sans-serif';
                    }
                `}
            />
            <Routes />
        </QueryClientProvider>
    );
};

export default App;
