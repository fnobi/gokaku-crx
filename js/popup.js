$(function () {
    var optionManager = new OptionManager({ prefix: 'gokaku-crx' }),

        gokakuUrl = optionManager.loadValue(
            'gokaku-crx-gokaku-url',
            'http://gokaku.fnobi.com/'
        ),
        width = optionManager.loadValue('gokaku-crx-width', 300),
        height = optionManager.loadValue('gokaku-crx-height', 300);

    chrome.tabs.getSelected(null, function (tab) {
        if (!tab) {
            alert('unavailable tab.');
            return;
        }

        var url = tab.url;

        if (!url) {
            alert('This tab has not valid url.');
            return;
        }

        $('#gokaku').attr({
            width: width,
            height: height,
            src: gokakuUrl + '?send=' + url
        });
    });
});