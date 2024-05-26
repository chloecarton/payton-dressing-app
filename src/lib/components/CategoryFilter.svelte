<!-- CategoryFilter.svelte -->
<script lang="ts">
    export let categories;
    export let selectedCategories: string[] = []; // Use an array to store selected categories
    let isExpanded = false;

    function toggleExpanded() {
      isExpanded = !isExpanded;
    }

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
      // Apply filter logic or emit an event to notify the parent component
    }
  </script>

  <div class="category-filter">
    <button class="menu-toggle" aria-expanded={isExpanded} on:click={toggleExpanded}>
      <span class="burger-icon"></span>
    </button>
    {#if isExpanded}
      <ul class="filter-options">
        {#each categories as category}
          <li>
            <label>
              <input
                type="checkbox"
                checked={selectedCategories.includes(category)}
                on:change={() => toggleCategory(category)}
              />
              {category}
            </label>
          </li>
        {/each}
      </ul>
    {/if}
  </div>

  <style>
    .category-filter {
      margin-bottom: 20px;
    }

    .menu-toggle {
      cursor: pointer;
      background: none;
      border: none;
      padding: 10px;
    }

    .burger-icon {
      display: inline-block;
      width: 30px;
      height: 3px;
      background-color: #333;
      position: relative;
    }

    .burger-icon::before,
    .burger-icon::after {
      content: "";
      display: block;
      width: 100%;
      height: 3px;
      background-color: #333;
      position: absolute;
      transition: transform 0.3s ease;
    }

    .burger-icon::before {
      top: -8px;
    }

    .burger-icon::after {
      bottom: -8px;
    }

    .menu-toggle[aria-expanded="true"] .burger-icon {
      transform: rotate(45deg);
    }

    .menu-toggle[aria-expanded="true"] .burger-icon::before {
      transform: translateY(8px) rotate(-90deg);
    }

    .menu-toggle[aria-expanded="true"] .burger-icon::after {
      transform: translateY(-8px) rotate(90deg);
    }

    .filter-options {
      list-style: none;
      padding-left: 0;
      margin-top: 0;
    }

    .filter-options li {
      margin-bottom: 5px;
    }

    .filter-options label {
      display: flex;
      align-items: center;
    }

    .filter-options input[type="checkbox"] {
      margin-right: 5px;
    }

    /* Sidebar menu styles */
    @media (max-width: 767px) {
      .category-filter {
        position: fixed;
        top: 0;
        right: -250px; /* Hide by default */
        width: 250px;
        height: 100%;
        background-color: #fff;
        box-shadow: -2px 0 4px rgba(0, 0, 0, 0.1);
        z-index: 1000;
        transition: right 0.3s ease;
      }

      .category-filter.active {
        right: 0; /* Show when active */
      }
    }
  </style>
