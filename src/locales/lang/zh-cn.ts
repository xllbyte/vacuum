import type { LocaleMessages } from 'vue-i18n';

const locale: LocaleMessages<I18nType.Schema> = {
  message: {
    system: {
      title: '真空回流炉'
    },
    routes: {
      dashboard: {
        dashboard: '仪表盘',
        analysis: '分析页',
        workbench: '工作台'
      },
      about: {
        about: '关于'
      }
    }
  }
};

export default locale;
