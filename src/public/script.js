console.log('hello from the browser JavaScript')
$(document).ready(() => {
  initializeDeleteButtons()
})

const initializeDeleteButtons = () => {
  $('.trash').click(() => {
    alert('Are you sure you want to delete this review?')
  })
}
