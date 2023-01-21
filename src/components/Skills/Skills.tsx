import React from 'react';
import style from './Skills.module.scss'
import stylesContainer from '../../common/styles/Container.module.scss'
import Skill from '../Skill/Skill';
import {Title} from '../Title/Title';
import css from '../../assets/css.svg';
import react from '../../assets/react.svg';
import redux from '../../assets/redux.svg';
import js from '../../assets/js.svg';
import typeScript from '../../assets/typescript.svg';
import html from '../../assets/html.svg';

const Skills = () => {
    const cssIcon = {backgroundImage: `url(${css})`}
    const htmlIcon = {backgroundImage: `url(${html})`}
    const reactIcon = {backgroundImage: `url(${react})`}
    const reduxIcon = {backgroundImage: `url(${redux})`}
    const javascriptIcon = {backgroundImage: `url(${js})`}
    const typeScriptIcon = {backgroundImage: `url(${typeScript})`}
    return (
        <div id={'skills'} className={style.skillsBlock}>
            <div className={`${stylesContainer.container} ${style.skillsContainer}`}>
                <Title titleOne={'My'} titleTwo={'skills'}/>
                <div className={style.skillsItems}>
                    <Skill style={reactIcon} title={'React'}/>
                    <Skill style={cssIcon} title={'Css'}/>
                    <Skill style={javascriptIcon} title={'JavaScript'}/>
                    <Skill style={reduxIcon} title={'Redux'}/>
                    <Skill style={typeScriptIcon} title={'TypeScript'}/>
                    <Skill style={htmlIcon} title={'HTML'}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;
