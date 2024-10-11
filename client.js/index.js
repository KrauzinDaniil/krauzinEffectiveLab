const publickKey =
  'BFO5iqN259yigGJtLCzjb8xFCJBgrPLFtBrtaxzXKEa0l5UYx8qL1ORplM3471lzS9fQQAxXtoXswJYPyxoT0ws';


const registerWorker = async () => {
  const worker = await navigator.serviceWorker.register('../client.js/sw.js');
  const subscription = await worker.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: publickKey,
  });

  await fetch('http://localhost:3002/subscribe', {
    method: 'POST',
    body: JSON.stringify(subscription),
    headers: {
      'content-type': 'application/json',
    },
  });
};

const init = async () => {
  if ('serviceWorker' in navigator && 'PushManager' in window) {
    navigator.serviceWorker.addEventListener('message', (event) => {
      console.log(event);
      setTimeout(() => {
      }, 5000);
    });

    try {
      await registerWorker();
    } catch (error) {
      console.error(error);
    }
  } else {
    console.log('Push Notifications are not supported');
  }
};

init();