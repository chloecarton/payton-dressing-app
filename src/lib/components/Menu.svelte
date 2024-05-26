<script lang="ts">
  import { writable } from 'svelte/store';

  export let categories;
  export let selectedCategories: string[] = []; // Use an array to store selected categories
  const isOpen = writable(false);

  const toggleMenu = () => {
    isOpen.update(n => !n);
  };

  function toggleCategory(category: string) {
    const index = selectedCategories.indexOf(category);
    if (index === -1) {
      // If category is not selected, add it
      selectedCategories = [...selectedCategories, category];
    } else {
      // If category is already selected, remove it
      selectedCategories.splice(index, 1);
      selectedCategories = [...selectedCategories];
    }
  }
</script>

<div>
  <button class="menu-button" on:click={toggleMenu}>
    {$isOpen ? '✖' : '☰ Filtres'}
  </button>
  <nav class="menu" class:open={$isOpen}>
    {#each categories as category}
      <span>
        <label>
          <input
            type="checkbox"
            checked={selectedCategories.includes(category)}
            on:change={() => toggleCategory(category)}
          />
          {category}
        </label>
      </span>
    {/each}
  </nav>
</div>


<style>
  .menu {
    display: flex;
    flex-direction: column;
    background-color: #333;
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    width: 100%;
    transform: translateX(100%);
    transition: transform 0.3s ease;
    padding: 10px;
    padding-top: 70px;
    box-sizing: border-box;
  }

  .menu span {
    color: white;
    padding: 10px;
    text-decoration: none;
    text-align: left;
  }

  .menu span:hover {
    background-color: #575757;
  }

  .menu.open {
    transform: translateX(0);
    padding-top: 70px;
  }

  .menu-button {
    background-color: #333;
    color: white;
    border: none;
    padding: 10px;
    text-align: center;
    font-size: 16px;
    cursor: pointer;
    position: fixed;
    top: 30px;
    right: 10px;
    z-index: 1000;
  }

  .close-button {
    background-color: transparent;
    color: white;
    border: none;
    padding: 10px;
    text-align: right;
    font-size: 16px;
    cursor: pointer;
    align-self: flex-end;
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

    .menu span {
      flex: 1;
      text-align: left;
    }

    .close-button {
      display: none;
    }
  }
</style>