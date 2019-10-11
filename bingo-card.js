window.onload = initAll;
var usedNums = new Array(76);

var lines = [
  "Phasellus gravida bibendum adipiscing.",
  "Cras id rhoncus diam.",
  "Praesent pharetra justo sed velit tempus, non pulvinar tortor tempor.",
  "Maecenas elementum consequat orci, eget fermentum erat adipiscing porta.",
  "Nunc et lorem eu metus pretium ultrices.",
  "Nam pharetra a diam a accumsan.",
  "Aliquam egestas ante eget enim condimentum lobortis.",
  "Mauris euismod porta mollis.",
  "Praesent eget ornare eros.",
  "Nullam aliquet nulla eget erat congue, a sodales quam egestas.",
  "Nunc urna purus, auctor non facilisis ac, viverra id lectus.",
  "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
  "Curabitur rutrum hendrerit facilisis.",
  "Pellentesque non scelerisque sapien.",
  "Pellentesque quis purus egestas, mattis mauris vel, volutpat enim.",
  "Maecenas eleifend sem in massa blandit eleifend.",
  "Fusce nisi nulla, vehicula eleifend diam ac, rutrum facilisis diam.",
  "Praesent eget leo a magna tincidunt ullamcorper quis eu massa.",
  "Etiam ac tincidunt felis.",
  "Aenean semper nisi sit amet nisl blandit, eget fermentum neque varius.",
  "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
  "Nunc consequat, magna in gravida sollicitudin, nibh orci interdum tortor, vitae rutrum augue eros ut ante.",
  "Nullam volutpat nisi sit amet justo pulvinar aliquam.",
  "Nulla accumsan venenatis nisl id tempor."
];

function initAll() {
  if (document.getElementById) {
    document.getElementById("reload").onclick = anotherCard;
    newCard();
  } else {
    alert("Your browser does not support this script.");
  }
}

function newCard() {
  for (var i = 0; i < 24; i++) {
    setSquare(i);
  }
}

function setSquare(thisSquare) {
  var currentSquare = "square" + thisSquare;
  var colPlace = new Array(
    0,
    1,
    2,
    3,
    4,
    0,
    1,
    2,
    3,
    4,
    0,
    1,
    3,
    4,
    0,
    1,
    2,
    3,
    4,
    0,
    1,
    2,
    3,
    4
  );
  var colBasis = colPlace[thisSquare] * 15;
  var newNum = colBasis + getNewNum() + 1;

  do {
    newNum = colBasis + getNewNum() + 1;
  } while (usedNums[newNum]);

  usedNums[newNum] = true;
  document.getElementById(currentSquare).innerHTML = newNum;
  document.getElementById(currentSquare).onclick = () => {
    document.getElementById(currentSquare).innerHTML = `<img src="https://media.licdn.com/dms/image/C5603AQFlycWM-VLLzQ/profile-displayphoto-shrink_800_800/0?e=1576108800&v=beta&t=wwDv0DteLekUoRAw_Q1a0z6Ia8VgMz9lo4Ita_9pYpY"/>`
  };
}

function getNewNum() {
  return Math.floor(Math.random() * 15);
}

function anotherCard() {
  for (var i = 1; i < usedNums.length; i++) {
    usedNums[i] = false;
  }

  newCard();
  return false;
}
