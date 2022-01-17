import React from 'react';
import preloader from "../../../images/spinner-loader.svg";

export const Preloader = () => {
    return (
        <div>
            <img src={preloader} alt={'preloader'}/>
        </div>
    );
};
