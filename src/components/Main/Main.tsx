import React from 'react';
import style from './Main.module.css'
import styleContainer from './../../common/styles/Container.module.css'
import avatar from './../../assets/avatar.jpeg'

const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={`${styleContainer.container} ${style.wrapper}`}>
                  <div className={style.description}>
                      {/*<p>Hello!</p>*/}
                      <p className={style.name}>BOHDAN <span>ATAMANIUK</span></p>
                      <p className={style.react}> <span>React</span> Developer</p>
                      <button className={style.btnMore}>Learn More</button>
                  </div>
                  <div className={style.avatar}>
                      <img src={avatar} alt="avatar"/>
                  </div>
            </div>
        </div>
    );
};

export default Main;