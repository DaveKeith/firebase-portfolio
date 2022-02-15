import Head from 'next/head';
// import 'bootstrap/dist/css/bootstrap.css';
import Layout from '../components/layout';

const AppComponent = ({ Component, pageProps }) => {
    return (
        <Layout>
            <Head>
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <title>My ReactJS/NextJS/Firebase App</title>
            </Head>
            <Component {...pageProps} />
        </Layout>
    );
};

export default AppComponent;