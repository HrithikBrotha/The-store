 
const allProductsUrl = 'https://course-api.com/javascript-store-products'
// temporary single product
// 'https://course-api.com/javascript-store-single-product?id=rec43w3ipXvP28vog'
const singleProductUrl =
  'https://course-api.com/javascript-store-single-product'

const getElement = (selection) => {
  const element = document.querySelector(selection)
  if (element) return element
  throw new Error(`Please check "${selection}" selector, no such element exist`)
}

const formatPrice = () => {}

//LOCAL STORAGE! 

const getStorageItem = (item) => {
              let Storageitem = localStorage.getItem(item);
              if(Storageitem){
                            Storageitem = JSON.parse(localStorage.getItem(item))
                            // get back the real values... 
              }
              else {
                            Storageitem = [];
              }
              return Storageitem;
}

const setStorageItem = (name , item) => {
              localStorage.setItem(name,JSON.stringify(item)) 
              //array of string ...
}

export {
  allProductsUrl,
  singleProductUrl,
  getElement,
  formatPrice,
  getStorageItem,
  setStorageItem,
}
