import React from 'react';
// import $ from "jquery"
import { useEffect } from "react";
import $ from "jquery"
const FooterBar = () => {


  

    return (
        <>

            <div className="space10"></div>

            <div className="footer">
                <div className="container">
                    <div className="row">


                        <div className="col-md-3 col-sm-3">
                            <h3 className="heading-center">Heading 1</h3>

                        </div>
                        <div className="col-md-3 col-sm-3">
                            <h3 className="heading-center">Heading 2</h3>

                        </div>
                        <div className="col-md-3 col-sm-3">
                            <h3 className="heading-center">Heading 3</h3>

                        </div>
                        <div className="col-md-3 col-sm-3">
                            <h3 className="heading-center">Heading 4</h3>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default FooterBar
