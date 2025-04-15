import React from 'react'
import style from './HomePage.module.css'
import HeroSession from '../../Components/HeroSession/HeroSession'
import Section from '../../Components/Section/Section'
import Carousal from '../../Components/Carousal/Carousal'
import Card, { cardType } from '../../Components/Card/Card'
import Icon, { IconName } from '../../Components/Icon/Icons'
import FAQ from '../../Components/FAQ/FAQ'
import Button, { btnVarient } from '../../Components/Button/Button'
import Footer from '../../Components/Footer/Footer'
import { useOutletContext } from 'react-router-dom'
import OurFamily from '../../Components/Section/OurFamily/OurFamily'
import PatientCaring from '../../Components/Section/PatientCaring/PatientCaring'

export default function HomePage({ children }) {
  

  const{info}=useOutletContext();
  // console.clear()
  // console.log(info,'hi')


  return (
    <div >
      <HeroSession />

      <div className={style.section}>
        <Section ><Carousal data={info?.offers} Component={(data) => <Card cardtype={cardType.Horizontal} ImgIcon={<Icon Iconname={data % 2 !== 0 ? IconName.Group10 : IconName.Group11} />} />} /></Section>
      </div>

      <div className={style.findbyspecialisation}>
        <Section>
          <p className={style.secHeading}>Find by specialisation</p>
          <div className={style.flexContainer}>
            <Card className={style.card} cardtype={cardType.VerticalBoxBig} ImgIcon={<Icon Iconname={IconName.Specilazation.SPDrugstore} />} heading={'Dentistry'} />
            <Card className={style.card} cardtype={cardType.VerticalBoxBig} ImgIcon={<Icon Iconname={IconName.Specilazation.Stethoscope} />} heading={'Primary car'} />
            <Card className={style.card} cardtype={cardType.VerticalBoxBig} ImgIcon={<Icon Iconname={IconName.Specilazation.HeartRate} />} heading={'Cardiology'} />
            <Card className={style.card} cardtype={cardType.VerticalBoxBig} ImgIcon={<Icon Iconname={IconName.Specilazation.HeartRateMonitor} />} heading={'MRI Resonance'} />
            <Card className={style.card} cardtype={cardType.VerticalBoxBig} ImgIcon={<Icon Iconname={IconName.Specilazation.BloodSample} />} heading={'Blood Test'} />
            <Card className={style.card} cardtype={cardType.VerticalBoxBig} ImgIcon={<Icon Iconname={IconName.Specilazation.Protection} />} heading={'Piscologist'} />
            <Card className={style.card} cardtype={cardType.VerticalBoxBig} ImgIcon={<Icon Iconname={IconName.Specilazation.SPDrugstore} />} heading={'Laboratory'} />
            <Card className={style.card} cardtype={cardType.VerticalBoxBig} ImgIcon={<Icon Iconname={IconName.Specilazation.XRay} />} heading={'X-ray'} />
          </div>
          <div className={style.btn}>
            <Button varient={btnVarient.LIGHTBLUE}  btnText={'View All'}></Button>
          </div>
        </Section>
        {children}
      </div>
      <div className={style.OurMedicalSpecialist}>
        <Section >
          <p className={style.secHeading}>Our Medical Specialist</p>
          <div className={style.specialistsCarousal}>
            <Carousal data={info?.specialists}
              Component={(data) => <Card cardtype={cardType.Profile}
                ImgIcon={<Icon Iconname={IconName.MedicalSpecialist[`Dr${data?.name?.split('Dr.').join('').split(' ').join('')}`]} />}
                heading={data?.name} >
                <p className={style.specialisation}>{data?.specialisation}</p></Card>
              } /></div></Section>
      </div>
      <div className={style.PatientCaring}>
       <PatientCaring/>
      </div>

      <div className={style.LatestNews}>
        <Section>
          <h5 className={style.smallHeading}>Blog & News</h5>
          <p className={style.secHeading}>Read Our Latest News</p>
          <div className={style.flexNewsContainer}>
            <Card cardtype={cardType.NewsCard} ImgIcon={<Icon Iconname={IconName.Detox}></Icon>}>
              <p className={style.ntopic}>Medical | <span className={style.ndate}> March 31, 2022</span></p>
              <p className={style.hero_txt4}>6 Tips To Protect Your Mental Health When You’re Sick</p>
              <p className={style.hero_txt4}><Icon Iconname={IconName.Reporter}></Icon>Rebecca Lee</p>
            </Card>
            <Card cardtype={cardType.NewsCard} ImgIcon={<Icon Iconname={IconName.Detox}></Icon>}>
              <p className={style.ntopic}>Medical | <span className={style.ndate}> March 31, 2022</span></p>
              <p className={style.hero_txt4}>6 Tips To Protect Your Mental Health When You’re Sick</p>
              <p className={style.hero_txt4}><Icon Iconname={IconName.Reporter}></Icon>Rebecca Lee</p>
            </Card>
            <Card cardtype={cardType.NewsCard} ImgIcon={<Icon Iconname={IconName.Detox}></Icon>}>
              <p className={style.ntopic}>Medical | <span className={style.ndate}> March 31, 2022</span></p>
              <p className={style.hero_txt4}>6 Tips To Protect Your Mental Health When You’re Sick</p>
              <p className={style.hero_txt4}><Icon Iconname={IconName.Reporter}></Icon>Rebecca Lee</p>
            </Card>
          </div>
        </Section>
        {children}
      </div>

      <div className={style.OurFamilies}>
        <OurFamily/>
      </div>
      
      <FAQ data={info?.faqs}/>
      <Footer/>
    </div>
  )
}
