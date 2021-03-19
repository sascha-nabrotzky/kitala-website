import React, { useState, useRef } from 'react';
import faqStyles from '../components/faq.module.scss';

function Accordion(props) {

    const [ currentClass, setClass ] = useState(`${faqStyles.texthidden}`);
    const [ setHeight, setHeightState ] = useState('');

    const content = useRef(null);

    function changeClass() {
      setClass(currentClass === `${faqStyles.texthidden}` ? `${faqStyles.active}` : `${faqStyles.texthidden}`);
      setHeightState(currentClass === `${faqStyles.texthidden}` ? `${content.current.scrollHeight}px` : '0px');
    }

    return (
          <section>
            <div className={faqStyles.question} onClick={changeClass}>
              <h3>{props.title}</h3>
            </div>
            <div className={currentClass} ref={content} style={{ maxHeight: `${setHeight}` }}>
              <p dangerouslySetInnerHTML={{ __html: props.content }}></p>
            </div>
            </section>
    )
    
  }
  
  export default Accordion;