# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
# tech-heim

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
  }
  // ...
]
```

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