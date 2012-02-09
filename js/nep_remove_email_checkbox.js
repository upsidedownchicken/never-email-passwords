$jq = jQuery.noConflict();

$jq().ready(function() {
  $jq('#send_password').parent().parent().parent().hide();
})
