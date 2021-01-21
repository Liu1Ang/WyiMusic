<template>
    <div id="main">
main
    <template v-for="item in 60">
        <div :key="item">
            </br>
            {{'main'+ item}}
        </div>
    </template>
    </div>
</template>

<script>
export default {
  name: 'main'
}
</script>

<style scoped>

</style>
