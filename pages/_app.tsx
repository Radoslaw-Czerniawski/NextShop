import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Header } from '../components/Header';
import { QueryClient, QueryClientProvider } from 'react-query';

const client = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <QueryClientProvider client={client}>
            <div className='grid grid-rows-[auto_1fr_65px] min-h-screen'>
                <Header />
                <Component {...pageProps} />
            </div>
        </QueryClientProvider>
    );
}

export default MyApp;
