# Loja-Teste

Aplicativo de loja fictícia criado para estudos com React Native e Expo Router.

## Funcionalidades

- Listagem de produtos por categoria
- Visualização de detalhes dos produtos
- Navegação por abas (Início, Categorias, Sobre)
- Interface simples e responsiva

## Estrutura do Projeto

```
app/
  _layout.tsx
  index.tsx
  (tabs)/
    _layout.tsx
    home.tsx
    categories/
      _layout.tsx
      [id].tsx
      list.tsx
    about.tsx
    ...
components/
  button.tsx
  category-item.tsx
  product-item.tsx
data/
  index.ts
services/
  categoty.ts
  product.ts
types/
  category.ts
  product.ts
assets/
  ...
```

## Como iniciar o projeto

1. **Clone o repositório:**

   ```sh
   git clone https://github.com/seu-usuario/Loja-Teste.git
   cd Loja-Teste
   ```

2. **Instale as dependências:**

   ```sh
   npm install
   ```

3. **Inicie o projeto:**

   ```sh
   npm start
   ```

   Ou, para rodar em um dispositivo específico:

   - Android: `npm run android`
   - iOS: `npm run ios`
   - Web: `npm run web`

4. **Abra o app no Expo Go**  
   Escaneie o QR code exibido no terminal ou navegador.

## Requisitos

- Node.js
- Expo CLI (`npm install -g expo-cli`)
- Editor de código (recomendado: VS Code)

## Observações

- Este projeto é apenas para fins de estudo.
- As imagens dos produtos e categorias são geradas via [Picsum Photos](https://picsum.photos/).

---

Sinta-se à vontade para contribuir ou adaptar para seus estudos!
