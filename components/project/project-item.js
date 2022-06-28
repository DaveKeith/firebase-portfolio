import Link from "next/link";
import Image from "next/image";
import classes from "../../styles/modules/project-item.module.scss";

const ProjectListItem = ({ project }) => {
    let { projectId, projectName, description } = project;
    const img = project.views[0];
    
    if(project.workplace){
        projectName = `${project.workplace} - ${projectName}`;
    }


    return (
        <div className={classes.item}>
            <Link 
                href={"/projects/[projectId]"} 
                as={`/projects/${projectId - 1}`} //a bit confusing but the firebase index is projectId - 1
                passHref
            >
                <div>
                    <h3>{projectName}</h3>
                    <p>{description}</p>
                    <Image src={img.img} alt={img.name} width={500} height={300} />
                </div>
            </Link>
        </div>
    )
}

export default ProjectListItem;