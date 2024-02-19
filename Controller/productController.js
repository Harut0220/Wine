import productService from "../Service/ProductService.js";

const productController = {
  getAll: async (req, res) => {
    try {
      const { type, brand, rating, pricemax, pricemin } = req.query;
      const b = [];
      const ratingString = Number(rating);
      const priceNumberMax = Number(pricemax);
      const priceNumberMin = Number(pricemin);
      const filtrData = await productService.getAll(
        type,
        brand,
        ratingString,
        priceNumberMin,
        priceNumberMax
      );
      // console.log(filtrData);

      if (filtrData[0] === undefined) {
        res.status(200).send({ message: "Product Not Found" });
      }
      res.status(200).send(filtrData);
    } catch (error) {
      console.error("Internal Server Error");
    }
  },
};

export default productController;
