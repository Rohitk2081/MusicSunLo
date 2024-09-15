$(document).ready(function() {
    // Switching between landing page and chat page
    $('#start-chat-btn').click(function() {
      $('#landing-page').addClass('d-none');
      $('#chat-page').removeClass('d-none');
    });
  
    // Send message on button click or Enter key
    $('#send-btn').click(sendMessage);
    $('#message-input').keydown(function(e) {
      if (e.key === 'Enter') sendMessage();
    });
  
    // Disconnect chat
    $('#disconnect-btn').click(function() {
      $('#chat-page').addClass('d-none');
      $('#landing-page').removeClass('d-none');
      $('#messages').empty(); // Clear chat
    });
  
    // Send message function
    function sendMessage() {
      let message = $('#message-input').val().trim();
      if (message) {
        addMessageToChat(message, 'sent');
        $('#message-input').val(''); // Clear input field
        receiveMessage(); // Simulate receiving a message
      }
    }
  
    // Add message to chat
    function addMessageToChat(message, type) {
      const messageElement = `<div class="message ${type}">${message}</div>`;
      $('#messages').append(messageElement);
      $('#messages').scrollTop($('#messages')[0].scrollHeight); // Scroll to bottom
    }
  
    // Simulate receiving a message
    function receiveMessage() {
      setTimeout(() => {
        const responses = ['Hello!', 'How are you?', 'Tell me more.', 'Interesting!', 'Goodbye!'];
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        addMessageToChat(randomResponse, 'received');
      }, 1000);
    }
  });