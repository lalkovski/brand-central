import { Store } from 'react-notifications-component'

export enum NOTIFICATION_TYPE {
  SUCCESS = 'success',
  DANGER = 'danger',
  INFO = 'info',
  DEFAULT = 'default',
  WARNING = 'warning',
}

export enum NOTIFICATION_CONTAINER {
  BOTTOM_LEFT = 'bottom-left',
  BOTTOM_RIGHT = 'bottom-right',
  BOTTOM_CENTER = 'bottom-center',
  TOP_LEFT = 'top-left',
  TOP_RIGHT = 'top-right',
  TOP_CENTER = 'top-center',
  CENTER = 'center',
}

export enum NOTIFICATION_INSERTION {
  TOP = 'top',
  BOTTOM = 'bottom',
}

interface IDismiss {
  duration: number
  onScreen?: boolean
  click?: boolean
  touch?: boolean
  showIcon?: boolean
  pauseOnHover?: boolean
}

interface INotificationConfig {
  id?: string
  type?: NOTIFICATION_TYPE
  insert?: NOTIFICATION_INSERTION
  container: NOTIFICATION_CONTAINER
  onRemoval?: (id: string, removedBy: any) => void
  animationIn?: string[]
  animationOut?: string[]
  width?: number
  dismiss?: IDismiss
}

const defaultConfig: INotificationConfig = {
  insert: NOTIFICATION_INSERTION.TOP,
  container: NOTIFICATION_CONTAINER.TOP_RIGHT,
  dismiss: {
    duration: 3000,
    onScreen: true,
    pauseOnHover: true,
  },
}

type NotificationContent =
  | React.ComponentClass<any, any>
  | React.FunctionComponent<any>
  | React.ReactElement

export type NotificationTitleMessage = string | React.ReactNode | React.FunctionComponent

class NotificationManager {
  static success(
    message: NotificationTitleMessage,
    title?: NotificationTitleMessage,
    content?: NotificationContent,
    config: INotificationConfig = {
      type: NOTIFICATION_TYPE.SUCCESS,
      ...defaultConfig,
    }
  ) {
    Store.addNotification({
      title: title || `Success`,
      message,
      content,
      ...config,
    })
  }

  static error(
    message: NotificationTitleMessage,
    title?: NotificationTitleMessage,
    config: INotificationConfig = {
      type: NOTIFICATION_TYPE.DANGER,
      ...defaultConfig,
    }
  ) {
    Store.addNotification({
      title: title || `Error`,
      message,
      ...config,
    })
  }

  static info(
    message: NotificationTitleMessage,
    title?: NotificationTitleMessage,
    config: INotificationConfig = {
      type: NOTIFICATION_TYPE.INFO,
      ...defaultConfig,
    }
  ) {
    Store.addNotification({
      title: title || `Info`,
      message,
      ...config,
    })
  }

  static default(
    message: NotificationTitleMessage,
    title?: NotificationTitleMessage,
    config: INotificationConfig = {
      type: NOTIFICATION_TYPE.DEFAULT,
      ...defaultConfig,
    }
  ) {
    Store.addNotification({
      title: title || `Notification`,
      message,
      ...config,
    })
  }

  static warning(
    message: NotificationTitleMessage,
    title?: NotificationTitleMessage,
    config: INotificationConfig = {
      type: NOTIFICATION_TYPE.WARNING,
      ...defaultConfig,
    }
  ) {
    Store.addNotification({
      title: title || `Warning`,
      message,
      ...config,
    })
  }

  static removeNotification(id: string) {
    Store.removeNotification(id)
  }
}

export { NotificationManager }
