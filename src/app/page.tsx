import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <div className={styles.header}>
        <h1 className={styles.header__title}>Добро пожаловать на мой сайт-визитку!</h1>
      </div>
      <div className={styles.main}>
        <div className={styles.center}>
          <section className={styles.section}>
              <h2 className={styles.section__title}>Обо мне</h2>
              <p className={styles.section__text}>Привет! Меня зовут Дмитрий, и я full-stack разработчик.</p>
          </section>
          <section className={styles.section}>
              <h2 className={styles.section__title}>Мои навыки</h2>
              <ul className={styles.section__list}>
                  <li className={styles.section__item}>Навык 1</li>
                  <li className={styles.section__item}>Навык 2</li>
                  <li className={styles.section__item}>Навык 3</li>
              </ul>
          </section>
          <section className={styles.section}>
              <h2 className={styles.section__title}>Контакты</h2>
              <p  className={styles.section__text}>Свяжитесь со мной:</p>
              <ul className={styles.section__list}>
                  <li className={styles.section__item}>Email: example@example.com</li>
                  <li className={styles.section__item}>Телефон: +1234567890</li>
              </ul>
          </section>
        </div>
      </div>
      <div className={styles.footer}>
          <p className={styles.footer__text}>&copy; 2023 Ильдюков Дмитрий</p>
      </div>
    </div>
  );
}
