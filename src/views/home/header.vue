<template>
  <div id="header">
    <el-row class="HeaderContent">
      <el-col :span="3">
        <h1 style="color:transparent;font-size:12px">网易云音乐</h1>
      </el-col>
      <el-col :span="12">
        <ul style="text-align:left">
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
      <el-col :span="3"
              style="margin-top:17px">
        <el-input placeholder="请输入内容"
                  prefix-icon="el-icon-search"
                  size="mini">
        </el-input>
      </el-col>
      <el-col :span="4"
              style="display:flex;justify-content:center;">
        <div style="margin-top:17px;cursor: pointer;width:40px;border-radius:50%;"
             v-show="loginText !== '登录'"
             :title="$store.state.nickname">
          <img :src="$store.state.avatarUrl"
               :alt="$store.state.nickname">
        </div>
        <div style="margin-top:17px;margin-left:10px;cursor: pointer;"
             @click="loginInit">{{loginText}}</div>
      </el-col>
    </el-row>
    <el-row class="headerBottom"
            :class="headerChildren.length != 0?'childrenHeight':''">
      <el-col :span="12"
              :offset="3">
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
    <el-dialog :title="loginTitle"
               :modal='false'
               :close-on-click-modal="false"
               width="500px"
               custom-class="loginDialog"
               :center="false"
               @close="goToBack('登录','二维码')"
               :visible.sync="login">
      <div v-show="loginTitle === '登录'">
        <div v-show="loginType === '二维码'">
          <div class="loginLeft"></div>
          <div class="loginRight">
            <img :src="erWeiMaImg">
            <div v-show="iserWeiMaImg"
                 class="loginRight_new">
              <p>已失效，请刷新</p>
              <span @click="newErWeiMa">刷新</span>
            </div>
          </div>
          <el-button round
                     size="small"
                     @click="goToBack('登录','其他')">选择其他登录方式</el-button>
        </div>
        <div v-show="loginType === '其他'">
          <div class="phoneImg"></div>
          <div class="qitaText"
               @click="goToBack('手机号登录','')">
            手机号登录
          </div>
          <div class="qitaText"
               @click="goToBack('注册','注册1')">
            注 册
          </div>
          <img src="../../assets/images/qr_login_icon.png"
               alt="二维码登录"
               title="二维码登录"
               style="position:absolute;right:0;bottom:0; cursor: pointer;"
               @click="goToBack('登录','二维码')">
        </div>
      </div>
      <div v-show="loginTitle === '手机号登录'">
        <el-form class="demo-ruleForm"
                 :rules="rules"
                 :model="formData"
                 ref="ruleForm1">
          <el-form-item label="手机号："
                        prop="phone">
            <el-input v-model="formData.phone"
                      placeholder="请输入手机号"></el-input>
          </el-form-item>
          <el-form-item label="密码："
                        prop="password">
            <el-input v-model="formData.password"
                      placeholder="请输入密码"
                      min="8"></el-input>
          </el-form-item>
          <el-form-item>
            <div class="qitaText"
                 @click="phoneLogin('ruleForm1')">
              登录
            </div>
          </el-form-item>
        </el-form>
        <div slot="footer"
             class="dialog-footer">
          <a @click="goToBack('登录','其他')"> &lt; 返回登录</a>
        </div>
      </div>
      <div v-show="loginTitle === '注册'">
        <el-form v-show="loginType === '注册1'"
                 :rules="rules"
                 :model="formData"
                 ref="ruleForm">
          <el-form-item label="手机号："
                        prop="phone">
            <el-input v-model="formData.phone"
                      placeholder="请输入手机号"></el-input>
          </el-form-item>
          <el-form-item label="密码："
                        prop="password">
            <el-input v-model="formData.password"
                      placeholder="设置登录密码，不少于8位"
                      min="8"></el-input>
          </el-form-item>
          <el-form-item>
            <div class="qitaText"
                 @click="phoneReg('ruleForm')">
              下一步
            </div>
          </el-form-item>
        </el-form>
        <el-form v-show="loginType === '注册2'">
          <el-form-item>
            <p>你的手机号：<strong>+86 {{formData.phone}}</strong></p>
            <p>为了安全，我们会给你发送短信验证码</p>
          </el-form-item>
          <el-form-item>
            <el-input v-model="formData.captcha"
                      placeholder="请输入验证码"
                      min="8"
                      required></el-input>
          </el-form-item>
          <el-form-item>
            <span v-show="isyanZhengMa"
                  style="color:red">请输入验证码</span>
            <span v-show="num==0"
                  style="color:blue;cursor: pointer;"
                  @click="chongXinHuoQ">重新获取</span>
            <span v-show="num!=0"
                  style="color:blue">{{num}}s</span>
          </el-form-item>
          <el-form-item>
            <div class="qitaText"
                 @click="getNickName">
              下一步
            </div>
          </el-form-item>
        </el-form>
        <el-form v-show="loginType === '注册3'">
          <el-form-item>
            <p>去一个昵称，让大家记住你</p>
          </el-form-item>
          <el-form-item>
            <el-input v-model="formData.nickname"
                      placeholder="昵称不少于4个字符"></el-input>
          </el-form-item>
          <el-form-item>
            <span v-show="formData.nickname.length<4"
                  style="color:red;">昵称不少于4个字符</span>
          </el-form-item>
          <el-form-item>
            <div class="qitaText"
                 @click="startMusic">
              开启云音乐
            </div>
          </el-form-item>
        </el-form>
        <div slot="footer"
             class="dialog-footer">
          <a @click="goToBack('登录','其他')"> &lt; 返回登录</a>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import headerArr from '@/config/headermenu'
export default {
  name: 'header',
  data () {
    return {
      headerArr,
      headerChildren: [],
      login: false,
      loginText: '登录',
      loginTitle: '登录',
      erWeiMaImg: '',
      iserWeiMaImg: false,
      loginType: '二维码',
      isyanZhengMa: false,
      formData: {
        phone: '',
        password: '',
        captcha: '',
        nickname: ''
      },
      num: 90,
      isstartMusic: true,
      erweimadata: {},
      Intervals: null,
      rules: {
        phone: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { pattern: /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/, message: '请输入正确格式手机号' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 8, message: '长度最小 8 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  created () {
    this.headerChildren = this.headerArr[0].children
    this.getloginInit()
  },
  methods: {
    loginInit () {
      // 登录初始化
      if (this.loginText === '登录') {
        this.login = true
        this.newErWeiMa()
      } else {
        this.$api.loginApi.logout({}, (res) => {
          this.loginText = '登录'
          localStorage.setItem('WYIMUSICINFO', JSON.stringify({}))
        })
      }
    },
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
    },
    goToBack (loginTitle, loginType) {
      // 切换登录选项
      this.isstartMusic = true
      this.erWeiMaImg = ''
      this.loginTitle = loginTitle
      this.loginType = loginType
      if (loginType === '二维码') {
        this.newErWeiMa()
      }
    },
    newErWeiMa () {
      // 获取新二维码
      let timestamp = new Date().getTime()
      this.erweimadata = {
        timestamp
      }
      this.$api.loginApi.loginKey(this.erweimadata, (res) => {
        // 二维码key生成接口
        if (res.code === 200) {
          this.erweimadata.key = res.data.unikey
          this.erweimadata.qrimg = true
          this.$api.loginApi.loginCreate(this.erweimadata, (res) => {
            // 生产二维码图片
            if (res.code === 200) {
              this.erWeiMaImg = res.data.qrimg
              this.iserWeiMaImg = false
            }
          })
        }
      })
    },
    phoneReg (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$api.loginApi.isPhoneInfo({ phone: this.formData.phone }, (res) => {
            // 调用检测手机号码是否已注册接口
            if (res.code === 200 && res.nickname) {
              this.$message.error('改手机号已注册')
              return false
            } else {
              this.loginType = '注册2'
              this.$api.loginApi.PhoneSent({ phone: this.formData.phone }, (res) => {
                // 发送验证码
                let numInter = setInterval(() => {
                  this.num--
                  if (this.num === 0) {
                    this.num = 0
                    clearInterval(numInter)
                  }
                }, 1000)
              })
            }
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    chongXinHuoQ () {
      // 重新获取验证码
      this.num = 90
      this.$api.loginApi.PhoneSent({ phone: this.formData.phone }, (res) => {
        // 发送验证码
        let numInter = setInterval(() => {
          this.num--
          if (this.num === 0) {
            this.num = 0
            clearInterval(numInter)
          }
        }, 1000)
      })
    },
    getNickName () {
      // 校验
      if (this.formData.captcha && this.formData.captcha.length === 4) {
        this.loginType = '注册3'
      } else {
        this.isyanZhengMa = true
      }
    },
    startMusic () {
      if (!this.formData.nickname || this.formData.nickname.length < 4) {
        return false
      }
      if (this.isstartMusic) {
        this.isstartMusic = false
        this.$api.loginApi.loginPhoneInfo(this.formData, (res) => {
          // 注册
          if (res.code === 200) {
            this.$store.commit('setNickname', res.profile.nickname)
            this.$store.commit('setToken', res.token)
            this.$store.commit('setUserId', res.profile.userId)
            this.$store.commit('setPhone', this.formData.phone)
            this.$store.commit('setPassword', this.formData.password)
            this.loginText = '退出'
            this.login = false
          } else {
            this.isstartMusic = true
            this.$message.error(res.message)
          }
        })
      }
    },
    phoneLogin (formName) {
      // 手机号登陆
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.getloginInit()
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    getloginInit () {
      if (this.getCookie('__csrf')) {
        // 二维码登录
        let obj = {
          timestamp: new Date().getTime()
        }
        this.$api.loginApi.loginStatus(obj, (res) => {
          this.$api.loginApi.userDetail({ uid: res.data.profile.userId }, (res) => {
            this.$store.commit('setNickname', res.profile.nickname)
            this.$store.commit('setUserId', res.profile.userId)
            this.$store.commit('setAvatarUrl', res.profile.avatarUrl)
            this.loginText = '退出'
          })
        })
      } else if (localStorage.getItem('WYIMUSICINFO')) {
        this.formData = Object.assign(this.formData, JSON.parse(localStorage.getItem('WYIMUSICINFO')))
        if (this.formData.phone !== '') {
          this.$api.loginApi.loginPhone(this.formData, (res) => {
            // 注册
            if (res.code === 200) {
              this.$store.commit('setNickname', res.profile.nickname)
              this.$store.commit('setToken', res.token)
              this.$store.commit('setUserId', res.profile.userId)
              this.$store.commit('setAvatarUrl', res.profile.avatarUrl)
              this.$store.commit('setPhone', this.formData.phone)
              this.$store.commit('setPassword', this.formData.password)
              this.loginText = '退出'
              this.login = false
              return false
            } else {
              this.isstartMusic = true
              this.$message.error(res.message)
            }
          })
        }
      }
    },
    getCookie (name) {
      var prefix = name + '='
      var start = document.cookie.indexOf(prefix)
      if (start === -1) {
        return null
      }
      var end = document.cookie.indexOf(';', start + prefix.length)
      if (end === -1) {
        end = document.cookie.length
      }
      var value = document.cookie.substring(start + prefix.length, end)
      return decodeURI(value)
    }
  },
  watch: {
    erWeiMaImg: function (newVal, oldVal) {
      let that = this
      if (newVal) {
        that.Intervals = setInterval(() => {
          that.$api.loginApi.loginCheck(that.erweimadata, (res) => {
            // 二维码实效验证
            if (res.code === 800) {
              that.iserWeiMaImg = true
              clearInterval(that.Intervals)
            } else if (res.code === 802) {

            } else if (res.code === 803) {
              that.$message.success('登录成功')
              that.login = false
              that.$api.loginApi.loginStatus(that.erweimadata, (res) => {
                this.$store.commit('setNickname', res.profile.nickname)
                this.$store.commit('setUserId', res.profile.userId)
                this.$store.commit('setAvatarUrl', res.profile.avatarUrl)
                this.loginText = '退出'
                clearInterval(that.Intervals)
              })
            }
          })
        }, 1000)
      } else {
        clearInterval(that.Intervals)
        that.Intervals = null
      }
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
<style>
.loginDialog .el-dialog__header {
  background: #2d2d2d;
  text-align: left;
  color: white;
}
.loginDialog .el-dialog__title {
  color: white;
}
.loginDialog .loginLeft,
.loginDialog .loginRight {
  width: 48%;
  height: 200px;
  display: inline-flex;
}
.loginDialog .loginLeft {
  background: url("../../assets/images/qr_guide.png") no-repeat center center;
  background-size: contain;
}
.loginDialog .loginRight {
  position: relative;
}
.loginDialog .loginRight .loginRight_new {
  position: absolute;
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background: rgba(0, 0, 0, 0.85);
  color: #fff;
}
.loginDialog .loginRight .loginRight_new span {
  padding: 2px 6px;
  background: seagreen;
  color: #fff;
  cursor: pointer;
}
.loginDialog .phoneImg {
  height: 100px;
  background: url("../../assets/images/platform.png") no-repeat center center;
  background-size: contain;
}
.loginDialog .qitaText {
  width: 150px;
  margin: 10px auto;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border: 1px solid #ddd;
  cursor: pointer;
}
.loginDialog .dialog-footer {
  text-align: left;
}
</style>
