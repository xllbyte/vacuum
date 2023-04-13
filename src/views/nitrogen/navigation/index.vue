<template>
  <div>
    <n-card title="N2" class="shadow-sm rounded-16px parent-box">
      <div>
        <n-grid :x-gap="12" :y-gap="8" :cols="3">
          <n-grid-item>
            <n-card class="shadow-sm rounded-16px single-card flex-y-center">
              <n-tag :bordered="false" type="info" style="margin-top: 40%">氮气启用状态</n-tag>
              <n-divider />
              <n-switch
                v-model:value="enableActive"
                size="large"
                style="margin-left: 25%"
                @update-value="changeEnableSwitch"
              />
            </n-card>
          </n-grid-item>
          <n-grid-item>
            <n-card class="shadow-sm rounded-16px single-card"></n-card>
          </n-grid-item>
          <n-grid-item>
            <n-card class="shadow-sm rounded-16px single-card">
              <n-space vertical style="margin-top: 10%">
                <span>智能阀控制</span>
                <n-switch v-model:value="intellectActive" size="large" @update-value="changeIntellectSwitch" />
              </n-space>
            </n-card>
          </n-grid-item>
        </n-grid>
      </div>
      <div>
        <n-card class="shadow-sm rounded-16px" style="margin-top: 10px">
          <div>
            <n-grid :x-gap="12" :y-gap="8" :cols="3">
              <n-grid-item>
                <div class="flex-col-center">
                  <span>设定值</span>
                </div>
                <div style="margin-top: 5%">
                  <n-button type="primary" strong secondary style="width: 40%; margin-left: 30%" @click="clickOn">{{
                    settingValue
                  }}</n-button>
                  <span style="margin-left: 5px">ppm</span>
                </div>
                <div style="margin-top: 5%" class="flex-col-center">
                  <p>氮气</p>
                </div>
                <div class="flex-col-center">
                  <n-button type="tertiary" style="width: 40%" strong secondary>{{ oxygenValue }}</n-button>
                </div>
              </n-grid-item>
              <n-grid-item>
                <n-select v-model:value="value1" size="medium" :options="options" style="width: 80%"> </n-select>
                <div>
                  <n-input-group style="margin-top: 10%">
                    <n-button type="primary" class="input-head"> 警报上线 </n-button>
                    <n-input
                      v-model:value="alarmOnline"
                      :style="{ width: '40%' }"
                      :input-props="{ onclick: clickOn1 }"
                    ></n-input>
                  </n-input-group>
                </div>
                <div>
                  <n-input-group style="margin-top: 10%">
                    <n-button type="primary" class="input-head"> 警报下线 </n-button>
                    <n-input
                      v-model:value="alarmOffline"
                      :style="{ width: '40%' }"
                      :input-props="{ onclick: clickOn2 }"
                    ></n-input>
                  </n-input-group>
                </div>
              </n-grid-item>
              <n-grid-item>
                <div class="flex-y-center">
                  <n-space vertical>
                    <span>氮气进气阀</span>
                    <n-switch v-model:value="valveActive" size="large" @update-value="changeValveSwitch" />
                    <span>报警功能启用状态</span>
                    <n-switch v-model:value="statusActive" size="large" @update-value="changeStatusSwitch" />
                  </n-space>
                </div>
              </n-grid-item>
            </n-grid>
          </div>
        </n-card>
      </div>
    </n-card>
    <n-modal
      v-model:show="coverShowModal"
      class="rounded-10px"
      preset="card"
      title="请输入"
      style="width: 600px"
      @after-leave="closedHandler"
    >
      <n-input v-model:value="finalValue" type="textarea" placeholder="请输入" />
      <key-board-component
        :ref="finalValue"
        :keyboard-class="keyboardClass"
        :input="finalValue"
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
      @after-leave="closedHandlerMax"
    >
      <n-input v-model:value="finalAlarmOnline" type="textarea" placeholder="请输入" />
      <key-board-component
        :ref="finalAlarmOnline"
        :keyboard-class="keyboardClass"
        :input="finalAlarmOnline"
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
      @after-leave="closedHandlerMin"
    >
      <n-input v-model:value="finalAlarmOffline" type="textarea" placeholder="请输入" />
      <key-board-component
        :ref="finalAlarmOffline"
        :keyboard-class="keyboardClass"
        :input="finalAlarmOffline"
        :max-length="maxlength"
        @onChange="onChange2"
        @onKeyPress="onKeyPress2"
      />
    </n-modal>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { keepGetting, postJson, saveJson } from '@/service/api/home';
import KeyBoardComponent from '@/views/profile/nitrogen/components/KeyBoardComponent.vue';
import { closeSocket, createSocket, guid } from '@/service/api/websocket';
const active = ref(true);
const enableActive = ref(true);
const valveActive = ref(true);
const intellectActive = ref(true);
const statusActive = ref(true);
const settingValue = ref('0');
const finalValue = ref('');
const oxygenValue = ref('0');
const coverShowModal = ref(false);
const coverShowModal1 = ref(false);
const coverShowModal2 = ref(false);
const alarmOnline = ref('0');
const finalAlarmOnline = ref('');
const alarmOffline = ref('0');
const finalAlarmOffline = ref('');
const sValueArray = ref([]);
const pValueArray = ref([]);
const maxLimitValueArray = ref([]);
const minLimitValueArray = ref([]);
const value1 = ref(1);
const maxlength = ref(999);
const tagName = 'nitrogenNavigation';
const uuid = ref('');
const options = [
  {
    label: '预热区',
    value: 1
  },
  {
    label: '高温区第一区',
    value: 2
  },
  {
    label: '高温区第四区',
    value: 3
  },
  {
    label: '冷却区',
    value: 4
  }
];
function clickOn() {
  if (coverShowModal.value === true) {
    coverShowModal.value = false;
  } else {
    coverShowModal.value = true;
  }
}

function onKeyPress(e) {}
function onChange(e) {
  finalValue.value = e;
}

function onKeyPress1(e) {}
function onChange1(e) {
  finalAlarmOnline.value = e;
}

function onKeyPress2(e) {}
function onChange2(e) {
  finalAlarmOffline.value = e;
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
onMounted(async () => {
  uuid.value = guid(tagName);
  createSocket(uuid.value);
  window.addEventListener('onmessageWS', handleWsMsg);
  const param = {
    'Application.HMI_N2Config.h_xN2EnableSwitch[0]': 'boolean',
    'Application.HMI_N2Config.h_xN2valveSwitch[0]': 'boolean',
    'Application.HMI_N2Config.h_rN2_SV': 'floats',
    'Application.HMI_N2Config.h_rN2_PV': 'floats',
    'Application.HMI_N2Config.h_rN2_MaxLimit': 'floats',
    'Application.HMI_N2Config.h_rN2_MinLimit': 'floats',
    'Application.HMI_N2Config.h_xAutoValveControlSwitch': 'boolean',
    'Application.HMI_N2Config.h_xN2_AlarmEnableSwitch': 'boolean'
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
      'Application.HMI_N2Config.h_xN2EnableSwitch[0]': enableSwitchValue,
      'Application.HMI_N2Config.h_xN2valveSwitch[0]': valveSwitchValue,
      'Application.HMI_N2Config.h_rN2_SV': sValue,
      'Application.HMI_N2Config.h_rN2_PV': pValue,
      'Application.HMI_N2Config.h_rN2_MaxLimit': maxLimitValue,
      'Application.HMI_N2Config.h_rN2_MinLimit': minLimitValue,
      'Application.HMI_N2Config.h_xAutoValveControlSwitch': autoValveControlSwitchValue,
      'Application.HMI_N2Config.h_xN2_AlarmEnableSwitch': alarmEnableSwitchValue
    } = data.result;
    sValueArray.value = sValue;
    pValueArray.value = pValue;
    maxLimitValueArray.value = maxLimitValue;
    minLimitValueArray.value = minLimitValue;
    settingValue.value = sValue[value1.value - 1];
    oxygenValue.value = pValue[value1.value - 1];
    alarmOnline.value = maxLimitValue[value1.value - 1];
    alarmOffline.value = minLimitValue[value1.value - 1];
    enableActive.value = enableSwitchValue;
    valveActive.value = valveSwitchValue;
    intellectActive.value = autoValveControlSwitchValue;
    statusActive.value = alarmEnableSwitchValue;
  }
}
async function changeEnableSwitch() {
  const Param = {
    result: enableActive.value,
    dataType: 'boolean',
    name: 'Application.HMI_N2Config.h_xN2EnableSwitch[0]'
  };
  const arr = [];
  arr.push(Param);
  const success = await saveJson(arr);
  console.log(success);
}

async function changeValveSwitch() {
  const Param = {
    result: valveActive.value,
    dataType: 'boolean',
    name: 'Application.HMI_N2Config.h_xN2valveSwitch[0]'
  };
  const arr = [];
  arr.push(Param);
  const success = await saveJson(arr);
  console.log(success);
}
async function changeStatusSwitch() {
  const Param = {
    result: statusActive.value,
    dataType: 'boolean',
    name: 'Application.HMI_N2Config.h_xN2_AlarmEnableSwitch'
  };
  const arr = [];
  arr.push(Param);
  const success = await saveJson(arr);
  console.log(success);
}

async function changeIntellectSwitch() {
  const Param = {
    result: intellectActive.value,
    dataType: 'boolean',
    name: 'Application.HMI_N2Config.h_xAutoValveControlSwitch'
  };
  const arr = [];
  arr.push(Param);
  const success = await saveJson(arr);
  console.log(success);
}

async function closedHandler() {
  console.log('关闭事件');
  const Param = {
    result: finalValue.value,
    dataType: 'float',
    name: `Application.HMI_N2Config.h_rN2_SV[${value1.value - 1}]`
  };
  const arr = [];
  arr.push(Param);
  const success = await saveJson(arr);
}

async function closedHandlerMax() {
  const Param = {
    result: finalAlarmOnline.value,
    dataType: 'float',
    name: `Application.HMI_N2Config.h_rN2_MaxLimit[${value1.value - 1}]`
  };
  const arr = [];
  arr.push(Param);
  const success = await saveJson(arr);
}

async function closedHandlerMin() {
  const Param = {
    result: finalAlarmOffline.value,
    dataType: 'float',
    name: `Application.HMI_N2Config.h_rN2_MinLimit[${value1.value - 1}]`
  };
  const arr = [];
  arr.push(Param);
  const success = await saveJson(arr);
}
watch(value1, newValue => {
  settingValue.value = sValueArray.value[newValue - 1];
  oxygenValue.value = pValueArray.value[newValue - 1];
  alarmOnline.value = maxLimitValueArray.value[newValue - 1];
  alarmOffline.value = minLimitValueArray.value[newValue - 1];
});
</script>

<style scoped>
.parent-box {
  width: 80%;
  height: 600px;
  margin: 1% auto;
}
.single-card {
  height: 300px;
}
.input-head {
  width: 90px;
}
</style>
