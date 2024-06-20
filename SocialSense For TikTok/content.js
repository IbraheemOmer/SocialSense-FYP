// Content script

// Function to create and append the dropdown
function createDropdown() {
  const dropdownContainer = document.createElement('div');
  dropdownContainer.style.position = 'fixed';
  dropdownContainer.style.top = '90px';
  dropdownContainer.style.right = '40px';
  dropdownContainer.style.zIndex = '9999';


  const dropdown = document.createElement('select');
  dropdown.innerHTML = `
    <option value="All">All</option>
    <option value="Positive">Positive</option>
    <option value="Neutral">Neutral</option>
    <option value="Negative - Respond">Negative - Respond</option>
    <option value="Negative - Ignore">Negative - Ignore</option>
    <option value="Negative - Remove">Negative - Remove</option>
    <option value="Crisis">Crisis</option>
  `;
  dropdown.style.padding = '5px';
  dropdown.style.borderRadius = '5px';
  dropdown.style.borderColor = 'black';
  dropdown.style.borderStyle = 'solid';
  dropdown.style.borderWidth = '1px';
  dropdown.style.backgroundColor = '#ffffff';

  dropdownContainer.appendChild(dropdown);
  document.body.appendChild(dropdownContainer);
}

// Call the function to create and append the dropdown
createDropdown();


// Function to analyze and display responses for comments
function analyzeAndDisplayResponses() {
  const commentElements = document.querySelectorAll('.css-1mf23fd-DivContentContainer.e1g2efjf1');

  commentElements.forEach(commentElement => {
    // Check if the comment has already been processed
    if (commentElement.getAttribute('data-processed') !== 'true') {
      const commentText = getComment(commentElement);
      if (commentText.trim() !== '') { // Check if comment text is not empty
        chrome.runtime.sendMessage({ action: 'analyzeComment', comment: commentText }, response => {
          displayResponse(commentElement, response.response);
          toggleResponseVisibility(commentElement); // Call function to toggle visibility based on dropdown
        });
      }
      // Mark the comment as processed
      commentElement.setAttribute('data-processed', 'true');
    }
  });
}

// Call the function to create and append the dropdown

// Event listener for dropdown change event
document.querySelector('select').addEventListener('change', function() {
  // Call the function to toggle response visibility
  toggleResponseVisibility();
});

// Function to toggle visibility based on dropdown selection
function toggleResponseVisibility() {
  const dropdownValue = document.querySelector('select').value;

  const commentElements = document.querySelectorAll('.css-1mf23fd-DivContentContainer.e1g2efjf1');

  commentElements.forEach(commentElement => {
    const responseValue = commentElement.getAttribute('response');
    if (dropdownValue === responseValue || dropdownValue === 'All') {
      commentElement.parentElement.parentElement.style.display = 'block';
    } else {
      commentElement.parentElement.parentElement.style.display = 'none';
    }
  });
}




// Function to get the text content of a comment element
function getComment(commentElement) {
  const textContentElement = commentElement.querySelector('.css-xm2h10-PCommentText.e1g2efjf6');
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
    commentElement.setAttribute('response', response.trim());
    const children = commentElement.children;
    if (children.length >= 2) {
      commentElement.insertBefore(responseElement, children[1]);
    } else {
      commentElement.appendChild(responseElement);
    }
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