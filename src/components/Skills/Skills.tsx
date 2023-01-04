import React from 'react';
import style from './Skills.module.css'
import stylesContainer from './../../common/styles/Container.module.css'
import Skill from '../Skill/Skill';
import {Title} from '../Title/Title';

const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${stylesContainer.container} ${style.skillsContainer}`}>
                <Title titleOne={'My'} titleTwo={'skills'}/>
                <div className={style.skillsItems}>
                    <Skill title={'React'} desc={'I know React!'}/>
                    <Skill title={'Css'} desc={'I know Css!'}/>
                    <Skill title={'Js'} desc={'I know JS!'}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;
