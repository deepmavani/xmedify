import React, { useContext, useState } from 'react'
import style from './form.module.css'
import Button, { btnVarient } from '../Button/Button';
import { ReactComponent as SearchIcon } from '../../assets/SearchGreay.svg'
import { ReactComponent as SearchIconGrey } from '../../assets/Search.svg'
import Icon, { IconName } from '../Icon/Icons';
import { Input, InputAdornment, MenuItem, OutlinedInput, Select, TextField } from '@mui/material';
import { MainContext } from '../../Pages/MainCOntext';
import { useNavigate } from 'react-router-dom';

function Form({ children, type, backGround, bdata, setIsOpen, inputText,setInputText}) {
  const context = useContext(MainContext)
  const navigate = useNavigate()
  // console.log(context)
  const [formData, setFormData] = useState({})
  const handleInputChange = (e) => {
    setFormData({
      ...formData, [e.target.name]: e.target.value
    })
  };

  switch (type) {

    case Formtype.Search: {
      return (

        <form className={backGround === 'White' ? style.searchForm : style.searchFormW} onSubmit={(c) => {
          if (context?.city.length > 0) {
            c.preventDefault()
            navigate('/SearchResult')
          }
        }}>
          <div className={style.inputbox}>
            <Select
              sx={{ minWidth: 200, width: "100%", border: 'none', }}
              name="state"
              className={style.select}
              value={context?.state}
              onChange={(e) => context.setstate(e.target.value)}
              required displayEmpty startAdornment={
                <InputAdornment position="start">
                  <SearchIconGrey />
                </InputAdornment>
              }
            >

              <MenuItem disabled value="" selected >State</MenuItem>
              {context?.states.map((ct) =>
                <MenuItem key={ct} value={ct}>{ct}</MenuItem>
              )}
            </Select>
          </div>
          <div className={style.inputbox}>

            <Select
              sx={{ minWidth: 200, width: "100%", border: 'none', }}
              className={style.select}
              name="city"
              value={context?.city}
              onChange={(event) => context.setCity(event.target.value)}
              displayEmpty
              required startAdornment={
                <InputAdornment position="start">
                  <SearchIconGrey />
                </InputAdornment>
              }
            >
              <MenuItem disabled value="" selected >City
              </MenuItem>
              {context?.cities.map((ct) =>
                <MenuItem key={ct} value={ct}>{ct}</MenuItem>
              )}
            </Select>
          </div>

          <div className={style.btns}>
            <Button varient={btnVarient.LIGHTBLUE} handleClick={(c) => {
              if (context?.city.length > 0) {
                c.preventDefault()
                navigate('/SearchResult')
              }
            }} type={"submit"} ><SearchIcon></SearchIcon> Search</Button>
          </div>
        </form>
      )
    }

    case Formtype.SearchByHospital:
      {
        return <div className={style.searchByHospital}>
          <form className={style.SearchByHospital} onSubmit={(e) => { e.preventDefault();setInputText(formData?.searchByHospital) }}>
            <input
              name="searchByHospital"
              className={style.input}
              placeholder="SearchByHospital"
              value={inputText}
              onChange={(event)=>{setInputText(event.target.value)}}
              required
            />


            <div className={style.btns}>
              <Button varient={btnVarient.LIGHTBLUE} type={"submit"}>
                <SearchIcon></SearchIcon> Search
              </Button>
            </div>
          </form>
        </div>
      }
    case Formtype.GetApp:
      {
        return <div className="getAppF">
          <p className={style.hero_txt3}>Get the link to download the app</p>
          <form className={style.GetApp} onSubmit={(event) => { event.preventDefault() }}>
            <div style={{display:'flex',width:"100%"}}><select name="country" className={style.country} id="country" onChange={handleInputChange}  >
              <option value="+91">+91</option>
            </select>
            <input type='number' className={style.phone}
              name="phone"
              placeholder="Enter phone no"
              value={formData?.phone}
              onChange={handleInputChange}
              required
            /> </div>
            <div className={style.btns}>
              <Button varient={btnVarient.LIGHTBLUE} type={"submit"}>Send MSG
              </Button>
            </div>
          </form>
          <div className={style.appBtns}>
            <Button varient={btnVarient.default} >
              <Icon Iconname={IconName.Footer.Google}></Icon>
            </Button>
            <Button varient={btnVarient.default} type={"submit"}>
              <Icon Iconname={IconName.Footer.Apple}></Icon>
            </Button>
          </div>
        </div>
      }
    case Formtype.booking:
      {
        // console.log(formData, bdata?.medicalCentre, bdata)
        return <div className="getAppF">
          <p className={style.hero_txt3}>Book Appointment</p>
          <form className={style.GetApp} onSubmit={(event) => {
            event.preventDefault(); console.log()
            let bookingData = {
              ...bdata?.medicalCentre, ...bdata?.bookingDetail, isbooked: true, time: bdata?.slot, mail: formData?.mail
            }
            console.log(bookingData)
            const mybookings = JSON.parse(localStorage.getItem('myBookings'))
            setIsOpen(false)
            if (mybookings?.length) {
              context?.setMyBookings([...mybookings, bookingData])
              localStorage.setItem("myBookings",JSON.stringify([...mybookings,bookingData]))
            }else{
              localStorage.setItem("myBookings",JSON.stringify([bookingData]))
            }
            console.log("done")
            alert('Booked')
          }}>
            <TextField type='mail' className={style.phone} sx={{ margin: 3, border: 'none', }}
              name="mail"
              placeholder="Enter mail id"
              value={formData?.mail ? formData.mail : ''}
              onChange={handleInputChange}
              required variant="outlined"
            />
            <div className={style.btns}>
              <Button varient={btnVarient.LIGHTBLUE} type={"submit"}> Book
              </Button>
            </div>
          </form>
        </div>
      }
    default: {
      return <>Form</>
    }
  }
}
export const Formtype = Object.freeze({
  GetApp: 'GetApp',
  Search: 'Search', booking: "booking",
  SearchByHospital: 'SearchByHospital',
  default: 'default',
})
export default Form