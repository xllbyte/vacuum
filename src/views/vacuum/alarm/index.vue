<template>
  <div>
    <div>
      <n-card :bordered="false" class="rounded-16px shadow-sm">
        <div class="w-full h-110px">
          <div class="p-0px">
            <span class="py-3px text-16px" style="margin-left: 30%">ER_700#真空错误</span>
          </div>
          <div class="p-0px">
            <n-button color="#9F9D8DFF" size="large" style="margin-left: 30%">
              <template #icon>
                <icon-icon-park-solid-error class="text-24px text-red" />
              </template>
            </n-button>
            <n-button color="red" size="large" style="margin-left: 3%">
              <template #icon>
                <icon-fluent-mdl2-grid-view-small class="text-24px text-red" />
              </template>
            </n-button>
            <n-button color="yellow" size="large" style="margin-left: 3%">
              <template #icon>
                <icon-fluent-mdl2-grid-view-small class="text-24px text-red" />
              </template>
            </n-button>
            <n-button color="#FAF9F6FF" size="large" style="margin-left: 3%">
              <template #icon>
                <icon-iconoir-sound-high class="text-24px text-red" />
              </template>
            </n-button>
            <n-button color="#F3F2EBFF" size="large" style="margin-left: 3%">
              <template #icon>
                <icon-uiw-message class="text-24px text-red" />
              </template>
            </n-button>
          </div>
          <div class="p-3px" style="text-align: center">
            <span class="py-8px text-16px">模块分配</span>
            <n-button type="primary" size="large" style="margin-left: 20px">5.0</n-button>
            <span class="py-8px text-16px" style="margin-left: 20px">sec</span>
          </div>
        </div>
      </n-card>
    </div>
    <div style="margin-top: 20px">
      <n-grid :x-gap="12" :y-gap="8" :cols="2">
        <n-grid-item>
          <n-card :bordered="false" class="rounded-16px shadow-sm">
            <div class="w-full h-300px">
              <div style="padding-left: 20px; padding-top: 5px; padding-bottom: 3px">
                <div>
                  <n-switch v-model:value="active" size="large" />
                  <span class="py-1px text-16px" style="margin-left: 5px">输送机停止红色板条</span>
                </div>
              </div>
              <div style="padding-left: 20px; padding-top: 5px; padding-bottom: 3px">
                <div>
                  <n-switch v-model:value="active" size="large" />
                  <span class="py-1px text-16px" style="margin-left: 5px">无泄漏错误</span>
                </div>
              </div>
              <div style="padding-left: 20px; padding-top: 5px; padding-bottom: 3px">
                <div>
                  <n-switch v-model:value="active" size="large" />
                  <span class="py-1px text-16px" style="margin-left: 5px">通过监控关闭</span>
                </div>
              </div>
              <div style="padding-left: 20px; padding-top: 5px; padding-bottom: 3px">
                <div>
                  <n-switch v-model:value="active" size="large" />
                  <span class="py-1px text-16px" style="margin-left: 5px"
                    >无压力错误！如果传感器有故障，则仅打开!!</span
                  >
                </div>
              </div>
              <div class="flex-col-center p-3px">
                <p class="py-8px text-16px">止动器Vac vorhanden</p>
              </div>
              <div style="padding-left: 20px; padding-top: 5px; padding-bottom: 3px">
                <div>
                  <n-grid :x-gap="12" :y-gap="8" :cols="1">
                    <n-grid-item>
                      <n-select v-model:value="cpw1Value" size="medium" :options="options" />
                    </n-grid-item>
                  </n-grid>
                </div>
              </div>
            </div>
          </n-card>
        </n-grid-item>
        <n-grid-item>
          <n-card :bordered="false" class="rounded-16px shadow-sm">
            <div class="w-full h-300px">
              <div class="flex-col-center p-3px">
                <p class="py-8px text-26px">安装程序包测试</p>
              </div>
              <div style="padding-top: 5px; padding-bottom: 3px">
                <div>
                  <span class="py-26px text-12px">标称值T真空</span>
                  <n-button type="tertiary" size="small" style="margin-left: 20px">10</n-button>
                  <span class="py-26px text-12px" style="margin-left: 10px">sec</span>
                </div>
              </div>
              <div style="padding-top: 5px; padding-bottom: 3px">
                <div>
                  <span class="py-26px text-12px">标称值压力泄漏试验 </span>
                  <n-button type="tertiary" size="small" style="margin-left: 20px">10</n-button>
                  <span class="py-26px text-12px" style="margin-left: 10px">mbar</span>
                </div>
              </div>
              <div style="padding-top: 5px; padding-bottom: 3px">
                <div>
                  <span class="py-26px text-12px">保持压力泄漏试验</span>
                  <n-button type="tertiary" size="small" style="margin-left: 20px">10</n-button>
                  <span class="py-26px text-12px" style="margin-left: 10px">sec</span>
                </div>
              </div>
              <div style="padding-top: 5px; padding-bottom: 3px">
                <div>
                  <span class="py-26px text-12px">允许公差保持</span>
                  <n-button type="tertiary" size="small" style="margin-left: 20px">10</n-button>
                  <span class="py-26px text-12px" style="margin-left: 10px">mbar</span>
                </div>
              </div>
              <div style="padding-top: 5px; padding-bottom: 3px">
                <div>
                  <span class="py-26px text-12px">标称值T通风</span>
                  <n-button type="tertiary" size="small" style="margin-left: 20px">10</n-button>
                  <span class="py-26px text-12px" style="margin-left: 10px">sec</span>
                </div>
              </div>
              <div style="padding-top: 5px; padding-bottom: 3px">
                <div>
                  <span class="py-26px text-12px">真空模式下允许的Faotor公差</span>
                  <n-button type="primary" size="small" style="margin-left: 20px">10.0</n-button>
                  <span class="py-26px text-12px" style="margin-left: 10px">Factor</span>
                </div>
              </div>
            </div>
          </n-card>
        </n-grid-item>
      </n-grid>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const active = ref(true);
const cpw1Value = ref('No stopper but pusher');
const options = [
  {
    label: 'OFF',
    value: 'OFF'
  },
  {
    label: 'Stopper available',
    value: 'Stopper available'
  },
  {
    label: 'No stopper but pusher',
    value: 'No stopper but pusher'
  },
  {
    label: 'Stopper and pusher',
    value: 'Stopper and pusher'
  },
  {
    label: 'No stopper and stop at outlet sensor',
    value: 'No stopper and stop at outlet sensor'
  }
];
</script>

<style scoped></style>
