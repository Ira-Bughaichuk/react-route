import axios from 'axios';

// const poductAPI = axios.create({
//   baseURL: 'https://62becfba0bc9b125615fd0f7.mockapi.io/api/products',
//   params: {
//     limit: 2,
//   },
// });
const poductAPI = axios.create({
  baseURL:
    'https://pixabay.com/api/?key=32790565-383584a211a893fe9ad088e3f&q=yellow+flowers&image_type=photo&pretty=true',
  params: {
    per_page: 5,
  },
});

export const getProduct = async ({ page }) => {
  const { data } = await poductAPI.get('', { params: { page } });
  return data.hits;
};
