import React from 'react'
import style from './PatientCaring.module.css'
import Icon, { IconName } from '../../Icon/Icons'
import Card, { cardType } from '../../Card/Card'
import Section from '../Section'

export default function PatientCaring() {
  return (
    <Section>
          <div className={style.hero_inner}>
            <div className={style.PCC}>
              <div className={style.PC}>
                <Icon Iconname={IconName.PC} className={style.PCIcon} /></div>
              <div className={style.PC1}>
                <Icon Iconname={IconName.PC1} className={style.PCIcon} /></div>
              <div className={style.PC3}>
                <p className={style.hero_txt3}><Icon Iconname={IconName.Call}></Icon>Free Consultation</p>
                <p className={style.hero_txt2}> &nbsp; Consultation with the best</p>
              </div>
            </div>
            <div className={style.heroTxtGP}>
              <p className={style.hero_txt1}>
                HELPING PATIENTS FROM AROUND THE GLOBE!!
              </p><p>
                <span className={style.span1}>
                  Patient
                </span>
                <span className={style.span2}> Caring </span>
              </p>
              <p className={style.hero_txt2}>
                Our goal is to deliver quality of care in a courteous, respectful, and compassionate manner. We hope you will allow us to care for you and strive to be the first and best choice for healthcare. </p>
              <div className={style.pc}>
                <p className={style.hero_txt3}><Icon Iconname={IconName.StarIcon}></Icon>Stay Updated About Your Health</p>
                <p className={style.hero_txt3}><Icon Iconname={IconName.StarIcon}></Icon>Check Your Results Online</p>
                <p className={style.hero_txt3}><Icon Iconname={IconName.StarIcon}></Icon>Manage Your Appointments</p>
              </div>
            </div>
          </div>
        </Section>
  )
}
