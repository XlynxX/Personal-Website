import styles from './index.module.css';
import { TiArrowLeftThick } from "react-icons/ti";

const AboutBlock = () => {
    return (
        <div>
            <div className={styles['div-played']}>
                <div className={`d-flex w-100 mt-4 ${styles['neu-block']}`}>
                    <div className={styles['block-wrapper']}>
                        <div className='d-flex justify-content-between'>
                            <h1 className={styles['title']}>Обо мне</h1>
                            <a href='/' className={styles['button']}><TiArrowLeftThick/></a>
                        </div>
                        <p className={styles['text']}>Эта страничка еще не готова, попробуйте узнать обо мне позже :(</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutBlock;