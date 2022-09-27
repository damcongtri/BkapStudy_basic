
function btnReply() {
    document.getElementById('ip-reply').classList.add('d-block')
    document.getElementById('close').classList.add('d-block')
    document.getElementById('ip').focus()
}
function btnClose() {
    document.getElementById('ip-reply').classList.remove('d-block')
    document.getElementById('close').classList.remove('d-block')
}