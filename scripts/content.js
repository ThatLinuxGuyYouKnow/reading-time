const article = document.querySelector("article");
console.log('article', article)

article != null ? console.log('theres an article!') : console.log('none!')

// `document.querySelector` may return null if the selector doesn't match anything.
if (article) {
    const text = article.textContent;
    const wordMatchRegExp = /[^\s]+/g; // Regular expressiona
    const words = text.matchAll(wordMatchRegExp);
    // matchAll returns an iterator, convert to array to get word count
    const wordCount = [...words].length;
    const readingTime = Math.round(wordCount / 200);
    const badge = document.createElement("p");
    // Use the same styling as the publish information in an article's header
    badge.classList.add("color-secondary-text", "type--caption");
    badge.textContent = `⏱️ ${readingTime} min read`;

    // Support for API reference docs
    const heading = article.querySelector("#h1");
    console.log('heading', heading)
    // Support for article docs with date
    const date = article.querySelector("#time");
    console.log('date', date)

    const web_store = article.querySelector('#chrome-web-store');
    console.log('web_store', web_store)
    const insertionPoint = date ?? heading ?? web_store;
    console.log('insertionPoint', insertionPoint)

    if (insertionPoint) {
        insertionPoint.insertAdjacentElement("afterend", badge);
    }

}