import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.css';
import Layout from '../components/layout';
import Headline from '../components/headline';

const AppComponent = ({ Component, pageProps }) => {
    return (
        <Layout>
            <Head>
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <title>My ReactJS/NextJS App</title>
            </Head>
            <Component {...pageProps} />
        </Layout>
    );
};

export default AppComponent;