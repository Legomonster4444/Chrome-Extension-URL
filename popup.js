document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('openButton').addEventListener('click', openUrl);
});

function openUrl() {
    var url = document.getElementById('url').value;
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
        url = 'http://' + url;
    }
    chrome.tabs.create({ url: url });
}
