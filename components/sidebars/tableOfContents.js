import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import classes from "../../styles/modules/tableOfContents.module.scss";

const TableOfContents = ({ title, contentsList }) => {
    const { pathname } = useRouter();
    const [ toggle, setToggle ] = useState(classes.hide);

    const showOrHide = () => {
        if(toggle === classes.hide){
            setToggle(classes.show);
        }else{
            setToggle(classes.hide);
        }
    }

    return (
        <nav className={toggle}>
            <div className={classes.toggle} onClick={showOrHide}>
                <i className="bi bi-arrow-bar-right" />
            </div>
            <div className={classes.index}>
                <Link href={pathname} passHref><h4>{title}</h4></Link>
                <ul>
                        {contentsList.map(item => (
                            <li key={item.id}>
                                <Link href={`${pathname}#${item.id}`}>{item.job}</Link>
                            </li>
                        ))}
                </ul>
            </div>
        </nav>
    );
}

export default TableOfContents;