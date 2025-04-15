import React from 'react'
import style from './Footer.module.css'
import styles from './About.module.css'
import Section from '../Section/Section'
import Icon, { IconName } from '../Icon/Icons'
import Form, { Formtype } from '../Form/Form'
import Logo from '../Logo/Logo'

export default function
    Footer
    () {
    return (
        <div className={style.footer}>
            <Section>
                <div className={style.section}>
                    <div className={style.hero_inner}>
                        <div className={style.mobileImgs}>
                            <div className={style.mobile}>
                                <Icon Iconname={IconName.Footer.Mobile} className={style.PCIcon} /></div>
                            <div className={style.mobile1}>
                                <Icon Iconname={IconName.Footer.Mobile} className={style.PCIcon} /></div>
                        </div>

                        <div className={style.downloadApp}>
                            <Icon Iconname={IconName.Footer.Arrow} className={style.PCIcon} />
                            <div className={style.heroTxtGP}>
                                <p>
                                    <span className={style.span1}>
                                        Download the
                                        <span className={style.span2}><br /> Medify </span> App
                                    </span>
                                </p>
                                <div className={style.pc}>
                                    <Form type={Formtype.GetApp}></Form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section >
            {/* <Section> */}
                <div className={styles.about}>
                    <div className={styles.flex}>

                        <div className={styles.icons}>
                             <Logo/>
                            <div className={styles.flex}>
                                <Icon Iconname={IconName.Footer.FaceBook} className={style.Logo} />
                                <Icon Iconname={IconName.Footer.YT} className={style.Logo} />
                                <Icon Iconname={IconName.Footer.X} className={style.Logo} />
                                <Icon Iconname={IconName.Footer.PT} className={style.Logo} />
                            </div>
                        </div>

                        <div className={styles.linksG}>
                            <p className={styles.links}><Icon Iconname={IconName.Footer.Gt}></Icon>About Us</p>
                            <p className={styles.links}><Icon Iconname={IconName.Footer.Gt}></Icon>Our Pricing</p>
                            <p className={styles.links}><Icon Iconname={IconName.Footer.Gt}></Icon>Our Gallery</p>
                            <p className={styles.links}><Icon Iconname={IconName.Footer.Gt}></Icon>Appointment</p>
                            <p className={styles.links}><Icon Iconname={IconName.Footer.Gt}></Icon>Privacy Policy</p>
                        </div>

                        <div className={styles.linksG}>
                            <p className={styles.links}><Icon Iconname={IconName.Footer.Gt}></Icon>About Us</p>
                            <p className={styles.links}><Icon Iconname={IconName.Footer.Gt}></Icon>Our Pricing</p>
                            <p className={styles.links}><Icon Iconname={IconName.Footer.Gt}></Icon>Our Gallery</p>
                            <p className={styles.links}><Icon Iconname={IconName.Footer.Gt}></Icon>Appointment</p>
                            <p className={styles.links}><Icon Iconname={IconName.Footer.Gt}></Icon>Privacy Policy</p>
                        </div>

                        <div className={styles.linksG}>
                            <p className={styles.links}><Icon Iconname={IconName.Footer.Gt}></Icon>About Us</p>
                            <p className={styles.links}><Icon Iconname={IconName.Footer.Gt}></Icon>Our Pricing</p>
                            <p className={styles.links}><Icon Iconname={IconName.Footer.Gt}></Icon>Our Gallery</p>
                            <p className={styles.links}><Icon Iconname={IconName.Footer.Gt}></Icon>Appointment</p>
                            <p className={styles.links}><Icon Iconname={IconName.Footer.Gt}></Icon>Privacy Policy</p>
                        </div>

                    </div>
                    <p className={styles.para}>Copyright ©2023 Surya Nursing Home.com. All Rights Reserved</p>
                </div>
            {/* </Section>   */}
        </div >
    )
}
