<template>
  <div class="main">
    <div class="serach_tabs">
      <el-tabs type="border-card">
        <el-tab-pane label="基本查询">
          <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-row type="flex" justify="center">
              <el-col :span="6">
                <el-form-item label="债务人" label-width="68px">
                  <el-input
                    v-model="formInline.user"
                    placeholder=""
                  ></el-input> </el-form-item
              ></el-col>
              <el-col :span="6">
                <el-form-item label="客户编号">
                  <el-input
                    v-model="formInline.user"
                    placeholder=""
                  ></el-input> </el-form-item
              ></el-col>
              <el-col :span="6">
                <el-form-item label="证件号码">
                  <el-input
                    v-model="formInline.user"
                    placeholder=""
                  ></el-input> </el-form-item
              ></el-col>
            </el-row>
            <el-row type="flex" justify="center">
              <el-col :span="6">
                <el-form-item label="手机号码">
                  <el-input
                    v-model="formInline.user"
                    placeholder=""
                  ></el-input> </el-form-item
              ></el-col>
              <el-col :span="6">
                <el-form-item label="银行卡号">
                  <el-input
                    v-model="formInline.user"
                    placeholder=""
                  ></el-input> </el-form-item
              ></el-col>
              <el-col :span="6"> </el-col>
            </el-row>
            <el-row type="flex" justify="end">
              <el-col :span="6">
                <el-form-item>
                  <el-button type="primary" @click="onSubmit">查询</el-button>
                  <el-button @click="onSubmit">清空</el-button>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="个人查询">
          <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-row type="flex" justify="center">
              <el-col :span="6">
                <el-form-item label="债务人" label-width="68px">
                  <el-input
                    v-model="formInline.user"
                    placeholder=""
                  ></el-input> </el-form-item
              ></el-col>
              <el-col :span="6">
                <el-form-item label="客户编号">
                  <el-input
                    v-model="formInline.user"
                    placeholder=""
                  ></el-input> </el-form-item
              ></el-col>
              <el-col :span="6">
                <el-form-item label="证件号码">
                  <el-input
                    v-model="formInline.user"
                    placeholder=""
                  ></el-input> </el-form-item
              ></el-col>
            </el-row>
            <el-row type="flex" justify="center">
              <el-col :span="6">
                <el-form-item label="手机号码">
                  <el-input
                    v-model="formInline.user"
                    placeholder=""
                  ></el-input> </el-form-item
              ></el-col>
              <el-col :span="6">
                <el-form-item label="银行卡号">
                  <el-input
                    v-model="formInline.user"
                    placeholder=""
                  ></el-input> </el-form-item
              ></el-col>
              <el-col :span="6"> </el-col>
            </el-row>
            <el-row type="flex" justify="end">
              <el-col :span="6">
                <el-form-item>
                  <el-button type="primary" @click="onSubmit">查询</el-button>
                  <el-button @click="onSubmit">清空</el-button>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="table_tabs">
      <el-tabs type="border-card" v-model="activeName" @tab-click="tabChange">
        <el-tab-pane label="所有案件" name="first" :key="'first'">
          <el-table
            v-if="isFirst"
            :data="
              tableData.slice((currpage - 1) * pageSize, currpage * pageSize)
            "
            style="width: 100%"
            :height="defaultHeight.height"
          >
            <el-table-column prop="date" label="日期"> </el-table-column>
            <el-table-column prop="name" label="姓名"> </el-table-column>
            <el-table-column prop="province" label="省份"> </el-table-column>
            <el-table-column prop="city" label="市区"> </el-table-column>
            <el-table-column prop="address" label="地址"> </el-table-column>
            <el-table-column prop="zip" label="邮编"> </el-table-column>
            <el-table-column label="操作" width="120">
              <template slot-scope="scope">
                <el-button
                  @click.native.prevent="deleteRow(scope.$index, tableData)"
                  type="text"
                  size="small"
                >
                  移除
                </el-button>
              </template>
            </el-table-column>
          </el-table>
          <div class="pagination">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currpage"
              :page-sizes="[2, 4, 6, 8]"
              :page-size="pageSize"
              layout=" prev, pager, next,total, sizes, jumper"
              :total="tableData.length"
            >
            </el-pagination>
          </div>
        </el-tab-pane>
        <el-tab-pane label="新进案件" name="second" :key="'second'">
          <el-table
            v-if="isSecond"
            :data="
              tableData.slice((currpage - 1) * pageSize, currpage * pageSize)
            "
            style="width: 100%"
            :height="defaultHeight.height"
          >
            <el-table-column prop="date" label="日期"> </el-table-column>
            <el-table-column prop="name" label="姓名"> </el-table-column>
            <el-table-column prop="province" label="省份"> </el-table-column>
            <el-table-column prop="city" label="市区"> </el-table-column>
            <el-table-column prop="address" label="地址"> </el-table-column>
            <el-table-column prop="zip" label="邮编"> </el-table-column>
            <el-table-column label="操作" width="120">
              <template slot-scope="scope">
                <el-button
                  @click.native.prevent="deleteRow(scope.$index, tableData)"
                  type="text"
                  size="small"
                >
                  移除
                </el-button>
              </template>
            </el-table-column>
          </el-table>
          <div class="pagination">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currpage"
              :page-sizes="[2, 4, 6, 8]"
              :page-size="pageSize"
              layout=" prev, pager, next,total, sizes, jumper"
              :total="tableData.length"
            >
            </el-pagination>
          </div>
        </el-tab-pane>
        <el-tab-pane label="新转案件" name="thirdly" :key="'thirdly'">
          <el-table
            v-if="isthirdly"
            :data="
              tableData.slice((currpage - 1) * pageSize, currpage * pageSize)
            "
            style="width: 100%"
            :height="defaultHeight.height"
          >
            <el-table-column prop="date" label="日期"> </el-table-column>
            <el-table-column prop="name" label="姓名"> </el-table-column>
            <el-table-column prop="province" label="省份"> </el-table-column>
            <el-table-column prop="city" label="市区"> </el-table-column>
            <el-table-column prop="address" label="地址"> </el-table-column>
            <el-table-column prop="zip" label="邮编"> </el-table-column>
            <el-table-column label="操作" width="120">
              <template slot-scope="scope">
                <el-button
                  @click.native.prevent="deleteRow(scope.$index, tableData)"
                  type="text"
                  size="small"
                >
                  移除
                </el-button>
              </template>
            </el-table-column>
          </el-table>
          <div class="pagination">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currpage"
              :page-sizes="[2, 4, 6, 8]"
              :page-size="pageSize"
              layout=" prev, pager, next,total, sizes, jumper"
              :total="tableData.length"
            >
            </el-pagination>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      defaultHeight: {
        height: "",
      },
      // 默认第一个Tab
      activeName: "first",
      isFirst: true,
      isSecond: false,
      isthirdly: false,
      pageSize: 2,
      currpage: 1,

      formInline: {
        user: "",
        region: "",
      },
      tableData: [
        {
          in: 1,
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          in: 1,
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          in: 1,
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          in: 1,
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          in: 1,
          date: "2016-05-08",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          in: 1,
          date: "2016-05-06",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          in: 1,
          date: "2016-05-07",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          in: 2,
          date: "2016-05-03",
          name: "王小虎2",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          in: 2,
          date: "2016-05-02",
          name: "王小虎2",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          in: 2,
          date: "2016-05-04",
          name: "王小虎2",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          in: 2,
          date: "2016-05-01",
          name: "王小虎2",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          in: 2,
          date: "2016-05-08",
          name: "王小虎2",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          in: 2,
          date: "2016-05-06",
          name: "王小虎2",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          in: 2,
          date: "2016-05-07",
          name: "王小虎2",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
      ],
    };
  },
  methods: {
    // 高度自适应
    height() {
      this.defaultHeight.height = window.innerHeight - 500 + "px";
    },
    tabChange(tab) {
      this.$nextTick(() => {
        if (tab.name === "first") {
          this.isFirst = true;
          this.isSecond = false;
          this.isthirdly = false;
        } else if (tab.name === "second") {
          this.isFirst = false;
          this.isSecond = true;
          this.isthirdly = false;
        } else if (tab.name === "thirdly") {
          this.isFirst = false;
          this.isSecond = false;
          this.isthirdly = true;
        }
      });
    },
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
    onSubmit() {
      console.log(123);
    },
    handleCurrentChange(cpage) {
      this.currpage = cpage;
      console.log(this.currpage);
    },
    handleSizeChange(psize) {
      this.pageSize = psize;
      console.log(this.pageSize);
    },
    handleSelectionChange(val) {
      console.log(val);
    },
  },
  computed: {
    num: function() {
      return this.tableData.length;
    },
    // eslint-disable-next-line vue/return-in-computed-property
    one: function() {
      this.tableData.forEach((item) => {
        if (item.in == 1) {
          return item;
        }
      });
    },
  },
  created() {
    window.addEventListener("resize", this.height());
  },
  destroyed() {
    window.removeEventListener("resize", this.height());
  },
};
</script>

<style lang="less" scoped>
.main {
  height: 100%;
  .serach_tabs {
    height: 30%;
  }
  .table_tabs {
    height: 70%;
    .pagination {
      display: flex;
      align-items: center;
      justify-content: center;
      padding-top: 30px;
    }
  }
}
/deep/.el-tabs--border-card {
  height: 100%;
}
</style>
