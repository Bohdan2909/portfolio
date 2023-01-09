import s from '../Project/Project.module.css';
import React from 'react';
type ProjectPropsType = {
    style: any
    projectName:string
}
const Project = (props:ProjectPropsType) => {
    return (
        <div className={s.worksItem}>
            <div className={s.workImg} style={props.style}>
                <a href={'#'} className={s.workBtn}>Watch</a>
            </div>
            <h3>{props.projectName}</h3>
            <div className={s.workDesc}>About of project</div>
        </div>
    );
};
export default Project;