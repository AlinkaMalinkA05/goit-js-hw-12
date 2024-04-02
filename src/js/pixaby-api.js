import axios from "axios";

export async function getPicture(query, page = 1, per_page = 15) {
const baseUrl = 'https://pixabay.com/api/';
const keyApi = '43059548-3adc942b003e7790296d060a7';

const queryParams = {
    key: keyApi,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page,
    per_page,
    };
try { const res =  await axios.get(`${baseUrl}?${queryParams}`)
   const data = res.data;
   console.log(data)
    return data;
} catch(error) {
  console.log("error");
    } 
}