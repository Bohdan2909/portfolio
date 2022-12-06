import React from 'react';
import style from './Main.module.css'
import styleContainer from './../../common/styles/Container.module.css'

const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                  <div className={style.description}>
                      <p>Hello!</p>
                      <p>My name is Bohdan Atamaniuk</p>
                      <p>I am front end developer.</p>
                  </div>
                  <div className={style.avatar}>

                  </div>

            </div>
        </div>
    );
};

export default Main;