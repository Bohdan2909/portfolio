import React from 'react';
import style from './Skills.module.css'
import stylesContainer from './../../common/styles/Container.module.css'
import Skill from '../Skill/Skill';

const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${stylesContainer.container} ${style.skillsContainer}`}>
                <h2>My skills</h2>
                <div className={style.skillsItems}>
                    <Skill title={'React'} desc={'I know React!'}/>
                    <Skill title={'Css'} desc={'I know Css!'}/>
                    <Skill title={'Js'} desc={'I know JS!'}/>
                    <Skill title={'Js'} desc={'I know JS!'}/>
                    <Skill title={'Js'} desc={'I know JS!'}/>
                    <Skill title={'Js'} desc={'I know JS!'}/>

                </div>
            </div>
        </div>
    );
};

export default Skills;

