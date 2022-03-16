import { Fragment } from "react";
import Headline from "../../components/header/headline";
import TableOfContents from "../../components/sidebars/tableOfContents";
import { withRouter } from "next/router";

const Resume = () => {
    const resumeList = [
        { 
            id: "diversey-freelance", 
            job: "Diversey (Freelance)" 
        }, 
        { 
            id: "lowes", 
            job: "Lowe's" 
        }, 
        { 
            id: "limu", 
            job: "Cognizant (Liberty Mutual)" 
        }, 
        { 
            id: "metlife", 
            job: "Cognizant (MetLife)" 
        }, 
        { 
            id: "tts-devops", 
            job: "Tech Talent South - DevOps" 
        },
        { 
            id: "tts-js", 
            job: "Tech Talent South - JS Applications" 
        }, 
        { 
            id: "sealed-air", 
            job: "Sealed Air/Diversey" 
        }, 
        { 
            id: "tiy", 
            job: "The Iron Yard" 
        }, 
        { 
            id: "uncc", 
            job: "UNCC" 
        }, 
        { 
            id: "navy", 
            job: "Navy" 
        }, 
        { 
            id: "belmont-abbey", 
            job: "Belmont Abbey" 
        }, 
        { 
            id: "ncstate", 
            job: "NC State" 
        }
    ];

    return <Fragment>
        <Headline text={"My Resume"} />
        <TableOfContents title="Resume Index" contentsList={resumeList} />
        <section className="content">
            <div className="job" id="diversey-freelance">
                <h3>Diversey (Freelance)</h3>
                <span>Aug 2020-Sept 2021</span>
                <h4>Application Developer</h4>
                <ul>
                    <li>Assigned numerous intermittent freelance projects implementing various updates to sites within <a href="http://www.diverseydigital.com/natools" target="_blank" rel="noreferrer">http://www.diverseydigital.com/natools</a> utilizing PHP and JavaScript.</li>
                    <li>The primary task was to make the site compatible with a new API version of Google Sheets.</li>
                    <li>Sole point of contact for various managers and product owners, providing technical expertise in troubleshooting.</li>
                </ul>
            </div>
            <div className="job" id="lowes">
                <h3>Lowe’s</h3>
                <span>Mar 2020-Apr 2020</span>
                <h4>Software Developer</h4>
                <ul>
                    <li>Valuable member of the Customer Domain team responsible for frontend development related to the login and profile pages for <a href="https://www.lowes.com" target="_blank" rel="noreferrer">www.lowes.com</a></li>
                    <li>Collaborated with development teams to complete a wide variety of use cases in an agile environment.</li>
                    <li>Underwent a variety of challenges such as downsizing and syncing a new cloud-based code with an older code base</li>
                    <li>Developed with front-end technologies such as JavaScript, NodeJS, and Handlebars</li>
                </ul>
            </div>
            <div className="job" id="limu">
                <h3>Cognizant (Liberty Mutual)</h3>
                <span>Sept 2019-Feb 2020</span>
                <h4>Software Developer</h4>
                <ul>
                    <li>Collaborated with development teams to complete a wide variety of use cases in an agile environment.</li>
                    <li>Valuable member of the Policy Admin team, relied on to understand an extensive code base and complex database.</li>
                    <li>Developed with technologies such as Java, WID, and SQL.</li>
                    <li>Tested using SQL queries, SOAPUI, and various other in-company platforms in multiple environments.</li>
                </ul>
            </div>
            <div className="job" id="metlife">
                <h3>Cognizant (MetLife)</h3>
                <span>Mar 2019-Aug 2019</span>
                <h4>Software Developer</h4>
                <ul>
                    <li>Collaborated with development teams to meet the requirements.</li>
                    <li>Worked with technologies such as JavaScript, ReactJS, Java, Spring-Boot, SCSS, and Bootstrap.</li>
                    <li>Relied on for skills in ReactJS in order to learn company-specific React-based framework.</li>
                    <li>In addition to development, worked with several DevOps technologies such as Bamboo and ServiceNow.</li>
                </ul>
            </div>
            <div className="job" id="tts-devops">
                <h3>Tech Talent South, Charlotte Campus </h3>
                <span>Dec 2018-Feb 2019</span>
                <ul>
                    <li>Took the DevOps course sponsored by Cognizant, a Fortune 500 company in the tech industry.</li>
                    <li>Learned technologies such as Java, Spring-Boot, MEAN stack, Shell, Powershell, Groovy, Jenkins, AWS, and Docker.</li>
                    <li><h4>Projects:</h4>
                        <ul>
                            <li>Collaborated to create The Spoon site using Java Spring-Boot:
                                <ul>
                                    <li>Github: <a href="https://github.com/DaveKeith/recipe-list" target="_blank" rel="noreferrer">https://github.com/DaveKeith/recipe-list</a></li>
                                    <li>Heroku: <a href="https://enigmatic-everglades-88944.herokuapp.com" target="_blank" rel="noreferrer">https://enigmatic-everglades-88944.herokuapp.com</a></li>
                                </ul>
                            </li>
                            <li>
                                Collaborated to create Workout App site using MEAN stack
                                <ul>
                                    <li>Github: <a href="https://github.com/workoutApp" target="_blank" rel="noreferrer">https://github.com/workoutApp</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="job" id="tts-js">
                <h3>Tech Talent South, Charlotte Campus</h3>
                <span>Feb 2018-Apr 2018</span>
                <ul>
                    <li>Took the Javascript Applications course, covering topics such as ES6, jQuery, React, and Redux</li>
                </ul>
            </div>
            <div className="job" id="sealed-air">
                <h3>Sealed Air/Diversey</h3>
                <span>Sept 2016–Dec 2017</span>
                <h4>Application Developer</h4>
                <ul>
                    <li>Responsible for working with a team of specialists to create, update, and maintain digital media for product training for clients using the site: <a href="http://www.diverseydigital.com/natools" target="_blank" rel="noreferrer">http://www.diverseydigital.com/natools</a>.  The site features over 100 web pages, most of which under my tenure have been improved upon, and some which have been created from scratch.</li>
                    <li>Sole software developer assigned to the project, learned PHP and Javascript as well as other aspects of a new software system without the assistance of another developer.</li>
                    <li>Worked with API data from sources such as Google Sheets, Google Analytics, and AddThis.</li>
                    <li>
                        <h4>Work Examples:</h4>
                        <ul>
                            <li>Diversey Floor Care Solutions <a href="http://www.diverseydigital.com/natools/FloorCareSolutions" target="_blank" rel="noreferrer">http://www.diverseydigital.com/natools/FloorCareSolutions</a></li>
                            <li>Diversey Product Selector <a href="http://www.diverseydigital.com/natools/productselector" target="_blank" rel="noreferrer">http://www.diverseydigital.com/natools/productselector</a></li>
                            <li>Diversey Dilution Calculator <a href="http://www.diverseydigital.com/natools/dilutioncalculator" target="_blank" rel="noreferrer">http://www.diverseydigital.com/natools/dilutioncalculator</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="job" id="tiy">
                <h3>The Iron Yard, Downtown Atlanta Campus</h3>
                <span>Feb 2016-May 2016 </span>
                <ul>
                    <li>Learned Ruby on Rails in an immersive software development environment</li>
                    <li>
                        <h4>Projects:</h4>
                        <ul> 
                            <li><a href="https://github.com/insidethepark/RB" target="_blank" rel="noreferrer">https://github.com/insidethepark/RB</a></li>
                            <li><a href="https://github.com/DaveKeith/reddit_project" target="_blank" rel="noreferrer">https://github.com/DaveKeith/reddit_project</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="job" id="uncc">
                <h3>UNC Charlotte</h3>
                <span>Jun 2014-Dec 2015</span>
                <h4>Studied computer science</h4>
            </div>
            <div className="job" id="navy">
                <h3>US Navy</h3>
                <span>May 2010-May 2014</span>
                <h4>IT2 (Information Systems Technician, Petty Officer Second Class)</h4>
                <ul>
                    <li>Responsible for network administration using tools such as Active Directory, cyber-security, and assisting others with any computer-related issues.</li>
                    <li>Earned 2 Naval Achievement Medals, honorably discharged.</li>
                </ul>
            </div>
            <div className="job" id="belmont-abbey">
                <h3>Belmont Abbey College</h3>
                <span>2006-2009</span>
                <h4>BA in Economics (Minor: History)</h4>
            </div>
            <div className="job" id="ncstate">
                <h3>NC State University</h3>
                <span>2004-2006</span>
            </div>
        </section>
    </Fragment>
}

export default withRouter(Resume);