<template>
  <div>
    <div>
      <n-grid :x-gap="12" :y-gap="8" :cols="3">
        <n-grid-item>
          <n-card title="顶部" :bordered="false" class="rounded-16px shadow-sm">
            <div class="w-full">
              <div style="padding-left: 20px; padding-top: 5px; padding-bottom: 3px">
                <div>
                  <span class="py-1px text-16px">区域长度</span>
                  <n-button type="primary" style="margin-left: 5px">370</n-button>
                </div>
              </div>
              <div style="padding-left: 20px; padding-top: 5px; padding-bottom: 3px">
                <div>
                  <n-grid :x-gap="12" :y-gap="8" :cols="2">
                    <n-grid-item>
                      <n-select v-model:value="cpw1Value" size="medium" :options="options" />
                    </n-grid-item>
                    <n-grid-item>
                      <n-select v-model:value="cpw2Value" size="medium" :options="pressureOptions" />
                    </n-grid-item>
                  </n-grid>
                </div>
              </div>
              <div style="padding-left: 20px; padding-top: 5px; padding-bottom: 3px">
                <div>
                  <n-grid :x-gap="12" :y-gap="8" :cols="2">
                    <n-grid-item>
                      <n-select v-model:value="cpw3Value" size="medium" :options="options" />
                    </n-grid-item>
                    <n-grid-item>
                      <n-button type="primary">10</n-button>
                    </n-grid-item>
                  </n-grid>
                </div>
              </div>
              <div style="padding-left: 20px; padding-top: 5px; padding-bottom: 3px">
                <div>
                  <n-grid :x-gap="12" :y-gap="8" :cols="2">
                    <n-grid-item>
                      <span class="py-1px text-16px">可用区域</span>
                    </n-grid-item>
                    <n-grid-item>
                      <n-switch v-model:value="active" size="large" />
                    </n-grid-item>
                  </n-grid>
                </div>
              </div>
              <div style="padding-left: 20px; padding-top: 5px; padding-bottom: 3px">
                <div>
                  <n-grid :x-gap="12" :y-gap="8" :cols="2">
                    <n-grid-item>
                      <n-select v-model:value="cpw4Value" size="medium" :options="options1" />
                    </n-grid-item>
                    <n-grid-item>
                      <n-select v-model:value="cpw5Value" size="medium" :options="options2" />
                    </n-grid-item>
                  </n-grid>
                </div>
              </div>
              <div style="padding-left: 20px; padding-top: 5px; padding-bottom: 3px">
                <div>
                  <n-grid :x-gap="12" :y-gap="8" :cols="2">
                    <n-grid-item>
                      <span class="py-1px text-16px">耐温性</span>
                    </n-grid-item>
                    <n-grid-item>
                      <n-button type="tertiary" style="margin-left: 5px">5</n-button>
                      <span class="py-1px text-16px">摄氏度</span>
                    </n-grid-item>
                  </n-grid>
                </div>
              </div>
              <div style="padding-left: 20px; padding-top: 5px; padding-bottom: 3px">
                <div>
                  <n-grid :x-gap="12" :y-gap="8" :cols="2">
                    <n-grid-item>
                      <span class="py-1px text-16px">温度过高>0所有区域</span>
                    </n-grid-item>
                    <n-grid-item>
                      <n-button type="primary" style="margin-left: 5px">0</n-button>
                    </n-grid-item>
                  </n-grid>
                </div>
              </div>
              <div style="padding-left: 20px; padding-top: 5px; padding-bottom: 3px">
                <div>
                  <n-grid :x-gap="12" :y-gap="8" :cols="2">
                    <n-grid-item>
                      <span class="py-1px text-16px">最大因子ABS</span>
                    </n-grid-item>
                    <n-grid-item>
                      <n-button type="primary" style="margin-left: 5px">1.25</n-button>
                    </n-grid-item>
                  </n-grid>
                </div>
              </div>
              <div style="padding-left: 20px; padding-top: 5px; padding-bottom: 3px">
                <div>
                  <n-grid :x-gap="12" :y-gap="8" :cols="2">
                    <n-grid-item>
                      <span class="py-1px text-16px">最小因子ABS</span>
                    </n-grid-item>
                    <n-grid-item>
                      <n-button type="primary" style="margin-left: 5px">1.00</n-button>
                    </n-grid-item>
                  </n-grid>
                </div>
              </div>
              <div style="padding-left: 20px; padding-top: 5px; padding-bottom: 3px">
                <div>
                  <n-grid :x-gap="12" :y-gap="8" :cols="2">
                    <n-grid-item>
                      <span class="py-1px text-16px">X pos像素区偏移</span>
                    </n-grid-item>
                    <n-grid-item>
                      <n-button type="primary" style="margin-left: 5px">18</n-button>
                    </n-grid-item>
                  </n-grid>
                </div>
              </div>
              <div style="padding-left: 20px; padding-top: 5px; padding-bottom: 3px">
                <div>
                  <n-grid :x-gap="12" :y-gap="8" :cols="2">
                    <n-grid-item>
                      <span class="py-1px text-16px">横向数据</span>
                    </n-grid-item>
                    <n-grid-item>
                      <n-button type="primary" style="margin-left: 5px">200</n-button>
                    </n-grid-item>
                  </n-grid>
                </div>
              </div>
            </div>
          </n-card>
        </n-grid-item>
        <n-grid-item>
          <n-card title="底部" :bordered="false" class="rounded-16px shadow-sm">
            <div class="w-full">
              <div style="padding-left: 20px; padding-top: 5px; padding-bottom: 3px">
                <div>
                  <span class="py-1px text-16px">区域长度</span>
                  <n-button type="primary" style="margin-left: 5px">370</n-button>
                </div>
              </div>
              <div style="padding-left: 20px; padding-top: 5px; padding-bottom: 3px">
                <div>
                  <n-grid :x-gap="12" :y-gap="8" :cols="2">
                    <n-grid-item>
                      <n-select v-model:value="cpw1Value" size="medium" :options="options" />
                    </n-grid-item>
                    <n-grid-item>
                      <n-select v-model:value="cpw2Value" size="medium" :options="pressureOptions" />
                    </n-grid-item>
                  </n-grid>
                </div>
              </div>
              <div style="padding-left: 20px; padding-top: 5px; padding-bottom: 3px">
                <div>
                  <n-grid :x-gap="12" :y-gap="8" :cols="2">
                    <n-grid-item>
                      <n-select v-model:value="cpw3Value" size="medium" :options="options" />
                    </n-grid-item>
                    <n-grid-item>
                      <n-button type="primary">10</n-button>
                    </n-grid-item>
                  </n-grid>
                </div>
              </div>
              <div style="padding-left: 20px; padding-top: 5px; padding-bottom: 3px">
                <div>
                  <n-grid :x-gap="12" :y-gap="8" :cols="2">
                    <n-grid-item>
                      <span class="py-1px text-16px">可用区域</span>
                    </n-grid-item>
                    <n-grid-item>
                      <n-switch v-model:value="active" size="large" />
                    </n-grid-item>
                  </n-grid>
                </div>
              </div>
              <div style="padding-left: 20px; padding-top: 5px; padding-bottom: 3px">
                <div>
                  <n-grid :x-gap="12" :y-gap="8" :cols="2">
                    <n-grid-item>
                      <n-select v-model:value="cpw4Value" size="medium" :options="options1" />
                    </n-grid-item>
                    <n-grid-item>
                      <n-select v-model:value="cpw5Value" size="medium" :options="options2" />
                    </n-grid-item>
                  </n-grid>
                </div>
              </div>
              <div style="padding-left: 20px; padding-top: 5px; padding-bottom: 3px">
                <div>
                  <n-grid :x-gap="12" :y-gap="8" :cols="2">
                    <n-grid-item>
                      <span class="py-1px text-16px">耐温性</span>
                    </n-grid-item>
                    <n-grid-item>
                      <n-button type="tertiary" style="margin-left: 5px">5</n-button>
                      <span class="py-1px text-16px">摄氏度</span>
                    </n-grid-item>
                  </n-grid>
                </div>
              </div>
              <div style="padding-left: 20px; padding-top: 5px; padding-bottom: 3px">
                <div>
                  <n-grid :x-gap="12" :y-gap="8" :cols="2">
                    <n-grid-item>
                      <span class="py-1px text-16px">温度过高>0所有区域</span>
                    </n-grid-item>
                    <n-grid-item>
                      <n-button type="primary" style="margin-left: 5px">0</n-button>
                    </n-grid-item>
                  </n-grid>
                </div>
              </div>
              <div style="padding-left: 20px; padding-top: 5px; padding-bottom: 3px">
                <div>
                  <n-grid :x-gap="12" :y-gap="8" :cols="2">
                    <n-grid-item>
                      <span class="py-1px text-16px">最大因子ABS</span>
                    </n-grid-item>
                    <n-grid-item>
                      <n-button type="primary" style="margin-left: 5px">1.25</n-button>
                    </n-grid-item>
                  </n-grid>
                </div>
              </div>
              <div style="padding-left: 20px; padding-top: 5px; padding-bottom: 3px">
                <div>
                  <n-grid :x-gap="12" :y-gap="8" :cols="2">
                    <n-grid-item>
                      <span class="py-1px text-16px">最小因子ABS</span>
                    </n-grid-item>
                    <n-grid-item>
                      <n-button type="primary" style="margin-left: 5px">1.00</n-button>
                    </n-grid-item>
                  </n-grid>
                </div>
              </div>
              <div style="padding-left: 20px; padding-top: 5px; padding-bottom: 3px">
                <div>
                  <n-grid :x-gap="12" :y-gap="8" :cols="2">
                    <n-grid-item>
                      <span class="py-1px text-16px">X pos像素区偏移</span>
                    </n-grid-item>
                    <n-grid-item>
                      <n-button type="primary" style="margin-left: 5px">18</n-button>
                    </n-grid-item>
                  </n-grid>
                </div>
              </div>
              <div style="padding-left: 20px; padding-top: 5px; padding-bottom: 3px">
                <div>
                  <n-grid :x-gap="12" :y-gap="8" :cols="2">
                    <n-grid-item>
                      <span class="py-1px text-16px">横向数据</span>
                    </n-grid-item>
                    <n-grid-item>
                      <n-button type="primary" style="margin-left: 5px">200</n-button>
                    </n-grid-item>
                  </n-grid>
                </div>
              </div>
            </div>
          </n-card>
        </n-grid-item>
        <n-grid-item>
          <n-card title="ABS" :bordered="false" class="rounded-16px shadow-sm">
            <div class="w-full">
              <div style="padding-left: 20px; padding-top: 5px; padding-bottom: 3px">
                <div>
                  <span class="py-1px text-16px">区域长度</span>
                  <n-button type="primary" style="margin-left: 5px">370</n-button>
                </div>
              </div>
              <div style="padding-left: 20px; padding-top: 5px; padding-bottom: 3px">
                <div>
                  <n-grid :x-gap="12" :y-gap="8" :cols="2">
                    <n-grid-item>
                      <n-select v-model:value="cpw1Value" size="medium" :options="options" />
                    </n-grid-item>
                    <n-grid-item>
                      <n-select v-model:value="cpw2Value" size="medium" :options="pressureOptions" />
                    </n-grid-item>
                  </n-grid>
                </div>
              </div>
              <div style="padding-left: 20px; padding-top: 5px; padding-bottom: 3px">
                <div>
                  <n-grid :x-gap="12" :y-gap="8" :cols="2">
                    <n-grid-item>
                      <n-select v-model:value="cpw3Value" size="medium" :options="options" />
                    </n-grid-item>
                    <n-grid-item>
                      <n-button type="primary">10</n-button>
                    </n-grid-item>
                  </n-grid>
                </div>
              </div>
              <div style="padding-left: 20px; padding-top: 5px; padding-bottom: 3px">
                <div>
                  <n-grid :x-gap="12" :y-gap="8" :cols="2">
                    <n-grid-item>
                      <span class="py-1px text-16px">可用区域</span>
                    </n-grid-item>
                    <n-grid-item>
                      <n-switch v-model:value="active" size="large" />
                    </n-grid-item>
                  </n-grid>
                </div>
              </div>
              <div style="padding-left: 20px; padding-top: 5px; padding-bottom: 3px">
                <div>
                  <n-grid :x-gap="12" :y-gap="8" :cols="2">
                    <n-grid-item>
                      <n-select v-model:value="cpw4Value" size="medium" :options="options1" />
                    </n-grid-item>
                    <n-grid-item>
                      <n-select v-model:value="cpw5Value" size="medium" :options="options2" />
                    </n-grid-item>
                  </n-grid>
                </div>
              </div>
              <div style="padding-left: 20px; padding-top: 5px; padding-bottom: 3px">
                <div>
                  <n-grid :x-gap="12" :y-gap="8" :cols="2">
                    <n-grid-item>
                      <span class="py-1px text-16px">耐温性</span>
                    </n-grid-item>
                    <n-grid-item>
                      <n-button type="tertiary" style="margin-left: 5px">5</n-button>
                      <span class="py-1px text-16px">摄氏度</span>
                    </n-grid-item>
                  </n-grid>
                </div>
              </div>
              <div style="padding-left: 20px; padding-top: 5px; padding-bottom: 3px">
                <div>
                  <n-grid :x-gap="12" :y-gap="8" :cols="2">
                    <n-grid-item>
                      <span class="py-1px text-16px">温度过高>0所有区域</span>
                    </n-grid-item>
                    <n-grid-item>
                      <n-button type="primary" style="margin-left: 5px">0</n-button>
                    </n-grid-item>
                  </n-grid>
                </div>
              </div>
              <div style="padding-left: 20px; padding-top: 5px; padding-bottom: 3px">
                <div>
                  <n-grid :x-gap="12" :y-gap="8" :cols="2">
                    <n-grid-item>
                      <span class="py-1px text-16px">最大因子ABS</span>
                    </n-grid-item>
                    <n-grid-item>
                      <n-button type="primary" style="margin-left: 5px">1.25</n-button>
                    </n-grid-item>
                  </n-grid>
                </div>
              </div>
              <div style="padding-left: 20px; padding-top: 5px; padding-bottom: 3px">
                <div>
                  <n-grid :x-gap="12" :y-gap="8" :cols="2">
                    <n-grid-item>
                      <span class="py-1px text-16px">最小因子ABS</span>
                    </n-grid-item>
                    <n-grid-item>
                      <n-button type="primary" style="margin-left: 5px">1.00</n-button>
                    </n-grid-item>
                  </n-grid>
                </div>
              </div>
              <div style="padding-left: 20px; padding-top: 5px; padding-bottom: 3px">
                <div>
                  <n-grid :x-gap="12" :y-gap="8" :cols="2">
                    <n-grid-item>
                      <span class="py-1px text-16px">X pos像素区偏移</span>
                    </n-grid-item>
                    <n-grid-item>
                      <n-button type="primary" style="margin-left: 5px">18</n-button>
                    </n-grid-item>
                  </n-grid>
                </div>
              </div>
              <div style="padding-left: 20px; padding-top: 5px; padding-bottom: 3px">
                <div>
                  <n-grid :x-gap="12" :y-gap="8" :cols="2">
                    <n-grid-item>
                      <span class="py-1px text-16px">横向数据</span>
                    </n-grid-item>
                    <n-grid-item>
                      <n-button type="primary" style="margin-left: 5px">200</n-button>
                    </n-grid-item>
                  </n-grid>
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
const cpw1Value = ref('频道号');
const cpw2Value = ref('标题输入');
const cpw3Value = ref('频道号');
const cpw4Value = ref('磨砂条');
const cpw5Value = ref('101-K1');
const pressureValue = ref('101-K1');
const options = [
  {
    label: '频道号',
    value: '频道号'
  },
  {
    label: '频道1',
    value: '频道1'
  },
  {
    label: '频道2',
    value: '频道2'
  },
  {
    label: '频道3',
    value: '频道3'
  },
  {
    label: '频道4',
    value: '频道4'
  },
  {
    label: '频道5',
    value: '频道5'
  },
  {
    label: '频道6',
    value: '频道6'
  },
  {
    label: '频道7',
    value: '频道7'
  },
  {
    label: '频道8',
    value: '频道8'
  }
];
const pressureOptions = [
  {
    label: '标题输入',
    value: '标题输入'
  },
  {
    label: '顶部区域',
    value: '顶部区域'
  },
  {
    label: '底部区域',
    value: '底部区域'
  },
  {
    label: '预热区',
    value: '预热区'
  },
  {
    label: '高温区',
    value: '高温区'
  }
];
const options1 = [
  {
    label: '磨砂条',
    value: '磨砂条'
  },
  {
    label: '风扇',
    value: '风扇'
  },
  {
    label: '可切换',
    value: '可切换'
  },
  {
    label: '预热Z.1机器人',
    value: '预热Z.1机器人'
  },
  {
    label: '预热Z.2机器人',
    value: '预热Z.2机器人'
  },
  {
    label: '预热Z.3机器人',
    value: '预热Z.3机器人'
  }
];
const options2 = [
  {
    label: 'PT100 Kanal',
    value: 'PT100 Kanal'
  },
  {
    label: '101-K1',
    value: '101-K1'
  },
  {
    label: '101-K2',
    value: '101-K2'
  },
  {
    label: '101-K3',
    value: '101-K3'
  },
  {
    label: '101-K4',
    value: '101-K4'
  },
  {
    label: '101-K5',
    value: '101-K5'
  },
  {
    label: '101-K6',
    value: '101-K6'
  },
  {
    label: '101-K7',
    value: '101-K7'
  },
  {
    label: '101-K8',
    value: '101-K8'
  }
];
</script>

<style scoped></style>
