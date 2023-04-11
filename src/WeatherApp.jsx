import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { Loading } from './UI';
import { getWeather } from './store';

export const WeatherApp = () => {

    const { data, isLoading } = useSelector( state => state.weather );
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch( getWeather() );  
    }, []);

    if ( isLoading ) return (<Loading />)

    return (
        <>
        
        <h1>Ciudad: { data?.name }</h1>
        <h3>Temperatura: { data?.main?.temp }ºC</h3>
        <h3>Real feel: { data?.main?.feels_like }ºC</h3>
        
        </>
    )
}
