<template>
  <div id="header">
    <el-row class="HeaderContent">
      <el-col :span="4">
        <!-- <h1>网易云音乐</h1> -->
      </el-col>
      <el-col :span="15">
        <ul>
          <li v-for="item in headerArr"
              :key="item.id"
              :class="item.active?'actives':''"
              class="oneli">
            <router-link :to="item.toName"
                         @click.native="getActive(item,'headerArr')">{{item.CnName}}</router-link>
            <i></i>
          </li>
        </ul>
      </el-col>
      <el-col :span="4"
              :offset="1"
              style="margin-top:17px">
        <el-input placeholder="请输入内容"
                  prefix-icon="el-icon-search"
                  size="mini">
        </el-input>
      </el-col>
    </el-row>
    <el-row class="headerBottom"
            :class="headerChildren.length != 0?'childrenHeight':''">
      <el-col :span="15"
              :offset="4">
        <ul style="width:90%;margin:10px auto 0;">
          <li v-for="item1 in headerChildren"
              :key="item1.id"
              :class="item1.active?'childrenActive':''">
            <router-link :to="item1.toName"
                         @click.native="getActive(item1,'headerChildren')">{{item1.CnName}}</router-link>
          </li>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import headerArr from '@/config/headermenu'
export default {
  name: 'header',
  data () {
    return {
      headerArr,
      headerChildren: []
    }
  },
  created () {
    this.headerChildren = this.headerArr[0].children
  },
  methods: {
    getActive (obj, type) {
      // 改变菜单样式
      if (type === 'headerArr') {
        this.headerChildren = obj.children ? obj.children : []
      }
      this[type].forEach(item => {
        item.active = false
        if (item.id === obj.id) {
          item.active = true
        }
      })
    }
  }
}
</script>

<style scoped>
#header {
  background: #242424;
  color: #fff;
}
.HeaderContent {
  width: 90%;
  margin: 0 auto;
}
.headerBottom {
  background: red;
  height: 5px;
}
.headerBottom ul {
  text-align: left;
}
.childrenHeight {
  height: 40px;
}
.actives {
  background: #000000;
  position: relative;
}
.actives i {
  position: absolute;
  bottom: 0;
  left: 48%;
  width: 0;
  border-bottom: 5px solid #c20c0c;
  border-right: 5px solid transparent;
  border-left: 5px solid transparent;
}
.headerBottom a {
  margin: 0 10px;
}
.childrenActive a {
  padding: 4px 8px;
  background: #9b0909;
  border-radius: 10px;
}
.oneli a {
  height: 60px;
  line-height: 60px;
  margin: 0 15px;
}
</style>
