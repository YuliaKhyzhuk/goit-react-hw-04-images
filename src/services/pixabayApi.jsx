import axios from 'axios';

const API_KEY_PIXABAY = '15090936-31f0088bbfe3b64ca1007e23b';
axios.defaults.baseURL = 'https://pixabay.com/api/';
export const PER_PAGE = 12;

export const getImages = async (query, page) => {
  const options = new URLSearchParams ({
    key: API_KEY_PIXABAY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: PER_PAGE,
    page: page,
  })

  const { data } = await axios(`?${options}`);
  return data;
};
