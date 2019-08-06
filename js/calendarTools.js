/*

Calendar Tools For DreamSpell / LongCount (tzolkin / haab)

created 13.0.6.12.15 - 13 earth - luke@sapho.co.uk

in lak'ech;

*/



function daysSinceEpoch(dateStr){
if(!dateStr){
	dateStr=0
}
	// console.log('y: ',year,'m: ',month,'day: ',day);
	//console.log(typeof year);
	var now = new Date(dateStr);
  console.log('now: ',now);
  //console.log(Math.floor(now/8.64e7));
	return Math.floor(now/8.64e7);
}

function getLongCountKin(dateStr){
  var epochKinLC = 65;
  var fullDaysSinceEpoch = daysSinceEpoch(dateStr);
  var lcKinCnt = fullDaysSinceEpoch + epochKinLC;
  return lcKinCnt % 260;
}

function getLongCountKinHaab(dateStr){
    var offset = 149;
    var lcKin = getLongCountKin(dateStr);
    var haabKin = lcKin + offset;
    return haabKin % 260;
}


function getDreamSpellKin(dateStr){

  var epochKinDS = 122;

  var fullDaysSinceEpoch = daysSinceEpoch(dateStr);
  var dsKinCnt = fullDaysSinceEpoch + epochKinDS;
  return dsKinCnt % 260;
}

function updateKin(){
  var day = document.getElementById("day").value;
  var month = document.getElementById("month").value;
  var year = document.getElementById("year").value;

  //var foo=getDreamSpellKin(1974,12,21)
console.log(daysSinceEpoch(1974,12,21));
var foo=daysSinceEpoch(1974,12,21)
var bar = getDreamSpellKin(y,m,d)
console.log(y)

  //return getToneSealImg(foo)

}


function adjustForLeapYears(){
  var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();
if(dd<10) {
dd='0'+dd
}
if(mm<10) {
mm='0'+mm
}
today = yyyy+'/'+mm+'/'+dd;
var date2 = new Date(today);
var date1 = new Date(1900,0,1);
var timeDiff = Math.abs(date2.getTime() - date1.getTime());
this.dayDifference = Math.ceil(timeDiff / (1000 * 3600 * 24));
console.log('days: ', this.dayDifference)
//console.log('kin: ',getDreamSpellKin(this.dayDifference));
var epochKinDS = 207;

//var fullDaysSinceEpoch = daysSinceEpoch();
var dsKinCnt = this.dayDifference - epochKinDS;
console.log('kin: ',dsKinCnt % 260)
console.log('date1: ',date1);
return this.dayDifference;
}

function getTone(tone){
  var tones =['magnetic','lunar','electric','self-existing','overtone','rythmic','resonant','galactic','solar','planetary','spectral','crystal','cosmic'];
  return tones[tone];
}

function getSeal(seal){
  var seals =['dragon','wind','night','seed','serpent','worldbridger','hand','star','moon','dog','monkey','human','skywalker','wizard','eagle','warrior','earth','mirror','storm','sun','null'];
  return seals[seal];
}

function getColour(colour){
  var colours =['red','white','blue','yellow'];
  return colours[colour];
}

function getToneSealImg(kin){

  var tone = kin % 13;
  if(tone===0){tone=13}
  var seal = kin % 20;
  if(seal==0){seal=20};
  var colour = seal % 4;
  if(colour===0){colour=4}

  return '<img src='+'"'+'glyphs/tone'+tone+'.gif'+'"'+'></img>'+'<br>'+'<img src='+'"'+'glyphs/glyph'+seal+'.png'+'"'+' width='+'"'+'50px'+'"'+' height='+'"'+'50px'+'"'+'></img>'
}

function getToneSealTxt(kin){

  var tone = kin % 13;
  if(tone===0){tone=13}
  var seal = kin % 20;
  if(seal==0){seal=20};
  var colour = seal % 4;
  if(colour===0){colour=4}

  return getColour(colour-1)+' '+getTone(tone-1)+' '+getSeal(seal-1)+' ';
}

function showGlyph(foo){

  return '<img src='+'"'+'glyphs/glyph'+foo+'.png'+'"'+'></img>'

}

function showTone(foo){

  return '<img src='+'"'+'glyphs/tone'+foo+'.gif'+'"'+' width='+'"'+'30px'+'"'+' height='+'"'+'30px'+'"'+'></img>'

}

/* birth date selector gregorian */
var monthtext=['January','February','March','April','May','June','July','August','September','October','November','December'];

function date_populate(dayfield, monthfield, yearfield){
    var today=new Date();
    var dayfield=document.getElementById(dayfield)
    var monthfield=document.getElementById(monthfield)
    var yearfield=document.getElementById(yearfield)
    for (var i=0; i<31; i++)
        dayfield.options[i]=new Option(i+1, i+1)
    dayfield.options[today.getDate()]=new Option(today.getDate(), today.getDate(), true, true) //select today's day
    for (var m=0; m<12; m++)
        monthfield.options[m]=new Option(m, monthtext[m])
    monthfield.options[today.getMonth()]=new Option(monthtext[today.getMonth()], monthtext[today.getMonth()], true, true) //select today's month
    var thisyear=today.getFullYear()
    for (var y=0; y<100; y++){
        yearfield.options[y]=new Option(thisyear, thisyear)
        thisyear-=1
    }
    yearfield.options[0]=new Option(today.getFullYear(), today.getFullYear(), true, true) //select today's year
}
/****************************************/



module.exports = {
  testConsole: function () {
    console.log('testing all ..')
    console.log('daysSinceEpoch: ',daysSinceEpoch());
    console.log('getLongCountKin: ', getLongCountKin());
    console.log('getToneSeal LongCount Tzolkin: ',getToneSeal(getLongCountKin()));
    console.log('getDreamSpellKin: ', getDreamSpellKin());
    console.log('getToneSeal DreamSpell: ',getToneSeal(getDreamSpellKin()));
    console.log('getLongCountKinHaab: ', getLongCountKinHaab());
    console.log('getToneSeal LongCount Haab: ', getToneSeal(getLongCountKinHaab()));
  },
  testBrowser: function() {
    // bla
  }

}
