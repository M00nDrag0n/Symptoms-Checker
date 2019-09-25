$(document).ready(function() {
$("form#symptoms").submit(function(event) {
  event.preventDefault();


  var illness = $("<input>").val();
  console.log("data is", illness);


  var flu = [ "#fatigue", "#body-aches", "#congestion", "#cough"
  // "#sneeze", "#runny-nose", "#sore-throat", "#headache"
   // "#nausea", "#vomiting", "#fever"
 ];

   var cold = (["#congestion", "#cough"
   // "#runny-nose", "#sore-throat","#sneeze", "#headache"
 ]);

  var good = (
    // "#N/A1",
   "#N/A2");

 if (illness === flu) {
   $("#flu").show();
 } else if (illness === cold) {
    $("#common-cold").show();
  } else  if (illness === good) {
    $("#healthy").show();
} else {
    $("#um").show();

}

})
});
