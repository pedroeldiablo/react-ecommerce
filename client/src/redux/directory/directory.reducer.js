const INITIAL_STATE = {
    sections: [
      {
        title: 'womens',
        imageUrl: 'https://images.unsplash.com/photo-1538391143309-954c325e6c25',
        size: 'large',
        id: 1,
        linkUrl: 'shop/womens'
      },
      {
        title: 'mens',
        imageUrl: 'https://images.unsplash.com/photo-1600871150008-50b6f73dacdc',
        size: 'large',
        id: 2,
        linkUrl: 'shop/mens'
      },
        {
          title: 'hats',
          imageUrl: 'https://images.unsplash.com/flagged/photo-1576533071143-28014b3839cc',
          id: 3,
          linkUrl: 'shop/hats'
        },
        {
          title: 'jackets',
          imageUrl: 'https://images.unsplash.com/photo-1542327897-d73f4005b533',
          id: 4,
          linkUrl: 'shop/jackets'
        },
        {
          title: 'sneakers',
          imageUrl: 'https://images.unsplash.com/photo-1581977012607-4091712d36f9',
          id: 5,
          linkUrl: 'shop/sneakers'
        }
      ],

};

const directoryReducer = (state = INITIAL_STATE, action ) => {
    switch(action.type) {
        default: 
        return state;
    }
}

export default directoryReducer;
