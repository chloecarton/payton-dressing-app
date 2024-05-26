<script lang="ts">
	import type { Media } from '$lib/types';
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';

  export let images: Media[] = [];

  const currentSlide = writable(0);

  const nextSlide = () => {
    currentSlide.update(n => (n + 1) % images.length);
  };

  const prevSlide = () => {
    currentSlide.update(n => (n - 1 + images.length) % images.length);
  };

  let interval: ReturnType<typeof setInterval>;

  onMount(() => {
    // interval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
    return () => {
      clearInterval(interval);
    };
  });
</script>

<style>
  .slideshow-container {
    position: relative;
    max-width: 100%;
    margin: auto;
    overflow: hidden;
  }

  .slide {
    display: none;
    width: 100%;
    transition: opacity 1s ease;
  }

  .slide img {
    display: block;
    width: 100%;
    height: auto;
    margin: auto;
    border: 1px solid #ddd;
    border-radius: 5px;
  }

  .active {
    display: block;
    opacity: 1;
  }

  .prev, .next {
    cursor: pointer;
    position: absolute;
    top: 50%;
    width: auto;
    padding: 16px;
    margin-top: -22px;
    color: white;
    font-weight: bold;
    font-size: 18px;
    transition: 0.6s ease;
    border-radius: 0 3px 3px 0;
    user-select: none;
    background: none;
    border: none;
    z-index: 1000;
  }

  .next {
    right: 0;
    border-radius: 3px 0 0 3px;
  }

  .prev {
    left: 0;
  }

  .prev:hover, .next:hover {
    background-color: rgba(0,0,0,0.8);
  }

  @media (min-width: 768px) {
    .menu {
      position: static;
      transform: translateX(0);
      flex-direction: row;
      height: auto;
      width: auto;
    }

    .menu-button {
      display: none;
    }

    .menu a {
      flex: 1;
      text-align: left;
    }

    .close-button {
      display: none;
    }
  }
</style>

<div class="slideshow-container">
  {#each images as image, index}
    <div class="slide {index === $currentSlide ? 'active' : ''}">
      <img src={image.url} alt={image.productReference} />
    </div>
  {/each}

  <!-- Next and previous buttons -->
  <button class="prev" on:click={prevSlide} on:keydown={(e) => e.key === 'Enter' && prevSlide()}>&#10094;</button>
  <button class="next" on:click={nextSlide} on:keydown={(e) => e.key === 'Enter' && nextSlide()}>&#10095;</button>
</div>
