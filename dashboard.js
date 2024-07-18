const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1
    }]
  },
  options: {
    reponsive: true
  }
});

const showMenu = (headerToggle, navbarId) =>{
  const toggleBtn = document.getElementById(headerToggle),
  nav = document.getElementById(navbarId)
  
  // Validate that variables exist
  if(headerToggle && navbarId){
      toggleBtn.addEventListener('click', ()=>{
          // We add the show-menu class to the div tag with the nav__menu class
          nav.classList.toggle('show-menu')
      })
  }
}
showMenu('header-toggle','sideBar')