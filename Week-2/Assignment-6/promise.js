function delayedResult(n1, n2, delayTime) {
  const sumPromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(n1 + n2), delayTime);
  });
  return sumPromise;
}

delayedResult(4, 5, 3000).then(console.log);
// 9 (4+5) will be shown in the console after 3 seconds
delayedResult(-5, 10, 2000).then(console.log);
// 5 (-5+10) will be shown in the console after 2 seconds
