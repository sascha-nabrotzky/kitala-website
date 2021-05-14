import React from 'react';
import * as mitgliedStyles from '../components/mitglied.module.scss';

function Mitglied(props) {

    return (

        <div className={mitgliedStyles.mitgliedwrapper}>
            <img className={mitgliedStyles.profilbild} src={props.imgSrc} alt={props.imgAlt}/>
            <strong dangerouslySetInnerHTML={{ __html: props.title }}></strong>
            <p dangerouslySetInnerHTML={{ __html: props.name }}></p>
            <p dangerouslySetInnerHTML={{ __html: props.kita }}></p>
            <address>
                <p dangerouslySetInnerHTML={{ __html: props.adress }}></p>
                <a href={`tel: ${props.tel}`} dangerouslySetInnerHTML={{ __html: props.tel }}></a>
            </address>
        </div>
        
    );
  }
  
  export default Mitglied;