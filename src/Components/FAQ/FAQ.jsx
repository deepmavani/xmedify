import React from 'react'
import style from './FAQ.module.css'
import Section from '../Section/Section'
import Card, { cardType } from '../Card/Card'
import Icon, { IconName } from '../Icon/Icons'
// import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
export default function FAQ({data }) {
  const [expanded, setExpanded] = React.useState("");
  // console.log(expanded,data)
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    // <div className={style.heading}>
    <Section>
      <h5 className={style.smallHeading}>Get Your Answer</h5>
      <p className={style.secHeading}>Frequently Asked Questions</p>
      <div className={style.flexContainer}>
        <div className={style.imgContainer}>
          <Icon Iconname={IconName.FAQ.FAQ}></Icon>
          <div className={style.HeartFAQ}>
            <Icon Iconname={IconName.FAQ.HeartFAQ}></Icon>
          </div>
          <div className={style.Smile}><Icon Iconname={IconName.FAQ.Smile}></Icon>
            <div className={style.texts}>
              <p className={style.hero_txt3}>84k+</p>
              <p className={style.hero_txt2}>Happy Patients</p>
            </div>
          </div>
        </div>
        <div className={style.flexFAQContainer}>
          {data?.map((faq, idx) =>
            <Accordion key={idx} className={style.accordian} expanded={expanded === `panel${idx + 1}`} onChange={handleChange(`panel${idx + 1}`)}>
              <AccordionSummary className={style.accordionSummary} sx={{ backgroundColor: "var(--color-black)" }}
                expandIcon={<span className={style.expandIcon}>+</span>}
                aria-controls={`panel${idx + 1}bh-content`}
                id={`panel${idx + 1}bh-header`}
              >
                <div className={style.accoSummary}>
                  {faq.que}
                </div>
              </AccordionSummary>
              <AccordionDetails sx={{ backgroundColor: "var(--color-white)" }}><div className={style.accoDetails}>
                {faq.ans}
              </div>
              </AccordionDetails>
            </Accordion>)}
        </div>
      </div>
    </Section>
    // </div>
  )
}
