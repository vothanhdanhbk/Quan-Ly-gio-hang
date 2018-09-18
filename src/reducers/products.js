var initialState=[
    {
        id : 1,
        name : 'Iphone 7 Plus' ,
        image : 'https://cdn.tgdd.vn/Products/Images/42/172404/iphone-x-256gb-silver-400x460.png', 
        description :'Sản Phẩm do Apple sản xuất',
        price : 500 ,
        inventory : 10,
        rating :5
    },
    {
        id : 2,
        name : 'SamSung galaxy S7' ,
        image : 'https://cdn.shopify.com/s/files/1/1043/3082/products/iPhone_7_Plus_RoseGold_1024x1024_d646493e-580d-4cf0-9afc-94d63c68e5c2_1024x1024.jpeg?v=1519091775', 
        description :'Sản Phẩm do SamSung sản xuất',
        price : 300 ,
        inventory : 15,
        rating :3
    },
    {
        id : 3,
        name : 'Iphone X Plus' ,
        image : 'https://images-na.ssl-images-amazon.com/images/I/41BrldkNfJL.jpg', 
        description :'Sản Phẩm do Apple sản xuất',
        price : 1000 ,
        inventory : 20,
        rating :1
    },
];

const products =(state=initialState,action)=>{
    switch(action.type){
      default : return [...state]; 
    }
    
}

export default products;