import React, {useEffect} from 'react';
import './App.css';
import './Solar.css';

const jsonData = require('../data/MyData.json');

const Solar = ({ setSolar, setWind }) => {

    useEffect(() => {
        getLocationOptions();
        getCostOptions();
        getContractorOptions();
    }, [])

    function handleSolarOption() {
        setWind(false);
        setSolar(true);
    }

    function handleWindOption() {
        setSolar(false);
        setWind(true);
    }

    const locationMax = jsonData.WIND.LOCATION.length;
    const costMax = jsonData.WIND.COSTS.length;
    const contractorMax = jsonData.WIND.CONTRACTORS.length;


    function getLocationOptions() {
        let output = "";
        for (let i = 0; i < locationMax; i++) {
            if (i === 0) {
                output += "<option selected>" + jsonData.WIND.LOCATION[i] + "</option>";
            } else {
                output += "<option>" + jsonData.WIND.LOCATION[i] + "</option>";
            }
        }
        document.getElementById('locationSelect').innerHTML = output;
    }

    function getCostOptions() {
        let output = "";
        for (let i = 0; i < costMax; i++) {
            if (i === 0) {
                output += "<option selected>" + jsonData.WIND.COSTS[i] + "</option>";
            } else {
                output += "<option>" + jsonData.WIND.COSTS[i] + "</option>";
            }
        }
        document.getElementById('costSelect').innerHTML = output;
    }

    function getContractorOptions() {
        let output = "";
        for (let i = 0; i < contractorMax; i++) {
            if (i === 0) {
                output += "<option selected>" + jsonData.WIND.CONTRACTORS[i] + "</option>";
            } else {
                output += "<option>" + jsonData.WIND.CONTRACTORS[i] + "</option>";
            }
        }
        document.getElementById('contractorSelect').innerHTML = output;
    }
    
    return (
        <div>
            <h1>Smart Energy Overview</h1>
            <h4>SOURCE:</h4>
            <div id="showSolarForms">
                <b>LOCATION</b>
                <br />
                <form>
                    <select size="3" id="locationSelect"></select>
                </form>
                <b>COSTS</b>
                <br />
                <form>
                    <select size="3" id="costSelect"></select>
                </form>
                <b>CONTRACTORS</b>
                <br />
                <form>
                    <select size="3" id="contractorSelect"></select>
                </form>
            </div>
            <form id="choice">
                <select id="s1" size="3">
                    <option onClick={handleSolarOption}>SOLAR</option>
                    <option onClick={handleWindOption}>WIND</option>
                </select>
            </form>            
        </div>
    )
}

export default Solar;