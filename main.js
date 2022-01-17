$(document).ready(function(){
  $("#submitRegister").click(function(){
      $("#submitRegister").hide(750);
      $("#submitLogin").hide(750);
      $("#registerForm").fadeIn(750);
  });
});

$(document).ready(function(){
  $("#submitLogin").click(function(){
      $("#submitRegister").hide(750);
      $("#submitLogin").hide(750);
      $("#loginForm").fadeIn(750);
  });
});

$(document).ready(function(){
  $(".registerButton").click(function(){
      $("#content").hide(750);
      $("#home").hide(750);
      $("#games").fadeIn(750);
  });
});

$(document).ready(function(){
  $("#menu").click(function(){
      $("#navbar").fadeIn(750);
  });
});

$(document).ready(function(){
  $("#menu").dblclick(function(){
    $("#navbar").hide(750);
  });
});

$(document).ready(function(){
  $("form").validate({
  rules: {
      email:{
          required:true,
          email: true
      },
      name:{
          required:true,
          text: true
      },
      surname:{
          required:true,
          text: true
      },
      number:{
          required: true,
          number: true
      }
  },
  messages:{
      email: "Please enter a valid email",
      name: "Please enter name",
      surname: "Please enter surname",
      number: "Please enter a valid number"
      
  },
  submitHandler: function(form) {
  form.submit();
  }   
  });
})

function alertLogin() {
  alert("You are logged in");
}

// $(document).ready(function () {    
    
//   $('#phoneNumber').keypress(function (e) {    

//       var charCode = (e.which) ? e.which : event.keyCode    

//       if (String.fromCharCode(charCode).match(/[^0-9]/g))    

//           return false;                        

//   });    

// }); 

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

function Game1() {
window.open(
"https://www.viage.be/wp-content/uploads/2016/05/playing-cards.jpg", "_blank");
}

function Game2() {
window.open(
  "https://upload.wikimedia.org/wikipedia/commons/9/9f/Jack-Nine_Games-Jack_and_Nine_of_Spades.jpg", "_blank");
}

function Game3() {
  window.open(
    "https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/prrknss8fyqfaim7_1584599142.jpeg?tr=w-1200,h-900", "_blank");
  }

  function Game4() {
    window.open(
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-card-games-1593784219.jpg", "_blank");
    }

  function Game5() {
    window.open(
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo8lTiObG-98JKkIcbjFANNbjueqaZJzsxtCLtgZYKrqtE-2cnPYRXpsJPMbEkxPSI56E&usqp=CAU", "_blank");
    }

  function Game6() {
    window.open(
      "http://static1.squarespace.com/static/567064569cadb63cb308ddb1/t/5b27edc51ae6cff45e9181a5/1529343443255/cards.jpg?format=1500w", "_blank");
    }

  function Game7() {
    window.open(
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwb0GNcLyYwAIoS2ZJGgLxj2jAEsp3046FKqwnCkWvd7wPzUetQXGR7WHR-sj92A-7aOI&usqp=CAU", "_blank");
    }