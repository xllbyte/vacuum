<template>
  <div>
    <n-card class="shadow-sm rounded-16px parent-box">
      <n-grid x-gap="12" :cols="4">
        <n-gi>
          <n-card class="shadow-sm rounded-16px single-card flex-y-center">
            <n-tag :bordered="false" type="info" style="margin-top: 40%">真空启用状态</n-tag>
            <n-divider />
            <n-switch
              v-model:value="mainSwitch"
              size="large"
              style="margin-left: 25%"
              @update-value="changeValveSwitch"
            />
          </n-card>
        </n-gi>
        <n-gi span="3">
          <n-card class="single-card">
            <n-grid :x-gap="50" :y-gap="50" :cols="3" style="margin-top: 5%">
              <n-gi>
                <n-input-group>
                  <n-button type="primary" class="input-head"> 抽真空时间 </n-button>
                  <n-input
                    v-model:value="VacuumPumpingTime"
                    :style="{ width: '80%' }"
                    :input-props="{ onclick: clickOn }"
                  />
                </n-input-group>
              </n-gi>
              <n-gi>
                <n-input-group>
                  <n-button type="primary" class="input-head"> 保持真空时间 </n-button>
                  <n-input
                    v-model:value="VacuumHoldingTime"
                    :style="{ width: '80%' }"
                    :input-props="{ onclick: clickOn1 }"
                  />
                </n-input-group>
              </n-gi>
              <n-gi>
                <n-input-group>
                  <n-button type="primary" class="input-head"> 充气回压时间 </n-button>
                  <n-input
                    v-model:value="InflationBackPressureTime"
                    :style="{ width: '80%' }"
                    :input-props="{ onclick: clickOn2 }"
                  />
                </n-input-group>
              </n-gi>
              <n-gi>
                <n-input-group>
                  <n-button type="primary" class="input-head"> 真空压力值 </n-button>
                  <n-input
                    v-model:value="VacuumPressureValue"
                    :style="{ width: '80%' }"
                    :input-props="{ onclick: clickOn3 }"
                  />
                </n-input-group>
              </n-gi>
              <n-gi>
                <n-input-group>
                  <n-button type="primary" class="input-head"> 产品长度值 </n-button>
                  <n-input
                    v-model:value="productLength"
                    :style="{ width: '80%' }"
                    :input-props="{ onclick: clickOn4 }"
                  />
                </n-input-group>
              </n-gi>
              <n-gi></n-gi>
              <n-gi></n-gi>
              <n-gi>
                <n-space vertical>
                  <n-select v-model:value="vacuumMode" :options="options" />
                </n-space>
              </n-gi>
              <n-gi></n-gi>
            </n-grid>
          </n-card>
        </n-gi>
      </n-grid>
    </n-card>
    <n-modal
      v-model:show="coverShowModal"
      class="rounded-10px"
      preset="card"
      title="请输入"
      style="width: 600px"
      @after-leave="closedHandler"
    >
      <n-input v-model:value="finalVacuumPumpingTime" type="textarea" placeholder="请输入" />
      <key-board-component
        :ref="finalVacuumPumpingTime"
        :keyboard-class="keyboardClass"
        :input="finalVacuumPumpingTime"
        :max-length="maxlength"
        @onChange="onChange"
        @onKeyPress="onKeyPress"
      />
    </n-modal>
    <n-modal
      v-model:show="coverShowModal1"
      class="rounded-10px"
      preset="card"
      title="请输入"
      style="width: 600px"
      @after-leave="closedHandler1"
    >
      <n-input v-model:value="finalVacuumHoldingTime" type="textarea" placeholder="请输入" />
      <key-board-component
        :ref="finalVacuumHoldingTime"
        :keyboard-class="keyboardClass"
        :input="finalVacuumHoldingTime"
        :max-length="maxlength"
        @onChange="onChange1"
        @onKeyPress="onKeyPress1"
      />
    </n-modal>
    <n-modal
      v-model:show="coverShowModal2"
      class="rounded-10px"
      preset="card"
      title="请输入"
      style="width: 600px"
      @after-leave="closedHandler2"
    >
      <n-input v-model:value="finalInflationBackPressureTime" type="textarea" placeholder="请输入" />
      <key-board-component
        :ref="finalInflationBackPressureTime"
        :keyboard-class="keyboardClass"
        :input="finalInflationBackPressureTime"
        :max-length="maxlength"
        @onChange="onChange2"
        @onKeyPress="onKeyPress2"
      />
    </n-modal>
    <n-modal
      v-model:show="coverShowModal3"
      class="rounded-10px"
      preset="card"
      title="请输入"
      style="width: 600px"
      @after-leave="closedHandler3"
    >
      <n-input v-model:value="finalVacuumPressureValue" type="textarea" placeholder="请输入" />
      <key-board-component
        :ref="finalVacuumPressureValue"
        :keyboard-class="keyboardClass"
        :input="finalVacuumPressureValue"
        :max-length="maxlength"
        @onChange="onChange3"
        @onKeyPress="onKeyPress3"
      />
    </n-modal>
    <n-modal
      v-model:show="coverShowModal4"
      class="rounded-10px"
      preset="card"
      title="请输入"
      style="width: 600px"
      @after-leave="closedHandler4"
    >
      <n-input v-model:value="finalProductLength" type="textarea" placeholder="请输入" />
      <key-board-component
        :ref="finalProductLength"
        :keyboard-class="keyboardClass"
        :input="finalProductLength"
        :max-length="maxlength"
        @onChange="onChange4"
        @onKeyPress="onKeyPress4"
      />
    </n-modal>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue';
import KeyBoardComponent from '@/views/profile/nitrogen/components/KeyBoardComponent.vue';
import { keepGetting, postJson, saveJson } from '@/service/api/home';
import { closeSocket, createSocket, guid } from '@/service/api/websocket';
const mainSwitch = ref(true);
const coverShowModal = ref(false);
const coverShowModal1 = ref(false);
const coverShowModal2 = ref(false);
const coverShowModal3 = ref(false);
const coverShowModal4 = ref(false);
const VacuumPumpingTime = ref('23');
const finalVacuumPumpingTime = ref('');
const VacuumHoldingTime = ref('23');
const finalVacuumHoldingTime = ref('');
const InflationBackPressureTime = ref('23');
const finalInflationBackPressureTime = ref('');
const VacuumPressureValue = ref('23');
const finalVacuumPressureValue = ref('');
const productLength = ref('0');
const finalProductLength = ref('');
const maxlength = ref(999);
const vacuumMode = ref('song0');
const tagName = 'profileVacuum';
const uuid = ref('');
function clickOn() {
  if (coverShowModal.value === true) {
    coverShowModal.value = false;
  } else {
    coverShowModal.value = true;
  }
}
function clickOn1() {
  if (coverShowModal1.value === true) {
    coverShowModal1.value = false;
  } else {
    coverShowModal1.value = true;
  }
}
function clickOn2() {
  if (coverShowModal2.value === true) {
    coverShowModal2.value = false;
  } else {
    coverShowModal2.value = true;
  }
}
function clickOn3() {
  if (coverShowModal3.value === true) {
    coverShowModal3.value = false;
  } else {
    coverShowModal3.value = true;
  }
}
function clickOn4() {
  if (coverShowModal4.value === true) {
    coverShowModal4.value = false;
  } else {
    coverShowModal4.value = true;
  }
}
function onKeyPress(e) {}
function onChange(e) {
  finalVacuumPumpingTime.value = e;
}
function onKeyPress1(e) {}
function onChange1(e) {
  finalVacuumHoldingTime.value = e;
}
function onKeyPress2(e) {}
function onChange2(e) {
  finalInflationBackPressureTime.value = e;
}
function onKeyPress3(e) {}
function onChange3(e) {
  finalVacuumPressureValue.value = e;
}
function onKeyPress4(e) {}
function onChange4(e) {
  finalProductLength.value = e;
}
const options = [
  {
    label: '请选择抽真空的模式',
    value: 'song0',
    disabled: true
  },
  {
    label: '重复抽真空模式',
    value: 0
  },
  {
    label: '一步真空模式',
    value: 1
  },
  {
    label: '二步真空模式',
    value: 2
  }
];
onMounted(async () => {
  uuid.value = guid(tagName);
  createSocket(uuid.value);
  window.addEventListener('onmessageWS', handleWsMsg);
  const param = {
    'Application.HMI_VacuumConfig.h_xVacuumMainSwitch': 'boolean',
    'Application.HMI_VacuumConfig.h_rBoardInVacuumZoneTime': 'float',
    'Application.HMI_VacuumConfig.h_rVacuumDuringTime': 'float',
    'Application.HMI_VacuumConfig.h_rVacuumRebackTime': 'float',
    'Application.HMI_VacuumConfig.h_rVacuumPV': 'float',
    'Application.HMI_VacuumConfig.h_rProductLengthSetting': 'float',
    'Application.HMI_VacuumConfig.h_iVacuumMode': 'short'
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
      'Application.HMI_VacuumConfig.h_xVacuumMainSwitch': mainSwitchValue,
      'Application.HMI_VacuumConfig.h_rBoardInVacuumZoneTime': vacuumZoneTimeValue,
      'Application.HMI_VacuumConfig.h_rVacuumDuringTime': duringTimeValue,
      'Application.HMI_VacuumConfig.h_rVacuumRebackTime': rebackTimeValue,
      'Application.HMI_VacuumConfig.h_rVacuumPV': sValue,
      'Application.HMI_VacuumConfig.h_rProductLengthSetting': lengthSettingValue,
      'Application.HMI_VacuumConfig.h_iVacuumMode': vacuumModeValue
    } = data.result;
    mainSwitch.value = mainSwitchValue;
    VacuumPumpingTime.value = vacuumZoneTimeValue;
    VacuumHoldingTime.value = duringTimeValue;
    InflationBackPressureTime.value = rebackTimeValue;
    VacuumPressureValue.value = sValue;
    productLength.value = lengthSettingValue;
    vacuumMode.value = vacuumModeValue;
  }
}
async function changeValveSwitch() {
  const Param = {
    result: mainSwitch.value,
    dataType: 'boolean',
    name: 'Application.HMI_VacuumConfig.h_xVacuumMainSwitch'
  };
  const arr = [];
  arr.push(Param);
  const success = await saveJson(arr);
  console.log(success);
}
async function closedHandler() {
  const Param = {
    result: finalVacuumPumpingTime.value,
    dataType: 'float',
    name: 'Application.HMI_VacuumConfig.h_rBoardInVacuumZoneTime'
  };
  const arr = [];
  arr.push(Param);
  const success = await saveJson(arr);
  console.log(success);
}
async function closedHandler1() {
  const Param = {
    result: finalVacuumHoldingTime.value,
    dataType: 'float',
    name: 'Application.HMI_VacuumConfig.h_rVacuumDuringTime'
  };
  const arr = [];
  arr.push(Param);
  const success = await saveJson(arr);
  console.log(success);
}
async function closedHandler2() {
  const Param = {
    result: finalInflationBackPressureTime.value,
    dataType: 'float',
    name: 'Application.HMI_VacuumConfig.h_rVacuumRebackTime'
  };
  const arr = [];
  arr.push(Param);
  const success = await saveJson(arr);
  console.log(success);
}
async function closedHandler3() {
  const Param = {
    result: finalVacuumPressureValue.value,
    dataType: 'float',
    name: 'Application.HMI_VacuumConfig.h_rVacuumPV'
  };
  const arr = [];
  arr.push(Param);
  const success = await saveJson(arr);
  console.log(success);
}
async function closedHandler4() {
  const Param = {
    result: finalProductLength.value,
    dataType: 'float',
    name: 'Application.HMI_VacuumConfig.h_rProductLengthSetting'
  };
  const arr = [];
  arr.push(Param);
  const success = await saveJson(arr);
  console.log(success);
}
watch(vacuumMode, newValue => {
  console.log(newValue);
  const Param = {
    result: newValue,
    dataType: 'short',
    name: 'Application.HMI_VacuumConfig.h_iVacuumMode'
  };
  const arr = [];
  arr.push(Param);
  saveJson(arr);
});
</script>

<style scoped>
.parent-box {
  width: 90%;
  height: 400px;
  margin: 5% auto;
}
.single-card {
  height: 350px;
}
.input-head {
  width: 110px;
}
</style>
