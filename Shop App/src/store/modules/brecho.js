export default {
    namespaced: true,
    state() {
      return {
        products: [
            {
                id: 'b1',
                image: 'https://s3-blog.tattoo2me.com/wp-content/uploads/2020/01/1*y7fFlmJuINTV06YW4_w0zA.jpeg',
                title: 'Look Carnaval',
                description: 'Garanta já o seu!',
                price: 250.00
              },
        ]
      };
    },
    getters: {
      products(state) {
        return state.products;
      }
    }
  };
  