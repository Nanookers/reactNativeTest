import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';

type Location = {
    name: string;
    region: string;
    country: string;
    localtime: string;
}

type CurrentWeather = {
    temp_c: number;
    temp_f: number;
    is_day: number;
}

interface WeatherResponse {
    location: Location;
    current: CurrentWeather;
}

export const FetchData = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState<WeatherResponse[]>([]);
    const getData = async() =>{
        const apiData: string = 'http://api.weatherapi.com/v1/current.json?key=3693e980d0a84d93a5d22532241406&q=55343'
        try{
            const response = await
            fetch(apiData, {
                mode: 'no-cors'
              });
            const json = await response.json()
            setData(json.movies);
            } catch (error) {
            console.error('This is what Im looking for:',error);
            } finally {
            setLoading(false);
            }
        console.log(data)
    }
    useEffect(() =>{
        getData();
    }, [])
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
