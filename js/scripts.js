$(document).ready(function() {
  $("form#symptoms").submit(function(event) {
    event.preventDefault();

    let headache1;
    if ($("#headache1").is(":checked")) headache1 = true;
    let headache2;
    if ($("#headache2").is(":checked")) headache2 = true;
    let headache3;
    if ($("#headache3").is(":checked")) headache3 = true;
    let runnyNose;
    if ($("#runnyNose").is(":checked")) runnyNose = true;
    let congestion;
    if ($("#congestion").is(":checked")) congestion = true;
    let cough;
    if ($("#cough").is(":checked")) cough = true;
    let soreThroat;
    if ($("#soreThroat").is(":checked")) soreThroat = true;
    let sneeze;
    if ($("#sneeze").is(":checked")) sneeze = true;
    let nausea;
    if ($("#nausea").is(":checked")) nausea = true;

    let bodyAches;
    if ($("#body-aches").is(":checked")) bodyAches = true;
    let fatigue;
    if ($("#fatigue").is(":checked")) fatigue = true;

    let noneAbove1;
    if ($("#None1").is(":checked")) noneAbove1 = true;
    let noneAbove2;
    if ($("#None2").is(":checked")) noneAbove2 = true;

    var illness = $("<input>").val();
    console.log("data is", illness);


    if (cough && sneeze && congestion && runnyNose && soreThroat && headache1) {
      $("#common-cold").show();
    } else if (cough && sneeze && congestion &&  runnyNose && soreThroat) {
      $("#common-cold").show();
    } else if (cough && sneeze && congestion &&  runnyNose) {
      $("#common-cold").show();
    } else if (cough && sneeze && congestion) {
      $("#common-cold").show();
    } else if (cough && sneeze) {
      $("#common-cold").show();
    } else if (headache1 && congestion) {
      $("#common-cold").show();
    } else if (soreThroat && congestion) {
      $("#common-cold").show();
    } else if (runnyNose && congestion) {
      $("#common-cold").show();
    } else if (sneeze && congestion) {
      $("#common-cold").show();
    } else if (cough && congestion) {
      $("#common-cold").show();
    } else if (cough && soreThroat) {
      $("#common-cold").show();
    } else if (cough && runnyNose) {
      $("#common-cold").show();
    } else if (sneeze && runnyNose && soreThroat) {
      $("#common-cold").show();




      $("#common-cold").show();
    } else if (runnyNose || cough || sneeze || runnyNose || soreThroat || headache1 && congestion) {
      $("#common-cold").show();
    } else if (runnyNose || cough || sneeze || runnyNose || soreThroat || headache1 && congestion) {
      $("#common-cold").show();

    } else if (cough && sneeze && congestion && bodyAches && fatigue && headache2 && fever && diarrhea && nausea) {
      $("#flu").show();
    } else if (cough && sneeze && congestion && bodyAches && fatigue && headache2 && fever && diarrhea && nausea) {
      $("#flu").show();
    } else if (cough && sneeze && congestion && bodyAches && fatigue && headache2 && fever && diarrhea) {
      $("#flu").show();
    } else if (cough && sneeze && congestion && bodyAches && fatigue && headache2 && fever) {
      $("#flu").show();
    } else if (cough && sneeze && congestion && bodyAches && fatigue && headache2 && fever) {
      $("#flu").show();
    } else if (cough && sneeze && congestion && bodyAches && fatigue && headache2) {
      $("#flu").show();
    } else if (cough && sneeze && congestion && bodyAches && fatigue) {
      $("#flu").show();
    } else if (cough && sneeze && congestion && bodyAches) {
      $("#flu").show();
    } else if (cough || sneeze && congestion && bodyAches && fatigue) {
      $("#flu").show();
    } else if (cough && sneeze && congestion && bodyAches) {
      $("#flu").show();
    } else if (cough || sneeze && congestion && bodyAches && fatigue) {
      $("#flu").show();
    } else if (cough || sneeze && congestion && fatigue) {
       $("#flu").show();
    } else if (cough || sneeze && congestion && fatigue) {
        $("#flu").show();


      // } else if (congestion) {
      //   $("#common-cold").show();


    } else if (noneAbove1) {
      $("#healthy").show();
    } else if (noneAbove2) {
      $("#healthy").show();
    } else {
      $("#um").show();
    }


//  if (illness === "flu") {
//    $("#flu").show();
//  } else if (illness === cold) {
//     $("#common-cold").show();
//   } else  if (illness === good) {
//     $("#healthy").show();


})
});
