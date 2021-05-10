import Image from 'next/image'
import { Card } from '../../interfaces'
import styles from './CreditCard.module.scss'

export default function CreditCard({
  nameInCard,
  cardNumber,
  expiryDate,
  cvc
}: Card) {
  
  return(
    <div className={styles.card}>
      <div className={styles.card__top}>
        <span>
          <Image src={'/images/mastercard-logo.svg'} width={41} height={24}/>
        </span>
        <div className={styles.card__rigth}>
          <span className={styles.card__label}>CVC</span>
          <span className={styles.card__label}>Expire</span>
          <span className={styles.card__label}>{cvc}</span>
          <span className={styles.card__label}>{expiryDate}</span>
        </div>
      </div>

      <div className={styles.card__bottom}>
        <p>{nameInCard}</p>
        <p>{cardNumber}</p>
      </div>
    </div>
  )
}