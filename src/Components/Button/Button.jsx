import React from 'react'
import style from "./Button.module.css"
function Button({ varient, handleClick=()=>{}, btnText, children, type="button" }) {
  switch (varient) {

    case btnVarient.LIGHTBLUE:
      return (
        <button type={type} className={style.LIGHTBLUE} onClick={handleClick}>{children} {btnText?btnText:""} </button>
      )
    case btnVarient.BLACK:
      return (
        <button type={type} className={style.BLACK} onClick={handleClick}>{children}{btnText?btnText:"btn"} </button>
      )
    default: return (
      <button type={type} className={style.defaultBtn} onClick={handleClick}>{btnText ? btnText : children ? children : "Button"} </button>
    )
  }

}
export const btnVarient = Object.freeze({
  LIGHTBLUE: 'LIGHTBLUE', BLACK: "BLACK",
})
export default Button