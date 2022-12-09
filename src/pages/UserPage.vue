<template>
    <h3>{{ username }}</h3>
    <RouterView />
</template>
<script>
export default {
    data() {
        return {
            username: "Joan"
        }
    }
}
</script>