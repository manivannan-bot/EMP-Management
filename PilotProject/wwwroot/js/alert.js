$('body').append('<div class="alert-container"></div>')

function triggerAlert(text, type) {

 
  const modalType = {
    'success': {
      background: '#fff',
      color:'#02A17B',
      icon: `
       <img src="img/check-one.png" width="28">`
    },
    'error': {
      background: '#fff',
      color:'#D03B3B',
      icon: `<img src="img/Group 12.png" width="28">
      `
    },
    undefined: {
      background: 'linear-gradient(133.63deg, #0EB5EA -34.48%, #000000 221.73%)',
      icon: `
        <svg width="24" height="24" viewBox="0 0 420 420" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M210 0C325.98 0 420 94.02 420 210C420 325.98 325.98 420 210 420C94.02 420 0 325.98 0 210C0 94.02 94.02 0 210 0ZM210 168C194.535 168 182 180.535 182 196V308C182 323.465 194.535 336 210 336C225.465 336 238 323.465 238 308V196C238 180.535 225.465 168 210 168ZM210 84C194.535 84 182 96.535 182 112C182 127.465 194.535 140 210 140C225.465 140 238 127.465 238 112C238 96.535 225.465 84 210 84Z" fill="white"/>
        </svg>`
    }
  }
  const selectedType = modalType[type]
  const alertBox = `
    <div style="background: ${selectedType.background};" class="modal-alert">
      <div class="content">
        ${selectedType.icon}
        <h6>${text}</h6>
        </div>
      
      <div class="bar" style="background: ${selectedType.color};"></div>
    </div>`

  $('.alert-container').append(alertBox);

 
  let modal = $('.modal-alert')
  let thisModal = modal[modal.length - 1]

  $(thisModal).fadeIn('ease', () => {
    $(thisModal).children('.bar').addClass('progress')
    const toDelete = thisModal
    setTimeout(() => {
      $(toDelete).fadeOut('slow', () => {
        toDelete.remove()
      })
    }, 5000);
  })

} 



