const express = require("express");
const app = express();
const port = 3000;
const { swaggerJsdocs: v1SwaggerDocs } = require("./swagger");

/**
 * @openapi
 * components:
 *  schemas:
 *   User:
 *    type: object
 *    properties:
 *      id:
 *        type: integer
 *        description: The auto-generated id of the user
 *      username:
 *        type: string
 *        description: The name of the user
 *      email:
 *        type: string
 *        description: The email of the user
 *      password:
 *        type: string
 *        description: The password of the user
 *      role:
 *        type: string
 *        description: The role of the user
 *   Store:
 *    type: object
 *    properties:
 *     id:
 *      type: integer
 *      description: The auto-generated id of the store
 *     name:
 *      type: string
 *      description: The name of the store
 *     rut:
 *      type: string
 *      description: The rut of the store
 *     industry:
 *      type: string
 *      description: The industry of the store
 *     address:
 *      type: string
 *      description: The address of the store
 * 
 *   Product:
 *    type: object
 *    properties:
 *     id:
 *      type: integer
 *      description: The auto-generated id of the product
 *     SKU:
 *      type: string
 *      description: The SKU of the product
 *     name:
 *      type: string
 *      description: The name of the product
 *     description:
 *      type: string
 *      description: The description of the product
 *     unit_price:
 *      type: integer
 *      description: The unit price of the product
 *     store_id:
 *      type: integer
 *      description: The store id of the product
 * 
 *   Sales:
 *    type: object
 *    properties:
 *     id:
 *      type: integer
 *      description: The auto-generated id of the sale
 *     payment_method:
 *      type: string
 *      description: The payment method of the sale
 *     sales_number:
 *      type: integer
 *      description: The sales number of the sale
 *     total_price:
 *      type: integer
 *      description: The total price of the sale
 *     date:
 *      type: string
 *      description: The date of the sale
 *   
 * @openapi
 * /users/{id}:
 *  get:
 *    summary: Get a user by id
 *    tags: [Users]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: The id of the user
 *    responses:
 *      200:
 *        description: The user description by id
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/User'
 *      404:
 *        description: The user was not found
 * 
 * /users:
 *  post:
 *   summary: Create a new user
 *   tags: [Users]
 *   requestBody:
 *    required: true
 *    content:
 *     application/json:
 *      schema:
 *       type: object
 *       $ref: '#/components/schemas/User'
 *   responses:
 *    200:
 *     description: The user was successfully created
 *    404:
 *     description: The user was not found
 *    500:
 *     description: Some server error
 * 
 * 
 * @openapi
 * /users/{id}:
 *  put:
 *   summary: Update a user by id
 *   tags: [Users]
 *   parameters:
 *      - in: path
 *        name: id
 *        schema:
 *         type: integer
 *        required: true
 *        description: The id of the user
 *   requestBody:
 *    required: true
 *    content:
 *     application/json:
 *      schema:
 *       type: object
 *       $ref: '#/components/schemas/User'
 *   responses:
 *    200:
 *     description: The user was successfully updated
 *    404:
 *     description: The user was not found
 *    500:
 *     description: Some server error
 *
 * @openapi
 * /users/{id}:
 *  delete:
 *   summary: Delete a user by id
 *   tags: [Users]
 *   parameters:
 *    - in: path
 *      name: id
 *      schema:
 *        type: integer
 *      required: true
 *      description: The id of the user
 *   responses:
 *    200:
 *     description: The user was successfully deleted
 *    404:
 *     description: The user was not found
 *    500:
 *     description: Some server error
 * 
 * @openapi
 * /stores/{id}:
 *  get:
 *   summary: Get a store by id
 *   tags: [Stores]
 *   parameters:
 *    - in: path
 *      name: id
 *      schema:
 *       type: integer
 *      required: true
 *      description: The id of the store
 *   responses:
 *    200:
 *     description: The store description by id
 *     content:
 *      application/json:
 *       schema:
 *        type: object
 *        $ref: '#/components/schemas/Store'
 *    404:
 *     description: The store was not found
 *    500:
 *     description: Some server error
 * 
 * /stores:
 *  post:
 *   summary: Create a new store
 *   tags: [Stores]
 *   requestBody:
 *    required: true
 *    content:
 *     application/json:
 *      schema:
 *       type: object
 *       $ref: '#/components/schemas/Store'
 *   responses:
 *    200:
 *     description: The store was successfully created
 *    404:
 *     description: The store was not found
 *    500:
 *     description: Some server error
 * 
 * @openapi
 * /stores/{id}:
 *  put:
 *   summary: Update a store by id
 *   tags: [Stores]
 *   parameters:
 *    - in: path
 *      name: id
 *   schema:
 *    type: integer
 *   required: true
 *   description: The id of the store
 *   requestBody:
 *    required: true
 *    content:
 *     application/json:
 *      schema:
 *       type: object
 *       $ref: '#/components/schemas/Store'
 *   responses:
 *    200:
 *     description: The store was successfully updated
 *    404:
 *     description: The store was not found
 *    500:
 *     description: Some server error
 * 
 * @openapi
 * /stores/{id}:
 *  delete:
 *   summary: Delete a store by id
 *   tags: [Stores]
 *   parameters:
 *    - in: path
 *      name: id
 *      schema:
 *       type: integer
 *      required: true
 *      description: The id of the store
 *   responses:
 *    200:
 *     description: The store was successfully deleted
 *    404:
 *     description: The store was not found
 *    500:
 *     description: Some server error
 * 
 * 
 * @openapi
 * /products/{id}:
 *  get:
 *   summary: Get a product by id
 *   tags: [Products]
 *   parameters:
 *    - in: path
 *      name: id
 *      schema:
 *       type: integer
 *      required: true
 *      description: The id of the product
 *   responses:
 *    200:
 *     description: The product description by id
 *     content:
 *      application/json:
 *       schema:
 *        type: object
 *        $ref: '#/components/schemas/Product'
 *    404:
 *     description: The product was not found
 *    500:
 *     description: Some server error
 * 
 * /products:
 *  post:
 *   summary: Create a new product
 *   tags: [Products]
 *   requestBody:
 *    required: true
 *    content:
 *     application/json:
 *      schema:
 *       type: object
 *       $ref: '#/components/schemas/Product'
 *     responses:
 *      200:
 *       description: The product was successfully created
 *      404:
 *       description: The product was not found
 *      500:
 *       description: Some server error
 * 
 * 
 * @openapi
 * /products/{id}:
 *  put:
 *   summary: Update a product by id
 *   tags: [Products]
 *   parameters:
 *    - in: path
 *      name: id
 *      schema:
 *       type: integer
 *      required: true
 *      description: The id of the product
 *   requestBody:
 *    required: true
 *    content:
 *     application/json:
 *      schema:
 *       type: object
 *       $ref: '#/components/schemas/Product'
 *   responses:
 *    200:
 *     description: The product was successfully updated
 *    404:
 *     description: The product was not found
 *    500:
 *     description: Some server error
 * 
 * @openapi
 * /products/{id}:
 *  delete:
 *   summary: Delete a product by id
 *   tags: [Products]
 *   parameters:
 *    - in: path
 *      name: id
 *      schema:
 *       type: integer
 *      required: true
 *      description: The id of the product
 *   responses:
 *    200:
 *     description: The product was successfully deleted
 *    404:
 *     description: The product was not found
 *    500:
 *     description: Some server error
 * 
 * @openapi
 * /sales/{id}:
 *  get:
 *   summary: Get a sale by id
 *   tags: [Sales]
 *   parameters:
 *    - in: path
 *      name: id
 *      schema:
 *       type: integer
 *      required: true
 *      description: The id of the sale
 *   responses:
 *    200:
 *     description: The sale description by id
 *     content:
 *      application/json:
 *        schema:
 *         type: object
 *         $ref: '#/components/schemas/Sales'
 *    404:
 *     description: The sale was not found
 *    500:
 *     description: Some server error
 * 
 * 
 * /sales:
 *  post:
 *   summary: Create a new sale
 *   tags: [Sales]
 *   requestBody:
 *    required: true
 *    content:
 *     application/json:
 *      schema:
 *       type: object
 *       $ref: '#/components/schemas/Sales'
 *   responses:
 *    200:
 *     description: The sale was successfully created
 *    404:
 *     description: The sale was not found
 *    500:
 *     description: Some server error
 * 
 * @openapi
 * /sales/{id}:
 *  put:
 *   summary: Update a sale by id
 *   tags: [Sales]
 *   parameters:
 *    - in: path
 *      name: id
 *      schema:
 *       type: integer
 *      required: true
 *      description: The id of the sale
 *   requestBody:
 *    required: true
 *    content:
 *     application/json:
 *      schema:
 *       type: object
 *       $ref: '#/components/schemas/Sales'
 *   responses:
 *    200:
 *     description: The sale was successfully updated
 *    404:
 *     description: The sale was not found
 *    500:
 *     description: Some server error
 * 
 * @openapi
 * /sales/{id}:
 *  delete:
 *   summary: Delete a sale by id
 *   tags: [Sales]
 *   parameters:
 *    - in: path
 *      name: id
 *      schema:
 *       type: integer
 *      required: true
 *      description: The id of the sale
 *   responses:
 *    200:
 *     description: The sale was successfully deleted
 *    404:
 *     description: The sale was not found
 *    500:
 *     description: Some server error
 * 
 *   
 *   
 */

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
  v1SwaggerDocs(app, port);
});



