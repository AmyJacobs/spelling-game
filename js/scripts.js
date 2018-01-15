var time = 10;
var score = 0;

function picGen() {
   var picArray = ["1", "2","3","4","5","6","7","8"];
   var picNum = Math.floor(Math.random() * picArray.length);
   var pic = "<img src='images/" + picArray[picNum] + ".png'>";
   $("#image").html(pic);
};

function wordRightGen () {
  var wordArray = ["transform", "identity", "amateur", "movie", "title", "what", "light", "obvious", "ridiculous", "ingenious", "double", "premise", "famous", "persona", "perfect", "family", "reinforce", "brilliant", "complaints", "guitar", "notice", "audio", "quality", "compression", "speaker", "sound", "played","dollar", "commercial", "onscreen", "without", "customize", "obvious", "concert", "fantasy", "anonymous", "dressing", "sentences", "rehearsal", "karaoke", "revolution", "skateboard", "complicated", "difficult", "expensive", "garbage", "review", "titanic", "artist", "legitimate", "potato", "indeed", "popular", "franchise", "feature", "although", "disguise", "component","clamor", "happen", "discover", "voyage", "enterprise", "secret", "premier", "anyway", "important", "birthday", "celebrity", "upstage", "perform",]
  var wordNum = Math.floor(Math.random() * wordArray.length);
  var word = wordArray[wordNum];
  return word;
}

function wordWrongGen () {
  var wordArray = ["transform", "identity", "amateur", "movie", "title", "what", "light", "obvious", "ridiculous", "ingenious", "double", "premise", "famous", "persona", "perfect", "family", "reinforce", "brilliant", "complaints", "guitar", "notice", "audio", "quality", "compression", "speaker", "sound", "played","dollar", "commercial", "onscreen", "without", "customize", "obvious", "concert", "fantasy", "anonymous", "dressing", "sentences", "rehearsal", "karaoke", "revolution", "skateboard", "complicated", "difficult", "expensive", "garbage", "review", "titanic", "artist", "legitimate", "potato", "indeed", "popular", "franchise", "feature", "although", "disguise", "component","clamor", "happen", "discover", "voyage", "enterprise", "secret", "premier", "anyway", "important", "birthday", "celebrity", "upstage", "perform",]
  var wordNum = Math.floor(Math.random() * wordArray.length);
  var word = wordArray[wordNum];
  var wordSplit = word.split("");
  var wordSplitNum = Math.floor(Math.random() * wordSplit.length);
  var selectedLetter = wordSplit[wordSplitNum];
  var mispellingArray = ["replace", "repeat"]
  var mispellingNum = Math.floor(Math.random() * mispellingArray.length);
  var mispelling = mispellingArray[mispellingNum];
  if (mispelling === "replace") {
    if (selectedLetter === "a") {
      wordSplit[wordSplitNum] = "e";
    } else if (selectedLetter === "b") {
      wordSplit[wordSplitNum] = "p";
    } else if (selectedLetter === "c") {
      wordSplit[wordSplitNum] = "k";
    } else if (selectedLetter === "d") {
      wordSplit[wordSplitNum] = "b";
    } else if (selectedLetter === "e") {
      wordSplit[wordSplitNum] = "a";
    } else if (selectedLetter === "f") {
      wordSplit[wordSplitNum] = "v";
    } else if (selectedLetter === "g") {
      wordSplit[wordSplitNum] = "q";
    } else if (selectedLetter === "h") {
      wordSplit[wordSplitNum] = "n";
    } else if (selectedLetter === "i") {
      wordSplit[wordSplitNum] = "l";
    } else if (selectedLetter === "j") {
      wordSplit[wordSplitNum] = "i";
    } else if (selectedLetter === "k") {
      wordSplit[wordSplitNum] = "c";
    } else if (selectedLetter === "l") {
      wordSplit[wordSplitNum] = "I";
    } else if (selectedLetter === "m") {
      wordSplit[wordSplitNum] = "nn";
    } else if (selectedLetter === "n") {
      wordSplit[wordSplitNum] = "h";
    } else if (selectedLetter === "o") {
      wordSplit[wordSplitNum] = "a";
    } else if (selectedLetter === "p") {
      wordSplit[wordSplitNum] = "q";
    } else if (selectedLetter === "q") {
      wordSplit[wordSplitNum] = "p";
    } else if (selectedLetter === "r") {
      wordSplit[wordSplitNum] = "n";
    } else if (selectedLetter === "s") {
      wordSplit[wordSplitNum] = "z";
    } else if (selectedLetter === "t") {
      wordSplit[wordSplitNum] = "d";
    } else if (selectedLetter === "u") {
      wordSplit[wordSplitNum] = "v";
    } else if (selectedLetter === "v") {
      wordSplit[wordSplitNum] = "u";
    } else if (selectedLetter === "w") {
      wordSplit[wordSplitNum] = "vv";
    } else if (selectedLetter === "x") {
      wordSplit[wordSplitNum] = "ks";
    } else if (selectedLetter === "y") {
      wordSplit[wordSplitNum] = "i";
    } else if (selectedLetter === "z") {
      wordSplit[wordSplitNum] = "s";
    }
  } else if (mispelling === "repeat") {
    wordSplit[wordSplitNum] = selectedLetter + selectedLetter;
  }


  var mispelledWord = wordSplit.join("");
  return mispelledWord;
}

function spellingGen () {
  var spellingArray = ["Correct", "Misspelled"];
  var spellingNum = Math.floor(Math.random() * spellingArray.length);
  var spelling = spellingArray[spellingNum];
  return spelling;
}

function countdown () {

}

$(document).ready(function() {

  $("#start").click(function() {
    setInterval(function(){
      if (time === 0) {
        $("#overlay").show();
        $("#end").show();
      } else {
        time -=1;
        $("#time").text(time);
      }
    }, 500);
    picGen();
    spelling = spellingGen();
    if (spelling === "Correct") {
      $("#word").text(wordRightGen());
    } else {
      $("#word").text(wordWrongGen());
    }
    $("#start").hide();
    $("#overlay").hide();
  });
  $("#btn-yes").click(function() {
   if (spelling === "Correct") {
     score +=10;
     $(".score").text(score);
     time +=2;
   } else if (spelling === "Misspelled") {
     score -=10;
     $(".score").text(score);
   }
   picGen();
   spelling = spellingGen();
   if (spelling === "Correct") {
     $("#word").text(wordRightGen());
   } else {
     $("#word").text(wordWrongGen());
   }
   $("#time").text(time);
 });

 $("#btn-no").click(function() {
  if (spelling === "Correct") {
    score -=10;
    $(".score").text(score);
  } else if (spelling === "Misspelled") {
    score +=10;
    $(".score").text(score);
    time +=2;
  }
  picGen();
  spelling = spellingGen();
  if (spelling === "Correct") {
    $("#word").text(wordRightGen());
  } else {
    $("#word").text(wordWrongGen());
  }
  $("#time").text(time);
 });

});
