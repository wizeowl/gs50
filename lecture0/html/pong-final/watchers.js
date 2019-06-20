const watchList = {};

const isDown = key => watchList[key];

const watch = (keys) => {
  keys.forEach(key => {
    watchList[key] = false;
  });
};

const unwatch = (keys) => {
  keys.forEach(key => {
    delete watchList[key];
  });
};

document.onkeydown = ({ key }) => {
  if (watchList.hasOwnProperty(key)) {
    watchList[key] = true;
  }
};

document.onkeyup = ({ key }) => {
  if (watchList.hasOwnProperty(key)) {
    watchList[key] = false;
  }
};
