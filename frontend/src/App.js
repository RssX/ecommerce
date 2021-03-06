import data from './data.js';

function App() {
  return (
    <div className="grid-container">
    <header className="row">
        <div>
            <a className='brand' href="/">amazon</a>
        </div>
        <div>
            <a href="/cart">cart</a>
            <a href="/signin">sign in</a>
        </div>
    </header>
    <main>
        <div className="row center">
          {data.products.map(product=>
            <div key={product.id} className="card">
            <a  href={`/product/${product.id}`}>
                <img className="medium" src={product.image} alt={product.name}/>
            </a>
            <div className="card-body">
                <a href={`/product/${product.id}`} ><h2>{product.name}</h2></a>
                <div className="rating">
                    <span><i className="fa fa-star"></i></span>
                    <span><i className="fa fa-star"></i></span>
                    <span><i className="fa fa-star"></i></span>
                    <span><i className="fa fa-star"></i></span>
                    <span><i className="fa fa-star"></i></span>
                </div>
                <div className="price">{product.price}</div>
            </div>
        </div>
             
          )}


        </div>
    </main>
    <footer className="row center">All rights reserved</footer>
</div>

  );
}

export default App;
