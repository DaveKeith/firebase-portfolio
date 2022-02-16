import { Fragment } from "react";
import Headline from "../../components/headline";

const AboutTheSite = () => {
    return <Fragment>
        <Headline text={"About this Site"} />
        <section className="content">
            <div>
                {"Here's a bit of detail about the tech and inner workings of this site in particular"}
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
                <div>CSS is good.  It works with NextJS.</div>
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
            <div>
                <h3>Vercel (hosting)</h3>
                <p>Why Vercel?</p>
                <p>I previously worked with GitHub pages, but once I learned ReactJS, I wanted to show off those skills in a portfolio.  Unfortunately GitHub pages {"wouldn't"} work with ReactJS so I turned to Heroku to create my portfolio (<a href="http://davekeith.herokuapp.com" target="blank"></a>) as it was a free resource and allowed me to show off my ReactJS skillset.</p>
                <p>However, there were shortcomings with Heroku:</p>
                <ul>
                    <li>The page took around 30 seconds to load.</li>
                    <li>It works independently from GitHub.  It would be nice if you could link the repositories somehow.</li>
                </ul>
                <p>So I looked into Firebase as it would likely solve both of my Heroku issues and would still be a free resource.  However, I discovered that there were some issues in pairing Firebase with NextJS due to {"Next's"} server rendering.</p>
                <p>After troubleshooting the issue, I found several resources mention Vercel as part of the solution (some will mention the previous name ZEIT).  Turns out Vercel was the answer to all my issues.  {"It's"} free for something small like a portfolio page, loads instantly, and connects directly with GitHub deployments.</p>
            </div>
        </section>
    </Fragment>
}

export default AboutTheSite;