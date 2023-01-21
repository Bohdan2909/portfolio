// import style from '../Skills/Skills.module.scss';
import React from 'react';
import s from'./Title.module.scss'

type TitlePropsType = {
    titleTwo: string
    titleOne:string
}
export const Title = (props: TitlePropsType) => {
    return (
        <div className={s.title}>
            <h2>{props.titleOne} <span>{props.titleTwo}</span></h2>
        </div>
    )
}