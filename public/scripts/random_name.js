var malename = new Array(
"Allen","Bob","Carlton",
"David","Ernie","Foster",
"George","Howard","Ian",
"Jeffery","Kenneth","Lawrence",
"Michael","Nathen","Orson",
"Peter","Quinten","Reginald",
"Stephen","Thomas","Morris",
"Victor","Walter","Xavier",
"Charles","Anthony","Gordon",
"Percy","Conrad","Quincey",
"Armand","Jamal","Andrew",
"Matthew","Mark","Gerald"
)
var femalename = new Array(
"Alice","Bonnie","Cassie",
"Donna","Ethel","Grace",
"Heather","Jan","Katherine",
"Julie","Marcia","Patricia",
"Mabel","Jennifer","Dorthey",
"Mary Ellen","Jacki","Jean",
"Betty","Diane","Annette",
"Dawn","Jody","Karen",
"Mary Jane","Shannon","Stephanie",
"Kathleen","Emily","Tiffany",
"Angela","Christine","Debbie",
"Karla","Sandy","Marilyn",
"Brenda","Hayley","Linda"
)
var lastname = new Array(
"Adams","Bowden","Conway",
"Darden","Edwards","Flynn",
"Gilliam","Holiday","Ingram",
"Johnson","Kraemer","Hunter",
"McDonald","Nichols","Pierce",
"Sawyer","Saunders","Schmidt",
"Schroeder","Smith","Douglas",
"Ward","Watson","Williams",
"Winters","Yeager","Ford",
"Forman","Dixon","Clark",
"Churchill","Brown","Blum",
"Anderson","Black","Cavenaugh",
"Hampton","Jenkins","Prichard"
)
// function getRndInteger(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) ) + min;
// }
function RandomName() {
  var r = 0;
  var i = 0;
  r = Math.floor(Math.random() * lastname.length);
  var torf = getRndInteger(0, 1);
  var first = "";
  var last = "";
  if(torf == 0) {
    i = Math.floor(Math.random() * femalename.length);
    first=femalename[i]
    last=lastname[r]
  }
  else {
    i = Math.floor(Math.random() * malename.length);
    first=malename[i]
    last=lastname[r]
  }
  return first + " " + last
}
