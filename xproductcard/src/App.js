import perfume from "./assets/perfume.jpg";
import "./App.css";
function App() {
  return (
    <div className="App">
      <div className="inner-container">
        <img
          src={perfume}
          alt="A bottle of perfume surrounded by foliage."
          height={"200px"}
          width={"200px"}
        />
        <div>
          <div className="category">
            <p>Perfume</p>
          </div>
          <h1>Gabrielle Essence Eau De Parfum.</h1>
          <div className="product-desc">
            A floral, solar, and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </div>
          <div className="sale-price">
            <h1>$149.99</h1>
          </div>
          <div className="list-price">
          $169.99
          </div>
          <button>Add to Cart</button>
        </div>
      </div>
      <footer className="attribution">Challenge by{" "}<a href="https://www.crio.do">Crio.</a>{" "}Coded by Ketan</footer>
    </div>
  );
}

export default App;
