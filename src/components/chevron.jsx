import React from 'react';

function Chevron(props) {
    return (
        <div>
            <svg 
                className={props.className}
                height={props.height}
                width={props.width}
                viewBox="0 0 65 65"
                xmlns="http://www.w3.org/2000/svg"    
            >
                <path d="M28.8,14.4C28,13.1 26.4,12.8 25.1,13.6C23.8,14.4 23.5,16 24.3,17.3L34.2,31.7L24.3,46.1C23.5,47.4 23.8,49 25.1,49.8C25.6,50.1 26.2,50.3 26.7,50.3C27.5,50.3 28.3,49.8 28.8,49.2L39.5,33.7C40.3,32.6 40.3,31 39.5,29.7L28.8,14.4Z" fill={props.fill}/>
                <path d="M32,0C14.4,0 0,14.4 0,32C0,49.6 14.4,64 32,64C49.6,64 64,49.6 64,32C64,14.4 49.6,0 32,0ZM32,58.7C17.3,58.7 5.3,46.7 5.3,32C5.3,17.3 17.3,5.3 32,5.3C46.7,5.3 58.7,17.3 58.7,32C58.7,46.7 46.7,58.7 32,58.7Z" fill={props.fill}/>
                
            </svg>
        </div>
    );
}

export default Chevron;