<template>
  <div>
    <div>
      <n-grid :x-gap="12" :y-gap="8" :cols="4">
        <n-grid-item>
          <n-card :bordered="false" class="rounded-16px shadow-sm">
            <div class="w-full h-165px">
              <div class="flex-col-center p-0px">
                <p class="py-28px text-16px">开/关</p>
              </div>
              <div class="flex-col-center p-5px">
                <n-switch v-model:value="mainSwitch" size="large" :round="false" @update-value="changeValveSwitch">
                  <template #checked> <div style="width: 40px; height: 40px"></div> </template>
                </n-switch>
              </div>
            </div>
          </n-card>
        </n-grid-item>
        <n-grid-item>
          <n-card :bordered="false" class="rounded-16px shadow-sm">
            <div class="w-full h-165px">
              <div class="flex-col-center p-3px">
                <p class="py-28px text-16px">计时器</p>
              </div>
              <div class="flex-col-center p-3px">
                <div class="display: flex justify-content: space-between">
                  <span class="py-8px text-12px">产品入口到真空区的时间</span>
                  <n-button type="tertiary" style="margin-left: 5px" class="tiny-button">{{ elapsedTime }}</n-button>
                  <span class="py-8px text-12px" style="margin-left: 5px">秒</span>
                </div>
              </div>
            </div>
          </n-card>
        </n-grid-item>
        <n-grid-item>
          <n-card :bordered="false" class="rounded-16px shadow-sm">
            <div class="w-full h-165px">
              <div class="p-3px py-45px">
                <n-grid x-gap="12" :cols="2">
                  <n-gi>
                    <div>
                      <div class="flex-col-center">
                        <p>真空归零按钮</p>
                        <n-button type="success" style="margin-top: 15%" @click="clickResetButtom">开始</n-button>
                      </div>
                    </div>
                  </n-gi>
                  <n-gi>
                    <div>
                      <div class="flex-col-center">
                        <p type="error">一般故障复位</p>
                        <n-button type="success" style="margin-top: 15%" @click="chickResetAlarm">重置</n-button>
                      </div>
                    </div>
                  </n-gi>
                </n-grid>
              </div>
            </div>
          </n-card>
        </n-grid-item>
        <n-grid-item>
          <n-card :bordered="false" class="rounded-16px shadow-sm">
            <div class="w-full h-165px">
              <div class="flex-col-center p-8px">
                <n-grid :x-gap="12" :y-gap="8" :cols="3">
                  <n-grid-item>
                    <div class="flex-col-center p-3px">
                      <p class="py-8px text-10px">PCB间距</p>
                    </div>
                    <div style="text-align: center">
                      <n-button type="primary">{{ pcbDistance }}</n-button>
                      <span class="py-26px text-10px">cm</span>
                    </div>
                    <div v-if="iNSensorStateShow" class="flex-col-center p-3px">
                      <n-button strong secondary type="success" class="button-style">进口传感器</n-button>
                    </div>
                    <div v-if="inDoorStateShow" class="flex-col-center p-3px">
                      <n-button strong secondary type="success" class="button-style">进板闸门</n-button>
                    </div>
                    <div v-if="!iNSensorStateShow" class="flex-col-center p-3px">
                      <n-button type="tertiary" class="button-style">进口传感器</n-button>
                    </div>
                    <div v-if="!inDoorStateShow" class="flex-col-center p-3px">
                      <n-button type="tertiary" class="button-style">进板闸门</n-button>
                    </div>
                  </n-grid-item>
                  <n-grid-item>
                    <div class="flex-col-center p-3px">
                      <p class="py-8px text-10px">上升沿</p>
                    </div>
                    <div style="text-align: center">
                      <n-button type="primary">{{ risingEdgeDelay }}</n-button>
                      <span class="py-26px text-10px">sec</span>
                    </div>
                  </n-grid-item>
                  <n-grid-item>
                    <div class="flex-col-center p-3px">
                      <p class="py-8px text-10px">下降沿</p>
                    </div>
                    <div style="text-align: center">
                      <n-button type="primary">{{ fallingEdgeDelay }}</n-button>
                      <span class="py-26px text-10px">sec</span>
                    </div>
                    <div v-if="!outSensorStateShow" class="flex-col-center p-3px">
                      <n-button type="tertiary" class="button-style">出口传感器</n-button>
                    </div>
                    <div v-if="!outDoorStateShow" class="flex-col-center p-3px">
                      <n-button type="tertiary" class="button-style">出板闸门</n-button>
                    </div>
                    <div v-if="outSensorStateShow" class="flex-col-center p-3px">
                      <n-button strong secondary type="success" class="button-style">出口传感器</n-button>
                    </div>
                    <div v-if="outDoorStateShow" class="flex-col-center p-3px">
                      <n-button strong secondary type="success" class="button-style">出板闸门</n-button>
                    </div>
                  </n-grid-item>
                </n-grid>
              </div>
            </div>
          </n-card>
        </n-grid-item>
      </n-grid>
    </div>
    <div>
      <n-card :bordered="false" size="small" class="shadow-sm rounded-16px" style="margin-top: 20px">
        <n-grid :item-responsive="true" :x-gap="16" :y-gap="16">
          <n-grid-item span="0:7 640:7 1024:7">
            <div class="w-full h-550px">
              <div class="flex-col-center">
                <div style="margin-top: 60px">
                  <n-grid x-gap="12" :cols="2">
                    <n-gi>
                      <div>
                        <div class="flex-col-center">
                          <div>
                            <n-button type="tertiary" size="tiny">模拟</n-button>
                            <n-button type="tertiary" size="tiny">传感器通过</n-button>
                          </div>
                        </div>
                      </div>
                    </n-gi>
                    <n-gi>
                      <div>
                        <div class="flex-col-center">
                          <div>
                            <n-button type="tertiary" size="tiny">模拟</n-button>
                            <n-button type="tertiary" size="tiny">传感器通过 B</n-button>
                          </div>
                        </div>
                      </div>
                    </n-gi>
                  </n-grid>
                </div>
                <div style="margin-top: 50px">
                  <h1 class="py-26px text-14px">闸门止动器</h1>
                </div>
                <div style="margin-top: 10px">
                  <n-grid x-gap="12" :cols="2">
                    <n-gi>
                      <div>
                        <div class="flex-col-center">
                          <span class="py-26px text-14px">进口闸门</span>
                          <span class="py-26px text-14px">出口闸门</span>
                        </div>
                      </div>
                    </n-gi>
                    <n-gi>
                      <div>
                        <div class="flex-col-center py-26px">
                          <n-switch
                            v-model:value="inletGateSwitch"
                            size="large"
                            :round="false"
                            @update-value="changeInletGate"
                          />
                          <n-switch
                            v-model:value="outletGateSwitch"
                            size="large"
                            :round="false"
                            style="margin-top: 52px"
                            @update-value="changeOutletGate"
                          />
                        </div>
                      </div>
                    </n-gi>
                  </n-grid>
                </div>
              </div>
            </div>
          </n-grid-item>
          <n-grid-item span="0:17 640:17 1024:17">
            <div class="w-full h-530px">
              <div style="height: 80px">
                <n-grid :x-gap="12" :y-gap="8" :cols="3">
                  <n-grid-item>
                    <n-card :bordered="false" class="rounded-16px shadow-sm">
                      <div class="w-full h-60px">
                        <n-grid :x-gap="12" :y-gap="8" :cols="2">
                          <n-grid-item></n-grid-item>
                          <n-grid-item>
                            <div>
                              <div class="flex-col-center">
                                <p type="error">PCB 计数器</p>
                                <div>
                                  <n-button type="tertiary" style="width: 80px">{{ pcbCounter }}</n-button>
                                </div>
                              </div>
                            </div>
                          </n-grid-item>
                        </n-grid>
                      </div>
                    </n-card>
                  </n-grid-item>
                  <n-grid-item>
                    <n-card :bordered="false" class="rounded-16px shadow-sm">
                      <div class="w-full h-60px">
                        <div class="flex-col-center p-3px">
                          <div class="display: flex justify-content: space-between">
                            <icon-cib-discover class="text-30px text-green" style="margin-top: 5px" />
                            <span class="py-8px text-16px" style="margin-left: 10px; margin-right: 10px"
                              >轨道运行状态灯</span
                            >
                            <icon-cib-discover class="text-30px text-green" style="margin-top: 5px" />
                          </div>
                        </div>
                      </div>
                    </n-card>
                  </n-grid-item>
                  <n-grid-item>
                    <n-card :bordered="false" class="rounded-16px shadow-sm">
                      <div class="w-full h-60px"></div>
                    </n-card>
                  </n-grid-item>
                </n-grid>
              </div>
              <div style="margin-top: 25px">
                <n-grid :x-gap="12" :y-gap="8" :cols="2">
                  <n-grid-item>
                    <n-card :bordered="false" class="rounded-16px shadow-sm">
                      <div class="w-full">
                        <n-grid :x-gap="12" :y-gap="8" :cols="2">
                          <n-grid-item>
                            <div>
                              <div class="flex-col-center">
                                <div>真空泵手动开关</div>
                                <div>
                                  <n-switch
                                    v-model:value="vacuumPumpManualSwitch"
                                    size="large"
                                    :round="false"
                                    @update-value="changeVacuumPumpManual"
                                  />
                                </div>
                              </div>
                            </div>
                          </n-grid-item>
                          <n-grid-item>
                            <div>
                              <div class="flex-col-center">
                                <div>真空阀</div>
                                <div>
                                  <n-switch
                                    v-model:value="vacuumValveSwitch"
                                    size="large"
                                    :round="false"
                                    @update-value="changeVacuumValve"
                                  />
                                </div>
                              </div>
                            </div>
                          </n-grid-item>
                        </n-grid>
                      </div>
                      <div class="w-full" style="margin-top: 30px">
                        <n-grid :x-gap="12" :y-gap="8" :cols="5">
                          <n-grid-item>
                            <div>
                              <div class="flex-col-center" style="padding-top: 52%">
                                <div>真空阀</div>
                                <div>智能阀</div>
                              </div>
                            </div>
                          </n-grid-item>
                          <n-grid-item>
                            <div>
                              <div class="flex-col-center" style="margin-top: 23px">
                                <div><n-button type="tertiary" class="tiny-button">100</n-button></div>
                                <div><n-button type="tertiary" class="tiny-button">58</n-button></div>
                              </div>
                            </div>
                          </n-grid-item>
                          <n-grid-item>
                            <div>
                              <div class="flex-col-center" style="margin-top: 34px">
                                <div><span style="font-size: 1px">真空</span></div>
                                <div>
                                  <n-button type="primary" style="width: 80px">{{ middleVacuumValue }}</n-button>
                                </div>
                              </div>
                            </div>
                          </n-grid-item>
                          <n-grid-item>
                            <div>
                              <div class="flex-col-center" style="margin-top: 34px">
                                <div><span style="font-size: 1px">回压</span></div>
                                <div>
                                  <n-button type="primary">{{ middleReturnPressure }}</n-button>
                                </div>
                              </div>
                            </div>
                          </n-grid-item>
                          <n-grid-item>
                            <div>
                              <div class="flex-col-center"></div>
                            </div>
                          </n-grid-item>
                        </n-grid>
                      </div>
                      <div class="w-full" style="margin-top: 30px">
                        <span style="padding-right: 6px">产品长度</span>
                        <n-button type="primary" size="small" class="tiny-button" @click="clickOn">{{
                          settingProductLength
                        }}</n-button>
                        <span style="padding-left: 6px">mm</span>
                        <span style="font-size: 1px; margin-left: 30px; padding-right: 6px">产品长度</span>
                        <n-button type="tertiary" class="tiny-button">{{ actualProductLength }}</n-button>
                        <span style="padding-left: 6px">mm</span>
                      </div>
                      <div class="w-full" style="margin-top: 30px">
                        <div class="w-full">
                          <n-grid :x-gap="12" :y-gap="8" :cols="2">
                            <n-grid-item>
                              <div>
                                <div class="flex-col-center">
                                  <div>真空实际值</div>
                                </div>
                              </div>
                            </n-grid-item>
                            <n-grid-item>
                              <div>
                                <n-button type="tertiary" size="small">{{ statePV }}</n-button>
                                <span style="padding-left: 5%">mbar</span>
                              </div>
                            </n-grid-item>
                          </n-grid>
                        </div>
                      </div>
                    </n-card>
                  </n-grid-item>
                  <n-grid-item>
                    <vacuum-animation
                      :display-value="statePV"
                      :holding-time="holdingTime"
                      :during-time="duringTime"
                      :reback-time="rebackTime"
                    ></vacuum-animation>
                  </n-grid-item>
                </n-grid>
              </div>
            </div>
          </n-grid-item>
        </n-grid>
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
      <n-input v-model:value="finalSettingProductLength" type="textarea" placeholder="请输入" />
      <key-board-component
        :ref="finalSettingProductLength"
        :keyboard-class="keyboardClass"
        :input="finalSettingProductLength"
        :max-length="maxlength"
        @onChange="onChange"
      />
    </n-modal>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { useDialog, useMessage } from 'naive-ui';
import VacuumAnimation from '@/views/vacuum/homepage/components/VacuumAnimation.vue';
import { keepGetting, postJson, saveJson } from '@/service/api/home';
import KeyBoardComponent from '@/views/profile/nitrogen/components/KeyBoardComponent.vue';
import { closeSocket, createSocket, guid } from '@/service/api/websocket';
const dialog = useDialog();
const message = useMessage();
const active = ref(false);
const mainSwitch = ref(true);
const settingProductLength = ref(0);
const finalSettingProductLength = ref('');
const actualProductLength = ref(0);
const coverShowModal = ref(false);
const maxlength = ref(999);
const tagName = 'vacuumHomepage';
const uuid = ref('');
const statePV = ref(0);
const duringTime = ref(0);
const holdingTime = ref(0);
const rebackTime = ref(0);
const elapsedTime = ref(1.1);
const vResetButton = ref(false);
const vALarmResetButton = ref(false);
const pcbDistance = ref(8);
const risingEdgeDelay = ref(9);
const fallingEdgeDelay = ref(10);
const inletGateSwitch = ref(false);
const outletGateSwitch = ref(false);
const pcbCounter = ref(3);
const vacuumPumpManualSwitch = ref(false);
const vacuumValveSwitch = ref(false);
const middleVacuumValue = ref(41);
const middleReturnPressure = ref(45.0);
const iNSensorStateShow = ref(false);
const outSensorStateShow = ref(false);
const inDoorStateShow = ref(false);
const outDoorStateShow = ref(false);
onMounted(async () => {
  uuid.value = guid(tagName);
  createSocket(uuid.value);
  window.addEventListener('onmessageWS', handleWsMsg);
  const param = {
    'Application.HMI_VacuumConfig.h_xVacuumMainSwitch': 'boolean',
    'Application.HMI_VacuumConfig.h_rProductLengthMeasured': 'float',
    'Application.HMI_VacuumConfig.h_rProductLengthSetting': 'float',
    'Application.HMI_VacuumConfig.h_rVacuumPV': 'float',
    'Application.HMI_VacuumConfig.h_rVacuumDuringTime': 'float',
    'Application.HMI_VacuumConfig.h_rVacuumHoldingTime': 'float',
    'Application.HMI_VacuumConfig.h_rVacuumRebackTime': 'float',
    'Application.HMI_VacuumConfig.h_rProductEntryToVacuumZoneTime': 'float',
    'Application.HMI_VacuumConfig.h_xVacuumResetButton': 'boolean',
    'Application.HMI_VacuumConfig.h_xNormalALarmResetButton': 'boolean',
    'Application.HMI_TrackConfig.h_rPCB_SeparationDistance': 'float',
    'Application.HMI_TrackConfig.h_rInSensorRisingEdgeDelay': 'float',
    'Application.HMI_TrackConfig.h_rInSensorFallingEdgeDelay': 'float',
    'Application.HMI_VacuumConfig.h_xCylinderSwitch[0]': 'boolean',
    'Application.HMI_VacuumConfig.h_xCylinderSwitch[1]': 'boolean',
    'Application.HMI_CountConfig.h_diPCB_Counter': 'int',
    'Application.HMI_VacuumConfig.h_xVacuumPumpManulSwitch': 'boolean',
    'Application.HMI_VacuumConfig.h_xVacuumValueSwitch': 'boolean',
    'Application.HMI_VacuumConfig.h_rVacuumStatePV': 'float',
    'Application.HMI_TrackConfig.h_xINSensorState': 'boolean',
    'Application.HMI_TrackConfig.h_xOutSensorState': 'boolean',
    'Application.HMI_TrackConfig.h_xInDoorState': 'boolean',
    'Application.HMI_TrackConfig.h_xOutDoorState': 'boolean'
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
      'Application.HMI_VacuumConfig.h_rProductLengthMeasured': productLengthMeasuredValue,
      'Application.HMI_VacuumConfig.h_rProductLengthSetting': rProductLengthSettingValue,
      'Application.HMI_VacuumConfig.h_rVacuumPV': statePVValue,
      'Application.HMI_VacuumConfig.h_rVacuumDuringTime': duringTimeValue,
      'Application.HMI_VacuumConfig.h_rVacuumHoldingTime': holdingTimeValue,
      'Application.HMI_VacuumConfig.h_rVacuumRebackTime': rebackTimeValue,
      'Application.HMI_VacuumConfig.h_rProductEntryToVacuumZoneTime': productEntryToVacuumZoneTimeValue,
      'Application.HMI_VacuumConfig.h_xVacuumResetButton': resetButtonValue,
      'Application.HMI_VacuumConfig.h_xNormalALarmResetButton': aLarmResetButtonValue,
      'Application.HMI_TrackConfig.h_rPCB_SeparationDistance': pcbDistanceValue,
      'Application.HMI_TrackConfig.h_rInSensorRisingEdgeDelay': risingEdgeDelayValue,
      'Application.HMI_TrackConfig.h_rInSensorFallingEdgeDelay': fallingEdgeDelaValue,
      'Application.HMI_VacuumConfig.h_xCylinderSwitch[0]': enterPortValue,
      'Application.HMI_VacuumConfig.h_xCylinderSwitch[1]': speakValue,
      'Application.HMI_CountConfig.h_diPCB_Counter': pCBCounterValue,
      'Application.HMI_VacuumConfig.h_xVacuumPumpManulSwitch': pumpManulSwitchValue,
      'Application.HMI_VacuumConfig.h_xVacuumValueSwitch': vacuumValueSwitchValue,
      'Application.HMI_VacuumConfig.h_rVacuumStatePV': vacuumStatePVValue,
      'Application.HMI_TrackConfig.h_xINSensorState': iNSensorStateValue,
      'Application.HMI_TrackConfig.h_xOutSensorState': outSensorStateValue,
      'Application.HMI_TrackConfig.h_xInDoorState': inDoorStateValue,
      'Application.HMI_TrackConfig.h_xOutDoorState': outDoorStateValue
    } = data.result;
    mainSwitch.value = mainSwitchValue;
    settingProductLength.value = rProductLengthSettingValue;
    actualProductLength.value = productLengthMeasuredValue;
    statePV.value = statePVValue;
    duringTime.value = duringTimeValue;
    holdingTime.value = holdingTimeValue;
    rebackTime.value = rebackTimeValue;
    elapsedTime.value = productEntryToVacuumZoneTimeValue;
    vResetButton.value = resetButtonValue;
    vALarmResetButton.value = aLarmResetButtonValue;
    pcbDistance.value = pcbDistanceValue;
    risingEdgeDelay.value = risingEdgeDelayValue;
    fallingEdgeDelay.value = fallingEdgeDelaValue;
    inletGateSwitch.value = enterPortValue;
    outletGateSwitch.value = speakValue;
    pcbCounter.value = pCBCounterValue;
    vacuumPumpManualSwitch.value = pumpManulSwitchValue;
    vacuumValveSwitch.value = vacuumValueSwitchValue;
    middleVacuumValue.value = Number(vacuumStatePVValue).toFixed(2);
    middleReturnPressure.value = rebackTimeValue;
    iNSensorStateShow.value = iNSensorStateValue;
    outSensorStateShow.value = outSensorStateValue;
    inDoorStateShow.value = inDoorStateValue;
    outDoorStateShow.value = outDoorStateValue;
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
function clickOn() {
  if (coverShowModal.value === true) {
    coverShowModal.value = false;
  } else {
    coverShowModal.value = true;
  }
}
function onChange(e) {
  finalSettingProductLength.value = e;
}
async function closedHandler() {
  const Param = {
    result: finalSettingProductLength.value,
    dataType: 'float',
    name: 'Application.HMI_VacuumConfig.h_rProductLengthSetting'
  };
  const arr = [];
  arr.push(Param);
  const success = await saveJson(arr);
  console.log(success);
}
function clickResetButtom() {
  dialog.warning({
    title: '警告',
    content: '你确定真空归零吗？',
    positiveText: '确定',
    negativeText: '取消',
    onPositiveClick: () => {
      message.success('已重置');
      const Param = {
        result: true,
        dataType: 'boolean',
        name: 'Application.HMI_VacuumConfig.h_xVacuumResetButton'
      };
      const arr = [];
      arr.push(Param);
      saveJson(arr);
    },
    onNegativeClick: () => {
      message.error('已取消');
    }
  });
}
function chickResetAlarm() {
  dialog.warning({
    title: '警告',
    content: '你确定一般故障复位吗？',
    positiveText: '确定',
    negativeText: '取消',
    onPositiveClick: () => {
      message.success('已重置');
      const Param = {
        result: true,
        dataType: 'boolean',
        name: 'Application.HMI_VacuumConfig.h_xNormalALarmResetButton'
      };
      const arr = [];
      arr.push(Param);
      saveJson(arr);
    },
    onNegativeClick: () => {
      message.error('已取消');
    }
  });
}
async function changeInletGate() {
  const Param = {
    result: inletGateSwitch.value,
    dataType: 'boolean',
    name: 'Application.HMI_VacuumConfig.h_xCylinderSwitch[0]'
  };
  const arr = [];
  arr.push(Param);
  const success = await saveJson(arr);
  console.log(success);
}
async function changeOutletGate() {
  const Param = {
    result: outletGateSwitch.value,
    dataType: 'boolean',
    name: 'Application.HMI_VacuumConfig.h_xCylinderSwitch[1]'
  };
  const arr = [];
  arr.push(Param);
  const success = await saveJson(arr);
  console.log(success);
}
async function changeVacuumPumpManual() {
  const Param = {
    result: vacuumPumpManualSwitch.value,
    dataType: 'boolean',
    name: 'Application.HMI_VacuumConfig.h_xVacuumPumpManulSwitch'
  };
  const arr = [];
  arr.push(Param);
  const success = await saveJson(arr);
  console.log(success);
}
async function changeVacuumValve() {
  const Param = {
    result: vacuumValveSwitch.value,
    dataType: 'boolean',
    name: 'Application.HMI_VacuumConfig.h_xVacuumValueSwitch'
  };
  const arr = [];
  arr.push(Param);
  const success = await saveJson(arr);
  console.log(success);
}
</script>

<style scoped>
.button-style {
  width: 105px;
}
.tiny-button {
  width: 50px;
}
</style>
