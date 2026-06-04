function simulateTask() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const hasError = false;

      if (hasError) {
        reject("Something went wrong!");
      } else {
        resolve("Task Completed!");
      }
    }, 2000);
  });
}

simulateTask()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
