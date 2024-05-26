<script lang="ts">
	import { onMount } from 'svelte';
	import { getProductListData } from '$lib/apiService';
	import type { Product } from '$lib/types';
	import { writable } from 'svelte/store';
	import ProductCard from '$lib/components/ProductCard.svelte';
	import Menu from '$lib/components/Menu.svelte';

    let products = writable<Product[]>();
    let categories = ["homme", "femme"]
    onMount(async () => {
        // Fetch data from API
        try {
            const fetchedData = await getProductListData();
            console.log(fetchedData)
            products.set(fetchedData)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    });
</script>


<h1 class="product-list-title">Mon dressing</h1>

{#if categories}
  <!-- <CategoryFilter categories={categories} /> -->
  <!-- <Menu categories={categories} /> -->
{/if}

{#if $products}
    <div class="grid-container">
        {#each $products as product (product.reference)}
            <div class="product">
                <ProductCard product={product} />
            </div>
        {/each}
    </div>
{:else}
    <p class="loading">Loading...</p>
{/if}

<style>
    h1.product-list-title {
      padding-left: 20px;
    }

    .grid-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    padding: 20px;
    justify-content: space-between;
    align-items: stretch; /* Ensure all cards have the same height */
  }

  .grid-container > div {
    width: calc((100% - 40px) / 3); /* Calculate width for three cards per row */
    flex: 1 1 auto; /* Ensure cards don't grow or shrink */
  }

  @media (max-width: 768px) {
    .grid-container > div {
      width: calc((100% - 40px) / 2); /* Calculate width for two cards per row on smaller screens */
    }
  }

  @media (max-width: 480px) {
    .grid-container > div {
      width: 100%; /* Full width for single card per row on smaller screens */
    }
  }
</style>