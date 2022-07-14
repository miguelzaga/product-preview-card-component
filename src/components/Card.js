import parfum from "../images/image-product-mobile.jpg";

function Card() {
  return (
    <div className="card">
      <img className="card__simg" src={parfum} alt="Bottle of parfum"></img>
      <span className="card__subtitle">Perfume</span>
      <h1 className="card__title">Gabrielle Essence Eau De Parfum</h1>
      <p className="card__description">
        A floral, solar and voluptuous interpretation composed by Olivier Polge,
        Perfumer-Creator for the House of CHANEL.
      </p>
      <div className="card__price-container">
        <h2 className="card__price">$149.99</h2>
        <span className="card__previous-price">$169.99</span>
      </div>
      <button className="card__button button">Add to Cart</button>
    </div>
  );
}

export default Card;
