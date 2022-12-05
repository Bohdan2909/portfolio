import s from '../Project/Project.module.css';
import React from 'react';

const Project = () => {
    return (
        <div className={s.worksItem}>
            <div className={s.workImg}>
                <button className={s.workBtn}>Watch</button>
            </div>
            <h3>Name of project</h3>
            <div className={s.workDesc}>About of project</div>
        </div>
    );
};
export default Project;