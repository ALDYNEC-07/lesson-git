/* 
 Этот файл описывает шапку сайта.
 Она показывает название проекта и простые ссылки для перехода.
 Человек может нажать на ссылку или кнопку входа, чтобы перейти к разделу.
*/
import Link from "next/link";
import styles from "./SiteHeader.module.css";

export function SiteHeader() {
  return (
    <header className={styles.header}>
      {/* Эта часть показывает название сайта и простой значок. */}
      <div className={styles.brand}>
        <span className={styles.logo}>MP</span>
        <div>
          <p className={styles.title}>My Project</p>
          <p className={styles.tagline}>Учимся и строим шаг за шагом</p>
        </div>
      </div>

      {/* Эта навигация даёт быстрые переходы по основным разделам. */}
      <nav className={styles.nav}>
        <Link className={styles.navLink} href="/">
          Главная
        </Link>
        <Link className={styles.navLink} href="/about">
          О нас
        </Link>
        <Link className={styles.navLink} href="/contact">
          Контакты
        </Link>
      </nav>

      {/* Эта кнопка предлагает человеку перейти к входу. */}
      <Link className={styles.cta} href="/login">
        Войти
      </Link>
    </header>
  );
}

// versia 2
// versia 2 ++
// versia 4