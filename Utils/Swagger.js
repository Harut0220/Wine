import swaggerJSDoc from "swagger-jsdoc";

export const options = {
  explorer: true,
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Santa",
      version: "1.0.0",
      description: "Student Project:Secret Santa App APIs",
    },
    servers: [{ url: "http://localhost:5003/" }],
    components: {
      request: {
        Wine: {
          type: "object",
          properties: {
            _id: { type: "string", description: "Product ID" },
            brand: { type: "string", description: "Name Brand" },
            name: { type: "string", description: "Product Name" },
            type: { type: "string", description: "Product Type" },
            color: { type: "string", description: "Product Color" },
            img: { type: "string", description: "Product Image Path" },
            rating: { type: "number", description: "Rating Product" },
            stock: { type: "number", description: "Product Stock" },
            article: { type: "string", description: "Product Number" },
            country: { type: "string", description: "Country of Manufacture" },
            region: { type: "string", description: "Region of Manufacture" },
            volume: {
              type: "string",
              description: "The Contents of the Bottle",
            },
            alcohol: { type: "string", description: "Alcohol Content" },
            price: { type: "number", description: "Product Price" },
            sales: { type: "number", description: "Sales Quantity" },
            desc: { type: "string", description: "Product Description" },
          },
          example: {
            _id: "642597b2000bd52ae7a18d54",
            brand: "Koor",
            name: "red sweet wine",
            type: "sweet",
            color: "red",
            img: "/images/koor_red_sweet_wine.png",
            rating: 5,
            stock: 5,
            article: "000000",
            country: "Armenia",
            region: "Areni",
            volume: "750ml",
            alcohol: "55%",
            price: 9.52,
            sales: 10,
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a venenatis ex. Praesent ut diam sit amet ipsum hendrerit lacinia nec ut turpis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed sollicitudin lacus sed quam laoreet, et elementum diam varius. Etiam eu placerat libero.\nSuspendisse a venenatis ex. Praesent ut diam sit amet ipsum hendrerit lacinia nec ut turpis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed sollicitudin lacus sed quam laoreet, et elementum diam varius. Etiam eu placerat libero.",
          },
        },
      },
      schemas: {
        Wine: {
          type: "object",
          properties: {
            _id: { type: "string", description: "required" },
            brand: { type: "string", description: "required" },
            name: { type: "string", description: "required" },
            type: { type: "string", description: "required" },
            color: { type: "string", description: "required" },
            img: { type: "string", description: "required" },
            rating: { type: "number", description: "required" },
            stock: { type: "number", description: "required" },
            article: { type: "string", description: "required" },
            country: { type: "string", description: "required" },
            region: { type: "string", description: "required" },
            volume: {
              type: "string",
              description: "required",
            },
            alcohol: { type: "string", description: "required" },
            price: { type: "number", description: "required" },
            sales: { type: "number", description: "required" },
            desc: { type: "string", description: "required" },
          },
        },
      },
    },
  },
  apis: ["./Router/*.js"],
};

export const specs = swaggerJSDoc(options);
