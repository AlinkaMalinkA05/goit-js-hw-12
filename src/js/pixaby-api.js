export function getPicture(query) {
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

    return fetch(`${baseUrl}?${queryParams}`).then(res => {
        if (!res.ok) {
            throw new Error("error");
        }
        return res.json();
    })
        .then((data) => {
            console.log(data)
            return data
        }).catch((error) => console.log("error"));
}