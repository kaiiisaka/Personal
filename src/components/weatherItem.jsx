import React from 'react';

const WeatherItem = (props) => {
    return (
        <div style={{border: '1px solid black'}}>
            <strong> {props.weather.name}</strong>
        </div>
    );
};

export default WeatherItem;