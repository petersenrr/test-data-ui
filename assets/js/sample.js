(function() {
  (document.getElementById("husbandsSection")).style.display = 'none';
  (document.getElementById("wivesSection")).style.display = 'none';
  (document.getElementById("parentsSection")).style.display = 'none';
  (document.getElementById("qualitySection")).style.display = 'none';
  (document.getElementById("researchSection")).style.display = 'none';


  FS.baseUrl = "https://integration.familysearch.org";
  
  //set default for the locale dropdown
  var locales = ["sq", "hy", "bg", "zh", "hr", "cs", "da", "nl", "en", "et", "fj", "fi", "fr", "de", "el", 
  "ht", "hu", "is", "id", "it", "ja", "km", "ko", "lv", "lt", "mk", "ms", "mn", "no", "pl", "pt", 
  "ro", "ru", "sm", "sr", "sk", "sl", "es", "sv", "th", "to", "uk", "vi"];
  var simpleLang = FS.simpleLocale();
  var i;
  for(i = 0; i < locales.length; i++)
  {
    if(simpleLang == locales[i])
    {
      simpleLang = i;
      break;
    } 
  }
  document.getElementById("dropLocale").options.selectedIndex = simpleLang;

  function getCook(cookiename) 
  {
    // Get name followed by anything except a semicolon
    var cookiestring=RegExp(""+cookiename+"[^;]+").exec(document.cookie);
    // Return everything after the equal sign, or an empty string if the cookie name not found
    return unescape(!!cookiestring ? cookiestring.toString().replace(/^[^=]+./,"") : "");
  }
  var cookieValue = getCook('fssessionid');
})();



var id;
var templateSelected;

function loadUrl(){
  window.open("https://integration.familysearch.org/tree/person/" + id,'_blank');;
}

function hideAll(){
  (document.getElementById("husbandsSection")).style.display = 'none';
  (document.getElementById("wivesSection")).style.display = 'none';
  (document.getElementById("parentsSection")).style.display = 'none';
  (document.getElementById("qualitySection")).style.display = 'none';
  (document.getElementById("researchSection")).style.display = 'none';
  (document.getElementById("childrenSection")).style.display = 'none';
  (document.getElementById("marriageSection")).style.display = 'none';
  (document.getElementById("templeSection")).style.display = 'none';
  (document.getElementById("gen")).style.display = 'none';
  (document.getElementById("dateSection")).style.display = 'none';
  (document.getElementById("placeSection")).style.display = 'none';
  (document.getElementById("livingSection")).style.display = 'none';
  (document.getElementById("privateSection")).style.display = 'none';
}


function listQ(){
 var e = document.getElementById("dropTemplate");
 if(e.selectedIndex > -1){
  templateSelected = e.options[e.selectedIndex].value;
  hideAll();
  switch(templateSelected){
    case "Basic":{
      (document.getElementById("familyNameSection")).style.display = 'block';
      (document.getElementById("childrenSection")).style.display = 'block';
      (document.getElementById("gen")).style.display = 'block';
      (document.getElementById("dateSection")).style.display = 'block';
      (document.getElementById("placeSection")).style.display = 'block';
      (document.getElementById("localeSection")).style.display = 'block';
      (document.getElementById("marriageSection")).style.display = 'block';
      (document.getElementById("templeSection")).style.display = 'block';
      (document.getElementById("livingSection")).style.display = 'block';
      (document.getElementById("privateSection")).style.display = 'block';
      break;
    }
    case "Indicator.DataQuality":{
      (document.getElementById("familyNameSection")).style.display = 'block';
      (document.getElementById("localeSection")).style.display = 'block';
      break;
    }
    case "Default":{
      (document.getElementById("familyNameSection")).style.display = 'block';
      (document.getElementById("childrenSection")).style.display = 'block';
      (document.getElementById("gen")).style.display = 'block';
      (document.getElementById("dateSection")).style.display = 'block';
      (document.getElementById("placeSection")).style.display = 'block';
      (document.getElementById("localeSection")).style.display = 'block';
      (document.getElementById("marriageSection")).style.display = 'block';
      (document.getElementById("templeSection")).style.display = 'block';
      (document.getElementById("livingSection")).style.display = 'block';
      (document.getElementById("privateSection")).style.display = 'block';
      break;
    }
    case "Extended":{
      (document.getElementById("familyNameSection")).style.display = 'block';
      (document.getElementById("childrenSection")).style.display = 'block';
      break;
    }
    case "Generational":{
      (document.getElementById("familyNameSection")).style.display = 'block';
      (document.getElementById("childrenSection")).style.display = 'block';
      (document.getElementById("gen")).style.display = 'block';
      (document.getElementById("dateSection")).style.display = 'block';
      (document.getElementById("placeSection")).style.display = 'block';
      (document.getElementById("localeSection")).style.display = 'block';
      (document.getElementById("marriageSection")).style.display = 'block';
      (document.getElementById("templeSection")).style.display = 'block';
      (document.getElementById("livingSection")).style.display = 'block';
      (document.getElementById("privateSection")).style.display = 'block';
      break;
    }
    case "Indicators":{
      (document.getElementById("familyNameSection")).style.display = 'block';
      (document.getElementById("localeSection")).style.display = 'block';
      break;
    }
    case "Living":{
      (document.getElementById("familyNameSection")).style.display = 'block';
      (document.getElementById("childrenSection")).style.display = 'block';
      (document.getElementById("gen")).style.display = 'block';
      (document.getElementById("dateSection")).style.display = 'block';
      (document.getElementById("placeSection")).style.display = 'block';
      (document.getElementById("localeSection")).style.display = 'block';
      (document.getElementById("marriageSection")).style.display = 'block';
      (document.getElementById("templeSection")).style.display = 'block';
      break;
    }
    case "Localized":{
      (document.getElementById("familyNameSection")).style.display = 'block';
      (document.getElementById("childrenSection")).style.display = 'block';
      (document.getElementById("gen")).style.display = 'block';
      (document.getElementById("dateSection")).style.display = 'block';
      (document.getElementById("placeSection")).style.display = 'block';
      (document.getElementById("localeSection")).style.display = 'block';
      (document.getElementById("marriageSection")).style.display = 'block';
      (document.getElementById("templeSection")).style.display = 'block';
      (document.getElementById("livingSection")).style.display = 'block';
      (document.getElementById("privateSection")).style.display = 'block';
      break;
    }
    case "Multiple.Husbands":{
      (document.getElementById("familyNameSection")).style.display = 'block';
      (document.getElementById("childrenSection")).style.display = 'block';
      (document.getElementById("localeSection")).style.display = 'block';
      (document.getElementById("husbandsSection")).style.display = 'block';
      break;
    }
    case "Multiple.Parents":{
      (document.getElementById("familyNameSection")).style.display = 'block';
      (document.getElementById("childrenSection")).style.display = 'block';
      (document.getElementById("localeSection")).style.display = 'block';
      (document.getElementById("parentsSection")).style.display = 'block';
      break;
    }
    case "Multiple.Wives":{
      (document.getElementById("familyNameSection")).style.display = 'block';
      (document.getElementById("childrenSection")).style.display = 'block';
      (document.getElementById("localeSection")).style.display = 'block';
      (document.getElementById("wivessSection")).style.display = 'block';
      break;
    }
    case "Private":{
      (document.getElementById("familyNameSection")).style.display = 'block';
      (document.getElementById("childrenSection")).style.display = 'block';
      (document.getElementById("gen")).style.display = 'block';
      (document.getElementById("dateSection")).style.display = 'block';
      (document.getElementById("placeSection")).style.display = 'block';
      (document.getElementById("localeSection")).style.display = 'block';
      (document.getElementById("marriageSection")).style.display = 'block';
      (document.getElementById("templeSection")).style.display = 'block';
      (document.getElementById("livingSection")).style.display = 'block';
      break;
    }
    case "publicPrivate":{
      break;
    }
    case "Indicator.ResearchSuggestion":{
      (document.getElementById("familyNameSection")).style.display = 'block';
      (document.getElementById("localeSection")).style.display = 'block';
      break;
    }
    case "Single.Father":{
      (document.getElementById("familyNameSection")).style.display = 'block';
      (document.getElementById("childrenSection")).style.display = 'block';
      (document.getElementById("localeSection")).style.display = 'block';
      break;
    }
    case "Single.Mother":{
      (document.getElementById("familyNameSection")).style.display = 'block';
      (document.getElementById("childrenSection")).style.display = 'block';
      (document.getElementById("localeSection")).style.display = 'block';
      break;
    }
    case "Temple":{
      (document.getElementById("familyNameSection")).style.display = 'block';
      (document.getElementById("childrenSection")).style.display = 'block';
      (document.getElementById("localeSection")).style.display = 'block';
      break;
    }
    default:
      break;

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
    var generations = document.getElementById("generations").value;

    var date = document.getElementById("date").value;
    var familyName = document.getElementById("familyName").value;
    var husbands = document.getElementById("husbands").value;
    var wives = document.getElementById("wives").value;
    var locale = document.getElementById("dropLocale").value;
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
            
            loadUrl();

      }
    };

    switch(templateSelected){
      case "Basic":{
        xhr.open("POST", "/test-data/data/family?sessionId=" + session + "&template=" + templateSelected + "&familyName="+ familyName +"&children=" + child + 
          "&generations=" + generations + "&date=" + date + "&place=" + place + "&locale=" + locale + "&marriage=" + marriage + "&temple=" + temple +
          "&living=" + living + "&private=" + private);
      break;
    }
    case "Indicator.DataQuality":{
      xhr.open("POST", "/test-data/data/family?sessionId=" + session + "&template=" + templateSelected + "&familyName="+ familyName + "&locale=" + locale);
      break;
    }
    case "Default":{
      xhr.open("POST", "/test-data/data/family?sessionId=" + session + "&template=" + templateSelected + "&familyName="+ familyName +"&children=" + child + 
          "&generations=" + generations + "&date=" + date + "&place=" + place + "&locale=" + locale + "&marriage=" + marriage + "&temple=" + temple +
          "&living=" + living + "&private=" + private);
      break;
    }
    case "Extended":{
      xhr.open("POST", "/test-data/data/family?sessionId=" + session + "&template=" + templateSelected + "&familyName="+ familyName + "&children=" + child + 
          "&locale=" + locale);
      break;
    }
    case "Generational":{
      xhr.open("POST", "/test-data/data/family?sessionId=" + session + "&template=" + templateSelected + "&familyName="+ familyName +"&children=" + child + 
          "&generations=" + generations + "&date=" + date + "&place=" + place + "&locale=" + locale + "&marriage=" + marriage + "&temple=" + temple +
          "&living=" + living + "&private=" + private);
      break;
    }
    case "Indicators":{
      xhr.open("POST", "/test-data/data/family?sessionId=" + session + "&template=" + templateSelected + "&familyName="+ familyName + "&locale=" + locale);
      break;
    }
    case "Living":{
      xhr.open("POST", "/test-data/data/family?sessionId=" + session + "&template=" + templateSelected + "&familyName="+ familyName +"&children=" + child + 
          "&generations=" + generations + "&date=" + date + "&place=" + place + "&locale=" + locale + "&marriage=" + marriage + "&temple=" + temple +
          "&living=" + true + "&private=" + true);
      break;
    }
    case "Localized":{
      xhr.open("POST", "/test-data/data/family?sessionId=" + session + "&template=" + templateSelected + "&familyName="+ familyName +"&children=" + child + 
          "&generations=" + generations + "&date=" + date + "&place=" + place + "&locale=" + locale + "&marriage=" + marriage + "&temple=" + temple +
          "&living=" + living + "&private=" + private);
      break;
    }
    case "Multiple.Husbands":{
      xhr.open("POST", "/test-data/data/family?sessionId=" + session + "&template=" + templateSelected + "&familyName="+ familyName + "&husbands=" + husbands + 
        "&children=" + child + "&locale=" + locale);
      break;
    }
    case "Multiple.Parents":{
      xhr.open("POST", "/test-data/data/family?sessionId=" + session + "&template=" + templateSelected + "&familyName="+ familyName + "&parents=" + parents + 
        "&children=" + child + "&locale=" + locale);
      break;
    }
    case "Multiple.Wives":{
      xhr.open("POST", "/test-data/data/family?sessionId=" + session + "&template=" + templateSelected + "&familyName="+ familyName + "&wives=" + wives + 
        "&children=" + child + "&locale=" + locale);
      break;
    }
    case "Private": {
      xhr.open("POST", "/test-data/data/family?sessionId=" + session + "&template=" + templateSelected + "&familyName="+ familyName +"&children=" + child + 
          "&generations=" + generations + "&date=" + date + "&place=" + place + "&locale=" + locale + "&marriage=" + marriage + "&temple=" + temple +
          "&living=" + living + "&private=" + true);
      break;
    }
    case "publicPrivate":{
      xhr.open("POST", "/test-data/data/family?sessionId=" + session + "&template=" + templateSelected);
      break;
    }
    case "Indicator.ResearchSuggestion":{
      xhr.open("POST", "/test-data/data/family?sessionId=" + session + "&template=" + templateSelected + "&familyName="+ familyName + "&locale=" + locale);
      break;
    }
    case "Single.Father":{
      xhr.open("POST", "/test-data/data/family?sessionId=" + session + "&template=" + templateSelected + "&familyName="+ familyName + "&children=" + child + 
          "&locale=" + locale);
      break;
    }
    case "Single.Mother":{
      xhr.open("POST", "/test-data/data/family?sessionId=" + session + "&template=" + templateSelected + "&familyName="+ familyName + "&children=" + child + 
          "&locale=" + locale);
      break;
    }
    case "Temple":{
      xhr.open("POST", "/test-data/data/family?sessionId=" + session + "&template=" + templateSelected + "&familyName="+ familyName + "&children=" + child + 
          "&locale=" + locale);
      break;
    }
    default:
      break;
    }
    
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.send(null);
}
