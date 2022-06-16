
console.log('creating iframe...');
window.SURFLY_COBRO_ORIGIN = 'https://pmenichelli.github.io/thirdparty';
const surflyApiFrame = document.createElement('iframe');

surflyApiFrame.id = 'surfly-api-frame';
surflyApiFrame.name = 'surfly-api-frame';
surflyApiFrame.width = 500;
surflyApiFrame.height = 550;

window.surflyApiFrame = surflyApiFrame;

function appendApiFrame() {
    document.getElementById('iframe-container').appendChild(surflyApiFrame);
    // Not using document.open() here will cause window.location to be about:blank
    surflyApiFrame.contentDocument.open();
    surflyApiFrame.contentDocument.write("<!doctype html><head></head><body></body></html>");
    surflyApiFrame.contentDocument.close();

    const scriptTag = surflyApiFrame.contentDocument.createElement("script");
    scriptTag.src = window.SURFLY_COBRO_ORIGIN + "/apiframe.js";
    surflyApiFrame.contentDocument.body.appendChild(scriptTag);
}

appendApiFrame();
