$(function() {
  var ref = new Firebase("https://boiling-fire-9559.firebaseio.com/");
  var chat = ref.child('chat');
  $('#message').keypress(function(e) {
    if (e.which == 13) {
      var pseudo = $('#pseudo').val();
      var msg = $('#message').val();
      chat.push({
        pseudo: pseudo,
        message: msg
      });
      $('#message').val('');
    }
  });
  chat.on('child_added', function(snapshot) {
    var chunk = snapshot.val();
    $('body').append('<p>Pseudo : ' + chunk.pseudo + '<br />' + 'Message : ' + chunk.message + '</p>');
  });
});
