const tabBtn = document.querySelectorAll('.tab-btn')

function inputChangeTab(e) {
  let elInputValue = e.target.value

  switch (elInputValue) {
    case '1':
      positiveBtn.click()
      break
    case '2':
      negativeBtn.click()
      break
    case '3':
      neutralBtn.click()
      break
    default:
      alert('Index is invalid')
  }

  e.target.value = ''
}

function changeTabBtn(elBtn) {
  let elTabBtnId = elBtn.target.id

  switch (elTabBtnId) {
    case 'positiveBtn':
      positiveBtn.classList.add('active')
      negativeBtn.classList?.remove('active')
      neutralBtn.classList?.remove('active')
      break
    case 'negativeBtn':
      negativeBtn.classList.add('active')
      positiveBtn.classList?.remove('active')
      neutralBtn.classList?.remove('active')
      break
    case 'neutralBtn':
      neutralBtn.classList.add('active')
      positiveBtn.classList?.remove('active')
      negativeBtn.classList?.remove('active')
    default:
      // elTabBtnId.classList.add('active')
      console.log('???')
  }
}

function changeContent(elBtn) {
  let elTabBtn = elBtn.target

  switch (elTabBtn.id) {
    case 'positiveBtn':
      tabContent.textContent = "Positive content"
      break
    case 'negativeBtn':
      tabContent.textContent = "Negative content"
      break
    case 'neutralBtn':
      tabContent.textContent = "Neutral content"
      break
    default:
      tabContent.textContent = "Default tab"
  }
}

function changeTab(elBtn) {
  changeTabBtn(elBtn)
  changeContent(elBtn)
}


tabBtn.forEach(btn => {
  btn.addEventListener('click', changeTab)
})

tabIndexInput.addEventListener('change', inputChangeTab)