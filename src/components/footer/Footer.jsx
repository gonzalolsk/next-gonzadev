import Image from 'next/image';
import styles from './footer.module.css';
const Footer = () => {
    return (
        <div className={styles.container}>
            <div>
                Gonzadev - All Rights Reserved.
            </div>
            <div className={styles.social}>
                <Image src="/1.png" width={15} className={styles.icon} height={15} alt="gonzadev"  />
                <Image src="/2.png" width={15} className={styles.icon} height={15} alt="gonzadev"  />
                <Image src="/3.png" width={15} className={styles.icon} height={15} alt="gonzadev"  />
                <Image src="/4.png" width={15} className={styles.icon} height={15} alt="gonzadev"  />
            </div>
        </div>
    )
}
export default Footer;