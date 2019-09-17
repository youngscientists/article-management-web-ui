import Notifications from './Notifications.vue';
import { PluginObject } from 'vue';

export interface Notification {
  message: string;
  title?: string;
  icon?: string;
  verticalAlign?: string;
  horizontalAlign?: string;
  type?: 'error' | 'info' | 'warning' | 'success';
  timeout?: number;
  timestamp?: Date;
  component?: any;
  showClose?: boolean;
  closeOnClick?: boolean;
  clickHandler?: Function;
}
export class NotificationStore {
  public state = []; // here the notifications will be added
  public settings = {
    overlap: false,
    verticalAlign: 'top',
    horizontalAlign: 'center',
    type: 'info',
    timeout: 5000,
    closeOnClick: true,
    showClose: true
  };

  constructor(options = {}) {
    this.setOptions(options);
  }

  public setOptions(options) {
    this.settings = Object.assign(this.settings, options);
  }
  public removeNotification(timestamp: Date) {
    const indexToDelete = this.state.findIndex(n => n.timestamp === timestamp);
    if (indexToDelete !== -1) {
      this.state.splice(indexToDelete, 1);
    }
  }
  public addNotification(notification: any) {
    if (typeof notification === 'string' || notification instanceof String) {
      notification = { message: notification };
    }
    notification.timestamp = new Date();
    notification.timestamp.setMilliseconds(notification.timestamp.getMilliseconds() + this.state.length);
    notification = Object.assign({}, this.settings, notification);
    this.state.push(notification);
  }
  public notify(notification: Notification | string) {
    if (Array.isArray(notification)) {
      notification.forEach(notificationInstance => {
        this.addNotification(notificationInstance);
      });
    } else {
      this.addNotification(notification);
    }
  }
}

const NotificationsPlugin: PluginObject<NotificationStore> = {
  install(Vue, options) {
    let app = new Vue({
      data: {
        notificationStore: new NotificationStore(options)
      },
      methods: {
        notify(notification) {
          this.notificationStore.notify(notification);
        }
      }
    });
    Vue.prototype.$notify = app.notify;
    Vue.prototype.$notifications = app.notificationStore;
    Vue.component('Notifications', Notifications);
  }
};

export default NotificationsPlugin;
