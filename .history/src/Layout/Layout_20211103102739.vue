<template>
  <div>
    <el-container>
      <el-header style="  background-color: #333;" class="headering">
        <div class="box">
          <div>
            <i class="el-icon-video-camera-solid" style="font-size:30px"></i>
          </div>
          <div class="box1" v-for="(item,index) in list" :key=index>
            <div>
              <a>{{item.name}}</a>
            </div>
            <!-- <div class="homeing">
              <a></a>
            </div>
            <div class="commit" @click="butt">
              <a></a>
            </div>
            <div class="Speaker">
              <a></a>
            </div>
            <div class="hist">
              <a></a>
            </div>
            <div class="conta">
              <a></a>
            </div> -->

          </div>
        </div>
      </el-header>
      <div style="height:60px"></div>
        <router-view></router-view>
    </el-container>
  </div>
</template>

<script>

import router from "vue-router"
export default {
  props: {},
  data() {
    return {
      list:[
        {
          name:"COMMITTEE|组委会"
        },
        {
          name:"HOME|首页"
        },
        {
          name:"SPEAKER|发言人"
        },
        {
          name:"HISTORY|历史"
        },
        {
          name:"CONTACT|联系我们"
        }
      ]
    };
  },
  components: {},
  methods: {
    butt() {
      
    }
  },
  mounted() {},
  computed: {},
  watch: {}
};
</script>

<style lang='scss' scoped>
.headering {
  position: fixed;
  width: 100%;
  z-index: 999;
}
.box {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 14px;
  color: white;
  // position: fixed;
}
.box1 {
  cursor: pointer;
  justify-content: space-around;
  width: 80%;
  display: flex;
}

.homeing:hover {
  color: red;
}
a:link {
  text-decoration: none;
  color: white;
}
a:visited {
  text-decoration: none;
  color: white;
}
a:hover {
  text-decoration: none;
  color: red;
}
a:active {
  text-decoration: none;
  color: white;
}
a:active {
  text-decoration: none;
}
.el-carousel {
  overflow-x: hidden;
  overflow-y: hidden;
}
.Conference {
  justify-content: center;
  display: flex;
  padding: 2%;
  font-size: 28px;
  font-weight: 700;
}
</style>
