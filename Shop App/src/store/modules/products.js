export default {
  namespaced: true,
  state() {
    return {
      products: [
        {
          id: 'p1',
          image:
            'https://s3-blog.tattoo2me.com/wp-content/uploads/2020/01/1*3PYPo1seIEUEY1VA67VroQ.jpeg',
          title: 'Coroa Rosas',
          description:
            'Faço essa em qualquer cor!',
          price: 85.00
        },
        {
          id: 'p2',
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNQp20IqOWDuuEsBHhmo8yEatd2OX8V-zxsA&usqp=CAU',
          title: 'Ombreira Flores',
          description: 'Exemplo de arranjo de flores.',
          price: 85.00
        },
        {
          id: 'p3',
          image:
            'https://uploads.metropoles.com/wp-content/uploads/2020/01/23155442/81276520_2520893718185076_6370677648701558553_n.jpg',
          title: 'Coroa Arco de Flores',
          description:
            'Disponível em qualquer cor!',
          price: 150.00
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
