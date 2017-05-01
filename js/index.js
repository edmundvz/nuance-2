var $form = $("form"),
  $successMsg = $(".alert");
$.validator.addMethod("letters", function(value, element) {
  return this.optional(element) || value == value.match(/^[a-zA-Z\s]*$/);
});
$form.validate({
  rules: {

    name: {
      required: true,
    },

    telephone: {
      required: true,
      minlength: 3,
      letters: false
    },

    state: {
      required: true,
    },

    message: {
      required: true,
    },

  },

  submitHandler: function() {
    $successMsg.show();
  }
});
