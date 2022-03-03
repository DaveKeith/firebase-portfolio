import { Fragment } from "react";
import Headline from "../../components/header/headline";

const AboutMe = () => {
    return <Fragment>
        <Headline text={"About Me"} />
        <section className="content">
            <p>{"I've definitely taken a unique path."}</p>
            <p>{"I'm from Charlotte, North Carolina"}</p>
            <p>{"I'm a Navy Veteran.  Served out of Mayport, Florida (near Jacksonville) and served aboard a frigate called the USS Underwood (FFG36) and a cruiser called the USS Gettysburg (CG64)."}</p>
            <p>{"Even before that, I travelled quite a bit"}</p>
        </section>
    </Fragment>
}

export default AboutMe;