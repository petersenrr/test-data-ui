(function() {
  var test = 1;
  var output = 'sample app loaded';
  console.log(test);
  console.log(output);
  (document.getElementById("gen")).style.display = 'none';
  (document.getElementById("advance")).style.display = 'none';
})();

var id;

function loadUrl(){
  // window.location.href = "/sample.ejs";
  window.open("https://integration.familysearch.org/tree/person/" + id,'_blank');;
}


function listQ(){
 var e = document.getElementById("dropTemplate");
 if(e.selectedIndex > 0){
  if("Generational" === e.options[e.selectedIndex].value){ 
    (document.getElementById("gen")).style.display = 'block';
  }
 }
}
document.getElementById("dropTemplate").addEventListener("change",listQ);

function advanced(){
  (document.getElementById("advance")).style.display = 'block';
  (document.getElementById("advanceButton")).style.display = 'none';
}


var name;

function createFamily() {
    
    var session = document.getElementById("sessionId").value;
    var child = document.getElementById("children").value;
    var temple = document.getElementById("templeReady").value;
    var marriage = document.getElementById("drop").value;
    var template= document.getElementById("dropTemplate").value;
    var generations = document.getElementById("generations").value;

    var date = document.getElementById("date").value;
    var familyName = document.getElementById("familyName").value;
    var husbands = document.getElementById("husbands").value;
    var wives = document.getElementById("wives").value;
    var locale = document.getElementById("locale").value;
    var parents = document.getElementById("parents").value;

    var place = document.getElementById("place").value;
    var living = document.getElementById("dropLiving").value;
    var dataQuality = document.getElementById("dropDataQuality").value;
    var research = document.getElementById("dropResearch").value;
    var private = document.getElementById("dropPrivate").value;


    var xhr = new XMLHttpRequest();
    
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
            var data = xhr.responseText;
            var jsonResponse = JSON.parse(data);
            name = jsonResponse.persons[0].names[0].nameForms[0].fullText;

            id = jsonResponse.persons[0].id;
            document.cookie = "createdId="+escape(id);  
            document.cookie = "createdName="+escape(name);       
            
            console.log(jsonResponse);
            loadUrl();
            setTimeout(3000);
            
      }
    };


    if((document.getElementById("advance")).style.display === 'block')
    {
      if((document.getElementById("gen")).style.display === 'block')
      {
        xhr.open("POST", "/test-data/data/family?sessionId=" + session + "&template=" + template + "&children=" + child + "&marriage=" + marriage + "&generations=" + generations +
          "&temple=" + temple + "&date=" + date + "&familyName=" + familyName + "&husbands=" + husbands + "&wives=" + wives + "&locale=" + locale +
          "&parents=" + parents + "&place=" + place + "&living=" + living + "&dataQuality=" + dataQuality + "&researchSuggestion=" + research + "&private=" + private);
      }
      else {
        xhr.open("POST", "/test-data/data/family?sessionId=" + session + "&children=" + child + "&marriage=" + marriage + "&temple=" + temple + "&date=" + date + 
          "&familyName=" + familyName + "&husbands=" + husbands + "&wives=" + wives + "&locale=" + locale +
          "&parents=" + parents + "&place=" + place + "&living=" + living + "&dataQuality=" + dataQuality + "&researchSuggestion=" + research + "&private=" + private);
      }
    }
    else
    {
      if((document.getElementById("gen")).style.display === 'block')
      {
        xhr.open("POST", "/test-data/data/family?sessionId=" + session + "&template=" + template + "&children=" + child + "&marriage=" + marriage + 
          "&generations=" + generations + "&temple=" + temple);
      }
      else {
        xhr.open("POST", "/test-data/data/family?sessionId=" + session + "&children=" + child + "&marriage=" + marriage + "&temple=" + temple);
      }
    }
    
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.send(null);
}
