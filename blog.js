// Select all 'Read More' links
const readMoreLinks = document.querySelectorAll('.Read more');

// Loop through the links and add click event listeners
readMoreLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the default action of the link

    // Get the full content from the 'data-content' attribute
    const fullContent = link.getAttribute('data-content');

    // Display the full content below the article
    const fullContentParagraph = document.createElement('p');
    fullContentParagraph.textContent = fullContent;

    // Append the full content to the article
    const article = link.parentElement;
    article.appendChild(fullContentParagraph);

    // Hide the "Read More" link after clicking
    link.style.display = 'none';
  });
});
