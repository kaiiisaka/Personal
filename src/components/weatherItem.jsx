import React from 'react';

const WeatherItem = (props) => {
    return (
        <div className='WeatherItem'>
            <strong style={{width: 'fit-content'}}>
                {props.weatherInfo.name},
                <span> {Math.trunc(props.weatherInfo.main.temp)}°C</span>
            </strong>
            {/*<p style={{height: 'fit-content', marginBottom: '0', width: 'fit-content'}}>{Math.trunc(props.weatherInfo.main.temp)}°C</p>*/}
            {props.weatherInfo.weather.map((weath) =>
                <p style={{marginBottom: '0', marginRight: '5px'}} key={Date.now()}>
                    {Object.values(weath.description)}</p>)}
        </div>
    );
};

export default WeatherItem;