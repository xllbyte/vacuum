<template>
  <div>
    <n-card :bordered="false" class="rounded-16px shadow-sm">
      <div class="w-full h-180px">
        <n-grid :x-gap="12" :y-gap="8" :cols="4">
          <n-grid-item>
            <div class="flex-col-center p-3px">
              <p class="py-8px text-20px">传感器</p>
            </div>
          </n-grid-item>
          <n-grid-item>
            <div class="flex-col-center p-3px">
              <p class="py-8px text-20px">PCB间距</p>
            </div>
            <div style="text-align: center">
              <n-button type="primary">{{ pcbDistance }}</n-button>
              <span class="py-26px text-14px">cm</span>
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
              <p class="py-8px text-20px">上升沿</p>
            </div>
            <div style="text-align: center">
              <n-button type="primary">{{ risingEdgeDelay }}</n-button>
              <span class="py-26px text-14px">sec</span>
            </div>
          </n-grid-item>
          <n-grid-item>
            <div class="flex-col-center p-3px">
              <p class="py-8px text-20px">下降沿</p>
            </div>
            <div style="text-align: center">
              <n-button type="primary">{{ fallingEdgeDelay }}</n-button>
              <span class="py-26px text-14px">sec</span>
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
    </n-card>
    <n-card :bordered="false" class="rounded-16px shadow-sm" style="margin-top: 20px">
      <div class="w-full h-160px">
        <n-grid :item-responsive="true" :x-gap="16">
          <n-grid-item span="0:12 640:12 1024:12">
            <div class="p-5px">
              <span class="py-20px text-16px">SMEMA信号控制</span>
              <span class="py-20px text-16px" style="margin-left: 10px">手动要板</span>
              <n-switch v-model:value="active" :round="false" size="medium" class="p-15px" />
              <span class="py-20px text-16px">禁止进板</span>
              <n-switch v-model:value="active1" :round="false" size="medium" class="p-15px" />
            </div>
            <div class="p-5px">
              <n-button color="#F3EEEEFF" size="large">
                <template #icon>
                  <icon-clarity-success-standard-line class="text-24px text-green" />
                </template>
                进料(n)不忙
              </n-button>
            </div>
            <div class="p-5px">
              <span class="py-26px text-14px p-5px">出料口卡住持续时间</span>
              <n-button type="tertiary" class="p-15px">65</n-button>
              <span class="py-26px text-14px p-5px">sec</span>
            </div>
          </n-grid-item>
          <n-grid-item span="0:12 640:12 1024:12">
            <div class="flex-col-center p-3px">
              <n-button color="#F3EEEEFF" size="large" class="button-style">
                <template #icon>
                  <icon-akar-icons-sound-on class="text-24px text-green" />
                </template>
                声音
              </n-button>
            </div>
            <div class="flex-col-center p-5px">
              <n-button type="tertiary" class="p-15px button-style">后道出料可用</n-button>
            </div>
            <div class="flex-col-center p-5px">
              <n-button type="tertiary" class="p-15px button-style">OK</n-button>
            </div>
          </n-grid-item>
        </n-grid>
      </div>
    </n-card>
    <n-card :bordered="false" class="rounded-16px shadow-sm" style="margin-top: 20px">
      <div class="w-full h-160px">
        <n-grid :x-gap="12" :y-gap="8" :cols="3">
          <n-grid-item>
            <div class="flex-col-center p-3px">
              <p class="py-8px text-20px">传感器</p>
            </div>
          </n-grid-item>
          <n-grid-item>
            <div class="flex-col-center p-3px">
              <span class="py-10px text-18px">进板传感器</span>
              <n-button type="success" class="py-10px text-18px">重置</n-button>
            </div>
            <div style="text-align: center" class="py-12px">
              <span class="text-18px">处理Inlet</span>
            </div>
          </n-grid-item>
          <n-grid-item>
            <div class="flex-col-center p-3px">
              <span class="py-10px text-18px">重置出板区</span>
              <n-button type="success" class="py-10px text-18px">重置</n-button>
            </div>
            <div style="text-align: center" class="py-12px">
              <span class="text-18px">处理Outlet</span>
            </div>
          </n-grid-item>
        </n-grid>
      </div>
    </n-card>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { closeSocket, createSocket, guid } from '@/service/api/websocket';
import { keepGetting } from '@/service/api/home';
const active = ref(true);
const active1 = ref(true);
const pcbDistance = ref(0);
const risingEdgeDelay = ref(0);
const fallingEdgeDelay = ref(0);
const tagName = 'productNavigation';
const uuid = ref('');
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
      'Application.HMI_TrackConfig.h_rPCB_SeparationDistance': pcbDistanceValue,
      'Application.HMI_TrackConfig.h_rInSensorRisingEdgeDelay': risingEdgeDelayValue,
      'Application.HMI_TrackConfig.h_rInSensorFallingEdgeDelay': fallingEdgeDelaValue,
      'Application.HMI_TrackConfig.h_xINSensorState': iNSensorStateValue,
      'Application.HMI_TrackConfig.h_xOutSensorState': outSensorStateValue,
      'Application.HMI_TrackConfig.h_xInDoorState': inDoorStateValue,
      'Application.HMI_TrackConfig.h_xOutDoorState': outDoorStateValue
    } = data.result;
    pcbDistance.value = pcbDistanceValue;
    risingEdgeDelay.value = risingEdgeDelayValue;
    fallingEdgeDelay.value = fallingEdgeDelaValue;
    iNSensorStateShow.value = iNSensorStateValue;
    outSensorStateShow.value = outSensorStateValue;
    inDoorStateShow.value = inDoorStateValue;
    outDoorStateShow.value = outDoorStateValue;
  }
}
</script>

<style scoped>
.button-style {
  width: 105px;
}
</style>
