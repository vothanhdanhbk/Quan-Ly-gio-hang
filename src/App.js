import React, { Component } from 'react';
import Header from './components/header';
import ProductsContainer from './containers/productsContainer';
import Footer from './components/footer';
import CartContainer from './containers/cartContainer';
import MessageContainer from './containers/messageContainer';

class App extends Component {
    render() {

        return (
            <div>
 
           <Header/>

           <main id="mainContainer">
                <div className="container">
            
                 <ProductsContainer/> 
                
                 <MessageContainer/> 

                <CartContainer/>  

                </div>
            </main>
          
            <Footer/>
       </div>
        );
    }
}


export default App;
