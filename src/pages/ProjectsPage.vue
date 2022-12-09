<template>
    <h1>Projects page!</h1>
    <ListOfProjects />
</template>

<script>
import ListOfProjects from '../components/ListOfProjects.vue';
export default {
    components: {
        ListOfProjects
    }
}
</script>

<style scoped>
h1 {
    color: red;
}
</style>