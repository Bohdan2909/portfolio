import React from 'react';
import s from './Works.module.css'
import styledContainer from './../../common/styles/Container.module.css'
import Project from '../Project/Project';
import {Title} from '../Title/Title';

const Works = () => {
    return (
        <div className={s.worksBlock}>
            <div className={`${styledContainer.container} ${s.workContainer}`}>
              <Title titleOne={'my'} titleTwo={'works'} />
                <div className={s.worksItems}>
                    <Project/>
                    <Project/>
                </div>
            </div>
        </div>
    );
};

export default Works;



