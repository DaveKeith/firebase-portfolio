import Link from 'next/link';
import { useState } from 'react';

import classes from '../../styles/modules/footer.module.scss';

const Footer = () => {
    const [showEmail, setShowEmail] = useState(0);
    const [showPhoneNum, setShowPhoneNum] = useState(0);

    const revealEmail = () => {
        if(showEmail === 0){
            setShowEmail(1);
        }else{
            setShowEmail(0);
        }
    }

    const revealPhoneNum = () => {
        if(showPhoneNum === 0){
            setShowPhoneNum(1);
        }else{
            setShowPhoneNum(0);
        }
    }

    return (
        <footer className={classes.footerClass} id="footer">
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
                    <i className="bi bi-envelope" onClick={revealEmail} />
                    <span className={classes["my-email"]} style={{transform: `scale(${showEmail})`}}>
                        d.keith78@yahoo.com
                    </span>
                </li>
                <li>
                    <i className='bi bi-phone' onClick={revealPhoneNum} />
                    <span className={classes["my-phone-number"]} style={{transform: `scale(${showPhoneNum})`}}>
                        704-737-1621
                    </span>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;