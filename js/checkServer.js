const mask = document.querySelector(`.mask`)
function checkServerAvailability() {
    axios.get('http://10.242.98.255:3000/checkServerAvailability')
        .then((response) => {
            mask.style.display = `none`;
        })
        .catch((error) => {
            mask.style.display = `block`;
            console.log(error)
        });
}
window.onload = function () {
    checkServerAvailability();
};