function ExecuteScript(strId)
{
  switch (strId)
  {
      case "60jZjiLgEjL":
        Script1();
        break;
      case "6pCXZNwUdoc":
        Script2();
        break;
      case "6OgzuqqBQxS":
        Script3();
        break;
      case "60eOlAGHjMr":
        Script4();
        break;
      case "65i4avokjjR":
        Script5();
        break;
      case "5l2I2AYhiVG":
        Script6();
        break;
      case "6imE5JsRDvE":
        Script7();
        break;
      case "5mstYvaLWIT":
        Script8();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSongku');
audio.src="game.mp3";
audio.load();
audio.play();
audio.volume=0.5;
}

function Script2()
{
  var audio = document.getElementById('bgSong');
audio.volume=0.3;

}

function Script3()
{
  var audio = document.getElementById('bgSong');
audio.volume=0.6;
}

function Script4()
{
  var audio = document.getElementById('bgSong');
audio.volume=0.10;
}

function Script5()
{
  var audio = document.getElementById('bgSongku');
audio.src="game.mp3";
audio.load();
audio.play();
audio.volume=0.0;
}

function Script6()
{
  var audio = document.getElementById('bgSongku');
audio.src="game.mp3";
audio.load();
audio.play();
audio.volume=0.6;
}

function Script7()
{
  var audio = document.getElementById('bgSongku');
audio.src="game.mp3";
audio.load();
audio.play();
audio.volume=0.10;
}

function Script8()
{
  var audio = document.getElementById('bgSongku');
audio.src="game.mp3";
audio.load();
audio.play();
audio.volume=0.3;
}

