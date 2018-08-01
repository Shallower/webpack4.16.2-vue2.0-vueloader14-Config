import Validator from './validator';
import Utils from './utils';
import EventBus from './event.bus';

export { Validator, Utils, EventBus };

const Plugins = [Validator, Utils, EventBus];

Plugins.map(plugin => {
  Vue.use(plugin);
});

export default Vue;
