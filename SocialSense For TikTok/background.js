chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'analyzeComment') {
    // Send comment to OpenAI API
    fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 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'
      },
      body: JSON.stringify({
        model: "ft:gpt-3.5-turbo-0125:personal:socialsense:96eqMPvL",
        messages: [
          {"role": "system", "content": "You are a text classifier for social media comments. Classify the following comment into one of the following classes: [Positive, Neutral, Negative - Respond, Negative - Ignore, Negative - Remove, Crisis]"},
          {"role": "user", "content": message.comment}
        ]
      })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      // Check if data.choices is defined before accessing its properties
      if (data.choices && data.choices.length > 0 && data.choices[0].message && data.choices[0].message.content) {
        sendResponse({ response: data.choices[0].message.content });
      } else {
        throw new Error('Response data is invalid');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      sendResponse({ error: error.message }); // Send the error message back to the caller
    });
    
    return true;
  }
});
