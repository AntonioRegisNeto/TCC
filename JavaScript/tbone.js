const prices = [94.48, 20, 30];
document.querySelectorAll('.loja').forEach((loja, index) => {

  loja.addEventListener('click', () => {
    document.getElementById('sell').innerText = `R$${prices[index]}`;
  });

});
