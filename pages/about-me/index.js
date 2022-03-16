import Image from "next/image";
import { Fragment } from "react";
import Headline from "../../components/header/headline";
import { withRouter } from "next/router";

const AboutMe = () => {
    return <Fragment>
        <Headline text={"About Me"} />
        <section className="content me">
            <div className="me--img">
                <Image 
                    src="/imgs/davekeithpic.jpg" 
                    alt="Dave Keith" 
                    width={300} 
                    height={300} 
                    className="me--img__pic1"
                />
            </div>
            <p>{"Hi, I'm Dave Keith (I go by David as well but I've noticed that David Keith taken as a profile name much more often). I'm a software developer with experience in a wide array of technologies, accustomed to working in a wide array of work environments. On top of that, I'm very ambitious and willing to learn new technologies."}</p>
            <p>{"I've definitely taken a unique path."}</p>
            <p>{"I'm from Charlotte, North Carolina"}</p>
            <p>{"I'm a Navy Veteran.  Served out of Mayport, Florida (near Jacksonville) and served aboard a frigate called the USS Underwood (FFG36) and a cruiser called the USS Gettysburg (CG64)."}</p>
            <p>{"Even before that, I travelled quite a bit"}</p>
        </section>
    </Fragment>
}

export default withRouter(AboutMe);