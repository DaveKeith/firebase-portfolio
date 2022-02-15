import { Fragment } from 'react';
import { Head } from 'next/document';
import FBScripts from '../components/scripts';
import 'bootstrap/dist/css/bootstrap.css';

const AppComponent = ({ Component, pageProps }) => {
    return (
        <Fragment>
            <Head>
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <title>My ReactJS/NextJS/Firebase App</title>
            </Head>
            <FBScripts />
            <Component {...pageProps} />
        </Fragment>
    );
};

export default AppComponent;