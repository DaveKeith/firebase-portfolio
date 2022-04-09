import Link from 'next/link';

function HeaderNavLink({compString, text, hLink}){
    if(
        text === "Home" && compString == "withRouter(HomePage)" ||
        text === "About Me" && compString == "withRouter(AboutMe)" ||
        text === "About The Site" && compString == "withRouter(AboutTheSite)" ||
        text === "Projects" && compString == "withRouter(ProjectList)" ||
        text === "Resume" && compString == "withRouter(Resume)"
    ){
        return <li key={text} className='active-nav'>
                <Link href={hLink} passHref>
                    <a>
                        <div>{text}</div>
                        <div className='active-indicator' />
                    </a>
                </Link>
            </li>
    }else{
        return <li key={text}>
                <Link href={hLink} passHref>
                    <a>
                        <div>{text}</div>
                        <div className='active-indicator' />
                    </a>
                </Link>
            </li>
    }
}

export default HeaderNavLink;