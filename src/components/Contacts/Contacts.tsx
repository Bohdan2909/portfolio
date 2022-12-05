import React from 'react';
import s from './Contacts.module.css'
import styledContainer from '../../common/styles/Container.module.css'

const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={`${styledContainer.container} ${s.contactsContainer}`}>
                <h2>Contacts me</h2>
              <div className={s.contactsWrapperForm}>
                  <form className={s.contactsForm}>
                      <input />
                      <input />
                      <textarea className={s.contactsTextarea} name="contacts" rows={4} cols={5}/>
                  </form>
                      <button>Send</button>
              </div>
            </div>
        </div>
    );
};

export default Contacts;