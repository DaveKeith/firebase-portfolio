import { Fragment } from "react";
import Headline from "../../components/headline";

const ProjectList = () => {
    return <Fragment>
        <Headline text={"List of Projects"} />
        <section className="content">
            {"Here's a list of many of my projects"}
        </section>
    </Fragment>
}

export default ProjectList;