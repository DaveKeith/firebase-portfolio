import Link from "next/link";
import Image from "next/image";
import { withRouter } from "next/router";
import { Fragment, useState } from "react";
import Headline from "../../components/header/headline";

const Project = ({ myProject }) => {
    const [count, setCount] = useState(0);

    const decreaseCount = () => {
        setCount(count !== 0 ? count - 1 : myProject.views.length - 1);
    }

    const increaseCount = () => {
        setCount(count !== myProject.views.length - 1 ? count + 1 : 0);
    }

    const carouselIndicators = () => {
        let carouselItems = null;
        for(let a = 0; a < myProject.views.length; a++){
            carouselItems += <li
                key={a} 
                data-target="#carouselExampleIndicators" 
                data-slide-to={a} 
                className={`${a === count ? "active" : ""}`} 
            />;
        }
        return carouselItems;
    }

    const carouselInner = () => {
        let carouselItems = [];
        for(let a = 0; a < myProject.views.length; a++){
            carouselItems[a] = <div key={a} className={`carousel-item${a === count ? " active" : ""}`}>
                {myProject.views[a].url
                        ?
                        <Link href={myProject.views[a].url} passHref>
                            <a><h2>{myProject.views[a].name}</h2></a>    
                        </Link>
                        :
                        <h2>{myProject.views[a].name}</h2>
                    }
                <Image src={myProject.views[a].img} alt={`slide ${a+1}`} width={500} height={300} />
                <div className="carousel-img-link">
                     
                </div>
            </div>;
        }
        return carouselItems
    }

    return <Fragment>
        <Headline text={myProject.projectName} />
        <section className="content">
            {myProject.workplace !== null && myProject.workplace !== undefined
                ?
                <h2>A Project I worked on while at {myProject.workplace}</h2>
                :
                null
            }
            <p>{myProject.description}</p>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                {carouselIndicators()}
            </ol>
            <div className="carousel-inner">
                {carouselInner()}
            </div>
            <a className="carousel-control-prev" role="button" data-slide="prev" onClick={decreaseCount}>
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" role="button" data-slide="next" onClick={increaseCount}>
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
            </div>
        </section>
    </Fragment>
}

export async function getStaticProps(context){
    const res = await fetch(`https://davekeith-portfolio-86436-default-rtdb.firebaseio.com/projects/${context.params.projectId}.json`);
    const myProject = await res.json();

    return {
        props: {
            myProject
        }
    }
}

export async function getStaticPaths(){
    const res = await fetch(`https://davekeith-portfolio-86436-default-rtdb.firebaseio.com/projects.json`);
    const myProjects = await res.json();
    const paths = myProjects.map((item, index) => { return { params: { projectId: index.toString() }}})

    return {
        paths,
        fallback: "blocking"
    }
}

export default withRouter(Project);