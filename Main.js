import * as DOMService from './DOMService';

function main() {
    DOMService.subscribeToUrlChange(onUrlChange);
}

function onUrlChange() {
    console.log('write yo ext here.')
}

main();