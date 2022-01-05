$(document).ready(function(){
  $("#submitRegister").click(function(){
      $("#submitRegister").hide(750);
      $("#registerForm").fadeIn(750);
  });
});

// $(function() {
//   $("form[name='registerForm']").validate({
//     rules: {
//       name: "required",

//       surname: "required",

//       email: {
//         required: true,
//         email: true
//       },
      
//       phoneNumber: {
//           required: true,
//           number: true
//       },
//     },

//     messages: {
//       name: "Please enter your firstname",
//       surname: "Please enter your lastname",
//       email: "Please enter a valid email address"
//     },

//     submitHandler: function(form) {
//       form.registerButton();
//     }
//   });
// })