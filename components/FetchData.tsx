import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Text, View} from 'react-native';


export const FetchData = () => {
    const [isLoading, setLoading] = useState(true);
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
    
        let zipCode = location;
        const apiKey: string = '3693e980d0a84d93a5d22532241406';
        const apiUrl: string = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${zipCode}`;

        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Call failed');
                }
                return response.json();
            })
            .then(data => {
                setWeatherData(data);
                console.log('Weather data:', data);
            })
            .catch(error => {
                console.error('Error in Fetch', error);
                setWeatherData(null); 
            });

        console.log('Current weatherData state:', weatherData);
        console.log('Current location:', location);

    }, [location]); // useEffect runs when location changes

  return (
    <View style={{flex: 1, padding: 24}}>
    {isLoading ? (
      <ActivityIndicator />
    ) : (
        <Text>'This is working'</Text>
    )}
  </View>
  )
}
