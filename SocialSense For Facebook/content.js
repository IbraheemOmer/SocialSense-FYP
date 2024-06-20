// Content script

// Function to analyze and display responses for comments
function analyzeAndDisplayResponses() {
  const commentElements = document.querySelectorAll('.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.x1vvkbs:not(.x126k92a)');

  commentElements.forEach(commentElement => {
    // Check if the comment has already been processed
    if (commentElement.getAttribute('data-processed') !== 'true') {
      const commentText = getComment(commentElement);
      if (commentText.trim() !== '') { // Check if comment text is not empty
        chrome.runtime.sendMessage({ action: 'analyzeComment', comment: commentText }, response => {
          displayResponse(commentElement, response.response);
        });
      }
      // Mark the comment as processed
      commentElement.setAttribute('data-processed', 'true');
    }
  });
}

// Function to get the text content of a comment element
function getComment(commentElement) {
  const textContentElement = commentElement.querySelector('div[dir="auto"]');
  return textContentElement ? textContentElement.textContent : '';
}

// Function to display the response for a comment
function displayResponse(commentElement, response) {
  if (response.trim() !== '') { // Check if response is not empty
    const responseElement = document.createElement('div');
    responseElement.textContent = response;
    
    // Set background color based on response
    switch (response.trim()) {
      case 'Positive':
        responseElement.style.backgroundColor = '#bdf589';
        break;
      case 'Neutral':
        responseElement.style.backgroundColor = '#81baf7';
        break;
      case 'Negative - Respond':
        responseElement.style.backgroundColor = '#fcd66d';
        break;
      case 'Negative - Ignore':
        responseElement.style.backgroundColor = '#fcb679';
        break;
      case 'Negative - Remove':
        responseElement.style.backgroundColor = '#fa9696';
        break;
      case 'Crisis':
        responseElement.style.backgroundColor = '#d1d1d1';
        break;
      default:
        responseElement.style.backgroundColor = 'white'; 
        break;
    }

    responseElement.style.borderRadius = '6px';
    responseElement.style.padding = '2px';
    responseElement.style.paddingLeft = '4px';
    responseElement.style.paddingRight = '4px';
    responseElement.style.marginTop = '2px';
    responseElement.style.marginBottom = '2px';

    // the width should be the size of responseElement
    responseElement.style.width = 'fit-content';

    responseElement.style.fontFamily = 'sans-serif';
    
    commentElement.parentNode.insertBefore(responseElement, commentElement.parentNode.firstChild);
  }
}


// Initialize MutationObserver to detect changes in the DOM
const observer = new MutationObserver(mutations => {
  // Call the function to analyze and display responses whenever mutations occur
  analyzeAndDisplayResponses();
});

// Configuration for the MutationObserver
const observerConfig = { childList: true, subtree: true };

// Start observing changes in the DOM
observer.observe(document.body, observerConfig);

// Call the function to analyze and display responses initially
analyzeAndDisplayResponses();