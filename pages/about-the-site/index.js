import Headline from "../../components/headline";

const AboutTheSite = () => {
    return <section>
        <Headline text={"About this Site"} />
        <div>
            Here's a bit of detail about the tech and inner workings of this site in particular
        </div>
        <div>
            <h3>ReactJS</h3>
            <div>ReactJS is good</div>
            <ul>
                <li>
                    <h4>NextJS</h4>
                    <div>NextJS is good</div>
                </li>
            </ul>
        </div>
        <div>
            <h3>CSS</h3>
            <div>CSS is good</div>
            <ul>
                <li>
                    <h4>SCSS</h4>
                    <div>SCSS is good</div>
                </li>
                <li>
                    <h4>Bootstrap</h4>
                    <div>Bootstrap is good</div>
                </li>
            </ul>
        </div>
    </section>
}

export default AboutTheSite;