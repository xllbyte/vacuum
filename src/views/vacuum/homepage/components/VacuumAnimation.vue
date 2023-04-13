<template>
  <n-card :bordered="false" style="height: 100%">
    <div class="w-full" style="height: 330px">
      <n-card :bordered="false" class="rounded-16px shadow-sm">
        <div id="chart-container" class="h-300px w-400px"></div>
      </n-card>
    </div>
    <div style="margin-top: 10px">
      <n-grid :item-responsive="true" :x-gap="16">
        <n-grid-item span="0:12 640:12 1024:12">
          <div style="height: 100%">
            <span class="py-8px text-16px" style="padding-left: 30px">真空</span>
            <n-button type="primary" size="small" style="margin-left: 20px; width: 50px" @click="clickOn">{{
              statePV
            }}</n-button>
            <span class="py-8px text-16px" style="padding-left: 5px">mbar</span>
          </div>
        </n-grid-item>
        <n-grid-item span="0:12 640:12 1024:12">
          <div style="height: 100%">
            <span class="py-8px text-16px" style="padding-left: 15px">真空</span>
            <n-button type="primary" size="small" style="margin-left: 20px; width: 50px" @click="clickOnDuring">{{
              duringTime
            }}</n-button>
            <span class="py-8px text-16px" style="padding-left: 5px">秒</span>
          </div>
        </n-grid-item>
      </n-grid>
    </div>
    <div style="margin-top: 10px">
      <n-grid :item-responsive="true" :x-gap="16">
        <n-grid-item span="0:12 640:12 1024:12">
          <div style="height: 100%">
            <span class="py-8px text-16px" style="padding-left: 30px">保持</span>
            <n-button type="primary" size="small" style="margin-left: 20px; width: 50px" @click="clickOnHolding">{{
              holdingTime
            }}</n-button>
            <span class="py-8px text-16px" style="padding-left: 5px">秒</span>
          </div>
        </n-grid-item>
        <n-grid-item span="0:12 640:12 1024:12">
          <div style="height: 100%">
            <span class="py-8px text-16px" style="padding-left: 15px">回压</span>
            <n-button type="primary" size="small" style="margin-left: 20px; width: 50px" @click="clickOnReback">{{
              rebackTime
            }}</n-button>
            <span class="py-8px text-16px" style="padding-left: 5px">秒</span>
          </div>
        </n-grid-item>
      </n-grid>
    </div>
    <n-modal
      v-model:show="coverShowModal"
      class="rounded-10px"
      preset="card"
      title="请输入"
      style="width: 600px"
      @after-leave="closedHandler"
    >
      <n-input v-model:value="finalStatePV" type="textarea" placeholder="请输入" />
      <key-board-component
        :ref="finalStatePV"
        :keyboard-class="keyboardClass"
        :input="finalStatePV"
        :max-length="maxlength"
        @onChange="onChange"
      />
    </n-modal>
    <n-modal
      v-model:show="coverShowModalDuring"
      class="rounded-10px"
      preset="card"
      title="请输入"
      style="width: 600px"
      @after-leave="closedHandlerDuring"
    >
      <n-input v-model:value="finalDuringTime" type="textarea" placeholder="请输入" />
      <key-board-component
        :ref="finalDuringTime"
        :keyboard-class="keyboardClass"
        :input="finalDuringTime"
        :max-length="maxlength"
        @onChange="onChangeDuring"
      />
    </n-modal>
    <n-modal
      v-model:show="coverShowModalHolding"
      class="rounded-10px"
      preset="card"
      title="请输入"
      style="width: 600px"
      @after-leave="closedHandlerHolding"
    >
      <n-input v-model:value="finalHoldingTime" type="textarea" placeholder="请输入" />
      <key-board-component
        :ref="finalHoldingTime"
        :keyboard-class="keyboardClass"
        :input="finalHoldingTime"
        :max-length="maxlength"
        @onChange="onChangeHolding"
      />
    </n-modal>
    <n-modal
      v-model:show="coverShowModalReback"
      class="rounded-10px"
      preset="card"
      title="请输入"
      style="width: 600px"
      @after-leave="closedHandlerReback"
    >
      <n-input v-model:value="finalRebackTime" type="textarea" placeholder="请输入" />
      <key-board-component
        :ref="finalRebackTime"
        :keyboard-class="keyboardClass"
        :input="finalRebackTime"
        :max-length="maxlength"
        @onChange="onChangeReback"
      />
    </n-modal>
  </n-card>
</template>

<script setup lang="ts">
import type { Ref } from 'vue';
import { defineProps, onBeforeUnmount, onMounted, onUnmounted, ref, watch } from 'vue';
import * as echarts from 'echarts/core';
import type {
  TitleComponentOption,
  ToolboxComponentOption,
  TooltipComponentOption,
  GridComponentOption,
  LegendComponentOption
} from 'echarts/components';
import { TitleComponent, ToolboxComponent, TooltipComponent, GridComponent, LegendComponent } from 'echarts/components';
import type { LineSeriesOption } from 'echarts/charts';
import { LineChart } from 'echarts/charts';
import { UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
import { useEcharts } from '@/composables';
import type { ECOption } from '@/composables';
import KeyBoardComponent from '@/views/profile/nitrogen/components/KeyBoardComponent.vue';
import { keepGetting, postJson, saveJson } from '@/service/api/home';

echarts.use([
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  LineChart,
  CanvasRenderer,
  UniversalTransition
]);

type EChartsOption = echarts.ComposeOption<
  | TitleComponentOption
  | ToolboxComponentOption
  | TooltipComponentOption
  | GridComponentOption
  | LegendComponentOption
  | LineSeriesOption
>;

defineOptions({ name: 'VacuumAnimation' });
const isOpened = ref(true);
const percent = ref(0);
const progress = ref(0);
let intervalId;
const decreaseProgress = ref(100);
const animationNum = ref(0);
const statePV = ref(0);
const finalStatePV = ref('');
const duringTime = ref(0);
const finalDuringTime = ref('');
const holdingTime = ref(0);
const finalHoldingTime = ref('');
const rebackTime = ref(0);
const finalRebackTime = ref('');
const coverShowModal = ref(false);
const coverShowModalDuring = ref(false);
const coverShowModalHolding = ref(false);
const coverShowModalReback = ref(false);
const maxlength = ref(999);
let dom = null;
const lineOptions = ref<ECOption>({
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985'
      }
    }
  },
  title: {
    text: '真空曲线'
  },
  legend: {
    data: ['Vacuum']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value',
    max: 1500
  },
  series: [
    {
      color: '#37a2da',
      name: 'Vacuum',
      type: 'line',
      smooth: true,
      stack: 'Total',
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0.25,
              color: '#37a2da'
            },
            {
              offset: 1,
              color: '#fff'
            }
          ]
        }
      },
      emphasis: {
        focus: 'series'
      },
      data: [120, 132, 101, 134, 90, 230, 210]
    }
  ]
}) as Ref<ECOption>;
const { domRef: lineRef } = useEcharts(lineOptions);
const props = defineProps({
  displayValue: {
    default: 0
  },
  duringTime: { default: 0 },
  holdingTime: { default: 0 },
  rebackTime: { default: 0 }
});

onMounted(async () => {
  dom = document.getElementById('chart-container');
  const myChart = echarts.init(dom, null, {
    renderer: 'canvas',
    useDirtyRect: false
  });

  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    title: {
      text: '真空曲线'
    },
    legend: {
      data: ['Vacuum']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value',
      max: 1024
    },
    series: [
      {
        color: '#37a2da',
        name: 'Vacuum',
        type: 'line',
        smooth: true,
        stack: 'Total',
        areaStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0.25,
                color: '#37a2da'
              },
              {
                offset: 1,
                color: '#fff'
              }
            ]
          }
        },
        emphasis: {
          focus: 'series'
        },
        data: [150, 230, 224, 218, 135, 147, 260]
      }
    ]
  };

  if (option && typeof option === 'object') {
    myChart.setOption(option);
  }

  window.addEventListener('resize', myChart.resize);

  intervalId = setInterval(() => {
    const echartsDatas = [];
    const echartsDatas1 = [];
    for (let i = 0; i < 7; i++) {
      echartsDatas[i] = Math.random() * (900 - 100) + 100;
      echartsDatas1[i] = Number(i) + 1;
    }
    const option2 = {
      xAxis: {
        type: 'category',
        data: echartsDatas1
      },
      series: [
        {
          data: echartsDatas,
          type: 'line'
        }
      ]
    };
    myChart.setOption(option2);
    // console.info(echartsDatas);
  }, 1000);
  // intervalId = setInterval(() => {
  //   console.log(1);
  //   console.log(lineOptions);
  // }, 1000);
});
onUnmounted(() => {
  clearInterval(intervalId);
});
function clickContainer() {
  isOpened.value = !isOpened.value;
  animationNum.value = 0;
  percent.value = 0;
  decreaseProgress.value = 100;
  progress.value = 0;
  const timer = setInterval(() => {
    // eslint-disable-next-line no-plusplus
    percent.value++;
    if (percent.value === 99) {
      clearInterval(timer);
      percent.value = 100;
      isOpened.value = false;
      animationNum.value = 1;
      setTimeout(() => {
        let timer1;
        let timer2;

        const updateProgress = () => {
          if (progress.value < 100) {
            progress.value += 5;
          }
          animationNum.value = 2;
          if (progress.value >= 100) {
            animationNum.value = 3;
            clearInterval(timer1);
            timer2 = setInterval(() => {
              if (decreaseProgress.value > 0) {
                decreaseProgress.value -= 5;
              } else {
                clearInterval(timer2);
              }
            }, 500);
          }
        };

        timer1 = setInterval(updateProgress, 300);
      }, 2000);
    }
  }, 50);
}
function clickOn() {
  if (coverShowModal.value === true) {
    coverShowModal.value = false;
  } else {
    coverShowModal.value = true;
  }
}
function clickOnDuring() {
  if (coverShowModalDuring.value === true) {
    coverShowModalDuring.value = false;
  } else {
    coverShowModalDuring.value = true;
  }
}
function clickOnHolding() {
  if (coverShowModalHolding.value === true) {
    coverShowModalHolding.value = false;
  } else {
    coverShowModalHolding.value = true;
  }
}
function clickOnReback() {
  if (coverShowModalReback.value === true) {
    coverShowModalReback.value = false;
  } else {
    coverShowModalReback.value = true;
  }
}
function onChange(e) {
  finalStatePV.value = e;
}
function onChangeDuring(e) {
  finalDuringTime.value = e;
}
function onChangeHolding(e) {
  finalHoldingTime.value = e;
}
function onChangeReback(e) {
  finalRebackTime.value = e;
}
async function closedHandler() {
  console.log('关闭事件');
  const Param = {
    result: finalStatePV.value,
    dataType: 'float',
    name: 'Application.HMI_VacuumConfig.h_rVacuumPV'
  };
  const arr = [];
  arr.push(Param);
  const success = await saveJson(arr);
  console.log(success);
}
async function closedHandlerDuring() {
  console.log('关闭事件');
  const Param = {
    result: finalDuringTime.value,
    dataType: 'float',
    name: 'Application.HMI_VacuumConfig.h_rVacuumDuringTime'
  };
  const arr = [];
  arr.push(Param);
  const success = await saveJson(arr);
  console.log(success);
}
async function closedHandlerHolding() {
  console.log('关闭事件');
  const Param = {
    result: finalHoldingTime.value,
    dataType: 'float',
    name: 'Application.HMI_VacuumConfig.h_rVacuumHoldingTime'
  };
  const arr = [];
  arr.push(Param);
  const success = await saveJson(arr);
  console.log(success);
}
async function closedHandlerReback() {
  console.log('关闭事件');
  const Param = {
    result: finalRebackTime.value,
    dataType: 'float',
    name: 'Application.HMI_VacuumConfig.h_rVacuumRebackTime'
  };
  const arr = [];
  arr.push(Param);
  const success = await saveJson(arr);
  console.log(success);
}
watch(props, newValue => {
  statePV.value = newValue.displayValue;
  duringTime.value = newValue.duringTime;
  holdingTime.value = newValue.holdingTime;
  rebackTime.value = newValue.rebackTime;
});
</script>

<style scoped>
.light-style {
  margin-top: 130px;
}
.container {
  width: 200px;
  margin: 0 auto;
  text-align: center;
}

.box {
  width: 100%;
  height: 36px;
  background-color: red;
  transform: scale(1, 1) translateY(0);
  transition: all 0.5s ease-in-out;
}

.progress-bar {
  width: 100%;
  line-height: 50px;
  color: #fff;
  font-size: 20px;
  text-align: center;
  background-color: #b5f0ca;
  transition: width 0.5s ease-in-out;
}
</style>
