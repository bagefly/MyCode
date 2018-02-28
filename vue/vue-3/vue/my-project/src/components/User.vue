<template>
  <div>
    <router-link :to="'/user/' + item.id" :key="index" v-for="(item,index) in userList">{{item.username}}</router-link>
    <div v-if="userInfo">
      姓名：{{userInfo.username}} <br/>
      性别:{{userInfo.sex}} <br/>
      title：{{userInfo.title}} <br/>
      爱好：{{userInfo.hobby}} <br/>
    </div>
  </div>
</template>
<script>
let data = [
  {
    id: 1,
    title: 'vip',
    username: 'wangtong',
    sex: '男',
    hobby: 'code'
  },
  {
    id: 2,
    title: 'vip',
    username: 'shumao',
    sex: '男',
    hobby: 'readbook'
  },
  {
    id: 3,
    title: 'svip',
    username: 'zhaocan',
    sex: '女',
    hobby: '男'
  }
]
export default {
  data () {
    return {
      userList: data,
      userInfo: ''
    }
  },
  watch: {
    $route () {
      this.getData()
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      let id = this.$route.params.id
      if (id) {
        this.user = this.userList.filter(item => {
          return item.id === id
        })[0]
      }
      console.log(this.userInfo)
    }
  }
}
</script>
