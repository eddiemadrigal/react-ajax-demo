import React from 'react';
import './App.css';
import './DefaultForm.css'; 

const DefaultForm = ({setSolar, setWind, setShowDefault}) => {

    function handleSolarOption() {
        setWind(false);
        setShowDefault(false);
        setSolar(true);
    }

    function handleWindOption() {
        setWind(true);
        setShowDefault(false);
        setSolar(false);
    }

    return (
        <div>            
            <h1>Smart Energy Overview</h1>
            <h4>SOURCE:</h4>
            <div id="showForms"></div>
            <form id="choice">
                <select id="s1" size="3">
                    <option onClick={handleSolarOption}>SOLAR</option>
                    <option onClick={handleWindOption}>WIND</option>
                </select>
            </form>
        </div>
    )
}

export default DefaultForm;