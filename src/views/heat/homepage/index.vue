<template>
  <div>
    <n-space>
      <div v-for="(stoveItem, i) in stoveConfigList" :key="i">
        <!-- 顶部炉温配置 -->
        <n-card
          :title="stoveItem.name"
          class="rounded-16px shadow-sm stove-panel"
          :start-color="['#ec4786', '#b955a4']"
        >
          <n-space vertical>
            <n-input-group>
              <n-button size="small">
                <icon-mingcute-fan-fill class="text-24px text-green" />
              </n-button>
              <n-input v-model:value="upperFanArray[i]" size="small" :input-props="{ onClick: () => clickOnTop(i) }">
                <template #suffix></template>
              </n-input>
            </n-input-group>
            <n-input-group>
              <n-button type="primary" size="small">
                <icon-ep-set-up class="text-24px" />
              </n-button>
              <n-input
                v-model:value="settingTemperatureArray[i]"
                size="small"
                :input-props="{ onClick: () => clickOn(i) }"
              >
                <template #suffix> ℃ </template>
              </n-input>
            </n-input-group>
            <n-input-group>
              <n-button size="small">
                <icon-ep-set-up class="text-24px" />
              </n-button>
              <n-input v-model:value="actualTemperatureArray[i]" size="small">
                <template #suffix> ℃ </template>
              </n-input>
            </n-input-group>
            <!-- 温度对比 -->
            <n-grid x-gap="12" :cols="4">
              <n-gi>
                <n-switch
                  v-model:value="topSwitch[i]"
                  :round="false"
                  style="margin-top: 35px"
                  @update-value="changeTopSwitch(i)"
                />
              </n-gi>
              <n-gi span="3">
                <div style="transform: rotate(270deg); margin-left: 20px">
                  <n-progress
                    type="line"
                    status="info"
                    :percentage="getHeatProgress(settingTemperatureArray[i])"
                    :show-indicator="false"
                    :height="20"
                    style="width: 90px; margin-top: 25px"
                  />
                  <n-progress
                    type="line"
                    color="darkseagreen"
                    :percentage="getHeatProgress(actualTemperatureArray[i])"
                    :show-indicator="false"
                    :height="20"
                    style="width: 90px; margin-top: 20px"
                  />
                </div>
              </n-gi>
            </n-grid>
          </n-space>
        </n-card>
        <!-- 底部炉温配置 -->
        <n-card v-if="i <= 5" class="rounded-16px shadow-sm stove-panel">
          <n-space vertical>
            <!-- 温度对比 -->
            <n-grid x-gap="12" :cols="4">
              <n-gi>
                <n-switch
                  v-model:value="bottomSwitch[i]"
                  :round="false"
                  style="margin-top: 25px"
                  @update-value="changeBottomSwitch(i)"
                />
              </n-gi>
              <n-gi span="3">
                <div style="transform: rotate(270deg); margin-left: 20px">
                  <n-progress
                    type="line"
                    status="info"
                    :percentage="getHeatProgress(settingTemperatureArrayDown[i])"
                    :show-indicator="false"
                    :height="20"
                    style="width: 90px; margin-top: 15px"
                  />
                  <n-progress
                    type="line"
                    color="darkseagreen"
                    :percentage="getHeatProgress(actualTemperatureArrayDown[i])"
                    :show-indicator="false"
                    :height="20"
                    style="width: 90px; margin-top: 20px"
                  />
                </div>
              </n-gi>
            </n-grid>
            <n-input-group style="margin-top: 10px">
              <n-button size="small">
                <icon-mingcute-fan-fill class="text-24px text-green" />
              </n-button>
              <n-input v-model:value="lowerFanArray[i]" size="small" :input-props="{ onClick: () => clickOnBottom(i) }">
                <template #suffix></template>
              </n-input>
            </n-input-group>
            <n-input-group>
              <n-button type="primary" size="small">
                <icon-ep-set-up class="text-24px" />
              </n-button>
              <n-input
                v-model:value="settingTemperatureArrayDown[i]"
                size="small"
                :input-props="{ onClick: () => clickOnDown(i) }"
              >
                <template #suffix> ℃ </template>
              </n-input>
            </n-input-group>
            <n-input-group>
              <n-button size="small">
                <icon-ep-set-up class="text-24px" />
              </n-button>
              <n-input v-model:value="actualTemperatureArrayDown[i]" size="small">
                <template #suffix> ℃ </template>
              </n-input>
            </n-input-group>
            <n-gradient-text type="info" size="20" style="width: 40px; margin-left: 32%"> 底部 </n-gradient-text>
          </n-space>
        </n-card>
      </div>
      <n-modal
        v-model:show="coverShowModal"
        class="rounded-10px"
        preset="card"
        title="请输入"
        style="width: 600px"
        @after-leave="closedHandler"
      >
        <n-input v-model:value="finalStoveItemValue" type="textarea" placeholder="请输入" />
        <key-board-heat
          :ref="finalStoveItemValue"
          :keyboard-class="keyboardClass"
          :input="finalStoveItemValue"
          :max-length="maxlength"
          @onChange="onChange"
          @onKeyPress="onKeyPress"
        />
      </n-modal>
      <n-modal
        v-model:show="coverShowModalDown"
        class="rounded-10px"
        preset="card"
        title="请输入"
        style="width: 600px"
        @after-leave="closedHandlerLower"
      >
        <n-input v-model:value="finalStoveItemValueDown" type="textarea" placeholder="请输入" />
        <key-board-heat
          :ref="finalStoveItemValueDown"
          :keyboard-class="keyboardClass"
          :input="finalStoveItemValueDown"
          :max-length="maxlength"
          @onChange="onChangeDown"
        />
      </n-modal>
      <n-modal
        v-model:show="topShowModal"
        class="rounded-10px"
        preset="card"
        title="请输入"
        style="width: 600px"
        @after-leave="closedHandlerTopFan"
      >
        <n-input v-model:value="finalTopFanValue" type="textarea" placeholder="请输入" />
        <key-board-heat
          :ref="finalTopFanValue"
          :keyboard-class="keyboardClass"
          :input="finalTopFanValue"
          :max-length="maxlength"
          @onChange="onChangeTopFan"
        />
      </n-modal>
      <n-modal
        v-model:show="bottomShowModal"
        class="rounded-10px"
        preset="card"
        title="请输入"
        style="width: 600px"
        @after-leave="closedHandlerDown"
      >
        <n-input v-model:value="finalBottomFanValue" type="textarea" placeholder="请输入" />
        <key-board-heat
          :ref="finalBottomFanValue"
          :keyboard-class="keyboardClass"
          :input="finalBottomFanValue"
          :max-length="maxlength"
          @onChange="onChangeBottomFan"
        />
      </n-modal>
    </n-space>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, reactive, ref } from 'vue';
import { keepGetting, saveJson } from '@/service/api/home';
import KeyBoardHeat from '@/views/heat/homepage/components/KeyBoardHeat.vue';
import { StoveHeatParamConfig } from '@/enum/heat';
import { closeSocket, createSocket, guid } from '@/service/api/websocket';
const maxlength = ref(999);
const coverShowModal = ref(false);
const coverShowModalDown = ref(false);
const topShowModal = ref(false);
const bottomShowModal = ref(false);
const stoveItemValue = ref('');
const finalStoveItemValue = ref('');
const stoveItemValueDown = ref('');
const finalStoveItemValueDown = ref('');
const topFanValue = ref('');
const finalTopFanValue = ref('');
const bottomFanValue = ref('');
const finalBottomFanValue = ref('');
const settingTemperatureArray = ref([]);
const actualTemperatureArray = ref([]);
const settingTemperatureArrayDown = ref([]);
const actualTemperatureArrayDown = ref([]);
const upperFanArray = ref([]);
const lowerFanArray = ref([]);
const currentIndex = ref(0);
const topCurrentIndex = ref(0);
const bottomCurrentIndex = ref(0);
const topSwitch = ref([]);
const bottomSwitch = ref([]);
const tagName = 'heatHomepage';
const uuid = ref('');
interface StoveHeatConfig {
  name: string;
  topLevel: string;
  topTargetTemp: number;
  topActualTemp: number;
  topState: boolean;
  bottomLevel: string;
  bottomTargetTemp: number;
  bottomActualTemp: number;
  bottomState: boolean;
}
interface HeatParam {
  result: [];
  dataType: keyof typeof StoveHeatParamConfig;
  name: string;
}
const heatParam: HeatParam[] = [
  {
    result: [],
    dataType: StoveHeatParamConfig['Application.HMI_HomePage.h_rPreHeatZoneTempretureSV_UP'],
    name: 'Application.HMI_HomePage.h_rPreHeatZoneTempretureSV_UP'
  }
];

const options = [
  {
    label: 'Level 1',
    value: 'Level 1'
  },
  {
    label: 'Level 2',
    value: 'Level 2'
  },
  {
    label: 'Level 3',
    value: 'Level 3'
  }
];

const stoveConfigList: StoveHeatConfig[] = reactive([
  {
    name: '预热1',
    topLevel: 'Level 3',
    topTargetTemp: 160,
    topActualTemp: 79,
    topState: true,
    bottomLevel: 'Level 3',
    bottomTargetTemp: 160,
    bottomActualTemp: 86,
    bottomState: true
  },
  {
    name: '预热2',
    topLevel: 'Level 3',
    topTargetTemp: 160,
    topActualTemp: 79,
    topState: true,
    bottomLevel: 'Level 3',
    bottomTargetTemp: 160,
    bottomActualTemp: 86,
    bottomState: true
  },
  {
    name: '预热3',
    topLevel: 'Level 3',
    topTargetTemp: 160,
    topActualTemp: 79,
    topState: true,
    bottomLevel: 'Level 3',
    bottomTargetTemp: 160,
    bottomActualTemp: 86,
    bottomState: true
  },
  {
    name: '高温1',
    topLevel: 'Level 3',
    topTargetTemp: 160,
    topActualTemp: 79,
    topState: true,
    bottomLevel: 'Level 3',
    bottomTargetTemp: 160,
    bottomActualTemp: 86,
    bottomState: true
  },
  {
    name: '高温2',
    topLevel: 'Level 3',
    topTargetTemp: 160,
    topActualTemp: 79,
    topState: true,
    bottomLevel: 'Level 3',
    bottomTargetTemp: 160,
    bottomActualTemp: 86,
    bottomState: true
  },
  {
    name: '真空',
    topLevel: 'Level 3',
    topTargetTemp: 160,
    topActualTemp: 79,
    topState: true,
    bottomLevel: 'Level 3',
    bottomTargetTemp: 160,
    bottomActualTemp: 86,
    bottomState: true
  },
  {
    name: '冷却区',
    topLevel: 'Level 3',
    topTargetTemp: 160,
    topActualTemp: 79,
    topState: true,
    bottomLevel: 'Level 3',
    bottomTargetTemp: 160,
    bottomActualTemp: 86,
    bottomState: true
  }
]);
onMounted(async () => {
  uuid.value = guid(tagName);
  createSocket(uuid.value);
  window.addEventListener('onmessageWS', handleWsMsg);
  const param = {
    'Application.HMI_HomePage.h_iFanSpeedLevel_UP': 'shorts',
    'Application.HMI_HomePage.h_iFanSpeedLevel_Down': 'shorts',
    'Application.HMI_HomePage.h_rPreHeatZoneTempretureSV_UP': 'floats',
    'Application.HMI_HomePage.h_rPreHeatZoneTempreturePV_UP': 'floats',
    'Application.HMI_HomePage.h_rHighHeatZoneTempretureSV_UP': 'floats',
    'Application.HMI_HomePage.h_rHighHeatZoneTempreturePV_UP': 'floats',
    'Application.HMI_HomePage.h_rVacuumHeatZoneTempretureSV_UP': 'floats',
    'Application.HMI_HomePage.h_rVacuumHeatZoneTempreturePV_UP': 'floats',
    'Application.HMI_HomePage.h_rColdHeatZoneTempretureSV_UP': 'floats',
    'Application.HMI_HomePage.h_rColdHeatZoneTempreturePV_UP': 'floats',
    'Application.HMI_HomePage.h_rPreHeatZoneTempretureSV_DOWN': 'floats',
    'Application.HMI_HomePage.h_rPreHeatZoneTempreturePV_DOWN': 'floats',
    'Application.HMI_HomePage.h_rHighHeatZoneTempretureSV_DOWN': 'floats',
    'Application.HMI_HomePage.h_rHighHeatZoneTempreturePV_DOWN': 'floats',
    'Application.HMI_HomePage.h_rVacuumHeatZoneTempretureSV_DOWN': 'floats',
    'Application.HMI_HomePage.h_rVacuumHeatZoneTempreturePV_DOWN': 'floats',
    'Application.HMI_HomePage.h_rColdHeatZoneTempretureSV_DOWN': 'floats',
    'Application.HMI_HomePage.h_rColdHeatZoneTempreturePV_DOWN': 'floats',
    'Application.HMI_HomePage.h_xPreHeatZoneTempretureOnOffSwitch_UP': 'booleans',
    'Application.HMI_HomePage.h_xHighHeatZoneTempretureOnOffSwitch_UP': 'booleans',
    'Application.HMI_HomePage.h_xVacuumHeatZoneTempretureOnOffSwitch_UP': 'booleans',
    'Application.HMI_HomePage.h_xColdHeatZoneTempretureOnOffSwitch_UP': 'booleans',
    'Application.HMI_HomePage.h_xPreHeatZoneTempretureOnOffSwitch_Down': 'booleans',
    'Application.HMI_HomePage.h_xHighHeatZoneTempretureOnOffSwitch_Down': 'booleans',
    'Application.HMI_HomePage.h_xVacuumHeatZoneTempretureOnOffSwitch_Down': 'booleans',
    'Application.HMI_HomePage.h_xColdHeatZoneTempretureOnOffSwitch_Down': 'booleans'
  };
  keepGetting(tagName, param);
});

onBeforeUnmount(() => {
  closeSocket();
});

// 处理服务端websocket发送过来的消息
function handleWsMsg(e: any) {
  const data = JSON.parse(e.detail.data.data);
  if (data) {
    const {
      'Application.HMI_HomePage.h_rPreHeatZoneTempretureSV_UP': settingPreheatArrayValue,
      'Application.HMI_HomePage.h_rPreHeatZoneTempreturePV_UP': actualPreheatArrayValue,
      'Application.HMI_HomePage.h_rHighHeatZoneTempretureSV_UP': settingHighTemperatureArrayValue,
      'Application.HMI_HomePage.h_rHighHeatZoneTempreturePV_UP': actualHighTemperatureArrayValue,
      'Application.HMI_HomePage.h_rVacuumHeatZoneTempretureSV_UP': settingVacuumArrayValue,
      'Application.HMI_HomePage.h_rVacuumHeatZoneTempreturePV_UP': actualVacuumArrayValue,
      'Application.HMI_HomePage.h_rColdHeatZoneTempretureSV_UP': settingBurialArrayValue,
      'Application.HMI_HomePage.h_rColdHeatZoneTempreturePV_UP': actualBurialArrayValue,
      'Application.HMI_HomePage.h_iFanSpeedLevel_UP': upFanArrayValue,
      'Application.HMI_HomePage.h_iFanSpeedLevel_Down': downFanArrayValue,
      'Application.HMI_HomePage.h_rPreHeatZoneTempretureSV_DOWN': settingPreheatArrayValueDown,
      'Application.HMI_HomePage.h_rPreHeatZoneTempreturePV_DOWN': actualPreheatArrayValueDown,
      'Application.HMI_HomePage.h_rHighHeatZoneTempretureSV_DOWN': settingHighTemperatureArrayValueDown,
      'Application.HMI_HomePage.h_rHighHeatZoneTempreturePV_DOWN': actualHighTemperatureArrayValueDown,
      'Application.HMI_HomePage.h_rVacuumHeatZoneTempretureSV_DOWN': settingVacuumArrayValueDown,
      'Application.HMI_HomePage.h_rVacuumHeatZoneTempreturePV_DOWN': actualVacuumArrayValueDown,
      'Application.HMI_HomePage.h_rColdHeatZoneTempretureSV_DOWN': settingBurialArrayValueDown,
      'Application.HMI_HomePage.h_rColdHeatZoneTempreturePV_DOWN': actualBurialArrayValuetsDown,
      'Application.HMI_HomePage.h_xPreHeatZoneTempretureOnOffSwitch_UP': preHeatSwitchUpValue,
      'Application.HMI_HomePage.h_xHighHeatZoneTempretureOnOffSwitch_UP': highHeatSwitchUpValue,
      'Application.HMI_HomePage.h_xVacuumHeatZoneTempretureOnOffSwitch_UP': vacuumHeatSwitchUpValue,
      'Application.HMI_HomePage.h_xColdHeatZoneTempretureOnOffSwitch_UP': coldHeatSwitchUpValue,
      'Application.HMI_HomePage.h_xPreHeatZoneTempretureOnOffSwitch_Down': preHeatSwitchDownValue,
      'Application.HMI_HomePage.h_xHighHeatZoneTempretureOnOffSwitch_Down': highHeatSwitchDownValue,
      'Application.HMI_HomePage.h_xVacuumHeatZoneTempretureOnOffSwitch_Down': vacuumHeatSwitchDownValue,
      'Application.HMI_HomePage.h_xColdHeatZoneTempretureOnOffSwitch_Down': coldHeatSwitchDownValue
    } = data.result;
    const settingArray = settingPreheatArrayValue
      .slice(0, 3)
      .concat(
        settingHighTemperatureArrayValue
          .slice(0, 2)
          .concat(settingVacuumArrayValue.slice(0, 1).concat(settingBurialArrayValue.slice(0, 2)))
      );
    const actualArray = actualPreheatArrayValue
      .slice(0, 3)
      .concat(
        actualHighTemperatureArrayValue
          .slice(0, 2)
          .concat(actualVacuumArrayValue.slice(0, 1).concat(actualBurialArrayValue.slice(0, 2)))
      );
    const settingArrayDown = settingPreheatArrayValueDown
      .slice(0, 3)
      .concat(
        settingHighTemperatureArrayValueDown
          .slice(0, 2)
          .concat(settingVacuumArrayValueDown.slice(0, 1).concat(settingBurialArrayValueDown.slice(0, 2)))
      );
    const actualArrayDown = actualPreheatArrayValueDown
      .slice(0, 3)
      .concat(
        actualHighTemperatureArrayValueDown
          .slice(0, 2)
          .concat(actualVacuumArrayValueDown.slice(0, 1).concat(actualBurialArrayValuetsDown.slice(0, 2)))
      );
    const upSwitchObj = preHeatSwitchUpValue
      .slice(0, 3)
      .concat(
        highHeatSwitchUpValue
          .slice(0, 2)
          .concat(vacuumHeatSwitchUpValue.slice(0, 1).concat(coldHeatSwitchUpValue.slice(0, 2)))
      );
    const downSwitchObj = preHeatSwitchDownValue
      .slice(0, 3)
      .concat(
        highHeatSwitchDownValue
          .slice(0, 2)
          .concat(vacuumHeatSwitchDownValue.slice(0, 1).concat(coldHeatSwitchDownValue.slice(0, 2)))
      );
    topSwitch.value = upSwitchObj;
    bottomSwitch.value = downSwitchObj;
    settingTemperatureArray.value = settingArray;
    actualTemperatureArray.value = actualArray;
    settingTemperatureArrayDown.value = settingArrayDown;
    actualTemperatureArrayDown.value = actualArrayDown;
    const topArrOne = upFanArrayValue[0];
    const topArrTwo = upFanArrayValue[1];
    const topArrThree = upFanArrayValue[2];
    const bottomArrOne = downFanArrayValue[0];
    const bottomArrTwo = downFanArrayValue[1];
    const topObj = [];
    topObj.push(topArrOne);
    topObj.push(topArrOne);
    topObj.push(topArrOne);
    topObj.push(topArrTwo);
    topObj.push(topArrTwo);
    topObj.push(topArrTwo);
    topObj.push(topArrThree);
    topObj.push(topArrThree);
    upperFanArray.value = topObj;
    const bottomObj = [];
    bottomObj.push(bottomArrOne);
    bottomObj.push(bottomArrOne);
    bottomObj.push(bottomArrOne);
    bottomObj.push(bottomArrOne);
    bottomObj.push(bottomArrOne);
    bottomObj.push(bottomArrOne);
    bottomObj.push(bottomArrTwo);
    bottomObj.push(bottomArrTwo);
    lowerFanArray.value = bottomObj;
  }
}

function getHeatProgress(heatValue: number) {
  return (heatValue / 350) * 100;
}

function clickOn(value) {
  currentIndex.value = value;
  stoveItemValue.value = settingTemperatureArray.value[currentIndex.value];
  if (coverShowModal.value === true) {
    coverShowModal.value = false;
  } else {
    coverShowModal.value = true;
  }
  // value.value = '';
}

function clickOnDown(value) {
  currentIndex.value = value;
  stoveItemValueDown.value = settingTemperatureArrayDown.value[currentIndex.value];
  if (coverShowModalDown.value === true) {
    coverShowModalDown.value = false;
  } else {
    coverShowModalDown.value = true;
  }
  // value.value = '';
}

function clickOnTop(value) {
  topCurrentIndex.value = value;
  topFanValue.value = upperFanArray.value[topCurrentIndex.value];
  if (topShowModal.value === true) {
    topShowModal.value = false;
  } else {
    topShowModal.value = true;
  }
}

function clickOnBottom(value) {
  bottomCurrentIndex.value = value;
  bottomFanValue.value = lowerFanArray.value[bottomCurrentIndex.value];
  if (bottomShowModal.value === true) {
    bottomShowModal.value = false;
  } else {
    bottomShowModal.value = true;
  }
}

const onChange = (e: string) => {
  finalStoveItemValue.value = e;
};

const onChangeDown = (e: string) => {
  finalStoveItemValueDown.value = e;
};

const onChangeTopFan = (e: string) => {
  finalTopFanValue.value = e;
};

const onChangeBottomFan = (e: string) => {
  finalBottomFanValue.value = e;
};

function onKeyPress(e) {}
async function closedHandler() {
  console.log(currentIndex.value);
  const index = currentIndex.value;
  settingTemperatureArray.value[index] = finalStoveItemValue.value;
  if (index >= 0 && index <= 2) {
    const Param = {
      result: settingTemperatureArray.value.slice(0, 3),
      dataType: 'floats',
      name: 'Application.HMI_HomePage.h_rPreHeatZoneTempretureSV_UP'
    };
    const arr = [];
    arr.push(Param);
    const success = await saveJson(arr);
    console.log(success);
  } else if (index > 2 && index <= 4) {
    const Param = {
      result: settingTemperatureArray.value.slice(3, 5),
      dataType: 'floats',
      name: 'Application.HMI_HomePage.h_rHighHeatZoneTempretureSV_UP'
    };
    const arr = [];
    arr.push(Param);
    const success = await saveJson(arr);
    console.log(success);
  } else if (index > 4 && index <= 5) {
    const Param = {
      result: settingTemperatureArray.value.slice(5, 6),
      dataType: 'floats',
      name: 'Application.HMI_HomePage.h_rVacuumHeatZoneTempretureSV_UP'
    };
    const arr = [];
    arr.push(Param);
    const success = await saveJson(arr);
    console.log(success);
  } else {
    const Param = {
      result: settingTemperatureArray.value.slice(6, 8),
      dataType: 'floats',
      name: 'Application.HMI_HomePage.h_rColdHeatZoneTempretureSV_UP'
    };
    const arr = [];
    arr.push(Param);
    const success = await saveJson(arr);
    console.log(success);
  }
}
async function closedHandlerTopFan() {
  upperFanArray.value[topCurrentIndex.value] = finalTopFanValue.value;
  console.log(topCurrentIndex.value, '索引');
  const index = topCurrentIndex.value;
  if (index >= 0 && index <= 2) {
    const Param = {
      result: finalTopFanValue.value,
      dataType: 'short',
      name: 'Application.HMI_HomePage.h_iFanSpeedLevel_UP[0]'
    };
    const arr = [];
    arr.push(Param);
    const success = await saveJson(arr);
    console.log(success);
  } else if (index >= 3 && index <= 5) {
    const Param = {
      result: finalTopFanValue.value,
      dataType: 'short',
      name: 'Application.HMI_HomePage.h_iFanSpeedLevel_UP[1]'
    };
    const arr = [];
    arr.push(Param);
    const success = await saveJson(arr);
    console.log(success);
  } else {
    const Param = {
      result: finalTopFanValue.value,
      dataType: 'short',
      name: 'Application.HMI_HomePage.h_iFanSpeedLevel_UP[2]'
    };
    const arr = [];
    arr.push(Param);
    const success = await saveJson(arr);
    console.log(success);
  }
}
async function closedHandlerDown() {
  lowerFanArray.value[bottomCurrentIndex.value] = finalBottomFanValue.value;
  const index = bottomCurrentIndex.value;
  if (index >= 0 && index <= 5) {
    const Param = {
      result: finalBottomFanValue.value,
      dataType: 'short',
      name: 'Application.HMI_HomePage.h_iFanSpeedLevel_Down[0]'
    };
    const arr = [];
    arr.push(Param);
    const success = await saveJson(arr);
    console.log(success);
  } else {
    const Param = {
      result: finalBottomFanValue.value,
      dataType: 'short',
      name: 'Application.HMI_HomePage.h_iFanSpeedLevel_Down[1]'
    };
    const arr = [];
    arr.push(Param);
    const success = await saveJson(arr);
    console.log(success);
  }
}
async function closedHandlerLower() {
  console.log(currentIndex.value);
  const index = currentIndex.value;
  settingTemperatureArrayDown.value[currentIndex.value] = finalStoveItemValueDown.value;
  if (index >= 0 && index <= 2) {
    const Param = {
      result: settingTemperatureArrayDown.value.slice(0, 3),
      dataType: 'floats',
      name: 'Application.HMI_HomePage.h_rPreHeatZoneTempretureSV_DOWN'
    };
    const arr = [];
    arr.push(Param);
    const success = await saveJson(arr);
    console.log(success);
  } else if (index > 2 && index <= 4) {
    const Param = {
      result: settingTemperatureArrayDown.value.slice(3, 5),
      dataType: 'floats',
      name: 'Application.HMI_HomePage.h_rHighHeatZoneTempretureSV_DOWN'
    };
    const arr = [];
    arr.push(Param);
    const success = await saveJson(arr);
    console.log(success);
  } else if (index > 4 && index <= 5) {
    const Param = {
      result: settingTemperatureArrayDown.value.slice(5, 6),
      dataType: 'floats',
      name: 'Application.HMI_HomePage.h_rVacuumHeatZoneTempretureSV_DOWN'
    };
    const arr = [];
    arr.push(Param);
    const success = await saveJson(arr);
    console.log(success);
  } else {
    const Param = {
      result: settingTemperatureArrayDown.value.slice(6, 8),
      dataType: 'floats',
      name: 'Application.HMI_HomePage.h_rColdHeatZoneTempretureSV_DOWN'
    };
    const arr = [];
    arr.push(Param);
    const success = await saveJson(arr);
    console.log(success);
  }
}
function changeBottomSwitch(value) {
  if (value >= 0 && value <= 2) {
    const Param = {
      result: bottomSwitch.value.slice(0, 3),
      dataType: 'booleans',
      name: 'Application.HMI_HomePage.h_xPreHeatZoneTempretureOnOffSwitch_Down'
    };
    const arr = [];
    arr.push(Param);
    saveJson(arr);
  } else if (value > 2 && value <= 4) {
    const Param = {
      result: bottomSwitch.value.slice(3, 5),
      dataType: 'booleans',
      name: 'Application.HMI_HomePage.h_xHighHeatZoneTempretureOnOffSwitch_Down'
    };
    const arr = [];
    arr.push(Param);
    saveJson(arr);
  } else if (value > 4 && value <= 5) {
    const Param = {
      result: bottomSwitch.value.slice(5, 6),
      dataType: 'booleans',
      name: 'Application.HMI_HomePage.h_xVacuumHeatZoneTempretureOnOffSwitch_Down'
    };
    const arr = [];
    arr.push(Param);
    saveJson(arr);
  } else {
    const Param = {
      result: bottomSwitch.value.slice(6, 8),
      dataType: 'booleans',
      name: 'Application.HMI_HomePage.h_xColdHeatZoneTempretureOnOffSwitch_Down'
    };
    const arr = [];
    arr.push(Param);
    saveJson(arr);
  }
}
function changeTopSwitch(value) {
  if (value >= 0 && value <= 2) {
    const Param = {
      result: topSwitch.value.slice(0, 3),
      dataType: 'booleans',
      name: 'Application.HMI_HomePage.h_xPreHeatZoneTempretureOnOffSwitch_UP'
    };
    const arr = [];
    arr.push(Param);
    saveJson(arr);
  } else if (value > 2 && value <= 4) {
    const Param = {
      result: topSwitch.value.slice(3, 5),
      dataType: 'booleans',
      name: 'Application.HMI_HomePage.h_xHighHeatZoneTempretureOnOffSwitch_UP'
    };
    const arr = [];
    arr.push(Param);
    saveJson(arr);
  } else if (value > 4 && value <= 5) {
    const Param = {
      result: topSwitch.value.slice(5, 6),
      dataType: 'booleans',
      name: 'Application.HMI_HomePage.h_xVacuumHeatZoneTempretureOnOffSwitch_UP'
    };
    const arr = [];
    arr.push(Param);
    saveJson(arr);
  } else {
    const Param = {
      result: topSwitch.value.slice(6, 8),
      dataType: 'booleans',
      name: 'Application.HMI_HomePage.h_xColdHeatZoneTempretureOnOffSwitch_UP'
    };
    const arr = [];
    arr.push(Param);
    saveJson(arr);
  }
}
</script>

<style scoped>
.stove-panel {
  width: 190px;
  height: 280px;
}
</style>
