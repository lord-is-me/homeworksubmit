const xygWeek = document.querySelector(`.xygWeek`)
const iconfont = document.querySelector(`.iconfont`)
const xyg = document.querySelector(`.xyg`)
xyg.addEventListener(`click`, () => {
    xygWeek.classList.toggle(`xygWeekShow`)
    if (iconfont.className === `iconfont icon-a-RightArrow`)
        iconfont.className = `iconfont icon-a-DownArrow`
    else
        iconfont.className = `iconfont icon-a-RightArrow`
})