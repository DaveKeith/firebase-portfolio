import { Fragment } from "react";
import Headline from "../../components/header/headline";

const Project = (props) => {
    return <Fragment>
        <Headline text={"Project"} />
        <section className="content">
            Project stuff
        </section>
    </Fragment>
}
{/* <div className={`${classes.reel} carousel slide`}>     
            {images.map((img, index) => (
                <div className={`carousel-item ${isActive(index)}`} key={index}>
                    <Image className="carousel-inner" src={img.img} alt={img.name} width={252} height={135} layout='responsive' />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>{img.name}</h5>
                    </div>
                </div>
            ))}
        </div> */}



// <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
// <ProjectImages images={projectImgs} indexNum={num} />
// <a className="carousel-control-prev" role="button">
//     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span className="sr-only" onClick={numDecrease}>Previous</span>
// </a>
// <a className="carousel-control-next" role="button">
//     <span className="carousel-control-next-icon" aria-hidden="true"></span>
//     <span className="sr-only" onClick={numIncrease}>Next</span>
// </a>
// </div>
export default Project;