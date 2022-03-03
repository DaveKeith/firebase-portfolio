import Link from 'next/link';

import classes from './footer.module.scss';

const Footer = () => {
    return (
        <footer className={classes.footerClass}>
            <ul>
                <li>
                    <a 
                        href="https://www.linkedin.com/in/david-keith-70704989/" 
                        target="_blank"
                        rel="noreferrer"
                        aria-label='LinkedIn Profile'
                    >
                        <i className="bi bi-linkedin" aria-label="LinkedIn Profile" />
                    </a>
                </li>
                <li>
                    <a 
                        href="https://github.com/DaveKeith" 
                        target="_blank"
                        rel="noreferrer"
                        aria-label='GitHub Profile'
                    >
                        <i className="bi bi-github" aria-label="GitHub Profile" />
                    </a>
                </li>
                <li>
                    <i className="bi bi-envelope" />
                </li>
                <li>
                    <i className='bi bi-phone' />
                </li>
            </ul>
        </footer>
    );
}

export default Footer;