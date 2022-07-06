import React from 'react';
import Sidebar from '../layout/Sidebar/Sidebar';
// import Footer from '../Footer';
// import '../Content.css'

export default function Layout(props) {
    return (
        <div >
            <body>
                <div id="viewport">
                    <div style={{display: "flex"}}>
                    <Sidebar />

                    {props.children}
                    </div>
                </div>
            </body>
        </div>
    );

}