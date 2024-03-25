const submitBtn = document.querySelector(`.submitBtn`)
submitBtn.addEventListener(`click`, (e) => {
    e.preventDefault();
    submitBtn.disabled = true
    submitBtn.className = `btn submitBtn btn-outline-secondary`
    submitBtn.innerHTML = `提交中...`
    const formData = new FormData();
    const fileInput = document.querySelector('input[name="wordFile"]');
    formData.append('wordFile', fileInput.files[0]);

    axios.post('http://10.255.5.211:3000/upload', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
        .then(response => {
            console.log(response.data);
            alert('作业提交成功！.');
            submitBtn.className = `btn submitBtn submitBtn btn-success`
            submitBtn.innerHTML = `提交成功！`
        })
        .catch(error => {
            console.error('作业提交失败失败:', error.message);
            submitBtn.className = `btn submitBtn btn-danger`
            submitBtn.innerHTML = `请再试一次`
            submitBtn.disabled = false
            alert('作业提交失败了.');
        });
})

