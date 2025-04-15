import React, { useEffect, useRef, useState } from 'react'
import style from './SearchResult.module.css'
import Navbar from '../../Components/Navbar/Navbar'
import Form, { Formtype } from '../../Components/Form/Form'
import FAQ from '../../Components/FAQ/FAQ'
import Footer from '../../Components/Footer/Footer'
import Card, { cardType } from '../../Components/Card/Card'
import Icon, { IconName } from '../../Components/Icon/Icons'
import { useOutletContext } from 'react-router-dom'
//
export default function SearchResult() {

  const { info } = useOutletContext();
  // console.clear()
  // console.log(info, 're')
  const [mStores, setMStore] = useState([])
  const mapMC = (data, slots) => {
    return data?.map((mc) => {
      // mc.slots = slots
      return {...mc,slots:slots}
    })
  }
  useEffect(() => {
    setMStore(mapMC(info.medicalCenters,info.slots))
    // console.log(info?.medicalCenters, mStores)
  }, [info.medicalCenters])

  return <div className={style.SearchResult}>
    <Navbar />

    <div className={style.BlueStrip}>
      <div className={style.Form}><Form id={'Form'} type={Formtype.Search}></Form>
      </div>
    </div>

    <div className={style.resultSec}>
      <div className={style.cards}>
        <div className={style.careH}>
          <p className={style.careHM}>{mStores.length} medical centers available in {info?.stateVar?.city}</p>
          <p className={style.careHS}>Book appointments with minimum wait-time & verified doctor details</p>
        </div>

        {mStores.map((ms,idx) =>
          <Card
            cardtype={cardType.Hospital}
            key={ms['Provider ID']}
            data={ms}
            ImgIcon={<Icon Iconname={IconName.Medical.Medical}></Icon>}>
          </Card>
        )}
      </div>
      <div className={style.add}>
        <Icon Iconname={'ADD'}
        />
      </div>
    </div>
    <FAQ data={info?.faqs} />
    <Footer />
  </div>
}

