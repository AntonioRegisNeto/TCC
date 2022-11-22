const prices = [10, 20, 30, 60];
document.querySelectorAll('button').forEach((button, index) => {

  button.addEventListener('click', () => {
    document.getElementById('sell').innerText = `${prices[index]}$`;
  });

});