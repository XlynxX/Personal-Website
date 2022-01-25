import NeuButton from 'components/neuButton';
import SwitchingText from 'components/switchingText';
import { useState, useEffect } from 'react';
import { SocialIcon } from 'react-social-icons';
import styles from 'styles/index.module.css';

export default function Index() {
  const [switchingText, setSwitchingText] = useState([
    'Привет', 'Как дела?', 'Меня зовут', 'Кирилл'
  ]);
  const [isStartupPlayed, setStartupPlayed] = useState(false);
  const [linkText, setLinkText] = useState('');
  let isFirstTimeOpened;

  useEffect(() => {
    isFirstTimeOpened = localStorage.getItem('isFirstTimeOpened');
    if (isFirstTimeOpened) setStartupPlayed(true);
  }, []);

  return (
    <div className={styles['main-wrapper']}>
      <div className={styles['main-block']}>
        <div>
          {isStartupPlayed ? (
            <div>
              <div className={styles['div-played']}>
                <p className={isStartupPlayed ? styles['div-played-text-additional'] : ''}>Это я</p>
                <h1 className={isStartupPlayed ? styles['div-played-text'] : ''}>XlynxX</h1>
                <div className={isStartupPlayed ? `d-flex w-100 ${styles['div-played-description']}` : 'd-flex w-100'}>
                  <SocialIcon style={{ height: 50, width: 50 }} className={styles['div-played-button']} onMouseLeave={() => setLinkText('')} onMouseEnter={() => setLinkText('Вконтакте')} fgColor='white' bgColor="none" url='https://vk.com/xlynxx1' />
                  <SocialIcon style={{ height: 50, width: 50 }} className={styles['div-played-button']} onMouseLeave={() => setLinkText('')} onMouseEnter={() => setLinkText('Телеграм')} fgColor='white' bgColor="none" network='telegram' url='https://t.me/xlynxx0' />
                  <SocialIcon style={{ height: 50, width: 50 }} className={styles['div-played-button']} onMouseLeave={() => setLinkText('')} onMouseEnter={() => setLinkText('GitHub')} fgColor='white' bgColor="none" url='https://github.com/XlynxX' />
                </div>
                <div className={`${linkText != '' ? styles['description-div-animation'] : styles['description-div']}`}>
                  <p className={styles['link-text']}>{linkText}</p>
                </div>
                <div className={`d-flex w-100 mt-4 ${styles['about-me-div']}`}>
                  <a href='/projects' className={styles['about-button']}>
                    проекты
                  </a>
                  <a href='/articles' className={styles['about-button']}>
                    статьи
                  </a>
                  <a href='/about' className={styles['about-button']}>
                    обо мне
                  </a>
                </div>
              </div>
            </div>
          ) : (<SwitchingText onFinish={() => { setStartupPlayed(true); localStorage.setItem('isFirstTimeOpened', 'false') }} text={switchingText} />)}
        </div>
      </div>
    </div>
  )
}

