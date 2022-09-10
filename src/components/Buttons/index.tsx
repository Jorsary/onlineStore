import React from 'react'
import s from './Buttons.module.scss'

export default function Buttons(props:any) {
  return (
    <button disabled={props.disabled} type={props.type} onClick={props.onClickHand} className={props.disabled ? s.buttonInactive :s.button}>{props.text}</button>
  )
}
