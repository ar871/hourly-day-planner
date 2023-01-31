//https://momentjs.com/
var timeDisplayEl = $('#currentDay');
function displayTime() {
  var rightNow = moment().format('DD MMM YYYY [at] hh:mm:ss a');
  timeDisplayEl.text(rightNow);// function to grab the time 
    }
    
      
    
    

setInterval(function(){
if((moment().minute() == 0) && (moment().second() ==0)){

for(var i=9; i<17; i++){
var yesHour = moment().hour();
var nestEl = $("#hour-"+i );

nestEl.removeClass("past");
nestEl.removeClass("present");
nestEl.removeClass("future");

if(i>yesHour){
  nestEl.addClass("future");
}else if(i == yesHour){
  nestEl.addClass("present");
}else{
  nestEl.addClass("past");
}
}
}
},1000);

init();
function init(){
  for(var i=9; i<=17; i++){//for each hours in the calendar
    var nestEl = $("#hour-" + i);

    //1.retrieve the events saved in the localstorage
    var savedEventText = localStorage.getItem("hour-"+i);
    if( savedEventText != null){
      nestEl.children("textarea").val(savedEventText);
    };

    //2. change the color of every time slot
    var yesHour = moment().hour();
    if(i>yesHour){
      nestEl.addClass("future");
    }else if(i == yesHour){
      nestEl.addClass("present");
    }else{
      nestEl.addClass("past");
    }
    

     //3. add eventlistener for each button
 
    var saveButton = nestEl.children("button");
    saveButton.on("click" , function(){
      handleSaveAction($(this));
    });
  }
  
}
function handleSaveAction(buttonElem){
  var hourId = buttonElem.parent().attr("id");
  var eventText = buttonElem.siblings("textarea").val();
  localStorage.setItem(hourId,eventText);
}
 // tell to show the time 
 
  // get the time ticking
  
  setInterval(displayTime)
  