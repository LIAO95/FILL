<template>
  <div class="home">

    <span class="logo">
      <img src="./../assets/logo.png">
    </span>
    <h3>三亚市酒店住宿业单位旅游接待情况月报</h3>

    <div class="main">
      <el-form ref="formLabelAlign" :inline="true" :label-position="labelPosition" :model="formLabelAlign" class="formLabelAlign" size="small">
        <el-row :gutter="20">
          <el-col :xs="24" :sm="8" :md="8">
            <el-form-item label="填报月份">
              <div class="block">
                <span class="demonstration"/>
                <el-date-picker
                  v-model="formLabelAlign.createDate"
                  type="month"
                  placeholder="请选择月份"
                />
              </div>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="7" :md="7" >
            <el-form-item label="单位名称" class="index_name" >
              <el-input v-model="formLabelAlign.dwmc" placeholder="请输入单位名称"/>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="9" :md="9">
            <el-form-item label=" 统一社会信用代码" class="index_name" >
              <template>
                <el-input v-model="formLabelAlign.xydm" placeholder="请输入统一社会信用代码"/>
              </template>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>

      <div class="flexData" >
        <el-form ref="flexData" :model="flexData">
          <div class="flex-outer width-attr flex-title">
            <div class="item">指标名称</div>
            <div class="item">人次数</div>
            <div class="item">人天数</div>

          </div>

          <div class="flex-outer width-attr ">
            <div class="item">
              <div>一、国内过夜游客</div>
              <div>二、入境过夜游客</div>
            </div>

            <div class="item">

              <el-form-item>
                <el-input v-model.number="flexData.jdgngyrcs" type="number" size="small" @mousewheel.native.prevent placeholder="请输入人次数"/>
              </el-form-item>

              <el-form-item>
                <div class="sum_style">{{ sumPeople() }}</div>
              </el-form-item>

            </div>

            <div class="item">
              <el-form-item>
                <el-input v-model.number="flexData.jdgngyrts" type="number" size="small" @mousewheel.native.prevent placeholder="请输入人天数"/>
              </el-form-item>

              <el-form-item>
                <div class="sum_style">{{ sumDay() }}</div>
              </el-form-item>
            </div>
          </div>

          <div class="flex-outer width-attr rujing" >
            <div class="item">
              <div>(一)香港同胞</div>
              <div>(二)澳门同胞</div>
              <div>(三)台湾同胞</div>
              <div>(四)外 国 人</div>
            </div>

            <div class="item">

              <el-form-item>
                <el-input v-model.number="flexData.jdxgrcs" type="number" size="small"  @mousewheel.native.prevent placeholder="请输入人次数"/>
              </el-form-item>
              <el-form-item>
                <el-input v-model.number="flexData.jdamrcs" type="number" size="small" @mousewheel.native.prevent placeholder="请输入人次数"/>
              </el-form-item>
              <el-form-item>
                <el-input v-model.number="flexData.jdtwrcs" type="number" size="small" @mousewheel.native.prevent placeholder="请输入人次数"/>
              </el-form-item>
              <el-form-item>
                <el-input v-model.number="flexData.jdwgrcs" type="number" size="small" @mousewheel.native.prevent placeholder="请输入人次数"/>
              </el-form-item>

            </div>

            <div class="item">

              <el-form-item>
                <el-input v-model.number="flexData.jdxgrts" type="number" size="small" @mousewheel.native.prevent placeholder="请输入人天数"/>
              </el-form-item>

              <el-form-item>
                <el-input v-model.number="flexData.jdamrts" type="number" size="small" @mousewheel.native.prevent placeholder="请输入人天数"/>
              </el-form-item>

              <el-form-item>
                <el-input v-model.number="flexData.jdtwrts" type="number" size="small" @mousewheel.native.prevent placeholder="请输入人天数"/>
              </el-form-item>

              <el-form-item>
                <el-input v-model.number="flexData.jdwgrts" type="number" size="small" @mousewheel.native.prevent placeholder="请输入人天数"/>
              </el-form-item>
            </div>
          </div>

          <div class="flex-outer width-attr sum">
            <div class="item">总人数</div>
            <div class="item"> {{ sumAll() }}</div>
            <!-- <div class="item"> <el-input v-model="sumDayAll" size="small"/></div> -->

            <div class="item"> {{ sumDayAll() }}</div>
          </div>

        </el-form>
      </div>

      <el-divider>填表说明</el-divider>
      <div class="instruction">
        <p>1.本表由辖区内所有从事相关业务的住宿单位填报，报送时间为月后3日内；</p>
        <p>2.月接待人次数=本月前台登记的过夜人数；</p>
        <p>3.月接待人天数=本月每天接待的过夜人数之和。</p>
      </div>
    </div>

    <el-divider>必填资料</el-divider>
    <!-- :rules="rules"  -->
    <el-form ref="formZiliao" :label-position="labelPosition" :model="formZiliao" class="formZiliao" label-width="150px" size="small">
      <el-row :gutter="20">
        <el-col :sm="24" :md="12">
          <el-form-item label="本月可供出租间数" prop="bykgczjs">
            <el-input v-model.number="formZiliao.bykgczjs" type="number" placeholder="请输入"  @mousewheel.native.prevent />
          </el-form-item>
        </el-col>
        <el-col :sm="24" :md="12">
          <el-form-item label="本月可供出租床位数" prop="bykgczcws">
            <el-input v-model="formZiliao.bykgczcws" type="number" placeholder="请输入"  @mousewheel.native.prevent />
          </el-form-item>
        </el-col>
        <el-col :sm="24" :md="12" >
          <el-form-item label="本月实际出租间数" prop="bysjczjs">
            <el-input v-model="formZiliao.bysjczjs" type="number" placeholder="请输入" @mousewheel.native.prevent />
          </el-form-item>
        </el-col>

        <el-col :sm="24" :md="12">
          <el-form-item label="本月平均房价" prop="bypjfj">
            <el-input v-model="formZiliao.bypjfj" type="number" placeholder="请输入" @mousewheel.native.prevent />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row :gutter="16">
        <el-col :sm="12" :md="8">
          <el-form-item label="单位负责人" class="index_name" >
            <el-input v-model="formZiliao.dwfzr" size="small" placeholder="请输入单位负责人"   />
          </el-form-item>
        </el-col>
        <el-col :sm="12" :md="8" >
          <el-form-item label="填表人" class="index_name" >
            <el-input v-model="formZiliao.tbr" size="small" placeholder="请输入填表人"  />
          </el-form-item>
        </el-col>
        <el-col :sm="12" :md="8">
          <el-form-item label="联系电话" class="index_name" >
            <el-input v-model="formZiliao.lxfs" size="small" placeholder="请输入电话" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-divider/>
      <el-form-item align="center" label-width="0px">
        <el-button class="btn_submitForm" type="primary" @click="submitForm()">提交</el-button>
      </el-form-item>

    </el-form>

    <div/>

  </div>
</template>

<script>

import axios from 'axios'

export default {
  data () {
    return {
      labelPosition: 'right',
      formLabelAlign: {
        createDate: '',
        dwmc: '',
        xydm: ''

      },
      flexData: {
        jdgngyrcs: '',
        jdgngyrts: '',

        jdxgrcs: '',
        jdamrcs: '',
        jdtwrcs: '',
        jdwgrcs: '',

        jdxgrts: '',
        jdamrts: '',
        jdtwrts: '',
        jdwgrts: ''
      },

      formZiliao: {
        bykgczjs: '',
        bysjczjs: '',
        bykgczcws: '',
        bypjfj: '',
        dwfzr: '',
        tbr: '',
        lxfs: ''
      },

      otherData: {
        sumPeople: '',
        sumAll: '',
        sumDay: '',
        sumDayAll: ''
      }
    }
  },

  computed: {
    sumPeople: function () {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      return () => (this.otherData.sumPeople = parseFloat(this.flexData.jdxgrcs + this.flexData.jdamrcs + this.flexData.jdtwrcs + this.flexData.jdwgrcs) || 0)
    },
    sumAll: function () {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      return () => (this.otherData.sumAll = parseFloat(this.flexData.jdgngyrcs + this.flexData.jdxgrcs + this.flexData.jdamrcs + this.flexData.jdtwrcs + this.flexData.jdwgrcs) || 0)
    },
    sumDay: function () {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      return () => (this.otherData.sumDay = parseFloat(this.flexData.jdxgrts + this.flexData.jdamrts + this.flexData.jdtwrts + this.flexData.jdwgrts) || 0)
    },
    sumDayAll: function () {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      return () => (this.otherData.sumDayAll = parseFloat(this.flexData.jdgngyrts + this.flexData.jdxgrts + this.flexData.jdamrts + this.flexData.jdtwrts + this.flexData.jdwgrts) || 0)
    }

  },

  methods: {
    checkFormData (formArr) {
      let flag = false
      for (const val of formArr) {
        this.$refs[val].validate(valid => {
          flag = valid
        })
        if (!flag) { return }
      }
      return flag
    },

    submitForm () {
      if (!this.checkFormData(['formLabelAlign', 'formZiliao', 'flexData'])) { return console.log('表单校验不通过') }
      console.log(this.otherData)
      /* json格式提交： */
      const formData = { ...this.formLabelAlign, ...this.formZiliao, ...this.flexData, ...this.otherData }

      axios({
        method: 'post',
        url: '/followme-sy/api/saveYb',
        // url: 'http://followme.tpddns.cn:18091/followme-sy/api/saveYb',

        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true,
        data: formData
      })
        .then((res) => {
          console.log(res)

          alert(res.data)

        // this.$alert(res.data, '提示', {
        //   dangerouslyUseHTMLString: true
        // });

          if (res.data=="保存成功") {

                  // this.$router.push({path:'/ThankYou'})
                  this.$router.push('/complete')
                
                // window.location.reload();

                }else{console.log("保存失败")

                // this.$router.push({path:'/https://www.baidu.com/'})

              }

                

        })
        .catch((err) => {
          console.log(err)
        })
    }

  }

}
</script>

<style>
body{background: #f5f5f5; font-size: 14px;position: relative;}

.logo{position: absolute;left: 0;top: 0;width: 150px; padding:10px;}
.logo img{width: 100%;}
.home{position: relative;max-width: 1024px;margin: 0 auto;background: #fff;padding: 10px;}
.home h3{text-align: center;}
.table .el-input__inner{border:none;}
.table .el-table td{padding:5px 0;}
.el-table td div{margin-bottom: 0px;}
.instruction p{font-size: 14px;color: #606266;margin: 0;line-height: 22px;}
.btn_submitForm{width: 120px;}
.formZiliao .el-form-item.is-required:not(.is-no-asterisk)>.el-form-item__label:before{opacity: 0;}

.flexData{border: 1px solid #eee;}
.flexData .el-input__inner{border: none;background: none;}
.flex-title{line-height: 38px;}

.flex-outer {
  display: flex;
  flex-wrap: wrap;
  }

  .flex-outer .item ,.flex-outer article{

  box-sizing: border-box;
  color: #666;
  }
  .flex-outer article{border: 1px solid #eee;}

  .flex-outer.width-attr .item,.flex-outer article { width: 33.3%;text-align: center;}
  .flex-outer.width-attr .item>div{border: 1px solid #eee;line-height: 40px;    margin-right: 1px;
  margin-bottom: -1px;
  margin-top: 1px;
  margin-left: -1px;
  border-right: 0;
  border-bottom: 0
}
.flex-outer.flex-title .item{border-right: 1px solid #eee;font-weight: 600;}
.flex-outer.flex-title div:last-child{ border: 0;}

.flex-outer.sum{background: #f5f7fa;line-height: 40px;border-top: 1px solid #eee;}
.flex-outer.sum div{border-left:1px solid #eee;margin-left: -1px;margin-left: -1px;margin-right: 1px;font-weight: bold;}
.flex-outer.sum div:first-child {border-left:none;margin-top: 1px;}
.flex-outer.rujing div:first-child{ color: #888;text-align: center;}

.sum_style{font-weight: bold;}

.flexData input{text-align: center;color: #999;}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button{
   -webkit-appearance: none !important;
   margin: 0;
}
input[type="number"]{
  -moz-appearance:textfield;
}

@media screen and (max-width: 768px){
  /*.formLabelAlign label{width: 150px;}*/
}

@media screen and (max-width: 586px)
{
  .logo{right: 0;margin: 0 auto;}
  .home h3{margin-top: 50px;}
  .flex-outer.width-attr .item>div{font-size: 13px;}
}
</style>
