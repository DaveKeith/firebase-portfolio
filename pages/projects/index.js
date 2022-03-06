import { Fragment, useState, useEffect } from "react";

import Headline from "../../components/header/headline";
import ProjectListItem from "../../components/project/project-item";

const ProjectList = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch(
            'https://davekeith-portfolio-86436-default-rtdb.firebaseio.com/projects.json', 
            { method: "get", mode: "cors" }
        )
        .then(res => res.json())
        .then(res => { setProjects(res) })
        .catch(err => console.log(err));
    }, []);

    return <Fragment>
        <Headline text={"List of Projects"} />
        <section className="content">
            <p>{"Since my first role as a software developer, I've completed numberous projects.  I have a link to my GitHub page"} <a href="https://github.com/DaveKeith" target="_blank" rel="noreferrer">here</a> or you can click the icon on the <a href="http://localhost:3000/projects#footer">footer</a> of this page.</p>
            <p className="fs-3 mb-5">{"Here's a list of several examples my projects:"}</p>
            <div className="projects-grid">
                {projects.map(project => (
                    <ProjectListItem project={project} key={project.id} />
                ))}
            </div>
        </section>
    </Fragment>
}

export default ProjectList;