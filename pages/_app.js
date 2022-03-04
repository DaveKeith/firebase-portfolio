import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.css';
import Layout from '../components/layout';
import '../styles/globals.scss';

const AppComponent = ({ Component, pageProps }) => {
    return (
        <Layout>
            <Head>
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css" />
                <title>David Keith Portfolio</title>
            </Head>
            <Component {...pageProps} />
        </Layout>
    );
};

export default AppComponent;