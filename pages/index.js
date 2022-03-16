import { Fragment } from "react";
import { withRouter } from "next/router";
import Headline from "../components/header/headline";

const HomePage = () => {
    return <Fragment>
        <Headline text={"Welcome to the Home Page!"} />
        <section className="content">
            <p>Here we break down the site and {"it's"} features.</p>
        </section>
    </Fragment>
}

export default withRouter(HomePage);