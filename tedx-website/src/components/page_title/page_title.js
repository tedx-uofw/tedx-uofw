import React from 'react';
import './page_title.css'

function PageTitle(props) {
    return (
        <div className="page-title-container">
            <h1 className='page-title-heading'>{props.title}</h1>
            <hr className='page-title-divider'></hr>
        </div>
    );
}

export default PageTitle;