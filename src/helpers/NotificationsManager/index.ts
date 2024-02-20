import { Flip, ToastPosition, ToastTransition, TypeOptions, toast } from 'react-toastify'

interface INotificationConfig {
  position?: ToastPosition
  autoClose?: number
  hideProgressBar?: boolean
  closeOnClick?: boolean
  pauseOnHover?: boolean
  draggable?: boolean
  progress?: string | number | undefined
  theme?: 'light' | 'dark' | 'colored'
  transition?: ToastTransition
  type?: TypeOptions
}

type TNotificationTitleMessage = string | React.ReactNode | React.FunctionComponent

const defaultConfig: INotificationConfig = {
  position: 'top-right',
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'light',
  transition: Flip,
}

class NotificationManager {
  static success(
    message: TNotificationTitleMessage,
    config: INotificationConfig = {
      type: 'success',
      ...defaultConfig,
    }
  ) {
    toast.success(message, config)
  }
  static error(
    message: TNotificationTitleMessage,
    config: INotificationConfig = {
      type: 'error',
      ...defaultConfig,
    }
  ) {
    toast.error(message, config)
  }
  static info(
    message: TNotificationTitleMessage,
    config: INotificationConfig = {
      type: 'info',
      ...defaultConfig,
    }
  ) {
    toast.info(message, config)
  }
  static default(
    message: TNotificationTitleMessage,
    config: INotificationConfig = {
      type: 'default',
      ...defaultConfig,
    }
  ) {
    toast(message, config)
  }
  static warning(
    message: TNotificationTitleMessage,
    config: INotificationConfig = {
      type: 'warning',
      ...defaultConfig,
    }
  ) {
    toast.warning(message, config)
  }

  static removeNotification(id: number) {
    toast.dismiss(id)
  }
}

export { NotificationManager }
