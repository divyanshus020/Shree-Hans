$(document).ready(function(){var _thisblock={newsletter_ajax:function(){var form=$('form.email-signup-form');var url=form.attr('data-action');form.submit(function(){var email=$(this).find('input[name="email"]').val();var responserecaptcha=$(this).find('#responserecaptcha').val(btoa('responserecaptcha'));var data=new FormData(form[0]);form.find('.loading').fadeIn();$.ajax({type:"POST",enctype:'multipart/form-data',url:url,data:data,processData:false,contentType:false,cache:false,timeout:600000,success:function(resp){if(resp.errorMsg){var msg=resp.errorMsg;var tclass='alert-danger';}else{var msg=resp.successMsg;var tclass='alert-success';}
form.find('.msg').html('<div class="text '+tclass+' ">'+msg+'</div>');form.find('.loading').fadeOut();},error:function(e){console.log(e);}});return false;});},}
_thisblock.newsletter_ajax();});;

