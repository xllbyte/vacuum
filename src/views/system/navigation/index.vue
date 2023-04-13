<template>
  <div>
    <n-card title="维护日历" :bordered="false" class="rounded-16px shadow-sm p-5px" style="margin-top: 10px">
      <n-data-table bordered :columns="columns" :data="data"> </n-data-table>
    </n-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface ModelType {
  task: string | null;
  state: string | null;
  deadline: string | null;
  maintenanceDate: string | null;
}
const modelRef = ref<ModelType>({
  task: null,
  state: null,
  deadline: null,
  maintenanceDate: null
});

const columns = [
  {
    title: '任务',
    key: 'task',
    align: 'center',
    minWidth: '50px'
  },
  {
    title: '状态',
    key: 'state',
    align: 'center',
    minWidth: '50px'
  },
  {
    title: '截至期',
    key: 'deadline',
    align: 'center',
    minWidth: '50px'
  },
  {
    title: '上次进行的维护',
    key: 'maintenanceDate',
    align: 'center',
    minWidth: '50px'
  }
];

const data = ref([
  {
    task: '加工区调整机构',
    state: '实现',
    deadline: '496小时',
    maintenanceDate: '09.02.2023'
  },
  {
    task: '清洗和润滑脂进口和出口',
    state: '实现',
    deadline: '496小时',
    maintenanceDate: '09.02.2023'
  },
  {
    task: '清洗输送凸轮',
    state: '实现',
    deadline: '496小时',
    maintenanceDate: '09.02.2023'
  },
  {
    task: '清洗传感器处理',
    state: '实现',
    deadline: '496小时',
    maintenanceDate: '09.02.2023'
  },
  {
    task: '为控制柜中的锥齿轮加润滑脂',
    state: '实现',
    deadline: '496小时',
    maintenanceDate: '09.02.2023'
  },
  {
    task: '在进料口和出料口检查密封条',
    state: '实现',
    deadline: '496小时',
    maintenanceDate: '09.02.2023'
  },
  {
    task: '数据总保护',
    state: '实现',
    deadline: '496小时',
    maintenanceDate: '09.02.2023'
  },
  {
    task: '检查安全功能',
    state: '实现',
    deadline: '496小时',
    maintenanceDate: '09.02.2023'
  },
  {
    task: '请求校准服务',
    state: '实现',
    deadline: '496小时',
    maintenanceDate: '09.02.2023'
  },
  {
    task: 'ABS流程气清洁粒料',
    state: '实现',
    deadline: '496小时',
    maintenanceDate: '09.02.2023'
  }
]);
</script>

<style scoped></style>
