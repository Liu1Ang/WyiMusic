<template>
    <div id="index">
        <el-scrollbar style="height:100vh">
            <headers></headers>
            <el-container class="container">
                <router-view>
                    main
                </router-view>
            </el-container>
            <el-footer class="footer" height="70px">Footer</el-footer>
        </el-scrollbar>
    </div>
</template>

<script>
import headers from './views/home/header'
export default {
  name: 'index',
  components: {
    headers
  }
}
</script>

<style>
.container {
    width:80%;
    margin: 0 auto;
}
.footer{
    background: #f6f6f8;
    border-top: 1px solid #e1e1e1;
}
</style>
