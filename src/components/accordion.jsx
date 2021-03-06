import React, { useState, useRef } from 'react';
import Chevron from '../components/chevron';
import faqStyles from '../components/faq.module.scss';

function Accordion(props) {

    const [ currentClass, setClass ] = useState(`${faqStyles.texthidden}`);
    const [ setHeight, setHeightState ] = useState('');
    const [ setRotate, setRotateState ] = useState(`${faqStyles.accordionIcon}`);

    const content = useRef(null);

    function changeClass() {
      setClass(currentClass === `${faqStyles.texthidden}` ? `${faqStyles.active}` : `${faqStyles.texthidden}`);
      setHeightState(currentClass === `${faqStyles.texthidden}` ? `${content.current.scrollHeight}px` : '0px');
      setRotateState(currentClass === `${faqStyles.texthidden}` ? `${faqStyles.rotate}` : `${faqStyles.accordionIcon}`);
    }

    return (
          <section>
            <div className={faqStyles.question} onClick={changeClass}>
              <img src={`${props.image}`} className={`${faqStyles.faqImage}`} alt="Random from unsplash"/>
              <div className={faqStyles.titleChevronWrapper}>
                <h3>{props.title}</h3>
                <Chevron className={`${setRotate}`} width={30} fill={"#999"} />
              </div>
            </div>
            <div className={currentClass} ref={content} style={{ maxHeight: `${setHeight}` }}>
              <div dangerouslySetInnerHTML={{ __html: props.content }}></div>
            </div>
          </section>
    )
    
  }
  
export default Accordion;