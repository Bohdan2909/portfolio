import React from 'react';
import s from './Works.module.css'
import styledContainer from './../../common/styles/Container.module.css'
import Project from '../Project/Project';
import {Title} from '../Title/Title';
import todolist from './../../assets/todolist.png'
import counter from './../../assets/counter.png'

const Works = () => {
    const todolistScreen = {
        backgroundImage: `url(${todolist})`,

    }
    const counterScreen = {
        backgroundImage: `url(${counter})`,

    }
    return (
        <div className={s.worksBlock}>
            <div className={`${styledContainer.container} ${s.workContainer}`}>
                <Title titleOne={'my'} titleTwo={'works'}/>
                <div className={s.worksItems}>
                    <Project style={todolistScreen} projectName={'Todolist'}/>
                    <Project style={counterScreen} projectName={'Counter'}/>

                </div>
            </div>
        </div>
    );
};

export default Works;



