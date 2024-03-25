const mask = document.querySelector(`.mask`)
function checkServerAvailability() {
    axios.get('http://10.255.5.211:3000/checkServerAvailability')
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