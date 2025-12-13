import notifee from '@notifee/react-native';

const ANDROID_HACKER_NEWS_ID = 'androidHackerNewsId';
const ANDROID_HACKER_NEWS_NAME = 'Hacker News';

export const sendHackerNewsNotification = async (
  title: string,
  body: string,
) => {
  try {
    const channelId = await notifee.createChannel({
      id: ANDROID_HACKER_NEWS_ID,
      name: ANDROID_HACKER_NEWS_NAME,
    });

    await notifee.displayNotification({
      title: title,
      body: body,
      android: {
        channelId,
        //   pressAction: {
        //     id: 'default',
        //   },
      },
    });
  } catch (error) {
    console.log(error);
  }
};
