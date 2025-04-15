import React from "react";
import styles from "./HeroSession.module.css"
import { ReactComponent as HeroImgIcon } from "../../assets/NicePng_doctor-png_336282 1.svg"
import Button, { btnVarient } from "../Button/Button";
import Form, { Formtype } from "../Form/Form";
import Card, { cardType } from "../Card/Card";
import Icon, { IconName } from "../Icon/Icons";
import Navbar from "../Navbar/Navbar";
export default function HeroSession() {
    return <div className={styles.container}>
        <Navbar transperent={true} />
        <div className={styles.heroSession}>
        <div className={styles.hero_inner}>
            <div className={styles.heroTxtGP}>
                <p className={styles.hero_txt1}>
                    Skip the travel! Find Online
                </p><span className={styles.span1}>
                    Medical
                </span>
                <span className={styles.span2}> Centers </span>
                <p className={styles.hero_txt2}>
                    Connect instantly with a 24x7 specialist or choose to video visit a particular doctor.
                </p>
                <div className={styles.btn}>
                    <Button varient={btnVarient.LIGHTBLUE} handleClick={() => console.log('Find cen')}>Find Centers</Button>
                </div>
            </div>
            <HeroImgIcon className={styles.heroImgIcon} />
        </div>
        <div className={styles.formContainer}>
            <Form type={Formtype.Search} />
            <p className={styles.heading}>You may looking for</p>
            <div className={styles.containerFlex}>
                <Card className={styles.card} cardtype={cardType.VerticalBox} ImgIcon={<Icon IconName={IconName.Doctors} />} heading={'Doctors'} />
                <Card className={styles.card} cardtype={cardType.VerticalBox} ImgIcon={<Icon IconName={IconName.Drugstore} />} heading={'Labs'} />
                <Card className={styles.card} cardtype={cardType.VerticalBox} ImgIcon={<Icon IconName={IconName.Hospital} />} heading={'Hospital'} />
                <Card className={styles.card} cardtype={cardType.VerticalBox} ImgIcon={<Icon IconName={IconName.Capsule} />} heading={'Medical Store'} />
                <Card className={styles.card} cardtype={cardType.VerticalBox} ImgIcon={<Icon IconName={IconName.Ambulance} />} heading={'Ambulanc'} />
            </div>
        </div>
        </div>
    </div>
}