/**
 * Starts page loader on every page navigation
 * @param {object} pageLoader the progress bar at top of the page
 */
export function loadPage(pageLoader) {
    // Select all links
    var allLinks = document.links;

    // Bind the event handler to each link individually
    for (var i = 0, n = allLinks.length; i < n; i++) {
        allLinks[i].onclick = function() {
            pageLoader && pageLoader.current.continuousStart();
        };
    }
}
