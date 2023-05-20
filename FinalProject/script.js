$('#submitButton').on('click', function() {
    $('#commentSection').append(
      `<div class="commentBox">` + 
        '<img id="pic" src="profile.jpg"/>' +
        '<div id="editButton"> Edit </div>' +
        '<div id="deleteButton"> Delete </div>' +
        '<div id="username">' + $('#displayName').val() + '</div>' +
        '<div id="comment">' + $('#commentInput').val() + '</div>' +
        `<div class="noDisplay" id = "edit">` +
          `<input id="commentEdit" placeholder="Edit comment here">` +
          `<span id="submitEdit"> Submit </span>` +
        `</div>` +
      `</div>`);
    
  });

$('#commentSection').on('click','#deleteButton', function() {
    $(this).parent('div').addClass("noDisplay");
  });

$('#commentSection').on('click','#editButton', function() {
    $(this).siblings(':last').toggleClass('noDisplay');
  });

$('#commentSection').on('click', '#submitEdit', function() {
  let self = $(this).parent();
  self.siblings('#comment').html($('#commentEdit').val());
  self.toggleClass('noDisplay');
  console.log('hello world');
});