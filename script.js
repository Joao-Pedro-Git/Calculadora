const screen = document.getElementById('screen');
const keys = document.querySelectorAll('button');

keys.forEach(key => {
  key.addEventListener('click', () => {
    const keyValue = key.value;

    if (keyValue === 'all-clear') {
      screen.value = '';
    } else if (keyValue === '=') {
      screen.value = eval(screen.value);
    } else {
      screen.value += keyValue;
    }
  });
});
