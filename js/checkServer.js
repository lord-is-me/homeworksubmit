const mask = document.querySelector(`.mask`)
function checkServerAvailability() {
    axios.get('https://120.236.163.67:3000/checkServerAvailability')
        .then((response) => {
            mask.style.display = `none`;
        })
        .catch((error) => {
            mask.style.display = `block`;
        });
}
window.onload = function () {
    checkServerAvailability();
};