import style from './Skill.module.css';
import React from 'react';


type SkillType = {
    title: string
    desc: string
}
const Skill = (props: SkillType) => {
    return (
        <div className={style.skillItem}>
            <div className={style.photo}></div>
            <p>{props.title}</p>
            <div className={style.desc}>{props.desc}</div>
        </div>
    )
}
export default Skill;