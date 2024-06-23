import { getStorageItem, setStorageItem } from './utils.js';
// getStorage will be invoked at another page like products page...
let store = getStorageItem('store');
// setupStore get invoked only in index.js
// once i have set up teh store in localStorage, i have available store
// the products throughout my projects
const setupStore = (products) => {
  store = products.map((product) => {
    const {
      id,
      fields: { featured, name, price, company, colors, image: img },
    } = product;
    const image = img[0].thumbnails.large;
    return { id, featured, name, price, company, colors, image };
  });
  setStorageItem('store', store);
};

const findProduct = (id) => {
  let product = store.find((product) => product.id === id);
  return product;
};

export { store, setupStore, findProduct };
