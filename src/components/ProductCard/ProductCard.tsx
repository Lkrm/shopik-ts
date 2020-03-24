import React from 'react';

import './style.sass';

const ProductCard = () => (
    <div className="product-card">
        <div className="product-card__image-wrap">
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRadbPI1CSNuXTDQEi6GIRFaLpTMriY4s91LgK8KVsSfW-3VazS"
                alt=""
                className="product-card__image"/>
        </div>
        <h3 className="product-card__title">Headspeackers  "SAMSUNG" (Awesome model , made in Chine with love)</h3>
        <ul className="product-card__product-info">
            <li className="product-card__item">
                <span>Brand:</span>
                <b>SAMSUNG</b>
            </li>
            <li className="product-card__item">
                <span>Charge:</span>
                <b>500 mAH</b>
            </li>
            <li className="product-card__item">
                <span>About:</span>
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dignissimos ea est, necessitatibus nisi porro repudiandae, rerum sequi temporibus vitae, voluptate voluptatibus. Consequatur fugit illum nesciunt odio praesentium soluta vel!</span><span>A ab aliquam atque autem, consequatur culpa debitis dolorem ducimus ea esse eum illo labore maiores nam possimus quam quia quisquam quos repellendus repudiandae sapiente sequi sit tempora totam, voluptatibus.</span>
            </li>
        </ul>
        <div className="product-card__footer">
            <div className="product-card__price">
                Price: <b>500 UAH</b>
            </div>
            <button className="product-card__button-buy">
                <span className="icon-box-add"/>Add to Card
            </button>
        </div>
    </div>
);

export default ProductCard;
