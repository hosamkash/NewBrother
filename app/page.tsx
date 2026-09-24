import Image from 'next/image'
import { ShoppingBag, Building2 } from 'lucide-react'
import styles from './page.module.css'

const BANNER_SRC = '/banner.png'
const STORE_URL = 'https://www.vigilhub.app/store?tenant=NewBrother'
const COMPANY_APP_URL = 'https://www.vigilhub.app/dashboard/login'

export default function MainWebSitePage() {
  return (
    <main className={styles.root}>
      <Image
        src={BANNER_SRC}
        alt=""
        aria-hidden
        fill
        priority
        sizes="100vw"
        className={styles.backdrop}
      />

      <div className={styles.frame}>
        <Image
          src={BANNER_SRC}
          alt="نيو برازر - مصنع ملابس جاهزة حريمي"
          fill
          priority
          sizes="(max-aspect-ratio: 682/1024) 100vw, 67vh"
          className={styles.banner}
        />

        <div className={styles.actions}>
          <a href={STORE_URL} className={`${styles.btn} ${styles.primary} ${styles.floatA}`}>
            <ShoppingBag className={styles.icon} />
            <span>متجر المنتجات</span>
          </a>

          <a href={COMPANY_APP_URL} className={`${styles.btn} ${styles.secondary} ${styles.floatB}`}>
            <Building2 className={styles.icon} />
            <span>تطبيق الشركة (الإدارة)</span>
          </a>
        </div>
      </div>
    </main>
  )
}
