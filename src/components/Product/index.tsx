import { FC } from "react";
import { Button, Rate } from "antd";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { toggleFavourite } from "../../store/favouriteSlice";
import { AppDispatch, RootState } from "../../store";

export interface ProductProps {
  id: number;
  title: string;
  image: string;
  description: string;
  price: number;
  category: string;
  rating: { rate: number; count: number };
}

export const Product: FC<ProductProps> = ({
  id,
  image,
  title,
  description,
  price,
  rating,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const favouritedProductIds = useSelector(
    (state: RootState) => state.favourite.ids
  );

  return (
    <div className="product-item">
      <Link to={`/products/${id}`}>
        <img className="product-image" src={image} alt={title} />
      </Link>
      <div className="product-content">
        <div className="product-content-top">
          <h5 className="product-title">{title}</h5>
          <p className="product-description">{description}</p>
          <Rate
            className="product-rating"
            value={Math.ceil(rating?.rate || 0)}
          />
        </div>
        <div className="product-content-bottom mt-15">
          <p className="product-price">{price} $</p>
          <div className="product-actions">
            <Button
              type="dashed"
              className={`btn-favourite ${
                favouritedProductIds?.includes(id) ? "favourited" : ""
              }`.trim()}
              onClick={() => dispatch(toggleFavourite(id))}
            >
              Favourite
            </Button>
            <Button type="primary" className="ml-5">
              Buy
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
