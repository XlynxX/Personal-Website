import styles from './index.module.css';

const NeuButton = (props: {
    text: string,
    href: string,
}) => {
    return(
        <a href={props.href} className={`${styles['button']}`}>{props.text}</a>
    )
}

export default NeuButton;