function askQuestion() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() === '') return;
  
    const chatBox = document.getElementById('chat-box');
    const userMessage = `<div><strong>You:</strong> ${userInput}</div>`;
    const botMessage = `<div><strong>Bot:</strong> ${getBotResponse(userInput)}</div>`;
  
    chatBox.innerHTML += userMessage + botMessage;
    chatBox.scrollTop = chatBox.scrollHeight;
    document.getElementById('user-input').value = '';
  }
  
  function getBotResponse(question) {
    // You can add your logic here to generate bot responses based on user questions
    // For a simple example, let's provide some predefined responses
    const questionLower = question.toLowerCase();
    if (questionLower.includes('hi') || questionLower.includes('hello')) {
      return 'Hello! How can I assist you today?';
    }
     else if (questionLower.includes('I want to about my basic right as a citizen of india')) {
      return 'I\'m just a bot, but thank you for asking!';
    } 
     else if (questionLower.includes('how are you')) {
      return 'I\'m just a bot, but thank you for asking!';
    } 
     else if (questionLower.includes('how are you')) {
      return 'I\'m just a bot, but thank you for asking!';
    } 
     else if (questionLower.includes('how are you')) {
      return 'I\'m just a bot, but thank you for asking!';
    } 
     else if (questionLower.includes('how are you')) {
      return 'I\'m just a bot, but thank you for asking!';
    } 
     else if (questionLower.includes('how are you')) {
      return 'I\'m just a bot, but thank you for asking!';
    } 
     else if (questionLower.includes('how are you')) {
      return 'I\'m just a bot, but thank you for asking!';
    } 
     else if (questionLower.includes('how are you')) {
      return 'I\'m just a bot, but thank you for asking!';
    } 
     else if (questionLower.includes('how are you')) {
      return 'I\'m just a bot, but thank you for asking!';
    } 
    else {
      return 'Sorry for inconvience the work is under progress';
    }
  }
  
