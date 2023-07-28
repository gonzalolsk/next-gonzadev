import Image from 'next/image';
import styles from './footer.module.css';
const Footer = () => {
    return (
        <div className={styles.container}>
            <div>
                Gonzadev - All Rights Reserved.
            </div>
            <div className={styles.social}>
                <Image src="/1.png" width={15} className={styles.icon} height={15} alt="lamami className={styles.social}a"  />
                <Image src="/2.png" width={15} className={styles.icon} height={15} alt="lamamia"  />
                <Image src="/3.png" width={15} className={styles.icon} height={15} alt="lamamia"  />
                <Image src="/4.png" width={15} className={styles.icon} height={15} alt="lamamia"  />
            </div>
        </div>
    )
}
export default Footer;