/**
 * Based on EPUB tests: https://github.com/w3c/epub-specs/blob/main/epub33/common/js/data-test-display.js
 */
function data_test_display() {
    const test_references = document.querySelectorAll('details.respec-tests-details a');
    for( const a of test_references ) {
        const href = a.href;
        const test_reference = href.split('#')[1];
        a.setAttribute('aria-label', `This feature is tested by the test with ID: ${test_reference}`);
        a.textContent = test_reference;
    }    
}