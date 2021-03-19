import React from 'react';
import { Link } from 'react-router-dom';
import * as footerStyles from '../components/footer.module.scss';

function Footer() {

    return (
  
      <>
          <footer>
            <ul className={footerStyles.footerListItems}>
                <li className={footerStyles.footerLink}>
                    <Link to="/impressum">Impressum</Link>
                  </li>
                <li className={footerStyles.footerLink}>
                  <Link to="/datenschutz">Datenschutz</Link>
                </li>
            </ul>
          </footer>

            
      </>
     
    );
  }
  
  export default Footer;