import { Fragment } from "react";

import { projects } from '../../data/projects.json';
import Headline from "../../components/header/headline";
import ProjectListItem from "../../components/project/project-item";

const ProjectList = () => {
    return <Fragment>
        <Headline text={"List of Projects"} />
        <section className="content">
            <p className="fs-3 mb-5">{"Here's a list of many of my projects:"}</p>
            <div className="projects-grid">
                {projects.map(project => (
                    <ProjectListItem project={project} key={project.id} />
                ))}
            </div>
        </section>
    </Fragment>
}

export default ProjectList;