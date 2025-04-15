import React from 'react'
import style from './Section.module.css'

export default function Section({children}) {
  return (
    <div className={style.section}>
      {children}
    </div>
  )
}
