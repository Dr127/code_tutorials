var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function run (event) {

    console.log(event);

        var Content = event.results[0][0].transcript;
    console.log(Content);

    document.getElementById("textbox").innerHTML = Content;
    if(Content =="no code apps")
    {
        window.location = "thunkable.html";  
    }
    else if(Content =="text code"){
        window.location = "text.html";  
    }
    else if(Content =="chatbot"){
        window.location = "chatbt.html";  
    }
    else if(Content =="block code"){
        window.location = "codeorg.html";  
    }
}

function speak(){
    var synth = window.speechSynthesis;

    speak_data = "Redirecting you";

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);
}

function search(){
    var text_content = document.getElementById("txtsrch").value;
    if(text_content =="Thunkable")
    {
        window.location = "thunkable.html";  
    }
    else if(text_content =="Text Coding Tutorials"){
        window.location = "text.html";  
    }
    else if(text_content =="Code.org"){
        window.location = "codeorg.html";  
    }
    else if(text_content =="Dialogueflow"){
        window.location = "chatbt.html";  
    }
}