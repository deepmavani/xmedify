import React, { useContext, useState } from 'react';
import style from './form.module.css';
import Button, { btnVarient } from '../Button/Button';
import { ReactComponent as SearchIcon } from '../../assets/SearchGreay.svg';
import { ReactComponent as SearchIconGrey } from '../../assets/Search.svg';
import Icon, { IconName } from '../Icon/Icons';
import { InputAdornment, MenuItem, Select, TextField } from '@mui/material';
import { MainContext } from '../../Pages/MainCOntext';
import { useNavigate } from 'react-router-dom';

function Form({ children, type, backGround, bdata, setIsOpen, inputText, setInputText }) {
  const context = useContext(MainContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  switch (type) {
    case Formtype.Search: {
      return (
        <form
          className={backGround === 'White' ? style.searchForm : style.searchFormW}
          onSubmit={(e) => {
            e.preventDefault();
            if (context?.city?.length > 0) {
              navigate('/SearchResult');
            }
          }}
        >
          <div id="state" className={style.inputbox}>
            <Select
              id="select-state"
              name="state"
              className={style.select}
              sx={{ minWidth: 200, width: '100%', border: 'none' }}
              value={context?.state || ''}
              onChange={(e) => context.setstate(e.target.value)}
              required
              displayEmpty
              startAdornment={
                <InputAdornment position="start">
                  <SearchIconGrey />
                </InputAdornment>
              }
            >
              <MenuItem disabled value="">
                State
              </MenuItem>
              {context?.states.map((ct) => (
                <MenuItem key={ct} value={ct}>
                  {ct}
                </MenuItem>
              ))}
            </Select>
          </div>

          <div id="city" className={style.inputbox}>
            <Select
              id="select-city"
              name="city"
              className={style.select}
              sx={{ minWidth: 200, width: '100%', border: 'none' }}
              value={context?.city || ''}
              onChange={(e) => context.setCity(e.target.value)}
              required
              displayEmpty
              startAdornment={
                <InputAdornment position="start">
                  <SearchIconGrey />
                </InputAdornment>
              }
            >
              <MenuItem disabled value="">
                City
              </MenuItem>
              {context?.cities.map((ct) => (
                <MenuItem key={ct} value={ct}>
                  {ct}
                </MenuItem>
              ))}
            </Select>
          </div>

          <div className={style.btns}>
            <Button varient={btnVarient.LIGHTBLUE} type="submit">
              <span style={{ display: 'inline-flex', alignItems: 'center' }}>
                <SearchIcon style={{ marginRight: '4px' }} />
                Search
              </span>
            </Button>
          </div>
        </form>
      );
    }

    case Formtype.SearchByHospital:
      return (
        <div className={style.searchByHospital}>
          <form
            className={style.SearchByHospital}
            onSubmit={(e) => {
              e.preventDefault();
              setInputText(formData?.searchByHospital);
            }}
          >
            <input
              name="searchByHospital"
              className={style.input}
              placeholder="SearchByHospital"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              required
            />
            <div className={style.btns}>
              <Button varient={btnVarient.LIGHTBLUE} type="submit" data-testid="search-form-button">
                <span style={{ display: 'inline-flex', alignItems: 'center' }}>
                  <SearchIcon style={{ marginRight: '4px' }} />
                  Search
                </span>
              </Button>
            </div>
          </form>
        </div>
      );

    case Formtype.GetApp:
      return (
        <div className="getAppF">
          <p className={style.hero_txt3}>Get the link to download the app</p>
          <form className={style.GetApp} onSubmit={(e) => e.preventDefault()}>
            <div style={{ display: 'flex', width: '100%' }}>
              <select name="country" className={style.country} onChange={handleInputChange}>
                <option value="+91">+91</option>
              </select>
              <input
                type="number"
                name="phone"
                className={style.phone}
                placeholder="Enter phone no"
                value={formData?.phone || ''}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className={style.btns}>
              <Button varient={btnVarient.LIGHTBLUE} type="submit">
                Send MSG
              </Button>
            </div>
          </form>
          <div className={style.appBtns}>
            <Button varient={btnVarient.default}>
              <Icon Iconname={IconName.Footer.Google} />
            </Button>
            <Button varient={btnVarient.default}>
              <Icon Iconname={IconName.Footer.Apple} />
            </Button>
          </div>
        </div>
      );

    case Formtype.booking:
      return (
        <div className="getAppF">
          <p className={style.hero_txt3}>Book Appointment</p>
          <form
            className={style.GetApp}
            onSubmit={(event) => {
              event.preventDefault();
              const bookingData = {
                ...bdata?.medicalCentre,
                ...bdata?.bookingDetail,
                isbooked: true,
                time: bdata?.slot,
                mail: formData?.mail,
              };
              const mybookings = JSON.parse(localStorage.getItem('myBookings')) || [];
              localStorage.setItem('myBookings', JSON.stringify([...mybookings, bookingData]));
              context?.setMyBookings([...mybookings, bookingData]);
              setIsOpen(false);
              alert('Booked');
            }}
          >
            <TextField
              type="email"
              name="mail"
              className={style.phone}
              sx={{ margin: 3 }}
              placeholder="Enter mail id"
              value={formData?.mail || ''}
              onChange={handleInputChange}
              required
              variant="outlined"
            />
            <div className={style.btns}>
              <Button varient={btnVarient.LIGHTBLUE} type="submit">
                Book
              </Button>
            </div>
          </form>
        </div>
      );

    default:
      return <>Form</>;
  }
}

export const Formtype = Object.freeze({
  GetApp: 'GetApp',
  Search: 'Search',
  booking: 'booking',
  SearchByHospital: 'SearchByHospital',
  default: 'default',
});

export default Form;
