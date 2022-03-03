import { Fragment } from "react";
import { useRouter } from "next/router";
import Headline from "../../components/header/headline";
import { projects } from '../../data/projects.json';

const Project = () => {
    const { query } = useRouter();
    const idNum = parseInt(query.projectId);
    const myProject = projects.find((item) => {
        return item.projectId === idNum;
    });
    const views = myProject.project;
    const { projectName } = myProject;
    const workplace = null;

    if(myProject.workplace){
        workplace = <h2>A Project I worked on while at {myProject.workplace}</h2>;
    }

    return <Fragment>
        <Headline text={projectName} />
        <section className="content">
            {workplace}
            <p>{myProject.description}</p>
            {/* carousell */}
        </section>
    </Fragment>
}

export default Project;