import moment from 'moment';


export const formatDateTime = (dateTimeString:string): string => {
  const date = moment(dateTimeString);
    return date.format('YYYY-MM-DD :hh:mm a');
}



export const taskTimeDue = ( givenTime:string): boolean => {
  const givenMoment = moment(givenTime, 'YYYY-MM-DD HH:mm:ss');
  const currentMoment = moment();

  if (currentMoment.isBefore(givenMoment)) {
      return false;
  } else {
      return true;
  } 
};


interface NotificationOptionsExtended extends NotificationOptions {
  url?: string;
}
interface ShowNotificationParams {
  title: string;
  options: NotificationOptionsExtended;
}
export const showNotification = ({ title, options }: ShowNotificationParams) => {
  if (!("Notification" in window)) {
    console.error("This browser does not support desktop notifications.");
    return;
  }

  const createNotification = () => {
    const notification = new Notification(title, options);
    if (options.url) {
      notification.onclick = () => {
        window.open(options.url, '_blank');
      };
    }
  };

  if (Notification.permission === "granted") {
    createNotification();
  } else if (Notification.permission !== "denied") {
    Notification.requestPermission().then(permission => {
      if (permission === "granted") {
        createNotification();
      }
    });
  }
};
