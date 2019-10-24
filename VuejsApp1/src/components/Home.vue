<template>
    
    <div class="home" style="background-color:yellow">

        <h1>{{ msg1 }}</h1>
      
        <p>Welcome to your new single-page application, built with <a href="https://vuejs.org" target="_blank">Vue.js</a>.</p>
    </div>
    

</template>

<script>
    export default {
        name: 'Home',
        props: {
            msg1: String
           
           
        }
    };

 
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

