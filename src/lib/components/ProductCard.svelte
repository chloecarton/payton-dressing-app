<!-- ProductCard.svelte -->
<script lang="ts">
	import { goto } from "$app/navigation";
	import { numberToPrice } from "$lib/tools";
	import type { Product } from "$lib/types";

    export let product: Product;
    if(!product.featuredImage){
        product.featuredImage = {
            "id": "unknown",
            "fileId": "unknown",
            "productReference": product.reference,
            "url": "https://lh3.googleusercontent.com/d/1PP9J9ZVm6o6bcOQVjwarnmzYAZCpFqNp"
        }
    }

    function handleClick() {
        // You can perform any action here when the card is clicked
        console.log('Card clicked:', product.reference);
        goto(`${import.meta.env.VITE_ROUTE_PREFIX}/product-details?ref=${product.reference}`);
    }

    function handleKeyDown(event: any) {
        if (event.key === 'Enter' || event.key === ' ') {
        handleClick(); // Trigger handleClick function on Enter or Space key press
        }
    }
</script>

<div id="{product.id}" role="button" class="card" on:click={handleClick} on:keydown={handleKeyDown} tabindex="0">
    <div class="image-container">
      <img src={product?.featuredImage?.url} alt={product.title} referrerpolicy="no-referrer" />
    </div>

    <div class="card-info">
        <h2>{product.title}</h2>
        <!-- <p>{product.description}</p> -->
        <div class=card-price-and-size>
          <p class="size">{product.size !== null ? product.size : 'NC'}</p>
          <p>Prix: <span class="price">{numberToPrice(product.price)}</span></p>
        </div>

    </div>
</div>

  <style>
    .card {
      border: 1px solid #f0f0f0;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease-in-out;
    }

    img {
      width: 100%;
      height: auto;
      max-height: 500px;
      border-radius: 10px 10px 0 0;
      transition: transform 0.3s ease-in-out;
    }

    .card-info {
      padding: 20px;
      background-color: #fff;
    }

    .card-price-and-size {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      align-items: center;
      border-top: 1px solid #eee;
      margin-top: 10px;
      height: 2em;
    }

    h2 {
      margin: 0;
      font-size: 1.5rem;
      color: #333;
    }

    p {
      margin: 10px 0;
      font-size: 1rem;
      color: #666;
    }

    .price {
      font-size: 1.2rem;
      font-weight: bold;
      color: #333;
    }

    .card:hover {
      transform: translateY(-5px);
    }

    img:hover {
      transform: scale(1.05);
    }
    .image-container {
      overflow: hidden; /* Hide overflow */
    }

    .image-container img {
      width: 100%; /* Set the image width to fill the container */
      height: 100%; /* Set the image height to fill the container */
      object-fit: cover; /* Cover the container with the image */
      object-position: center center; /* Center the image within the container */
    }
  </style>