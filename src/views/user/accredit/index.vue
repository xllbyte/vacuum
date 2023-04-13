<template>
  <n-space :vertical="true">
    <n-card title="权限一览" :bordered="false" size="small" class="shadow-sm rounded-16px">
      <n-grid :item-responsive="true" responsive="screen" cols="m:2 l:6" :x-gap="50" :y-gap="80">
        <n-grid-item v-for="item in shortcuts" :key="item.id">
          <div
            class="flex-col-center p-12px border-1px border-[#efeff5] dark:border-[#ffffff17] rounded-4px hover:shadow-sm cursor-pointer"
          >
            <svg-icon :icon="item.icon" :style="{ color: item.iconColor }" class="text-30px" />
            <p class="py-8px text-16px">{{ item.label }}</p>
            <n-input-number v-model:value="item.level" clearable />
          </div>
        </n-grid-item>
      </n-grid>
    </n-card>
  </n-space>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

interface Shortcuts {
  id: number;
  label: string;
  icon: string;
  iconColor: string;
  level: number;
}

const shortcuts: Shortcuts[] = reactive([
  { id: 0, label: '自动开', icon: 'mdi:desktop-mac-dashboard', iconColor: '#409eff', level: 1 },
  { id: 1, label: '机盖开启', icon: 'ic:outline-settings', iconColor: '#7238d1', level: 2 },
  { id: 2, label: '用户管理', icon: 'mdi:family-tree', iconColor: '#f56c6c', level: 3 },
  { id: 3, label: '周时间开关', icon: 'fluent:app-store-24-filled', iconColor: '#19a2f1', level: 2 },
  { id: 4, label: '真空重启', icon: 'mdi:table-large', iconColor: '#fab251', level: 3 },
  { id: 5, label: '信息页代码', icon: 'mdi:chart-areaspline', iconColor: '#8aca6b', level: 6 },
  { id: 6, label: '通过监控器重置', icon: 'ion:accessibility', iconColor: '#409eff', level: 1 },
  { id: 7, label: '通过监测开关', icon: 'ion:add-circle', iconColor: '#7238d1', level: 2 },
  { id: 8, label: 'PCB计数器重置', icon: 'ion:airplane', iconColor: '#f56c6c', level: 3 },
  { id: 9, label: '重置转换计数器', icon: 'ion:alarm', iconColor: '#19a2f1', level: 2 },
  { id: 10, label: '重置批计数器', icon: 'ion:albums', iconColor: '#fab251', level: 3 },
  { id: 11, label: '维护警报重置', icon: 'ion:android-time', iconColor: '#8aca6b', level: 6 },
  { id: 12, label: '维护任务', icon: 'ion:aperture', iconColor: '#409eff', level: 1 },
  { id: 13, label: 'N2限值监控', icon: 'ion:arrow-redo-circle-sharp', iconColor: '#7238d1', level: 2 },
  { id: 14, label: 'CMDS开关', icon: 'ion:android-bulb', iconColor: '#f56c6c', level: 3 },
  { id: 15, label: '复位日计数器', icon: 'ion:arrow-down', iconColor: '#19a2f1', level: 2 },
  { id: 16, label: '复位重启内出口', icon: 'ion:arrow-down', iconColor: '#fab251', level: 3 },
  { id: 17, label: '改变profile数据', icon: 'ion:arrow-down', iconColor: '#8aca6b', level: 6 },
  { id: 18, label: '输送器的手动调整', icon: 'ion:beaker-sharp', iconColor: '#409eff', level: 1 },
  { id: 19, label: '输送', icon: 'ion:bus', iconColor: '#7238d1', level: 2 },
  { id: 20, label: '输送速度', icon: 'ion:caret-forward-circle', iconColor: '#f56c6c', level: 3 },
  { id: 21, label: '处理', icon: 'ion:cellular-sharp', iconColor: '#19a2f1', level: 2 },
  { id: 22, label: '设定温度', icon: 'ion:checkmark-done-circle-sharp', iconColor: '#fab251', level: 3 },
  { id: 23, label: '载入profile', icon: 'ion:cloud-done', iconColor: '#8aca6b', level: 6 },
  { id: 24, label: '保存profile数据', icon: 'ion:code-working-sharp', iconColor: '#409eff', level: 1 },
  { id: 25, label: '输送器故障重置', icon: 'ion:color-filter-outline', iconColor: '#7238d1', level: 2 },
  { id: 26, label: '进料口释放许可', icon: 'ion:eye-sharp', iconColor: '#f56c6c', level: 3 },
  { id: 27, label: '强制冷却', icon: 'ion:filter-circle-outline', iconColor: '#19a2f1', level: 2 },
  { id: 28, label: '风扇转速', icon: 'ion:hand-left', iconColor: '#fab251', level: 3 },
  { id: 29, label: '警报管理', icon: 'ion:ios-alert', iconColor: '#8aca6b', level: 6 },
  { id: 30, label: '删除警报列表', icon: 'ion:ios-cloud-download', iconColor: '#409eff', level: 1 },
  { id: 31, label: '设置', icon: 'ion:ios-loop', iconColor: '#7238d1', level: 2 },
  { id: 32, label: '数据导出', icon: 'ion:ios-loop', iconColor: '#f56c6c', level: 3 },
  { id: 33, label: '数据导入', icon: 'ion:md-albums', iconColor: '#19a2f1', level: 2 }
]);
</script>

<style scoped></style>
