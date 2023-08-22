const refs = {
    text: document.querySelector('.about-info'),
    openMore: document.querySelector('.read-more'),
    hiddenText: document.querySelector('.hidden-text'),
    closeMore: document.querySelector('.close-more')
}

refs.hiddenText.classList.add('visually-hidden')

refs.openMore.addEventListener('click', onReadMore)
refs.closeMore.addEventListener('click', onCloseMore)

function onReadMore() {
    refs.hiddenText.classList.remove('visually-hidden')
    refs.closeMore.classList.remove('visually-hidden')
    refs.openMore.classList.add('visually-hidden')
}

function onCloseMore() {
    refs.hiddenText.classList.add('visually-hidden')
    refs.closeMore.classList.add('visually-hidden')
    refs.openMore.classList.remove('visually-hidden')
}
