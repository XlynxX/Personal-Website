import AboutBlock from "components/aboutBlock";
import styles from 'styles/index.module.css';

const AboutPage = () => {
    return (
        <div className={styles['main-wrapper']}>
            <div className={styles['main-block']}>
                <AboutBlock />
            </div>
        </div>
    )
}

export default AboutPage;