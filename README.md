# React + TypeScript + Vite

# 1. Product item

- Endpoint: `/product`
- Method: `GET`
- Search params:
  - `categoryId=id`
    - Example: `/product?categoryId=2`
  - `productTypeId=id1-id2-id3-id4-...-idn`
    - Example: `/product?productTypedId=1-2-6-29-42`
  - `sort=(ascending || descending)`
    - Example:
      - `/product?sort=ascending`
      - `/product?sort=descending`
- Combine all of search params, Example:
  - `/product?categoryId=2&productTypeId=2-3-9-34-56&sort=ascending`

### Response json

```json
[
  {
    // product table
    "id": 1,
    "name": "...", // string
    "currentPrice": "...", // double
    "lastPrice": "...", // double
    "quantity": "...", // int
    "sold": "...", // int

    //productImage table
    "productImage": [
      {
        "imageURL": "..." // string
      },
      {
        "imageURL": "..." // string
      },
      {
        "imageURL": "..." // string
      }
      // ...
    ]
  },
  {
    // product table
    "id": 2,
    "name": "...", // string
    "currentPrice": "...", // double
    "lastPrice": "...", // double
    "quantity": "...", // int
    "sold": "...", // int

    // productImage table
    "productImage": [
      {
        "imageURL": "..." // string
      },
      {
        "imageURL": "..." // string
      },
      {
        "imageURL": "..." // string
      }
      // ...
    ]
  }
  // ...
]
```

# 2. Product group

- Endpoint: `/productGroup`
- Method: `GET`
- Search params:
  - `categoryId=id`
    - Example: `/productGroup?categoryId=2`

### Response json

```json
[
  {
    // productGroup table
    "id": 1,
    "title": "...", // string

    // productType table
    "productType": [
      {
        "id": 1,
        "title": "...", // string
        "description": "..." // string
      },
      {
        "id": 2,
        "title": "...", // string
        "description": "..." // string
      },
      {
        "id": 3,
        "title": "...", // string
        "description": "..." // string
      }
      // ...
    ]
  },
  {
    // productGroup table
    "id": 2,
    "title": "...", // string

    // productType table
    "productType": [
      {
        "id": 1,
        "title": "...", // string
        "description": "..." // string
      },
      {
        "id": 2,
        "title": "...", // string
        "description": "..." // string
      },
      {
        "id": 3,
        "title": "...", // string
        "description": "..." // string
      }
      // ...
    ]
  }
  // ...
]
```

# 3. User authentication

## 3.1. Login

- Endpoint: `/user/login`
- Method: `POST`

### Request body

```json
{
  "email": "...", // string
  "password": "..." //string
}
```

### Response

#### If email and password is `correct`

- Status: `200`

```json
{
  "token": "...", // string
  "refreshToken": "..." // string
}
```

#### If email or password is `incorrect`

- Status: `400, 401,...`

```json
{
  "message": "Your email or password is incorrect"
}
```

## 3.2. Register

- Endpoint: `/user/register`
- Method: `POST`

### Request body

```json
{
  "firstName": "...", // string
  "lastName": "...", // string
  "email": "...", // string
  "password": "..." //string
}
```

### Response

#### If email is `not exist`

- Status: `200`

```json
{
  "message": "Your account has been created"
}
```

#### If email is `exist`

- Status: `400, 401,...`

```json
{
  "message": "Your email already exist"
}
```

## 3.3. Get code to change the password

- Endpoint: `/user/code`
- Method: `POST`

### Request body

```json
{
  "email": "..." // string
}
```

### Response

#### If email `exist`

- Status: `200`

```json
{
  "message": "Check your email to get the code"
}
```

#### If email does `not exist`

- Status: `400, 401,...`

```json
{
  "message": "Email does not exist"
}
```

## 3.4. New password

- Endpoint: `/user/new-password`
- Method: `POST`

### Request body

```json
{
  "email": "...", // string
  "code": "...", // string
  "password": "..." // string
}
```

### Response

#### If code is `correct`

- Status: `200`

```json
{
  "message": "Your password has been changed"
}
```

#### If code is `incorrect`

- Status: `400, 401,...`

```json
{
  "message": "Code is incorrect"
}
```

# 4. User data

- Endpoint: `/user`
- Method: `GET`

### Request header

```json
{
  "token": "..." // string
}
```

### Response

#### If the token is `valid`

- Status: `200`

```json
{
  "firstName": "...", // string
  "lastName": "...", // string
  "email": "..." // string
}
```

#### If the token is `invalid`

- Status: `498`

```json
{
  "message": "The token is invalid"
}
```

# 5. User cart

## Get product from cart

- Endpoint: `/user/cart`
- Method: `GET`

### Request header

```json
{
  "token": "..." // string
}
```

### Response json

```json
[
  {
    // product table
    "id": 1,
    "name": "...", // string
    "currentPrice": "...", // double
    "lastPrice": "...", // double

    // productImage table
    "productImage": [
      {
        "imageURL": "..." // string
      }
      {
        "imageURL": "..." // string
      }
      // ...
    ],

    // user_product table
    "quantity": "...", // int
  }
  {
    // product table
    "id": 2,
    "name": "...", // string
    "currentPrice": "...", // double
    "lastPrice": "...", // double

    // productImage table
    "productImage": [
      {
        "imageURL": "..." // string
      }
      {
        "imageURL": "..." // string
      }
      // ...
    ],

    // user_product table
    "quantity": "...", // int
  }
  // ...
]
```

## Add product into cart

- Endpoint: `/user/cart`
- Method: `POST`

### Request header

```json
{
  "token": "..." // string
}
```

### Request body

```json
{
  "id": 1 // productId
}
```

### Response json

- `Anything that can be make sense or not`

# 6. Product details

## Get product detail

- Endpoint: `/product/:productId`
- Method: `GET`
- Params:
  - `:productId`
    - Example: `1`
- Combine all, example:
  - `/product/1`
  - `/product/2`
  - `/product/3`
  - `/product/...`

### Response json

```json
{
  "id": 1, // int
  "name": "...", // string
  "currentPrice": "...", // double
  "lastPrice": "...", // double
  "quantity": "...", // int
  "sold": "...", // int

  // productImage table
  "productImage": [
    {
      "imageURL": "..." // string
    },
    {
      "imageURL": "..." // string
    }
    // ...
  ],

  // productTechnical table
  "productTechnical": [
    {
      "title": "...", // string
      "description": "..." // string
    },
    {
      "title": "...", // string
      "description": "..." // string
    }
    // ...
  ],

  "user": [
    {
      "firstName": "...", // string
      "lastName": "...", // string

      // productComment table
      "productComment": [
        {
          "title": "...", // string
          "description": "..." // string
        },
        {
          "title": "...", // string
          "description": "..." // string
        }
        // ...
      ]
    },
    {
      "firstName": "...", // string
      "lastName": "...", // string

      // productComment table
      "productComment": [
        {
          "description": "..." // string
        },
        {
          "description": "..." // string
        }
        // ...
      ]
    }
    // ...
  ]
}
```

## Post comment

- Endpoint: `/product/comment`
- Method: `POST`

### Request Header

```json
{
  "token": "..." // string
}
```

### Request body

```json
{
  "description": "...", // string
},
```

### Response json

- `Anything that can be make sense or not`

```json
{
  "code": {
    "email": "...",
    "exp": "..."
  }
}
```
- Example:
```json
{
  "123456": {
    "email": "abc@gmail.com",
    "exp": "12312312"
  }
}
```
