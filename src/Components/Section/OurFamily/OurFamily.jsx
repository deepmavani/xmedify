import React from 'react'
import style from './OurFamily.module.css'
import Icon, { IconName } from '../../Icon/Icons'
import Card, { cardType } from '../../Card/Card'
import Section from '../Section'

export default function OurFamily() {
  return (
    <div className={style.section}>
        <div className={style.heroTxtGPO}>
          <p className={style.hero_txt1}>
            CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.
          </p>
          <p className={style.span3}>
            <span className={style.span3}>
              Our Families
            </span>
          </p>
          <p className={style.hero_txt2} style={{ lineHeight: '40.8px' }}>
            We will work with you to develop individualised care plans, including management of chronic diseases. If we cannot assist, we can provide referrals or advice about the type of practitioner you require. We treat all enquiries sensitively and in the strictest confidence.</p>
        </div>
        <div className={style.PCC1}>
          <div className={style.PC4}>
            <Card cardtype={cardType.PerformanceCard} ImgIcon={
              <Icon Iconname={IconName.performanceCard.Heart} className={style.PCIcon} />} >
              <span className={style.span3}>
                5000+
              </span>
              <p className={style.hero_txt2}>
                Happy Patients</p>
            </Card>
            <Card cardtype={cardType.PerformanceCard} ImgIcon={
              <Icon Iconname={IconName.performanceCard.DrugstoreP} className={style.PCIcon} />} >
              <span className={style.span3}>
                1000+
              </span>
              <p className={style.hero_txt2}>
                Laboratories</p>
            </Card>
          </div>
          <div className={style.PC5}>
            <Card cardtype={cardType.PerformanceCard} ImgIcon={
              <Icon Iconname={IconName.performanceCard.HospitalP} className={style.PCIcon} />} >
              <span className={style.span3}>
                200+
              </span>
              <p className={style.hero_txt2}>
                Hospitals</p>
            </Card>
            <Card cardtype={cardType.PerformanceCard} ImgIcon={
              <Icon Iconname={IconName.performanceCard.Doctor} className={style.PCIcon} />} >
              <span className={style.span3}>
                700+
              </span>
              <p className={style.hero_txt2}>
                Expert Doctors</p>
            </Card></div>
        </div>
      </div>
  )
}
