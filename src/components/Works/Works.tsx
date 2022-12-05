import React from 'react';
import s from './Works.module.css'
import styledContainer from './../../common/styles/Container.module.css'
import Project from '../Project/Project';

const Works = () => {
    return (
        <div className={s.worksBlock}>
            <div className={`${styledContainer.container} ${s.workContainer}`}>
                <h2>My works</h2>
                <div className={s.worksItems}>
                    <Project/>
                    <Project/>
                </div>
            </div>
        </div>
    );
};

export default Works;



