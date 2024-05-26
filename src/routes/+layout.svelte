<script lang="ts">
    import '../app.css'
</script>

<!-- Layout.svelte -->
<svelte:head>
    <style>
        body {
            margin: 0;
            overflow-x: hidden;
        }
    </style>
</svelte:head>
<div>
    <!-- <head>
        <header></header>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
            body {
                margin: 0;
                overflow-x: hidden;
            }
        </style>
    </head> -->
    <main>
    <slot></slot> <!-- This is where the content of other components will be rendered -->
    </main>
    <footer></footer>
</div>