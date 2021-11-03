<template>
  <div>
    <el-container>
  <el-header style="  background-color: #333;">
    <div class="box">
{{name}}
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
  props:{},
  data () {
    return {
      name:'2021年物联网与云计算技术国际学术会议（IoTCCT 2021）'
    }
  },
  components: {},
  methods: {},
  mounted() {},
  computed: {},
  watch: {}
}
</script>

<style lang='scss' scoped>
.box{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 18px;
  color: white;
}
</style>
