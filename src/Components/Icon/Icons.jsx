import React from "react";
import styles from './Icon.module.css'
import Img from "../../assets/Logo.png"
import { ReactComponent as HeroImgIcon } from "../../assets/NicePng_doctor-png_336282 1.svg"
import { ReactComponent as Doctors } from "../../assets/Doctor.svg"
import { ReactComponent as Labs } from "../../assets/Labs.svg"
import { ReactComponent as DrugStore } from "../../assets/Drugstore.svg"
import { ReactComponent as Hospital } from "../../assets/Hospital.svg"
import { ReactComponent as Capsule } from "../../assets/Capsule.svg"
import { ReactComponent as Ambulance } from "../../assets/Ambulance.svg"
import Group11 from "../../assets/Group 11.png"
import Group10 from "../../assets/Group 10.png"
import { ReactComponent as BloodSample } from "../../assets/bySpecialisation/Blood Sample.svg"
import { ReactComponent as SPDrugstore } from "../../assets/bySpecialisation/Drugstore.svg"
import { ReactComponent as HeartRate } from "../../assets/bySpecialisation/Heart Rate.svg"
import { ReactComponent as HeartRateMonitor } from "../../assets/bySpecialisation/Heart Rate Monitor.svg"
import { ReactComponent as XRay } from "../../assets/bySpecialisation/X-Ray.svg"
import { ReactComponent as Stethoscope } from "../../assets/bySpecialisation/Stethoscope.svg"
import { ReactComponent as Protection } from "../../assets/bySpecialisation/Immune.svg"
import DrLesleyHull from "../../assets/MedicalSpecialists/Dr. Lesley Hull.png"
import DrAhmadKhan from "../../assets/MedicalSpecialists/Dr. Ahmad Khan.png"
import DrHeenaSachdeva from "../../assets/MedicalSpecialists/Dr. Heena Sachdeva.png"
import DrAnkurSharma from "../../assets/MedicalSpecialists/Dr. Ankur Sharma.png"
import DrAhmadStevens from "../../assets/MedicalSpecialists/Dr. Lesley Hull.png"
import { ReactComponent as StarIcon } from "../../assets/starIcon.svg"
import PC from "../../assets/pc.png"
import PC1 from "../../assets/pc1.png"
import { ReactComponent as Call } from "../../assets/call.svg"
import Detox from "../../assets/Detox.png"
import { ReactComponent as Reporter } from "../../assets/doctor2-80x80.jpg.svg"
import { ReactComponent as Heart } from "../../assets/perfomanceCard/span.elementor-icon.svg"
import { ReactComponent as HospitalP } from "../../assets/perfomanceCard/span.elementor-icon (2).svg"
import { ReactComponent as DrugstoreP } from "../../assets/perfomanceCard/span.elementor-icon (1).svg"
import { ReactComponent as Doctor } from "../../assets/perfomanceCard/span.elementor-icon (3).svg"
import FAQ from "../../assets/FAQ/FAQ.png"
import { ReactComponent as HeartFAQ } from "../../assets/FAQ/div.stylish-shape-icon.svg"
import { ReactComponent as Smile } from "../../assets/FAQ/svg.h2d-63a39c21.svg"
import { ReactComponent as Google } from "../../assets/Footer/google_play.png.svg"
import { ReactComponent as Apple } from "../../assets/Footer/apple_store.png.svg"
import { ReactComponent as Arrow } from "../../assets/Footer/Vector.svg"
import Mobile from '../../assets/Footer/Mobile.png'
import Screen from '../../assets/Footer/image.png'
import { ReactComponent as Gt } from '../../assets/Footer/.svg'
import { ReactComponent as FaceBook } from "../../assets/Footer/a.elementor-icon.svg"
import { ReactComponent as X } from "../../assets/Footer/a.elementor-icon (3).svg"
import { ReactComponent as YT } from "../../assets/Footer/a.elementor-icon (2).svg"
import { ReactComponent as PT } from "../../assets/Footer/a.elementor-iconp.svg"

import { ReactComponent as Medical } from "../../assets/medical/div.u-pos-has.svg"
import { ReactComponent as ArrL } from "../../assets/medical/i.icon-ic_next_cheveron.svg"
import { ReactComponent as Like } from "../../assets/medical/Vector.svg"

import ADD from "../../assets/image.svg"

export default function Icon({ Iconname }) {
    // console.log(Iconname)
    switch (Iconname) {

        case 'ADD':
            return (
                <div className={styles.ADD}>
                    <img className={styles.add} src={ADD} alt="Logo" />
                </div>)
        case IconName.LOGO:
            return (
                <div className={styles.logo}>
                    <img className={styles.logoImg} src={Img} alt="Logo" />
                </div>)

        case IconName.HeroImgIcon:
            return (<HeroImgIcon />)

        case IconName.Doctors:
            return (<Doctors />)

        case IconName.Labs:
            return (<Labs />)

        case IconName.Hospital:
            return (<Hospital />)

        case IconName.DrugStore:
            return (<DrugStore />)

        case IconName.Capsule:
            return (<Capsule />)

        case IconName.Ambulance:
            return (<Ambulance />)

        case IconName.Group10:
            return (<div className={styles.cardImgC}>
                <img className={styles.cardImg} src={Group10} alt="G12" />
            </div>)

        case IconName.Group11:
            return (<div className={styles.cardImgC}>
                <img className={styles.cardImg} src={Group11} alt="G11" />
            </div>)

        case IconName.Specilazation.BloodSample:
            return (<BloodSample />)
        case IconName.Specilazation.HeartRate:
            return (<HeartRate />)

        case IconName.Specilazation.HeartRateMonitor:
            return (<HeartRateMonitor />)

        case IconName.Specilazation.SPDrugstore:
            return (<SPDrugstore />)

        case IconName.Specilazation.Stethoscope:
            return (<Stethoscope />)

        case IconName.Specilazation.Protection:
            return (<Protection />)

        case IconName.Specilazation.XRay:
            return (<XRay />)

        case IconName.MedicalSpecialist.DrLesleyHull:
            return (
                <div className={styles.MedicalSpecialistC}>
                    <img className={styles.MedicalSpecialistImg} src={DrLesleyHull} alt="DrLesleyHull" />
                </div>
            )
        case IconName.MedicalSpecialist.DrAhmadKhan:
            return (
                <div className={styles.MedicalSpecialistC}>
                    <img className={styles.MedicalSpecialistImg} src={DrAhmadKhan} alt="DrLesleyHull" />
                </div>
            )
        case IconName.MedicalSpecialist.DrHeenaSachdeva:
            return (
                <div className={styles.MedicalSpecialistC}>
                    <img className={styles.MedicalSpecialistImg} src={DrHeenaSachdeva} alt="DrLesleyHull" />
                </div>
            )
        case IconName.MedicalSpecialist.DrAnkurSharma:
            return (
                <div className={styles.MedicalSpecialistC}>
                    <img className={styles.MedicalSpecialistImg} src={DrAnkurSharma} alt="DrLesleyHull" />
                </div>
            )
        case IconName.MedicalSpecialist.DrAhmadStevens:
            return (
                <div className={styles.MedicalSpecialistC}>
                    <img className={styles.MedicalSpecialistImg} src={DrHeenaSachdeva} alt="DrLesleyHull" />
                </div>
            )

        case IconName.Call:
            return (<Call />)

        case IconName.StarIcon:
            return (<StarIcon />)

        case IconName.PC:
            return (
                <div className={styles.PCC}>
                    <img className={styles.PC} src={PC} alt="PC" />
                </div>
            )
        case IconName.PC1:
            return (
                <div className={styles.PCC}>
                    <img className={styles.PC} src={PC1} alt="PC" />
                </div>
            )
        case IconName.Detox:
            return (
                <div className={styles.Detox}>
                    <img className={styles.DetoxImg} src={Detox} alt="new" />
                </div>
            )
        case IconName.Reporter:
            return (<Reporter />)

        case IconName.performanceCard.Heart:
            return (<Heart />)
        case IconName.performanceCard.HospitalP:
            return (<HospitalP />)
        case IconName.performanceCard.DrugstoreP:
            return (<DrugstoreP />)
        case IconName.performanceCard.Doctor:
            return (<Doctor />)
        case IconName.FAQ.HeartFAQ:
            return (<HeartFAQ />)
        case IconName.FAQ.Smile:
            return (<Smile />)
        case IconName.FAQ.FAQ:
            return (<div className={styles.FAQ}>
                <img className={styles.FAQImg} src={FAQ} alt="Logo" />
            </div>)
        case IconName.Footer.Mobile:
            return (
                <div className={styles.Mobile}>
                    <div className={styles.ScreenImgD}>
                        <img className={styles.ScreenImg} src={Screen} alt="Logo" />
                    </div>
                    <div className={styles.MobileImgD}>
                        <img className={styles.MobileImg} src={Mobile} alt="Logo" />
                    </div>
                </div>)
        case IconName.Footer:
            return (
                <div className={styles.logo}>
                    <img className={styles.logoImg} src={Img} alt="Logo" />
                </div>)
        case IconName.Footer.Apple:
            return (<Apple />)
        case IconName.Footer.Google:
            return (<Google />);
        case IconName.Footer.Arrow:
            return (<Arrow />)
        case IconName.Footer.Gt:
            return (<Gt />)
        case IconName.Footer.FaceBook: return (<FaceBook />)
        case IconName.Footer.YT: return <YT />
        case IconName.Footer.PT: return <PT />
        case IconName.Footer.X: return (<X />)
        case IconName.Medical.Medical:
            return <Medical/>
        case IconName.Medical.ArrL:
            return <ArrL/>
        case IconName.Medical.Like:
            return <Like/>

            default: return (<>Invalid</>)
    }
}
export const IconName = Object.freeze({
    LOGO: 'Logo',
    HeroImgIcon: "HeroImgIcon",
    Doctors: 'Doctors',
    Labs: 'Labs',
    Drugstore: 'Drugstore',
    Capsule: 'Capsule',
    Hospital: 'Hospital',
    Ambulance: 'Ambulance',
    // Img
    Group10: 'Group10',
    Group11: 'Group11',

    //
    Medical:{
        ArrL:"ArrL",Like:'Like',Medical:'Medical'
    },
    Footer: {
        Apple: 'Apple', Google: 'Google', Mobile: "Mobile"
        , FaceBook: 'FaceBook', PT: "PT",
        YT: "YT", X: "X",
        Arrow: 'Arrow', Gt: 'Gt'
    },
    FAQ: {
        FAQ: 'FAQ',
        HeartFAQ: 'HeartFAQ',
        Smile: 'Smile',
    },
    performanceCard: {
        Heart: 'Heart',
        HospitalP: 'HospitalP',
        DrugstoreP: 'DrugstoreP',
        Doctor: 'Doctoe'
    },
    Specilazation: {
        BloodSample: 'BloodSample',
        SPDrugstore: 'SPDrugstore',
        Protection: 'Protection',
        HeartRateMonitor: "HeartRateMonitor",
        XRay: 'XRay', Stethoscope: 'Stethoscope',
        HeartRate: `HeartRate`
    },
    MedicalSpecialist: {
        DrAhmadKhan: 'DrAhmadKhan', DrAnkurSharma: 'DrAnkurSharma'
        ,
        DrHeenaSachdeva: 'DrHeenaSachdeva',
        DrLesleyHull: "DrLesleyHull",
    },
    Call: "Call"
    , PC: "PC",
    PC1: 'PC1',
    Reporter: 'Reporter',
    Detox: 'Detox',
    StarIcon: 'StarIcon'
})

