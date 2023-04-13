<template>
  <div>
    <div>
      <n-grid :x-gap="12" :y-gap="8" :cols="3">
        <n-grid-item>
          <n-card :bordered="false" class="rounded-16px shadow-sm">
            <div class="w-full">
              <div style="padding-left: 20px; padding-top: 5px; padding-bottom: 3px">
                <div>
                  <n-switch v-model:value="active" size="large" />
                  <span class="py-1px text-16px" style="margin-left: 5px">无泄漏错误</span>
                </div>
              </div>
              <div style="padding-left: 20px; padding-top: 5px; padding-bottom: 3px">
                <div>
                  <n-switch v-model:value="active" size="large" />
                  <span class="py-1px text-16px" style="margin-left: 5px">3=Vac Fahrt mit Haube offen</span>
                </div>
              </div>
              <div class="flex-col-center p-3px">
                <p class="py-8px text-26px">Module allocation</p>
              </div>
              <div style="padding-left: 20px; padding-top: 5px; padding-bottom: 3px">
                <div>
                  <n-grid :x-gap="12" :y-gap="8" :cols="2">
                    <n-grid-item>
                      <n-select v-model:value="cpw1Value" size="medium" :options="options" />
                    </n-grid-item>
                    <n-grid-item>
                      <span class="py-3px text-16px" style="margin-left: 5px">CPW 021(1)</span>
                    </n-grid-item>
                  </n-grid>
                </div>
              </div>
              <div style="padding-left: 20px; padding-top: 5px; padding-bottom: 3px">
                <div>
                  <n-grid :x-gap="12" :y-gap="8" :cols="2">
                    <n-grid-item>
                      <n-select v-model:value="cpw2Value" size="medium" :options="options" />
                    </n-grid-item>
                    <n-grid-item>
                      <span class="py-3px text-16px" style="margin-left: 5px">CPW 021(1)</span>
                    </n-grid-item>
                  </n-grid>
                </div>
              </div>
              <div style="padding-left: 20px; padding-top: 5px; padding-bottom: 3px">
                <div>
                  <n-grid :x-gap="12" :y-gap="8" :cols="2">
                    <n-grid-item>
                      <span class="py-3px text-26px" style="margin-left: 25px">压力</span>
                    </n-grid-item>
                    <n-grid-item>
                      <n-select v-model:value="pressureValue" size="medium" :options="pressureOptions" />
                    </n-grid-item>
                  </n-grid>
                </div>
              </div>
              <div style="padding-left: 20px; padding-top: 5px; padding-bottom: 3px">
                <div>
                  <n-switch v-model:value="active" size="large" />
                  <span class="py-1px text-13px" style="margin-left: 5px">VaccumKammer1.GraphDruckVorhanden</span>
                </div>
              </div>
              <div style="padding-left: 20px; padding-top: 5px; padding-bottom: 3px">
                <div>
                  <n-switch v-model:value="active" size="large" />
                  <span class="py-1px text-13px" style="margin-left: 5px">TB24.数字输出开启</span>
                </div>
              </div>
              <div style="padding-left: 20px; padding-top: 5px; padding-bottom: 3px">
                <div>
                  <span class="py-1px text-1px">VaccumKammer1.CounterBremse</span>
                  <n-button type="primary" size="tiny">208814</n-button>
                  <span class="py-1px text-1px">VaccumKammer</span>
                </div>
              </div>
              <div style="padding-left: 20px; padding-top: 5px; padding-bottom: 3px">
                <div>
                  <span class="py-1px text-1px">VaccumKammer1.CounterDeckel</span>
                  <n-button type="primary" size="tiny">107656</n-button>
                  <span class="py-1px text-1px">VaccumKammer</span>
                </div>
              </div>
              <div style="padding-left: 20px; padding-top: 5px; padding-bottom: 3px">
                <div>
                  <n-switch v-model:value="active" size="large" />
                  <span class="py-1px text-13px" style="margin-left: 5px">Dauerlauf Dichtigkeit</span>
                </div>
              </div>
              <div style="padding-left: 20px; padding-top: 5px; padding-bottom: 3px">
                <div>
                  <span class="py-1px text-1px">mgebungsdruck</span>
                  <n-button type="primary" size="tiny" style="margin-left: 50px">100</n-button>
                  <span class="py-1px text-1px" style="margin-left: 50px">Vaccun</span>
                </div>
              </div>
              <div style="padding-left: 20px; padding-top: 5px; padding-bottom: 3px">
                <div>
                  <span class="py-1px text-13px">Luftventil offen ohne Vakuumbetrieb</span>
                  <n-switch v-model:value="active" size="large" style="margin-left: 10px" />
                </div>
              </div>
              <div style="padding-left: 20px; padding-top: 5px; padding-bottom: 3px">
                <div>
                  <span class="py-10px text-10px">AKT位置甲板</span>
                  <n-button type="tertiary" size="medium" style="margin-left: 50px">0</n-button>
                  <span class="py-10px text-10px" style="margin-left: 5px">mm</span>
                </div>
              </div>
              <div style="padding-left: 20px; padding-top: 5px; padding-bottom: 3px">
                <div>
                  <n-switch v-model:value="active" size="large" />
                  <span class="py-1px text-13px" style="margin-left: 5px"
                    >VaccumKammer1.SensorinKammerVorhanden Last Reset</span
                  >
                </div>
              </div>
            </div>
          </n-card>
        </n-grid-item>
        <n-grid-item>
          <n-card :bordered="false" class="rounded-16px shadow-sm">
            <div class="w-full">
              <div class="flex-col-center p-3px">
                <p class="py-8px text-26px">安装程序包测试</p>
              </div>
              <div style="padding-top: 5px; padding-bottom: 3px">
                <div>
                  <span class="py-26px text-12px">标称值T真空</span>
                  <n-button type="primary" size="small" style="margin-left: 20px">10</n-button>
                  <span class="py-26px text-12px" style="margin-left: 10px">sec</span>
                </div>
              </div>
              <div style="padding-top: 5px; padding-bottom: 3px">
                <div>
                  <span class="py-26px text-12px">标称值压力泄漏试验</span>
                  <n-button type="primary" size="small" style="margin-left: 20px">10</n-button>
                  <span class="py-26px text-12px" style="margin-left: 10px">mbar</span>
                </div>
              </div>
              <div style="padding-top: 5px; padding-bottom: 3px">
                <div>
                  <span class="py-26px text-12px">Hold pressure leackage test</span>
                  <n-button type="primary" size="small" style="margin-left: 20px">10</n-button>
                  <span class="py-26px text-12px" style="margin-left: 10px">秒</span>
                </div>
              </div>
              <div style="padding-top: 5px; padding-bottom: 3px">
                <div>
                  <span class="py-26px text-12px">允许公差保持</span>
                  <n-button type="primary" size="small" style="margin-left: 20px">10</n-button>
                  <span class="py-26px text-12px" style="margin-left: 10px">mbar</span>
                </div>
              </div>
              <div style="padding-top: 5px; padding-bottom: 3px">
                <div>
                  <span class="py-26px text-12px">Nominal value Tventilation</span>
                  <n-button type="primary" size="small" style="margin-left: 20px">10</n-button>
                  <span class="py-26px text-12px" style="margin-left: 10px">秒</span>
                </div>
              </div>
              <div style="padding-top: 5px; padding-bottom: 3px">
                <div>
                  <span class="py-26px text-12px">真空模式下允许的Faotor公差</span>
                  <n-button type="primary" size="small" style="margin-left: 20px">10.0</n-button>
                  <span class="py-26px text-12px" style="margin-left: 10px">Factor</span>
                </div>
              </div>
              <div style="padding-top: 5px; padding-bottom: 3px">
                <div>
                  <n-grid :item-responsive="true" :x-gap="16">
                    <n-grid-item span="0:16 640:16 1024:16">
                      <div>
                        <span class="py-26px text-12px">Refenzfahrt TVakuum</span>
                        <n-button type="primary" size="small" style="margin-left: 20px">0.0</n-button>
                        <span class="py-26px text-12px" style="margin-left: 10px">sec</span>
                      </div>
                      <div class="p-3px">
                        <span class="py-26px text-12px">Refenzfahrt TBeluften</span>
                        <n-button type="primary" size="small" style="margin-left: 20px">0.0</n-button>
                        <span class="py-26px text-12px" style="margin-left: 10px">sec</span>
                      </div>
                    </n-grid-item>
                    <n-grid-item span="0:8 640:8 1024:8">
                      <div>
                        <n-button type="success" size="small" style="margin-left: 20px; margin-top: 20px"
                          >重置</n-button
                        >
                      </div>
                    </n-grid-item>
                  </n-grid>
                </div>
              </div>
              <div style="padding-top: 5px; padding-bottom: 3px">
                <div>
                  <span class="py-16px text-1px"
                    >Formel Druckanzeige=(Spannung-Berechnungswet_a)*Berechnungswert_Berechnungswert_c</span
                  >
                </div>
              </div>
              <div class="flex-col-center p-3px">
                <span class="py-8px text-10px">VaccumKammer1.BerechungDruck_a</span>
              </div>
              <div class="flex-col-center p-3px">
                <n-button type="primary" size="small" style="margin-left: 20px">2040</n-button>
              </div>
              <div class="flex-col-center p-3px">
                <span class="py-8px text-10px">VaccumKammer1.BerechungDruck_b</span>
              </div>
              <div class="flex-col-center p-0px">
                <n-button type="primary" size="small" style="margin-left: 20px">1000</n-button>
              </div>
              <div class="flex-col-center p-3px">
                <span class="py-8px text-10px">VaccumKammer1.BerechungDruck_c</span>
              </div>
              <div class="flex-col-center p-0px">
                <n-button type="primary" size="small" style="margin-left: 20px">8130</n-button>
              </div>
            </div>
          </n-card>
        </n-grid-item>
        <n-grid-item>
          <n-card :bordered="false" class="rounded-16px shadow-sm">
            <div class="w-full">
              <div style="padding-top: 5px; padding-bottom: 3px">
                <div>
                  <n-grid :item-responsive="true" :x-gap="16">
                    <n-grid-item span="0:16 640:16 1024:16">
                      <div style="text-align: right">
                        <span class="py-26px text-12px">Verzogerung zum</span>
                      </div>
                      <div class="p-3px" style="text-align: right">
                        <span class="py-26px text-12px">Wiedereinschaiten der</span>
                      </div>
                      <div class="p-3px" style="text-align: right">
                        <span class="py-26px text-12px">Pumpe nach Pumpe AUS</span>
                      </div>
                    </n-grid-item>
                    <n-grid-item span="0:8 640:8 1024:8">
                      <div>
                        <n-button type="primary" size="large" style="margin-left: 20px; margin-top: 20px"
                          >重置</n-button
                        >
                        <span class="py-26px text-12px">mm</span>
                      </div>
                    </n-grid-item>
                  </n-grid>
                </div>
                <div style="padding-top: 5px; padding-bottom: 3px">
                  <div style="text-align: right">
                    <span class="py-26px text-12px">Mindeslange Produkt</span>
                    <n-button type="primary" size="small" style="margin-left: 20px">100</n-button>
                    <span class="py-26px text-12px" style="margin-left: 10px">mm</span>
                  </div>
                </div>
                <div style="padding-top: 5px; padding-bottom: 3px">
                  <div style="text-align: right">
                    <span class="py-26px text-12px">Lange Max</span>
                    <n-button type="primary" size="small" style="margin-left: 20px">320</n-button>
                    <span class="py-26px text-12px" style="margin-left: 10px">mm</span>
                  </div>
                </div>
                <div style="padding-top: 5px; padding-bottom: 3px">
                  <div style="text-align: right">
                    <span class="py-26px text-12px">设定高度</span>
                    <n-button type="primary" size="small" style="margin-left: 20px">32</n-button>
                    <span class="py-26px text-12px" style="margin-left: 10px">mm</span>
                  </div>
                </div>
                <div style="padding-top: 5px; padding-bottom: 3px">
                  <div style="text-align: right">
                    <span class="py-26px text-12px">Durchlaufhoehe KammerUnten</span>
                    <n-button type="primary" size="small" style="margin-left: 20px">33</n-button>
                    <span class="py-26px text-12px" style="margin-left: 10px">mm</span>
                  </div>
                </div>
                <div style="padding-top: 5px; padding-bottom: 3px">
                  <div style="text-align: right">
                    <span class="py-26px text-12px">Abstand Sensor Durchlauf-Kammer</span>
                    <n-button type="primary" size="small" style="margin-left: 20px">35</n-button>
                    <span class="py-26px text-12px" style="margin-left: 10px">mm</span>
                  </div>
                </div>
                <div style="padding-top: 5px; padding-bottom: 3px">
                  <div style="text-align: right">
                    <span class="py-26px text-12px">Abstand Sensor Durchlauf-Auslaufb</span>
                    <n-button type="primary" size="small" style="margin-left: 20px">420</n-button>
                    <span class="py-26px text-12px" style="margin-left: 10px">mm</span>
                  </div>
                </div>
                <div style="padding-top: 5px; padding-bottom: 3px">
                  <div style="text-align: right">
                    <span class="py-26px text-12px">Abstand Sensor Durchlauf-Kammer</span>
                    <n-button type="primary" size="small" style="margin-left: 20px">25</n-button>
                    <span class="py-26px text-12px" style="margin-left: 10px">sec</span>
                  </div>
                </div>
                <div style="padding-top: 5px; padding-bottom: 3px">
                  <div style="text-align: right">
                    <span class="py-26px text-12px">Zeit Fahrt Kammerdeckel</span>
                    <n-button type="primary" size="small" style="margin-left: 20px">5</n-button>
                    <span class="py-26px text-12px" style="margin-left: 10px">sec</span>
                  </div>
                </div>
                <div style="padding-top: 5px; padding-bottom: 3px">
                  <div style="text-align: right">
                    <span class="py-26px text-12px">Zuschlag fur LP-Abstand(sonstige Zeiten)</span>
                    <n-button type="primary" size="small" style="margin-left: 20px">5</n-button>
                    <span class="py-26px text-12px" style="margin-left: 10px">sec</span>
                  </div>
                </div>
                <div style="padding-top: 5px; padding-bottom: 3px">
                  <div style="text-align: right">
                    <span class="py-20px text-10px">Zwischenbeluften Luft imN2 Betrieb bevor Haubeauf</span>
                    <n-button type="primary" size="small" style="margin-left: 20px">1.0</n-button>
                    <span class="py-26px text-12px" style="margin-left: 10px">sec</span>
                  </div>
                </div>
                <div style="padding-top: 5px; padding-bottom: 3px">
                  <div style="text-align: right">
                    <span class="py-20px text-10px">达到环境压力下限值</span>
                    <n-button type="primary" size="small" style="margin-left: 20px">50</n-button>
                    <span class="py-26px text-12px" style="margin-left: 10px">mbar</span>
                  </div>
                </div>
              </div>
            </div>
          </n-card>
        </n-grid-item>
      </n-grid>
    </div>
    <div>
      <div style="padding-left: 20px; padding-top: 5px; padding-bottom: 3px">
        <div>
          <n-grid :x-gap="12" :y-gap="8" :cols="3">
            <n-grid-item>
              <n-switch v-model:value="active" size="large" />
              <span class="py-1px text-16px" style="margin-left: 5px">Dauerlaul2.Aktiv</span>
            </n-grid-item>
            <n-grid-item>
              <span class="py-1px text-16px" style="margin-left: 5px">Schaltzeit</span>
              <n-button type="primary" size="small" style="margin-left: 20px">15</n-button>
              <span class="py-1px text-16px" style="margin-left: 5px">sec</span>
            </n-grid-item>
            <n-grid-item>
              <span class="py-3px text-16px" style="margin-left: 5px">Dauerlauf2.LimitCounter</span>
              <n-button type="primary" size="small" style="margin-left: 20px">0</n-button>
              <span class="py-3px text-16px" style="margin-left: 5px">Dauerlauf2</span>
            </n-grid-item>
          </n-grid>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const active = ref(true);
const cpw1Value = ref('OFF');
const cpw2Value = ref('Vacuum');
const pressureValue = ref('CIO 011(3)');
const options = [
  {
    label: 'OFF',
    value: 'OFF'
  },
  {
    label: 'Nitrogen',
    value: 'Nitrogen'
  },
  {
    label: 'Vacuum',
    value: 'Vacuum'
  },
  {
    label: 'Nitrogen(2)',
    value: 'Nitrogen(2)'
  }
];
const pressureOptions = [
  {
    label: 'OFF',
    value: 'OFF'
  },
  {
    label: 'CIO 011(1)',
    value: 'CIO 011(1)'
  },
  {
    label: 'CIO 011(2)',
    value: 'CIO 011(2)'
  },
  {
    label: 'CIO 011(3)',
    value: 'CIO 011(3)'
  },
  {
    label: 'CIO 011(4)',
    value: 'CIO 011(4)'
  },
  {
    label: 'Error',
    value: 'Error'
  }
];
</script>

<style scoped></style>
