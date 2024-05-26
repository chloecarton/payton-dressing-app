<script lang="ts">
    import { goto } from '$app/navigation';
  </script>

  <div class="home-container">
    <img src="./payton-dressing.jpeg" alt="Background" class="background-image">
    <div class="overlay"></div>
    <div class="content">
      <h1>Mon dressing</h1>
      <button class="button" on:click={() => goto(`${import.meta.env.VITE_ROUTE_PREFIX}/products`)}>Voir les produits</button>
    </div>
  </div>


<style>

.home-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  text-align: center;
  color: white;
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.3; /* Adjust opacity as needed */
  z-index: -1; /* Ensure the image is behind other content */
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Adjust background color and opacity */
  z-index: -1; /* Ensure the overlay is behind other content */
}

.content {
  position: relative;
  z-index: 1;
}

.button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: white;
  color: #333;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: #f0f0f0;
}


</style>