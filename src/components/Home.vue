<template>
    <div>
        <h1 class="title">DD Project</h1>
        <ul>
            <li>
                <router-link to="/signin" class="button is-text"> sign in </router-link>
            </li>
            <li>
                <router-link to="/signup" class="button is-text"> sign up </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'Home'
}
</script>
<style scoped>

</style>
