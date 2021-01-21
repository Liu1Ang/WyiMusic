<template>
    <div id="index">
        <el-container>
            <el-header class="header">Header</el-header>
            <el-container class="container">
                <el-aside class="aside" width="200px">
                    <el-scrollbar style="height:100%">
                        <template v-for="item in 60">
                            {{'Aside'+ item}}</br>
                        </template>
                    </el-scrollbar>
                </el-aside>
                <el-main>
                    <el-scrollbar style="height:100%">
                        <router-view>
                            main
                        </router-view>
                    </el-scrollbar>
                </el-main>
            </el-container>
            <el-footer class="footer" height="70px">Footer</el-footer>
        </el-container>
    </div>
</template>

<script>
export default {
  name: 'index'
}
</script>

<style scoped>
.header {
    background: #ec4141;
}
.container {
    height: calc(100vh - 130px);
}
.aside {
    border-right: 1px solid #e1e1e1;
}
.footer{
    background: #f6f6f8;
    border-top: 1px solid #e1e1e1;
}
</style>
