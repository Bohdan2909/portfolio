import style from '../Skills/Skills.module.css';
import React from 'react';

type TitlePropsType = {
    titleTwo: string
    titleOne:string
}
export const Title = (props: TitlePropsType) => {
    return (
        <div className={style.title}>
            <h2>{props.titleOne} <span>{props.titleTwo}</span></h2>
        </div>
    )
}