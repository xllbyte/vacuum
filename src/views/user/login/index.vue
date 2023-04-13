<template>
  <div>
    <n-card :bordered="false" class="rounded-16px shadow-sm">
      <div class="flex-y-center justify-between">
        <div class="flex-y-center">
          <icon-local-avatar class="text-70px" />
          <div class="pl-12px">
            <h3 class="text-18px font-semibold">欢迎回来，{{ auth.userInfo.userName }}</h3>
            <p class="leading-30px text-[#999]">您的权限等级为:{{ auth.userInfo.userRole }}</p>
          </div>
        </div>
        <n-space :size="24" :wrap="false">
          <n-switch v-model:value="active" size="large" />
          <h1 v-if="active">{{ currentTime }}</h1>
          <n-time-picker v-if="active" default-formatted-value="00:12:13" />
        </n-space>
      </div>
    </n-card>
    <n-card :bordered="false" class="rounded-16px shadow-sm p-5px" style="margin-top: 10px">
      <n-data-table bordered :columns="columns" :data="userData"> </n-data-table>
      <n-modal v-model:show="visible" class="rounded-10px" preset="card" title="新建用户" style="width: 600px">
        <n-form ref="formRef" :rules="rules" :model="model">
          <n-form-item label="用户名" path="userName">
            <n-input v-model:value="model.userName" placeholder="请输入用户名"></n-input>
          </n-form-item>
          <n-form-item label="密码" path="password">
            <n-input v-model:value="model.password" placeholder="请输入密码"></n-input>
          </n-form-item>
          <n-form-item label="级别" path="userRole">
            <n-input v-model:value="model.userRole" placeholder="请输入级别"></n-input>
          </n-form-item>
          <n-row :gutter="[0, 24]">
            <n-col :span="24">
              <div style="display: flex; justify-content: flex-end">
                <n-button round type="primary" @click="submit"> 确定 </n-button>
              </div>
            </n-col>
          </n-row>
        </n-form>
      </n-modal>
    </n-card>
  </div>
</template>

<script setup lang="ts">
import { h, onMounted, reactive, ref } from 'vue';
import type { FormInst } from 'naive-ui';
import { NSpace, NButton, useDialog, useMessage } from 'naive-ui';
import { REGEXP_Level, REGEXP_Login, REGEXP_PWD } from '@/config';
import { useAuthStore } from '@/store';
import { localStg } from '@/utils';
import { deleteUser, fetchChangeUserInfo, insertUser, queryAllUser } from '@/service/api/user';
interface ModelType {
  userId: string | null;
  userName: string | null;
  password: string | null;
  level: string | null;
  phoneNumber: string | null;
  createTime: string | null;
  userRole: string | null;
}

defineOptions({ name: 'DashboardWorkbenchHeader' });

const active = ref(true);
const currentUser = ref('管理员');
const currentLevel = ref('0');
const currentTime = ref('');
const addTime = ref(null);
const dialog = useDialog();
const message = useMessage();
const visible = ref(false);
const auth = useAuthStore();
const modelRef = ref<ModelType>({
  userId: null,
  userName: null,
  password: null,
  level: null,
  phoneNumber: null,
  createTime: null,
  userRole: null
});
const user = modelRef;
const columns = [
  {
    title: '序号',
    key: 'userId',
    align: 'center',
    minWidth: '50px'
  },
  {
    title: '姓名',
    key: 'userName',
    align: 'center',
    minWidth: '200px'
  },
  {
    title: '级别',
    key: 'userRole',
    align: 'center',
    minWidth: '200px'
  },
  {
    title: '操作',
    key: 'action',
    render(row) {
      return h(NSpace, null, {
        default: () => [
          h(
            NButton,
            {
              strong: true,
              tertiary: true,
              color: 'green',
              size: 'small',
              onClick: () => {
                model.password = '';
                model.userName = '';
                model.userRole = '';
                visible.value = true;
              }
            },
            { default: () => '添加用户' }
          ),
          h(
            NButton,
            {
              strong: true,
              tertiary: true,
              color: 'blue',
              size: 'small',
              onClick: () => {
                handleSuccess(row);
              }
            },
            { default: () => '更换用户' }
          ),
          h(
            NButton,
            {
              strong: true,
              tertiary: true,
              color: 'red',
              size: 'small',
              onClick: () => {
                handleConfirm(row);
              }
            },
            { default: () => '删除用户' }
          )
        ]
      });
    }
  }
];
const model = reactive({
  userName: '',
  password: '',
  userRole: ''
});
const formRef = ref<HTMLElement & FormInst>();
// 定义表格的数据
const userData = ref([]);
const rules = {
  // 用一个对象来保存表单的验证规则
  userName: {
    pattern: REGEXP_Login,
    message: '用户名为4-16位',
    trigger: 'input',
    required: true
  },
  password: {
    // 密码的验证规则
    pattern: REGEXP_PWD,
    message: '密码为6-18位数字/字符/符号，至少2种组合',
    trigger: 'input',
    required: true
  },
  userRole: {
    pattern: REGEXP_Level,
    required: true, // 必填
    trigger: 'input',
    message: '等级为1-20的数字' // 错误信息
  }
};

class TimeAccumulator {
  // 定义一个私有的时间属性，单位是毫秒
  private time: number;

  // 定义一个构造函数，可以传入一个初始的时间值，如果没有传入，就默认为0
  constructor(time = 0) {
    this.time = time;
  }

  // 定义一个方法，用于累加时间，传入一个增加的时间值，单位是毫秒
  add(time: number) {
    // 把增加的时间值加到当前的时间属性上
    this.time += time;
  }

  // 定义一个方法，用于格式化时间，返回一个字符串，格式为时:分:秒
  format() {
    // 创建一个Date对象，用当前的时间属性作为参数
    const date = new Date(this.time);
    // 获取Date对象的小时，分钟，秒数
    const hours = date.getHours() - 8;
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    // 把小时，分钟，秒数转换为字符串，如果小于10，就在前面补0
    const hoursStr = hours < 10 ? `0${hours}` : `${hours}`;
    const minutesStr = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const secondsStr = seconds < 10 ? `0${seconds}` : `${seconds}`;
    // 把小时，分钟，秒数拼接成一个字符串，用冒号分隔
    const result = `${hoursStr}:${minutesStr}:${secondsStr}`;
    // 返回结果字符串
    return result;
  }
}

function renderMap() {
  const accumulator = new TimeAccumulator();
  addTime.value = setInterval(() => {
    accumulator.add(1000);
    currentTime.value = accumulator.format();
  }, 1000);
  console.log(accumulator.format()); // 01:00:03
  currentTime.value = accumulator.format();
}
function handleConfirm(row) {
  dialog.warning({
    title: '警告',
    content: '你确定删除该用户吗？',
    positiveText: '确定',
    negativeText: '取消',
    onPositiveClick: async () => {
      const index = userData.value.indexOf(row);
      if (index > -1) {
        userData.value.splice(index, 1);
        const { data } = await deleteUser(row.userId);
      }
      message.success('已删除');
    },
    onNegativeClick: () => {
      message.error('已取消');
    }
  });
}
function handleSuccess(row) {
  dialog.success({
    title: '警告',
    content: '是否切换改用户吗？',
    positiveText: '确定',
    negativeText: '取消',
    onPositiveClick: async () => {
      currentUser.value = row.name;
      currentLevel.value = row.level;
      const { data } = await fetchChangeUserInfo(row.userId);
      if (data) {
        // 成功后把用户信息存储到缓存中
        localStg.set('userInfo', data);
      }
      location.reload();
      message.success('已切换');
    },
    onNegativeClick: () => {
      message.error('切换取消');
    }
  });
}
function createUser() {
  // 创建用户的方法
  // 你可以在这里调用后端接口或者其他逻辑
  visible.value = false; // 把布尔值设为false
}

async function submit() {
  console.log(model);
  await formRef.value?.validate();
  const { data } = await insertUser(model);
  console.log(data);
  window.$message?.info(`${data.toString()}`);
  visible.value = false;
  initData();
}
onMounted(async () => {
  renderMap();
  initData();
});
async function initData() {
  const { data } = await queryAllUser();
  if (data) {
    userData.value = data;
  }
}
</script>

<style scoped></style>
