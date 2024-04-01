import axios from "axios";

export async function getPicture(query) {
const baseUrl = 'https://pixabay.com/api/';
const keyApi = '43059548-3adc942b003e7790296d060a7';

const queryParams = new URLSearchParams({
    key: keyApi,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 40,
});
try { const res =  await fetch(`${baseUrl}?${queryParams}`)
        if (!res.ok) {
            throw new Error("error");
    } 
    const data = await res.json();
    console.log(data)
    return data;
} catch(error) {
    console.log("error");
    } 
}