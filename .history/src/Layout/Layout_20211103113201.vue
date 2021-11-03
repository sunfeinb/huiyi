<template>
  <div>
    <el-container>
      <el-header style="  background-color: #545c64;" class="headering">
        <div class="box">
          <div>
            <i class="el-icon-video-camera-solid" style="font-size:30px"></i>
          </div>
          <el-menu
            :default-active="$route.path"
            class="el-menu-demo"
            mode="vertical"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            :router="true"
          >
            <div v-for="(item,index) in list" :key="index">
              <el-menu-item :index="item.url">
                <template>{{item.name}}</template>
              </el-menu-item>
            </div>
          </el-menu>
        </div>
      </el-header>
      <div style="height:60px"></div>
      <router-view></router-view>
      <div>
        <div>
          <i class="el-icon-video-camera-solid" style="font-size:200%"></i>
        </div>
      </div>
    </el-container>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      list: [
        {
          name: "HOME | 首页",
          url: "/"
        },
        {
          name: "COMMITTEE | 组委会",
          url: "/confer"
        },
        {
          name: "SPEAKER | 发言人",
          url: "/speak"
        },
        {
          name: "HISTORY | 历史",
          url: "/historing"
        },
        {
          name: "CONTACT | 联系我们",
          url: "/About"
        }
      ]
    };
  },
  components: {},
  methods: {
    butt() {}
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
.el-menu-demo {
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
