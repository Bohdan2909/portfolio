import React from 'react';
import s from './Contacts.module.css'
import styledContainer from '../../common/styles/Container.module.css'
import {Title} from '../Title/Title';

const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={`${styledContainer.container} ${s.contactsContainer}`}>
              <Title titleOne={'Contacts'} titleTwo={'me'} />
              <div className={s.contactsWrapperForm}>
                  <form className={s.contactsForm}>
                      <input />
                      <input />
                      <textarea className={s.contactsTextarea} name="contacts" rows={4} cols={5}/>
                      <button className={s.buttonSubmit} type={'submit'}>Send</button>
                  </form>
              </div>
            </div>
        </div>
    );
};

export default Contacts;