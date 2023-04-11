import axios from 'axios';

import { currentWeatherURL } from '../../api';
import { startLoadingWeather, setWeather } from '../'
import { getCurrentLocation } from '../../utils'

export const getWeather = () => {
    return async( dispatch ) => {

        dispatch( startLoadingWeather() );

        let data = '';
        let pos = {};

        try {
            pos = await getCurrentLocation();   
        } catch (error) {
            dispatch( setWeather({ data: {}, error: error }) );            
        }

        await axios.get( `${currentWeatherURL}&lat=${pos.latitude}&lon=${pos.longitude}&units=metric` )
            .then ( (response) => {
                dispatch( setWeather({ data: response.data, error: '' }) );
            })
            .catch (( error ) => {
                dispatch( setWeather({ data: {}, error: error }) );
            })
        
    }
}

