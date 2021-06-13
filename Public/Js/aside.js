let aside = document.getElementById('toggleAside')

aside.addEventListener('click', () => {
    let dashboard = document.querySelector('.dashboard')
    dashboard.classList.toggle('close')
})
