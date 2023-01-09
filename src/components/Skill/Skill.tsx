import style from './Skill.module.css';
import React from 'react';


type SkillType = {
    title: string
    style:any
}
const Skill = (props: SkillType) => {
    return (
        <div className={style.skillItem}>
            <div className={style.photo} style={props.style}></div>
            <p>{props.title}</p>
            {/*<div className={style.desc}>{props.desc}</div>*/}
        </div>
    )
}
export default Skill;