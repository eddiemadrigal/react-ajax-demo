import React, {useEffect} from 'react';
import './App.css';
import './Solar.css';

const Solar = ({ setSolar, setWind, jsonData }) => {

    const roofMax = jsonData.SOLAR.ROOF.length;
    const costMax = jsonData.SOLAR.COSTS.length;
    const contractorMax = jsonData.SOLAR.CONTRACTORS.length;

    function getRoofOptions() {
        let output = "";
        for (let i = 0; i < roofMax; i++) {
            if (i === 0) {
                output += "<option selected>" + jsonData.SOLAR.ROOF[i] + "</option>";
            } else {
                output += "<option>" + jsonData.SOLAR.ROOF[i] + "</option>";
            }
        }
        document.getElementById('roofSelect').innerHTML = output;
    }

    function getCostOptions() {
        let output = "";
        for (let i = 0; i < costMax; i++) {
            if (i === 0) {
                output += "<option selected>" + jsonData.SOLAR.COSTS[i] + "</option>";
            } else {
                output += "<option>" + jsonData.SOLAR.COSTS[i] + "</option>";
            }
        }
        document.getElementById('costSelect').innerHTML = output;
    }
    
    function getContractorOptions() {
        let output = "";
        for (let i = 0; i < contractorMax; i++) {
            if (i === 0) {
                output += "<option selected>" + jsonData.SOLAR.CONTRACTORS[i] + "</option>";
            } else {
                output += "<option>" + jsonData.SOLAR.CONTRACTORS[i] + "</option>";
            }
        }
        document.getElementById('contractorSelect').innerHTML = output;
    }

    useEffect(() => {        
        getRoofOptions();        
        getCostOptions();        
        getContractorOptions();
    })

    function handleSolarOption() {
        setWind(false);
        setSolar(true);
    }

    function handleWindOption() {
        setSolar(false);
        setWind(true);
    }
    
    return (
        <div>
            <h1>Smart Energy Overview</h1>
            <h4>SOURCE:</h4>
            <div id="showSolarForms">
                <b>ROOF</b>
                <br />
                <form>
                    <select size="3" id="roofSelect"></select>
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