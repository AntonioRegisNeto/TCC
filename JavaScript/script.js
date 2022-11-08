
                                  /*  Seach Button  */

window.onload = () => {
  const searchEl = document.querySelector('.search-input');
  const x = document.querySelectorAll('.card-content h3');

  function search(e){
    x.forEach((item,index) => {
      if(!item.innerHTML.toLowerCase().includes(e.target.value)){
        item.parentElement.parentElement.style.display = 'none';
      }else {
        item.parentElement.parentElement.style.display = 'block';
      }
    })
  };

  searchEl.addEventListener('keyup', search)
};

                                  /*  Foward Page */