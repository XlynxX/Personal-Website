import { useEffect, useRef, useState } from "react";
import styles from './index.module.css';

const SwitchingText = (props: {
    text?: any,
    onFinish: Function
}) => {

    const [textClass, setTextClass]: any = useState([]);

    useEffect(() => {
        setTextClass(['animate']);
        setTimeout(() => {
            setTextClass(['hide']);
            props.onFinish();
        }, 3000)
    }, [props.text]);

    return (
        <div className={styles['switching-wrapper']}>
            <ul className={`${styles['switching-ul']}`}>
                {props.text.map((text: string, i: number) => {
                    return <li key={i} className={`${styles[textClass[0]]} ${styles[textClass[1]]}`}>{text}</li>
                })}
            </ul>
        </div>
    );
}

export default SwitchingText;