import React, { Children, useState } from 'react'
import style from './Navbar.module.css'
import Logo from '../Logo/Logo'
import Button, { btnVarient } from '../Button/Button'
import { Link, useNavigate, useNavigation } from 'react-router-dom'
import useWindowSize from '../../CustomHooks/useWindowSize'
import { IconButton } from '@mui/material'
import MenuIcon from "@mui/icons-material/Menu";
import { Cancel } from '@mui/icons-material'

export default function Navbar({ children, transperent = 0 }) {
    const navigate = useNavigate()
  const [expand, setExpand] = useState(false)
    const size = useWindowSize()
    // console.log(size)
    return (
        <div className={transperent ? style.transperent : style.navbar}>
            <Logo />
            {children}
            {size.width > 992 ? <div className={style.navlist}>
                <Link to="/SearchResult" className={style.span}>Find Doctors</Link>
                <Link className={style.span}>Hospitals</Link>
                <span className={style.span}>Medicines</span>
                <span className={style.span}>Surgeries</span>
                <span className={style.span}>Software for Provider</span>
                <span className={style.span}>Facilities</span>
                <Button varient={btnVarient.LIGHTBLUE} handleClick={() => { console.log('My Bookings btn'); navigate('/MyBooking') }} btnText={'My Bookings'}></Button>
            </div>:
            <IconButton sx={{width:'50px'}} onClick={()=>{setExpand(true)}}>
                <MenuIcon />
            </IconButton>}

            {expand&&<div className={style.sideManu}>
                <IconButton sx={{height:'50px',width:'100%',justifyContent:'flex-end',padding:2 }} onClick={()=>{setExpand(false)}}>
                    <Cancel/>
                </IconButton>
                <div className={style.manulist}>
                <Link to="/SearchResult" className={style.span}>Find Doctors</Link>
                <Link className={style.span}>Hospitals</Link>
                <span className={style.span}>Medicines</span>
                <span className={style.span}>Surgeries</span>
                <span className={style.span}>Software for Provider</span>
                <span className={style.span}>Facilities</span>
                <div style={{height:'42px'}}>
                <Button varient={btnVarient.LIGHTBLUE} handleClick={() => { console.log('My Bookings btn'); navigate('/MyBooking') }} btnText={'My Bookings'}></Button>
                </div>
            </div>
                </div>}
        </div>
    )
}
