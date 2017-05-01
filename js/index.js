var $form = $("form"),
  $successMsg = $(".alert");
$.validator.addMethod("letters", function(value, element) {
  return this.optional(element) || value == value.match(/^[a-zA-Z\s]*$/);
});
$form.validate({
  rules: {
    telephone: {
      required: true,
      minlength: 3,
      letters: false
    },
  },

  submitHandler: function() {
    $successMsg.show();
  }
});
