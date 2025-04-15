import React, { useEffect, useMemo, useState } from 'react'
import style from './Mybooking.module.css'
import Navbar from '../../Components/Navbar/Navbar'
import Form, { Formtype } from '../../Components/Form/Form'
import Footer from '../../Components/Footer/Footer'
import Card, { cardType } from '../../Components/Card/Card'
import Icon, { IconName } from '../../Components/Icon/Icons'
import { useOutletContext } from 'react-router-dom'
export default function MyBooking() {
  const { info } = useOutletContext();
  const [bookings, setBookings] = useState([]);
  const [inputText, setInputText] = useState('');
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    const localbookings = localStorage.getItem("myBookings") || "[]";
    setBookings(JSON.parse(localbookings));
  }, []);

  useEffect(() => {
    if (!inputText.trim()) setFiltered(bookings);
    setFiltered(
      bookings.filter((item) =>
        item["Hospital Name"]
          .toLowerCase()
          .includes(inputText.trim().toLowerCase())
      ))
  }, [inputText, bookings]);


  // console.log(info)
  return <div className={style.MyBooking}>
    <Navbar />
    <div className={style.BlueStrip}>
      <div className={style.heading}>My Booking</div>
      <div className={style.Form}>
        <Form id={'Form'} type={Formtype.SearchByHospital} inputText={inputText} setInputText={setInputText} ></Form>
      </div>
    </div>
    <div className={style.resultSec}>
      <div className={style.cards}>
        {filtered.length == 0 &&
          <div className={style.careH}>
            <p className={style.careHM}>No Bookings Found!</p>
          </div>}

        {
          filtered?.map((ms, idx) =>
            <Card
              cardtype={cardType.Hospital}
              key={idx}
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

    <Footer />
  </div>
}
