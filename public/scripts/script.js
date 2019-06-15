function bellCurve (mean, sd, x, y) {
    var pi = 3.14159;
    var e = 2.71828;
    //return 1/(sd * Math.sqrt(2 * pi)) * Math.pow(e, -1 * Math.pow( x - mean, 2)/(2 * Math.pow(sd, 2)));
    var val = (mean + Math.sqrt(Math.abs(-2 * Math.pow(sd, 2) * Math.log( x * sd * Math.sqrt(2 * pi))))) / 2
    //console.log(val);
    return shift(val, y);
}

function shift (x, y) {
    return getMinMax(Math.floor(x * (100 - y) + y), 0, 99);
}

function getMinMax (x, min, max) {
    if (x < min || x > max) {
        if (x < min) {
            return min;
        } else if (x > max) {
            return max;
        }
    } else {
        return x;
    }
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function getSecPosition (x) {
    var rand = getRndInteger (0, 49);
    if (x === "C") {
        if (rand < 30) {
            return "-";
        } else if (rand < 40) {
            return "OF";
        } else if (rand < 45) {
            return "1B";
        } else {
            return "1B/OF";
        }
    }
    if (x === "1B") {
        if (rand < 10) {
            return "-";
        } else {
            return "OF";
        }
    }
    if (x === "2B") {
        if (rand < 5) {
            return "-";
        } else if (rand < 15) {
            return "IF";
        } else if (rand < 20) {
            return "OF";
        } else if (rand < 30) {
            return "SS";
        } else if (rand < 40) {
            return "3B";
        } else {
            return "IF/OF";
        }
    }
    if (x === "3B") {
        if (rand < 5) {
            return "-";
        } else if (rand < 15) {
            return "IF";
        } else if (rand < 20) {
            return "OF";
        } else if (rand < 40) {
            return "SS";
        } else {
            return "IF/OF";
        }
    }
    if (x === "SS") {
        if (rand < 5) {
            return "-";
        } else if (rand < 15) {
            return "IF";
        } else if (rand < 20) {
            return "OF";
        } else if (rand < 40) {
            return "3B";
        } else {
            return "IF/OF";
        }
    }
    if (x === "LF" || x === "CF" || x === "RF") {
        if (rand < 5) {
            return "-";
        } else if (rand < 30) {
            return "OF";
        } else if (rand < 40) {
            return "1B";
        } else if (rand < 47) {
            return "1B/OF";
        } else if (rand < 48) {
            return "2B";
        } else if (rand < 49) {
            return "3B";
        } else if (rand < 50) {
            return "SS";
        }
    }
    if (x === "SP" || x === "RP" || x === "CP") {
      return "-";
    }
}

function getRndThrowHand (x) {
    var rand = getRndInteger (0, 49);
    if (x === "C") {
        if (rand < 5) {
            return "L";
        } else {
            return "R";
        }
    }
    if (x === "1B") {
        if (rand < 25) {
            return "L";
        } else {
            return "R";
        }
    }
    if (x === "2B") {
        if (rand < 3) {
            return "L";
        } else {
            return "R";
        }
    }
    if (x === "3B") {
        if (rand < 3) {
            return "L";
        } else {
            return "R";
        }
    }
    if (x === "SS") {
        if (rand < 3) {
            return "L";
        } else {
            return "R";
        }
    }
    if (x === "LF") {
        if (rand < 28) {
            return "L";
        } else {
            return "R";
        }
    }
    if (x === "CF") {
        if (rand < 28) {
            return "L";
        } else {
            return "R";
        }
    }
    if (x === "RF") {
        if (rand < 28) {
            return "L";
        } else {
            return "R";
        }
    }
    if (x === "SP") {
        if (rand < 21) {
            return "L";
        } else {
            return "R";
        }
    }
    if (x === "RP") {
        if (rand < 21) {
            return "L";
        } else {
            return "R";
        }
    }
    if (x === "CP") {
        if (rand < 21) {
            return "L";
        } else {
            return "R";
        }
    }
}

function getRndBatHand (x) { //input is throw arm
    var rand = getRndInteger (0, 9);
    if (rand !== 0) {
        return x;
    } else if(x === "L") {
        return "R";
    } else {
        return "L";
    }
}

function getRndJnkBall () {
    var arr = ["SB", "SL", "CB", "FK", "CH"];
    return arr[getRndInteger (0, 4)];
}

function getRndVelBall () {
    var arr = ["2F", "4F", "CF"];
    return arr[getRndInteger (0, 2)];
}

function getRndAnyBall () {
    var rand = getRndInteger (0, 1);
    if (rand === 0) {
        return getRndJnkBall();
    } else {
        return getRndVelBall();
    }
}

function getRndNumArsenal (pos) {
    var rand = getRndInteger (0, 2);
    if (pos === "SP") {
        if (rand === 0) {
            return 4;
        } else {
            return 5;
        }
    } else if (pos === "RP") {
        if (rand === 0) {
            return 3;
        } else {
            return 4;
        }
    } else {
        if (rand === 0) {
            return 2;
        } else {
            return 3;
        }
    }
}

function isPitchExistInArsenalAlready (checkPitch, a, b, c, d) {
    if (checkPitch === a || checkPitch === b || checkPitch === c || checkPitch === d) {
        return true;
    } else {
        return false;
    }
}

function getRndArsenal(pos, vel, jnk) {
    var numArsenal = getRndNumArsenal(pos);
    var pitch1 = "no pitch 1a";
    var pitch2 = "no pitch 2b";
    var pitch3 = "no pitch 3c";
    var pitch4 = "no pitch 4d";
    var pitch5 = "no pitch 5e";
    if (pos === "SP") { //Starting Pitcher
        if (vel > jnk) {
            if (numArsenal === 4) {
                pitch1 = getRndVelBall();
                pitch2 = getRndVelBall();
                while (isPitchExistInArsenalAlready(pitch2, pitch1, "", "", "")) {
                    pitch2 = getRndVelBall();
                }
                pitch3 = getRndJnkBall();
                pitch4 = getRndAnyBall();
                while (isPitchExistInArsenalAlready(pitch4, pitch1, pitch2, pitch3, "")) {
                    pitch4 = getRndAnyBall();
                }
                return pitch1 + " " + pitch2 + " " + pitch3 + " " + pitch4;
            } else {
                pitch1 = getRndVelBall();
                pitch2 = getRndVelBall();
                while (isPitchExistInArsenalAlready(pitch2, pitch1, "", "", "")) {
                    pitch2 = getRndVelBall();
                }
                pitch3 = getRndJnkBall();
                pitch4 = getRndJnkBall();
                while (isPitchExistInArsenalAlready(pitch4, pitch1, pitch2, pitch3, "")) {
                    pitch4 = getRndJnkBall();
                }
                pitch5 = getRndAnyBall();
                while (isPitchExistInArsenalAlready(pitch5, pitch1, pitch2, pitch3, pitch4)) {
                    pitch5 = getRndAnyBall();
                }
                return pitch1 + " " + pitch2 + " " + pitch3 + " " + pitch4 + " " + pitch5;
            }
        } else {
            if (numArsenal === 4) {
                pitch1 = getRndJnkBall();
                pitch2 = getRndJnkBall();
                while (isPitchExistInArsenalAlready(pitch2, pitch1, "", "", "")) {
                    pitch2 = getRndJnkBall();
                }
                pitch3 = getRndVelBall();
                pitch4 = getRndAnyBall();
                while (isPitchExistInArsenalAlready(pitch4, pitch1, pitch2, pitch3, "")) {
                    pitch4 = getRndAnyBall();
                }
                return pitch1 + " " + pitch2 + " " + pitch3 + " " + pitch4;
            } else {
                pitch1 = getRndVelBall();
                pitch2 = getRndVelBall();
                while (isPitchExistInArsenalAlready(pitch2, pitch1, "", "", "")) {
                    pitch2 = getRndVelBall();
                }
                pitch3 = getRndJnkBall();
                pitch4 = getRndJnkBall();
                while (isPitchExistInArsenalAlready(pitch4, pitch1, pitch2, pitch3, "")) {
                    pitch4 = getRndJnkBall();
                }
                pitch5 = getRndAnyBall();
                while (isPitchExistInArsenalAlready(pitch5, pitch1, pitch2, pitch3, pitch4)) {
                    pitch5 = getRndAnyBall();
                }
                return pitch1 + " " + pitch2 + " " + pitch3 + " " + pitch4 + " " + pitch5;
            }
        }
    } else if (pos === "RP") { //Relief Pitcher
        if (vel > jnk) {
            if (numArsenal === 3) {
                pitch1 = getRndVelBall();
                pitch2 = getRndJnkBall();
                pitch3 = getRndAnyBall();
                while (isPitchExistInArsenalAlready(pitch3, pitch1, pitch2, "", "")) {
                    pitch3 = getRndAnyBall();
                }
                return pitch1 + " " + pitch2 + " " + pitch3;
            } else {
                pitch1 = getRndVelBall();
                pitch2 = getRndVelBall();
                while (isPitchExistInArsenalAlready(pitch2, pitch1, "", "", "")) {
                    pitch2 = getRndVelBall();
                }
                pitch3 = getRndJnkBall();
                pitch4 = getRndAnyBall();
                while (isPitchExistInArsenalAlready(pitch4, pitch1, pitch2, pitch3, "")) {
                    pitch4 = getRndAnyBall();
                }
                return pitch1 + " " + pitch2 + " " + pitch3 + " " + pitch4;
            }
        } else {
            if (numArsenal === 3) {
                pitch1 = getRndVelBall();
                pitch2 = getRndJnkBall();
                pitch3 = getRndAnyBall();
                while (isPitchExistInArsenalAlready(pitch3, pitch1, pitch2, "", "")) {
                    pitch3 = getRndAnyBall();
                }
                return pitch1 + " " + pitch2 + " " + pitch3;
            } else {
                pitch1 = getRndJnkBall();
                pitch2 = getRndJnkBall();
                while (isPitchExistInArsenalAlready(pitch2, pitch1, "", "", "")) {
                    pitch2 = getRndJnkBall();
                }
                pitch3 = getRndVelBall();
                pitch4 = getRndAnyBall();
                while (isPitchExistInArsenalAlready(pitch4, pitch1, pitch2, pitch3, "")) {
                    pitch4 = getRndAnyBall();
                }
                return pitch1 + " " + pitch2 + " " + pitch3 + " " + pitch4;
            }
        }
    } else { //Closing Pitcher
        if (numArsenal === 2) {
            pitch1 = getRndVelBall();
            pitch2 = getRndJnkBall();
            return pitch1 + " " + pitch2;
        } else {
            pitch1 = getRndVelBall();
            pitch2 = getRndJnkBall();
            pitch3 = getRndAnyBall();
            while (isPitchExistInArsenalAlready(pitch3, pitch1, pitch2, "", "")) {
                pitch3 = getRndAnyBall();
            }
            return pitch1 + " " + pitch2 + " " + pitch3;
        }
    }
}

function getRndAttGivenPos (att, pos) {
    if (att === "arm"){
      if (pos === "CP" || pos === "RP" || pos === "CP") {
        return "0"
      }
    }
    if (att === "velocity" || att === "junk" || att === "accuracy") {
      if (pos === "1B" || pos === "2B" || pos === "3B" || pos === "C" || pos === "SS" || pos === "LF" || pos === "CF" || pos === "RF") {
        return "0"
      }
    }
    var shift
    if (att === "power") {
      if (pos === "1B" || pos === "LF" || pos === "CF" || pos === "RF") {
        shift = 30;
      } else if (pos === "2B" || pos === "3B" || pos === "C" || pos === "SS") {
        shift = -20;
      } else { //if pitcher
        shift = -50;
      }
    }
    if (att === "contact") {
      if (pos === "1B" || pos === "LF" || pos === "CF" || pos === "RF") {
        shift = 30;
      } else if (pos === "2B" || pos === "3B" || pos === "C" || pos === "SS") {
        shift = -20;
      } else { //if pitcher
        shift = -50;
      }
    }
    if (att === "speed") {
      if (pos === "1B" || pos === "2B" || pos === "3B" || pos === "C" || pos === "SS" || pos === "LF" || pos === "CF" || pos === "RF") {
        shift = 0;
      } else { //if pitcher
        shift = -20;
      }
    }
    if (att === "fielding") {
      if (pos === "LF" || pos === "CF" || pos === "RF") {
        shift = -20;
      } else if (pos === "1B") {
        shift = 0;
      } else if (pos === "2B") {
        shift = 10;
      } else if (pos === "3B" || pos === "C" || pos === "SS") {
        shift = 20;
      } else { //if pitcher
        shift = -50;
      }
    }
    if (att === "arm") {
      if (pos === "LF" || pos === "CF" || pos === "RF") {
        shift = 10;
      } else if (pos === "1B") {
        shift = -30;
      } else if (pos === "2B") {
        shift = -10;
      } else if (pos === "3B" || pos === "SS") {
        shift = 30;
      } else if (pos === "C") {
        shift = 40;
      } else { //if pitcher
        shift = -50;
      }
    }
    if (att === "velocity") {
        shift = 10;
    }
    if (att === "junk") {
        shift = 10;
    }
    if (att === "accuracy") {
      if (pos === "SP" || pos === "RP") {
        shift = 0;
      } else if (pos === "CP") {
        shift = 10;
      }
    }
    return bellCurve(.5, .4, Math.random(), shift);
}

function getRndPosition () {
    var rand = 0;
    rand = getRndInteger (0, 29);
    if (rand < 17) { //infielder
        var randIF = 0;
        randIF = getRndInteger (0, 7);
        var pos = "";
        if (randIF === 0) {
            pos = "C";
        } else if (randIF === 1) {
            pos = "1B";
        } else if (randIF === 2) {
            pos = "2B";
        } else if (randIF === 3) {
            pos = "3B";
        } else if (randIF === 4) {
            pos = "SS";
        } else if (randIF === 5) {
            pos = "LF";
        } else if (randIF === 6) {
            pos = "CF";
        } else if (randIF === 7) {
            pos = "RF";
        }
    } else if (rand >= 17) { //pitcher
        var randIF = 0;
        randIF = getRndInteger (0, 7);
        if (randIF <= 3) {
            pos = "SP";
        } else if (randIF <= 6) {
            pos = "RP";
        } else if (randIF === 7) {
            pos = "CP";
        }
    }
    return pos;
}

//document.getElementById('init').addEventListener('click', function() {
function generateNewPlayer () {
    // document.getElementById("name").value = "";
    // document.getElementById("arsenal").value = "";
    // document.getElementById("position").value = "";
    // document.getElementById("secPos").value = "";
    // document.getElementById("power").value = 0;
    // document.getElementById("contact").value = 0;
    // document.getElementById("speed").value = 0;
    // document.getElementById("fielding").value = 0;
    // document.getElementById("arm").value = 0;
    // document.getElementById("velocity").value = 0;
    // document.getElementById("junk").value = 0;
    // document.getElementById("accuracy").value = 0;
    // document.getElementById("throw").value = "";
    // document.getElementById("bat").value = "";
    // document.getElementById("total").value = 0;
    var pos = getRndPosition();
    document.getElementById("name").value = RandomName ();
    document.getElementById("position").value = pos;
    document.getElementById("secPos").value = getSecPosition(pos);
    document.getElementById("power").value = getRndAttGivenPos("power", pos)
    document.getElementById("contact").value = getRndAttGivenPos("contact", pos)
    document.getElementById("speed").value = getRndAttGivenPos("speed", pos)
    document.getElementById("fielding").value = getRndAttGivenPos("fielding", pos)
    document.getElementById("arm").value = getRndAttGivenPos("arm", pos)
    document.getElementById("velocity").value = getRndAttGivenPos("velocity", pos);
    document.getElementById("junk").value = getRndAttGivenPos("junk", pos);
    document.getElementById("accuracy").value = getRndAttGivenPos("accuracy", pos);
    document.getElementById("throw").value = getRndThrowHand(document.getElementById("position").value);
    document.getElementById("bat").value = getRndBatHand(document.getElementById("throw").value);
    document.getElementById("arsenal").value = "";
    if (pos === "SP" || pos === "RP" || pos === "CP") {
      document.getElementById("arsenal").value = getRndArsenal(pos, document.getElementById("velocity").value, document.getElementById("junk").value);
    }
    //document.getElementById("total").value = parseInt(document.getElementById("power").value)+parseInt(document.getElementById("contact").value)+parseInt(document.getElementById("speed").value)+parseInt(document.getElementById("fielding").value)+parseInt(document.getElementById("arm").value)+parseInt(document.getElementById("velocity").value)+parseInt(document.getElementById("junk").value)+parseInt(document.getElementById("accuracy").value);
}

var player = [];
var currentId = 1;
function addPlayerToList () {
  player.push({
      id: currentId,
      name: document.getElementById("name").value,
      arsenal: document.getElementById("arsenal").value,
      position: document.getElementById("position").value,
      secPos: document.getElementById("secPos").value,
      power: document.getElementById("power").value,
      contact: document.getElementById("contact").value,
      speed: document.getElementById("speed").value,
      fielding: document.getElementById("fielding").value,
      arm: document.getElementById("arm").value,
      velocity: document.getElementById("velocity").value,
      junk: document.getElementById("junk").value,
      accuracy: document.getElementById("accuracy").value,
      bat: document.getElementById("bat").value,
      throw: document.getElementById("throw").value
  });
  currentId = currentId + 1;
    $("tbody").append("\
        <tr>\
            <td class=id>" + player[player.length-1].id + "</td>\
            <td>" + player[player.length-1].name + "</td>\
            <td>" + player[player.length-1].arsenal + "</td>\
            <td>" + player[player.length-1].position + "</td>\
            <td>" + player[player.length-1].secPos + "</td>\
            <td>" + player[player.length-1].power + "</td>\
            <td>" + player[player.length-1].contact + "</td>\
            <td>" + player[player.length-1].speed + "</td>\
            <td>" + player[player.length-1].fielding + "</td>\
            <td>" + player[player.length-1].arm + "</td>\
            <td>" + player[player.length-1].velocity + "</td>\
            <td>" + player[player.length-1].junk + "</td>\
            <td>" + player[player.length-1].accuracy + "</td>\
            <td>" + player[player.length-1].bat + "</td>\
            <td>" + player[player.length-1].throw + "</td>\
        </tr>\
    ");
}

function toggleManyPlayers() {
    if(enableCreateLotsOfPlayers) {
        enableCreateLotsOfPlayers = false;
    } else {
        enableCreateLotsOfPlayers = true;
    }
    $("#toggleManyPlayers").toggleClass("btn-danger");
    $("#toggleManyPlayers").toggleClass("btn-success");
}

window.onload = function () {
    $("#get-button").click();
}

var enableCreateLotsOfPlayers = false;
setInterval(function(){
    if (enableCreateLotsOfPlayers) {
        $("#generateNewPlayer").click();
        $("#addPlayerToList").click();
    }
}, 1000);

$("#generateNewPlayer").on("click", function(){
    generateNewPlayer ();
});

$("#addPlayerToList").on("click", function(){
    addPlayerToList ();
});
