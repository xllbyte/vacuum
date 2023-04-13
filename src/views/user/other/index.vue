<template>
  <div>
    <n-grid x-gap="12" :y-gap="15" :cols="5">
      <n-gi span="3">
        <n-card :bordered="false" class="rounded-16px shadow-sm single-card">
          <n-grid x-gap="12" :cols="3">
            <n-gi>
              <n-tag :bordered="false" type="info" size="large" style="margin-top: 10%">功率限制</n-tag>
              <br />
              <n-switch size="large" style="margin-bottom: 20%" />
            </n-gi>
            <n-gi span="2">
              <n-input-group style="margin-top: 6%">
                <n-input :style="{ width: '50%' }" />
                <n-button type="primary" ghost> A/Phase </n-button>
              </n-input-group>
            </n-gi>
          </n-grid>
        </n-card>
      </n-gi>
      <n-gi span="1">
        <n-card :bordered="false" class="rounded-16px shadow-sm single-card">
          <n-tag :bordered="false" type="info" size="large" style="margin-top: 6%">运输</n-tag>
          <n-select v-model:value="value" :options="options" />
        </n-card>
      </n-gi>
      <n-gi span="1">
        <n-card :bordered="false" class="rounded-16px shadow-sm single-card">
          <n-tag :bordered="false" type="info" size="large" style="margin-top: 6%">加热炉温度达标延迟</n-tag>
          <n-input-group>
            <n-input :style="{ width: '70%' }" />
            <n-input-group-label>min</n-input-group-label>
          </n-input-group>
        </n-card>
      </n-gi>
      <n-gi span="5">
        <n-card :bordered="false" class="rounded-16px shadow-sm" style="height: 400px">
          <n-grid x-gap="12" :cols="3" style="margin-top: 10%">
            <n-gi>
              <n-select v-model:value="value" />
            </n-gi>
            <n-gi>
              <n-input-group>
                <n-button type="primary"> 准备 </n-button>
                <n-input :style="{ width: '50%' }" />
                <n-button type="primary" ghost> °C </n-button>
              </n-input-group>
            </n-gi>
            <n-gi>
              <n-input-group>
                <n-button type="primary"> 延迟 </n-button>
                <n-input :style="{ width: '50%' }" />
                <n-button type="primary" ghost> 分钟 </n-button>
              </n-input-group>
            </n-gi>
          </n-grid></n-card
        >
      </n-gi>
    </n-grid>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.single-card {
  height: 150px;
}
</style>
