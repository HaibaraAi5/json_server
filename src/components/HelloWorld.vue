<template>
  <div class="hello">
    <el-progress :stroke-width="14" :percentage="parseFloat(progress)" color="#8e71c7" id="message" type="circle"></el-progress>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <el-date-picker v-model="timeValue" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
    </el-date-picker>
    <el-button type="primary" style="margin-left: 10px" @click="excute()" :disabled="excuteOn">备份</el-button>
    <el-button type="danger" @click="dele()" :disabled="deleOn">删除</el-button>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        progress: 0,
        websock: null,
        deleOn: true,
        excuteOn: true,
        timeValue: '',
        start: new Date(),
        end: new Date()
      }
    },
    mounted() {},
    created() {
      /*连接成功后会触发onopen事件，这时我们就可以向服务器发送数据了.在连接建立成功后触发的onopen事件中我们通过send()方法发送数据给服务器,要是关闭连接的话就会出发onclose事件*/
      var ws = new WebSocket("ws://127.0.0.1:8888/");
      ws.onopen = () => {
          var msg = {
            type: "王蛋儿",
            text: "大蛋儿",
            id: "狗蛋儿",
            date: Date.now()
          };
          ws.send(JSON.stringify(msg));
        },
        ws.onmessage = (e) => {
          this.progress = e.data;
          if (this.progress === '100') {
            this.deleOn = false;
            this.excuteOn = false;
          }
        }
    },
    methods: {
      dele() {
        var date0 = new Date(this.timeValue[0]);
        var mon0 = date0.getMonth() + 1;
        var day0 = date0.getDate();
        var hour0 = date0.getHours();
        var min0 = date0.getMinutes();
        var mydate0 = date0.getFullYear() + (mon0 < 10 ? "0" + mon0 : mon0) + (day0 < 10 ? "0" + day0 : day0) + (
          hour0 <
          10 ? "0" + hour0 : hour0) + (min0 < 10 ? "0" + min0 : min0);
        var date1 = new Date(this.timeValue[1]);
        var mon1 = date1.getMonth() + 1;
        var day1 = date1.getDate();
        var hour1 = date1.getHours();
        var min1 = date1.getMinutes();
        var mydate1 = date1.getFullYear() + (mon1 < 10 ? "0" + mon1 : mon1) + (day1 < 10 ? "0" + day1 : day1) + (
          hour1 <
          10 ? "0" + hour1 : hour1) + (min1 < 10 ? "0" + min1 : min1);
        this.$ajax({
          method: 'post',
          url: `api/sync/${mydate0}/${mydate1}`,
          success: function (data) {
            console.log(mydate0);
            console.log(mydate1);
          }
        })
      },
      excute() {
        var date0 = new Date(this.timeValue[0]);
        var mon0 = date0.getMonth() + 1;
        var day0 = date0.getDate();
        var hour0 = date0.getHours();
        var min0 = date0.getMinutes();
        var mydate0 = date0.getFullYear() + (mon0 < 10 ? "0" + mon0 : mon0) + (day0 < 10 ? "0" + day0 :
          day0) + (hour0 < 10 ? "0" + hour0 : hour0) + (min0 < 10 ? "0" + min0 : min0);
        var date1 = new Date(this.timeValue[1]);
        var mon1 = date1.getMonth() + 1;
        var day1 = date1.getDate();
        var hour1 = date1.getHours();
        var min1 = date1.getMinutes();
        var mydate1 = date1.getFullYear() + (mon1 < 10 ? "0" + mon1 : mon1) + (day1 < 10 ? "0" + day1 : day1) + (
            hour1 <
            10 ? "0" +
            hour1 : hour1) +
          (min1 < 10 ? "0" + min1 : min1);
        this.$ajax({
          method: 'post',
          url: `api/delete/file/${mydate0}/${mydate1}`,
          success: function (data) {
            console.log(mydate0);
            console.log(mydate1);
          }
        })

      },

    }
  }

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

</style>
