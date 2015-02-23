$(function() {
  
  var showInfo = function(message) {
    $('div.progress').hide();
    $('strong.message').text(message);
    $('div.alert').show();
  };
  
	var saveInfo = function (filename) {
		  
		  var formData = {
				  title:$("#title").val(),
				  filename:filename,
				  tags:$("#vtags").val()
				};
		  
		  $.ajax({
		    url : "/upload/saveinfo",
		    type: "POST",
		    data : formData,
		    success: function(data, textStatus, jqXHR)
		    {
		        //data - response from server
		    },
		    error: function (jqXHR, textStatus, errorThrown)
		    {
		    	alert('ts' + textStatus);
		    	alert('err' + errorThrown);
		    }
		});
	  };
  
  $('input[type="submit"]').on('click', function(evt) {
    evt.preventDefault();
    $('div.progress').show();
    var formData = new FormData();
    var fileInput = document.getElementById('myFile');
    var file = fileInput.files[0];

    formData.append('myFile', file);
    
    var xhr = new XMLHttpRequest();
    
    xhr.open('post', '/upload', true);
    
    xhr.upload.onprogress = function(e) {
      if (e.lengthComputable) {
        var percentage = (e.loaded / e.total) * 100;
        $('div.progress div.progress-bar').css('width', percentage + '%');
      }
    };
    
    xhr.onerror = function(e) {
      showInfo('An error occurred while submitting the form. Maybe your file is too big');
    };
    
    xhr.onload = function() {
      var res = JSON.parse(this.responseText);	
    	
      showInfo(this.statusText);
      saveInfo(res.filename);
    };
    
    xhr.send(formData);
    
  });
  
  
});