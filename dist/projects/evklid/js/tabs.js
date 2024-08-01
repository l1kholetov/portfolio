window.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('.section-how__number-list__link').forEach(function(numberLink) {
    numberLink.addEventListener('click', function(event) {
      document.querySelectorAll('.section-how__number-list__link').forEach(function(numberLinkActive){
        numberLinkActive.classList.remove('section-how__active')
      })

      numberLink.classList.add('section-how__active')

      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.section-how__content').forEach(function(sectionContent){
        sectionContent.classList.remove('section-how__content__active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('section-how__content__active')
    })
  })
})
