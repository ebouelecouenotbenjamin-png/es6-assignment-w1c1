const productCard = ({ nam, description, price, title, category }) => {
  return (
    <div className="product-card">
      <img src={image} alt={`${name}`} className="product-image" />
      <h2 className="product-name">{name}</h2>
      <h2 className="product-title">{title} </h2>
      <p className="product-description">{description}</p>
      <p className="product-category"> {category}</p>
      <p className={`product-price ${isDiscounted ? "disconted" : ""}`}>
        {" "}
        ${price.toFixed(2)}
      </p>
    </div>
  );
};
export default productCard;
