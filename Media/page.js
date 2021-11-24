let maxTimeDifferenceBetweenEventsInMs = 10000;

document.addEventListener("DOMContentLoaded", function () {
    let lastContextMenuEvent = null;

    let textField = document.getElementById("text-field");
    textField.addEventListener("contextmenu", function (event) {
        lastContextMenuEvent = event;
    });

    window.addEventListener("blur", function (event) {
        // There's the simple assumption here that if the blur event occurs shortly after the
        // context menu has been opened, it's because the enhanced spell check dialog has been
        // opened.
        if (!lastContextMenuEvent
            || (event.timeStamp - lastContextMenuEvent.timeStamp)
                > maxTimeDifferenceBetweenEventsInMs) {
            lastContextMenuEvent = null;
            return;
        }

        chrome.runtime.sendMessage(undefined, "close-tab");
    });
});