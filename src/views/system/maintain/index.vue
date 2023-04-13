<template>
  <n-space :vertical="true">
    <n-card title="维护设置" :bordered="false" size="small" class="shadow-sm rounded-16px">
      <n-grid :item-responsive="true" responsive="screen" cols="m:2 l:2" :x-gap="5" :y-gap="8">
        <n-grid-item v-for="item in shortcuts" :key="item.id">
          <div
            class="p-12px border-1px border-[#efeff5] dark:border-[#ffffff17] rounded-4px hover:shadow-sm cursor-pointer"
          >
            <n-switch v-model:value="item.show" size="large" />
            <p class="py-8px text-16px">{{ item.label }}</p>
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
  show: boolean;
}

const shortcuts: Shortcuts[] = reactive([
  { id: 0, label: '真空除尘(一般清洁)', show: true },
  { id: 1, label: '在密封处涂抹滑石粉', show: true },
  { id: 2, label: '过滤器进出口', show: true },
  { id: 3, label: '更换低温区过滤器', show: true },
  { id: 4, label: '冷却装置的真空清洁用吸气风扇', show: true },
  { id: 5, label: '加工装置机盖的真空清洁用风扇', show: true },
  { id: 6, label: '加工区调整机构', show: true },
  { id: 7, label: '清洗和润滑脂进口和出口', show: true },
  { id: 8, label: '清洗输送凸轮', show: true },
  { id: 9, label: '清洗传感器处理', show: true },
  { id: 10, label: '为控制柜中的锥齿轮加润滑脂', show: true },
  { id: 11, label: '在进料口和出料口检查密封条', show: true },
  { id: 12, label: '手动注油器', show: true },
  { id: 13, label: '数据总保护', show: true },
  { id: 14, label: '检查安全功能', show: true },
  { id: 15, label: '请求校准服务', show: true },
  { id: 16, label: '加工区调整机构(链条-网带)', show: true },
  { id: 17, label: '清洁连杆的网带', show: true },
  { id: 18, label: '清洁输送装置停职传感器(网带输送器)', show: true },
  { id: 19, label: '清洁通过监控传感器', show: true },
  { id: 20, label: '排气监控传感器', show: true },
  { id: 21, label: '更换气体测量过滤器(AMS)', show: true },
  { id: 22, label: 'ABS流程气清洁粒料', show: true },
  { id: 23, label: '更换低温区过滤器(XXS)', show: true },
  { id: 24, label: '更换其他阶段低温区过滤器', show: true },
  { id: 25, label: '顾客特有的维护工作', show: true },
  { id: 26, label: '顾客特有的维护工作', show: true },
  { id: 27, label: '顾客特有的维护工作', show: true },
  { id: 28, label: '顾客特有的维护工作', show: true },
  { id: 29, label: '顾客特有的维护工作', show: true },
  { id: 30, label: '顾客特有的维护工作', show: true },
  { id: 31, label: '冷凝装置入口', show: true },
  { id: 32, label: '冷凝板进口', show: true },
  { id: 33, label: '清洁滴水盘和红外线加热器', show: true },
  { id: 34, label: '电池更换', show: true },
  { id: 35, label: '更换功率冷却区过滤器', show: true }
]);
</script>

<style scoped></style>
