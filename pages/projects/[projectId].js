import { Fragment, useState, useEffect } from "react";
import Headline from "../../components/header/headline";

const Project = () => {
    const [myProject, setMyProject] = useState({});

    useEffect(() => {
        const projectId = window.location.href.split('/').pop();
        const jsonFileNum = parseInt(projectId) - 1;
        fetch(
            `https://davekeith-portfolio-86436-default-rtdb.firebaseio.com/projects/${jsonFileNum}.json`, 
            { method: "get", mode: "cors" }
        )
        .then(res => res.json())
        .then(res => { setMyProject(res) })
        .catch(err => console.log(err));
    }, []);

    const { projectName, views } = myProject;
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