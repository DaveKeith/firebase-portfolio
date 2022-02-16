import { Fragment } from "react";
import Headline from "../../components/headline";

const Project = (props) => {
    return <Fragment>
        <Headline text={"Project"} />
        <section className="content">
            Project stuff
        </section>
    </Fragment>
}

export default Project;