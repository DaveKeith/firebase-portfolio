import { Fragment } from "react";
import Headline from "../../components/header/headline";

const Resume = () => {
    return <Fragment>
        <Headline text={"My Resume"} />
        <section className="content">
            Resume stuff
        </section>
    </Fragment>
}

export default Resume;