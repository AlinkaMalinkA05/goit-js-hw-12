import axios from 'axios';

const baseUrl = 'https://pixabay.com/api/';
const keyApi = '43059548-3adc942b003e7790296d060a7';

export async function getPicture(query, page = 1, perPage = 15) {
  try {
    const response = await axios.get(baseUrl, {
      params: {
        key: keyApi,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: perPage,
        page: page,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Error fetching pictures from Pixabay API');
  }
}
