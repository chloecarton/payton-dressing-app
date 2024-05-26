<script lang="ts">
  import { onMount} from 'svelte';
	import type { Product } from '$lib/types';
	import { writable, get } from 'svelte/store';
	import { getProductData } from '$lib/apiService';
	import { page } from '$app/stores';
	import { numberToPrice } from '$lib/tools';
  import colors from 'color-name';
  import Slideshow from '$lib/components/Slideshow.svelte';

  const myColors: any = colors;
  let product = writable<Product>();
  let isLoading = true; // Initially set isLoading to true
  let productColors: (string|undefined)[];
  let query = undefined;


  // Define your product images
  const productImages = [
    { src: 'image1.jpg', alt: 'Product Image 1' },
    { src: 'image2.jpg', alt: 'Product Image 2' },
    { src: 'image3.jpg', alt: 'Product Image 3' },
  ];

  // Function to get the hex value of a color name
  function getColorHex(name: string): string | undefined {
    let cssColor = undefined
    let foundColor = myColors[name.toLowerCase()] || undefined;
    if (foundColor !== undefined){
      cssColor = `rgb(${foundColor.join(",")})`
    }
    return cssColor;
  }

  onMount(async () => {
      const searchParams = get(page).url.searchParams;
      query = searchParams.get('ref') || undefined;
      if (query !== undefined){
        // Fetch data from API
        try {
            const fetchedData = await getProductData(query);
            console.log(fetchedData)

            if(!fetchedData.featuredImage){
                fetchedData.featuredImage = {
                    "id": "unknown",
                    "fileId": "unknown",
                    "productReference": fetchedData.reference,
                    "url": "https://lh3.googleusercontent.com/d/1PP9J9ZVm6o6bcOQVjwarnmzYAZCpFqNp"
                }
            }
            fetchedData.medias.unshift(fetchedData.featuredImage)
            product.set(fetchedData)
            if ($product.color !== undefined){
              let colors = $product.color.replace(/\s/g, "").split(',')
              productColors = colors.map(productColor => getColorHex(productColor));
              console.log(productColors)
            }
            isLoading = false;
        } catch (error) {
            console.error('Error fetching data:', error);
        }
      }
  });

  function goBack() {
      window.history.back();
  }
</script>

<div class="header">
    <!-- Back button for mobile -->
    <button class="back-button" on:click={goBack}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
    </button>

    <!-- Page title -->
    <h1 class="title">{isLoading ? 'Produit' : $product.title[0].toUpperCase() + $product.title.slice(1)} {(!isLoading && $product.brand !== null)? "- "+$product.brand : ""}</h1>

</div>

{#if $product}
    <div class="product-container">
        <!-- Product images -->
        <div class="product-images">
            <!-- <img src={$product?.featuredImage?.url} alt={$product.title} referrerpolicy="no-referrer" /> -->
            <Slideshow images={$product.medias} />
        </div>

        <!-- Product details -->
        <div class="product-details">
            <div class="product-price-and-ref">
              <h3 class="product-price">{numberToPrice($product.price)}</h3>
              <span class="product-ref">Ref: {$product.reference}</span>
            </div>

            <div class="product-description">
              <p>Description</p>
              <span>{$product.description}</span>
            </div>

            <div class="product-informations-container">
              <div class="product-informations-row">
                <div class="product-informations-content">
                  <p>Couleurs</p>
                  <div class="product-color-list">
                    {#each productColors as productColor}
                      {#if productColor !== undefined}
                        <div class="product-color" style="background-color:{productColor}"></div>
                      {/if}
                    {/each}
                    {#if productColors.length == 0}
                      <div><span>NC</span></div>
                    {/if}
                  </div>
                </div>
              </div>

              <div class="product-informations-row">
                <div class="product-informations-content">
                  <p>Taille</p>
                  <span class="product-size">{$product.size !== null ? $product.size : 'NC'}</span>
                </div>
              </div>
              <div class="product-informations-row">
                <div class="product-informations-content">
                  <p>Composition</p>
                  <span>{$product.composition !== null ? $product.composition : 'NC'}</span>
                </div>
              </div>
            </div>
        </div>
    </div>
{:else}
    <p class="loading">Loading...</p>
{/if}

<style>
    /* Header styling */
  .header {
    display: flex;
    align-items: center;
    padding: 10px;
    background-color: #f0f0f0;
  }

  .back-button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    margin-right: 10px;
  }

  .back-button svg {
    width: 32px;
    height: 32px;
  }

  .title {
    flex-grow: 1; /* Allow the title to grow and take up remaining space */
    text-align: center; /* Center the text */
    line-height: 1em;
  }

  /* Product container styling */
  .product-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
  }

  /* .product-images img {
    max-width: 100%;
    height: auto;
    border: 1px solid #ddd;
    border-radius: 5px;
  } */

  .product-price-and-ref{
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }

  .product-ref {
    font-size: small;
  }

  h3.product-price {
    font-size: xx-large;
    margin: 0.1em 0em;
  }

  .product-description {
    border-top: 1px solid grey;
    border-bottom: 1px solid grey;
    padding: 1em 0;
  }

  .product-description p {
    margin-top: 0;
  }

  .product-informations-container {
    display: flex;
    flex-wrap: wrap;
  }

  .product-informations-row {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    box-sizing: border-box;
  }

  .product-informations-content {
    padding: 10px;
    box-sizing: border-box;
  }

  .product-color-list {
    display: flex;
  }

  .product-color-list div:not(:last-child){
    margin-right: 10px;
  }

  .product-color {
    width: 34px;
    height: 34px;
    border-radius: 50%;
    border: 1px solid lightgray
  }

  .product-size {
    border: 1px solid grey;
    padding: 0.3em;
    display: inline-block;
  }

  /* Responsive layout */
  @media (min-width: 768px) {
    .header {
      justify-content: center; /* Center header items horizontally */
    }

    .back-button {
      margin-right: 20px; /* Increase margin for back button */
    }

    .title {
      text-align: left; /* Align title to the left on larger screens */
    }

    .product-container {
      flex-direction: row; /* Arrange product details side by side */
    }

    .product-images {
      flex: 0 0 40%; /* Set width of product images */
    }

    .product-details {
      flex: 1; /* Let product details fill remaining space */
    }
  }
</style>