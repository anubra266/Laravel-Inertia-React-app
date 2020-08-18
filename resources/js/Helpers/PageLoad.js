/**
 * Starts page loader on every page navigation
 * @param {object} loader the progress bar on the top of the page
 */
export function loadPage(loader) {
    // Select all links
    var allLinks = document.links;

    // Bind the event handler to each link individually
    for (var i = 0, n = allLinks.length; i < n; i++) {
        allLinks[i].onclick = function() {
            loader && loader.current.continuousStart();
        };
    }
}
