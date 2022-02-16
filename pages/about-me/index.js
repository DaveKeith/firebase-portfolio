import { Fragment } from "react";
import Headline from "../../components/headline";

const AboutMe = () => {
    return <Fragment>
        <Headline text={"About Me"} />
        <section className="content">{"I've definitely taken a unique path."}</section>
    </Fragment>
}

export default AboutMe;