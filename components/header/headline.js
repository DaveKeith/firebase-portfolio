import classes from './headline.module.css';

const Headline = (props) => {
    return <h1 className={classes.header}>{props.text}</h1>
}

export default Headline;