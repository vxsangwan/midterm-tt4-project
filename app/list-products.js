// Import SCSS file for styling
import './list-products.scss';

// Import images
import product1 from './assets/images/product1.jpg';
import product2 from './assets/images/product2.jpg';
import product3 from './assets/images/product3.jpg';
import product4 from './assets/images/product4.jpg';
import product5 from './assets/images/product5.jpg';
import product6 from './assets/images/product6.jpg';
import product7 from './assets/images/product7.jpg';
import product8 from './assets/images/product8.jpg';
import product9 from './assets/images/product9.jpg';
import product10 from './assets/images/product10.jpg';
import product11 from './assets/images/product11.jpg';
import product12 from './assets/images/product12.jpg';


document.addEventListener('DOMContentLoaded', () => {
    const productsContainer = document.getElementById('products');

    const products = [
        {
            name: 'Product 1',
            description: 'This is a short description of Product 1.',
            price: '$19.99',
            image: product1,
        },
        {
            name: 'Product 2',
            description: 'This is a short description of Product 2.',
            price: '$29.99',
            image: product2,
        },
        {
            name: 'Product 3',
            description: 'This is a short description of Product 3.',
            price: '$39.99',
            image: product3,
        },
        {
            name: 'Product 4',
            description: 'This is a short description of Product 4.',
            price: '$49.99',
            image: product4,
        },
        {
            name: 'Product 5',
            description: 'This is a short description of Product 5.',
            price: '$59.99',
            image: product5,
        },
        {
            name: 'Product 6',
            description: 'This is a short description of Product 6.',
            price: '$24.99',
            image: product6,
        },
        {
            name: 'Product 7',
            description: 'This is a short description of Product 7.',
            price: '$35.99',
            image: product7,
        },
        {
            name: 'Product 8',
            description: 'This is a short description of Product 8.',
            price: '$39.99',
            image: product8,
        },
        {
            name: 'Product 9',
            description: 'This is a short description of Product 9.',
            price: '$55.99',
            image: product9,
        },
        {
            name: 'Product 10',
            description: 'This is a short description of Product 10.',
            price: '$29.99',
            image: product10,
        },
        {
            name: 'Product 11',
            description: 'This is a short description of Product 11.',
            price: '$69.99',
            image: product11,
        },
        {
            name: 'Product 12',
            description: 'This is a short description of Product 12.',
            price: '$39.99',
            image: product12,
        },
        

        
    ];

    products.forEach(product => {
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('col-md-4', 'mb-4');

        const card = document.createElement('div');
        card.classList.add('card', 'product-card');

        // Card Image
        const img = document.createElement('img');
        img.classList.add('card-img-top');
        img.src = product.image;
        img.alt = product.name;

        // Card Body
        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        // Product Title
        const title = document.createElement('h5');
        title.classList.add('card-title');
        title.textContent = product.name;

        // Product Description
        const description = document.createElement('p');
        description.classList.add('card-text');
        description.textContent = product.description;

        // Product Price
        const price = document.createElement('p');
        price.classList.add('price');
        price.textContent = product.price;

        // Add to Cart Button
        const addToCart = document.createElement('button');
        addToCart.classList.add('btn', 'btn-primary', 'w-100');
        addToCart.textContent = 'Add to Cart';

        // Add event listener for the "Add to Cart" button
        addToCart.addEventListener('click', () => {
            alert(`Added "${product.name}" to cart!`);
        });

        // Append elements to the card body
        cardBody.appendChild(title);
        cardBody.appendChild(description);
        cardBody.appendChild(price);
        cardBody.appendChild(addToCart);

        // Append image and card body to the card
        card.appendChild(img);
        card.appendChild(cardBody);

        // Append the card to the container
        cardDiv.appendChild(card);
        productsContainer.appendChild(cardDiv);
    });
});