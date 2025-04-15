import React, { useEffect, useState } from 'react'
import { Outlet, Link } from "react-router-dom";
import Header from '../Components/Header/Header';
import style from './MainPage.module.css'
import { dataFAQ, specialists, offers,slots } from '../data/data'
import { fetchState, fetchCities, fetchMedicalCenters } from '../api/api'
import { MainContext } from './MainCOntext';

export default function MainPage() {

  const [medicalCenters, setMedicalCenters] = useState([])
  const [myBookings, setMyBookings] = useState([])
  const [states, setStates] = useState([])
  const [state, setstate] = useState('')
  const [cities, setCities] = useState([])
  const [city, setCity] = useState('')
  useEffect(() => {
    const mybookings = JSON.parse(localStorage.getItem('myBookings'))
    if (mybookings)
      setMyBookings(mybookings)

    async function getData() {
      const stateslist = await fetchState()
      if (stateslist)
        setStates(stateslist)
    }
    getData()
  }, [])

  useEffect(() => {
    const mybookings = JSON.parse(localStorage.getItem('myBookings'))
    // localStorage.setItem("myBookings",JSON.stringify(myBookings))
    // if (mybookings)
      // setMyBookings(mybookings)
  }, [myBookings])

  useEffect(() => {
    async function getData() {
      const medicalcenters = await fetchMedicalCenters(state, city)
      if (medicalcenters)
        setMedicalCenters(medicalcenters)
    }
    getData()
  }, [city])

  useEffect(() => {
    async function getData() {
      console.log(state)
      const citieslist = await fetchCities(state)
      if (citieslist)
        setCities(citieslist)
    }
    getData()
  }, [state])
  return (
    <div className={style.MainPage}>
      <Header />
      <MainContext.Provider value={{
        setCity, city: city,
        setstate, state: state,
        cities: cities,
        states: states,
        myBookings:myBookings,
        setMyBookings
      }}>
        <Outlet context={{
          info: {
            fetchFun: {
              fetchState,
              fetchCities,
              fetchMedicalCenters
            },
            stateFun: { setCity, setstate },
            stateVar: { state: state, city: city, states: states, cities: cities },
            faqs: dataFAQ,
            medicalCenters: medicalCenters,
            slots:slots,
            myBookings: myBookings,
            specialists: specialists,
            offers: offers
          }
        }} />
      </MainContext.Provider>
    </div>
  )
}
