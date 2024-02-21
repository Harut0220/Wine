import Product from "../Model/ProductModel.js";

const productService = {
  getById: async (id)=>{
    try {
      const wineById=await Product.findOne({_id:id})

      return wineById
    } catch (error) {
      console.error(error)
    }
  },
  getAll: async (type, brand, rating, priceMin, priceMax) => {
    
    try {
      if (type && brand && rating) {
        const products = await Product.find({
          type: type,
          brand: brand,
          rating: rating,
        });
        if (priceMax) {
          const resultat = products.filter((prod) => {
            return prod.price <= priceMax && prod.price >= price;
          });
          return resultat;
        } else {
          return products;
        }
      }
      if (type && brand) {
        const typeSearch = type.search(",");
        const brandSearch = brand.search(",");
        const typeArray = type.split(",");
        const brandArray = brand.split(",");
        let result;
        let res = [];
        let resArray = [];
        let resultArray = [];

        //type ev brand mekakan
        if (brandSearch === -1 && typeSearch === -1) {
          const product = await Product.find({ type: type, brand: brand });

          if (priceMax) {
            result = product.filter((prod) => {
              return prod.price <= priceMax && prod.price >= priceMin;
            });
            return result;
          } else {
            return product;
          }
        }
        //type ev brand mekakan

        //type shat lineluc
        if (brandSearch === -1 && typeSearch !== -1) {
          for (let i = 0; i < typeArray.length; i++) {
            const products = await Product.find({
              type: typeArray[i],
              brand: brand,
            });
            resultArray.push(products);
          }
          resultArray.map((prod) => {
            result = prod.concat(result);
          });
          result.pop();
          if (priceMax) {
            const resultat = result.filter((prod) => {
              return prod.price <= priceMax && prod.price >= priceMin;
            });
            return resultat;
          } else {
            return result;
          }
        }
        //type shat lineluc

        //brand shat lineluc
        if (typeSearch === -1 && brandSearch !== -1) {
          for (let i = 0; i < brandArray.length; i++) {
            const products = await Product.find({
              brand: brandArray[i],
              type: type,
            });
            if (products.length !== 0) {
              resultArray.push(products);
            }
          }
          resultArray.map((prod) => {
            result = prod.concat(result);
          });
          result.pop();
          if (priceMax) {
            const resultat = result.filter((prod) => {
              return prod.price <= priceMax && prod.price >= priceMin;
            });
            return resultat;
          } else {
            return result;
          }
        }
        //brand shat lineluc

        //erkusnel shat lineluc
        if (brandSearch !== -1 && typeSearch !== -1) {
          //brand aveli mec qan type
          if (brandArray.length > typeArray.length) {
            for (let i = 0; i < brandArray.length; i++) {
              const products = await Product.find({
                brand: brandArray[i],
              });

              result = products.concat(result);
            }
            result.pop();
            for (let i = 0; i < typeArray.length; i++) {
              for (let z = 0; z < result.length; z++) {
                if (result[z].type === typeArray[i]) {
                  resArray.push(result[z]);
                }
              }
            }
            if (priceMax) {
              const resultat = resArray.filter((prod) => {
                return prod.price <= priceMax && prod.price >= priceMin;
              });
              return resultat;
            } else {
              return resArray;
            }
          }
        }
        //brand aveli mec qan type

        //type aveli mec qan brand
        if (typeArray.length > brandArray.length) {
          for (let i = 0; i < typeArray.length; i++) {
            const products = await Product.find({
              type: typeArray[i],
            });

            result = products.concat(result);
          }
          result.pop();
          for (let i = 0; i < brandArray.length; i++) {
            for (let z = 0; z < result.length; z++) {
              if (result[z].brand === brandArray[i]) {
                resArray.push(result[z]);
              }
            }
          }
          if (priceMax) {
            const resultat = resArray.filter((prod) => {
              return prod.price <= priceMax && prod.price >= priceMin;
            });
            return resultat;
          } else {
            return resArray;
          }
        }
        //type aveli mec qan brand

        //brand u type havasar en
        if (typeArray.length === brandArray.length) {
          for (let i = 0; i < typeArray.length; i++) {
            const products = await Product.find({ type: typeArray[i] });
            resArray = products.concat(resArray);
          }
          for (let i = 0; i < brandArray.length; i++) {
            for (let z = 0; z < resArray.length; z++) {
              if (resArray[z].brand === brandArray[i]) {
                res.push(resArray[z]);
              }
            }
          }
          
          if (priceMax) {
            const resultat = res.filter((prod) => {
              return prod.price <= priceMax && prod.price >= priceMin;
            });
            return resultat;
          } else {
            return res;
          }
        }

        //erkusnel shat lineluc

        // if(typeSearch!==-1&&typeArray.length>brandArray.length){

        //   for(let i=0;i<typeArray.length;i++){
        //     const products=await Product.find({type:typeArray[i]})
        //     const filterdata=brandArray.map((pro)=>{
        //       return products.filter((product)=>{
        //       return product.brand===pro
        //     })
        //     })

        //   }

        //   return filterdata
        // }
      }
      if (brand && rating) {
        const products = await Product.find({
          brand: brand,
          rating: rating,
        });
        if (priceMax) {
          const resultat = products.filter((prod) => {
            return prod.price <= priceMax && prod.price >= priceMin;
          });
          return resultat;
        } else {
          return products;
        }
      }
      if (type && rating) {
        const products = await Product.find({
          type: type,
          rating: rating,
        });
        if (priceMax) {
          const resultat = products.filter((prod) => {
            return prod.price <= priceMax && prod.price >= priceMin;
          });
          return resultat;
        } else {
          return products;
        }
      }

      if (brand) {
        let productArray = [];
        let result;
        // console.log(brand);
        const indexSearch = brand.search(",");
        if (indexSearch !== -1) {
          const brandArray = brand.split(",");
          for (let i = 0; i < brandArray.length; i++) {
            const products = await Product.find({ brand: brandArray[i] });

            productArray.push(products);
          }

          for (let i = 0; i < productArray.length; i++) {
            result = productArray[i].concat(result);
          }
        } else {
          const products = await Product.find({ brand: brand });
          if (priceMax) {
            const resultat = products.filter((prod) => {
              return prod.price <= priceMax && prod.price >= priceMin;
            });
            return resultat;
          } else {
            return products;
          }
        }
        result.pop();
        if (priceMax) {
          const resultat = result.filter((prod) => {
            return prod.price <= priceMax && prod.price >= priceMin;
          });
          return resultat;
        } else {
          return result;
        }
      }

      if (type && !brand) {
        const typeSearch = type.search(",");
        if (typeSearch === -1) {
          const products = await Product.find({ type: type });
          if (priceMax) {
            const resultat = products.filter((prod) => {
              return prod.price <= price;
            });
            return resultat;
          } else {
            return products;
          }
        } else {
          let result;
          const typeArray = type.split(",");
          for (let i = 0; i < typeArray.length; i++) {
            const products = await Product.find({ type: typeArray[i] });
            result = products.concat(result);
          }
          result.pop();
          if (priceMax) {
            const resultat = result.filter((prod) => {
              return prod.price <= priceMax && prod.price >= priceMin;
            });
            return resultat;
          } else {
            return result;
          }
        }
      }
      if (rating && !brand) {
        const products = await Product.find({ rating: rating });
        if (priceMax) {
          const resultat = products.filter((prod) => {
            return prod.price <= priceMax && prod.price >= priceMin;
          });
          return resultat;
        } else {
          return products;
        }
      }
    } catch (error) {
      console.error("Products not found");
    }
  },
};

export default productService;
