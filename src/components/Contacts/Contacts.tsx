import React from 'react';
import s from './Contacts.module.scss'
import styledContainer from '../../common/styles/Container.module.scss'
import {Title} from '../Title/Title';

const Contacts = () => {
    return (
        <div id={'contacts'} className={s.contactsBlock}>
            <div className={`${styledContainer.container} ${s.contactsContainer}`}>
              <Title titleOne={'Contacts'} titleTwo={'me'} />
              <div className={s.contactsWrapperForm}>
                  <form className={s.contactsForm}>
                      <input type={"text"} placeholder={'Your email...'}/>
                      <input type={"text"} placeholder={'Your name...'}/>
                      <textarea placeholder={'Please write your text...'} className={s.contactsTextarea} name="contacts" rows={4} cols={5}/>
                      <button className={s.buttonSubmit} type={'submit'}>Send</button>
                  </form>
              </div>
            </div>
        </div>
    );
};

export default Contacts;