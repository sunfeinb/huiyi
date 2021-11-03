<template>
  <div>
    <el-container>
      <el-header style="  background-color: #333;">
        <div class="box">
          <div>
            <i class="el-icon-video-camera-solid" style="font-size:30px"></i>
          </div>
          <div class="box1">
            <div class="homeing">HOME</div>
            <div class="commit">COMMITTEE</div>
            <div class="Speaker">SPEAKER</div>
            <div class="hist">HISTORY</div>
            <div class="conta">CONTACT</div>
          </div>
        </div>
      </el-header>
      <el-main>
        <!-- 轮播图 -->
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      name: ""
    };
  },
  components: {},
  methods: {},
  mounted() {},
  computed: {},
  watch: {}
};
</script>

<style lang='scss' scoped>
.box {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 14px;
  color: white;
}
.box1 {
  cursor: pointer;
  justify-content: space-around;
  width: 80%;
  display: flex;
}
</style>
