import axios from "axios";
const URL ='https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';


const options = {
  params: {
    bl_latitude: '11.847676',
    tr_latitude: '12.838442',
    bl_longitude: '109.095887',
    tr_longitude: '109.149359',
  },
  headers: {
    'X-RapidAPI-Key': '4d62d6d398msh187c352ed902f6bp12ecabjsna4b14070eb23',
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
  }
};

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });

// end 
export const getPlacesData = async () => {
    try {
     
      const { data: { data } } = await axios.get(URL, options);
      return data;
        }
     catch (error) {
      console.log(error);
    }
  };