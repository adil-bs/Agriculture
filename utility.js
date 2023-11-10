import { createContext } from "react";
export const NewsContext = createContext()

export function getRelativeTime(dateString) {
    const date = new Date(dateString); 
    const now = new Date(); 
    
    var elapsed = now - date; 
    
    const minute = 60*1000 ;
    const hour = 60 * minute;
    const day = 24 * hour;
    const month = 30 * day;
    const year = 365 * day;
 
    let relativeTime;
    if (elapsed < minute) 
      relativeTime =  Math.round(elapsed/1000) + ' second';
    else if (elapsed < hour) 
      relativeTime = Math.round(elapsed / minute) + ' minute';
    else if (elapsed < day) 
      relativeTime = Math.round(elapsed / hour) + ' hour';
    else if (elapsed < month) 
      relativeTime = Math.round(elapsed / day) + ' day';
    else if (elapsed < year) 
      relativeTime = Math.round(elapsed / month) + ' month';
    else 
      return new Date(dateString)
      .toLocaleDateString(undefined, {year:'numeric',month:'long',day:'numeric'}); 

    return relativeTime + (relativeTime.startsWith('1 ') ? ' ago' : 's ago') 
}
export const weatherCode = {
  "0"   : "Unknown",
  "1000": {
    img:require('./assets/weatherIcons/1000.png'),
    name:"Clear, Sunny"
  },
  "1100": {
    img:require('./assets/weatherIcons/1100.png'),
    name:"Mostly Clear"
  },
  "1101": {
    img:require('./assets/weatherIcons/1101.png'),
    name:"Partly Cloudy"
  },
  "1102": {
    img:require('./assets/weatherIcons/1102.png'),
    name:"Mostly Cloudy"
  },
  "1001": {
    img:require('./assets/weatherIcons/1001.png'),
    name:"Cloudy"
  },
  "2000": {
    img:require('./assets/weatherIcons/2000.png'),
    name:"Fog"
  },
  "2100": {
    img:require('./assets/weatherIcons/2100.png'),
    name:"Light Fog"
  },
  "4000": {
    img:require('./assets/weatherIcons/4000.png'),
    name:"Drizzle"
  },
  "4001": {
    img:require('./assets/weatherIcons/4001.png'),
    name:"Rain"
  },
  "4200": {
    img:require('./assets/weatherIcons/4200.png'),
    name:"Light Rain"
  },
  "4201": {
    img:require('./assets/weatherIcons/4201.png'),
    name:"Heavy Rain"
  },
  "5000": {
    img:require('./assets/weatherIcons/5000.png'),
    name:"Snow"
  },
  "5001": {
    img:require('./assets/weatherIcons/5001.png'),
    name:"Flurries"
  },
  "5100": {
    img:require('./assets/weatherIcons/5100.png'),
    name:"Light Snow"
  },
  "5101": {
    img:require('./assets/weatherIcons/5101.png'),
    name:"Heavy Snow"
  },
  "6000": {
    img:require('./assets/weatherIcons/6000.png'),
    name:"Freezing Drizzle"
  },
  "6001": {
    img:require('./assets/weatherIcons/6001.png'),
    name:"Freezing Rain"
  },
  "6200": {
    img:require('./assets/weatherIcons/6200.png'),
    name:"Light Freezing Rain"
  },
  "6201": {
    img:require('./assets/weatherIcons/6201.png'),
    name:"Heavy Freezing Rain"
  },
  "7000": {
    img:require('./assets/weatherIcons/7000.png'),
    name:"Ice Pellets"
  },
  "7101": {
    img:require('./assets/weatherIcons/7101.png'),
    name:"Heavy Ice Pellets"
  },
  "7102": {
    img:require('./assets/weatherIcons/7102.png'),
    name:"Light Ice Pellets"
  },
  "8000": {
    img:require('./assets/weatherIcons/8000.png'),
    name:"Thunderstorm"
  },
}