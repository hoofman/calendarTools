/*

Calendar Tools For DreamSpell / LongCount (tzolkin / haab)

created 13.0.6.12.15 - 13 earth - luke@sapho.co.uk

in lak'ech;

*/

function daysSinceEpoch(){
	var now = new Date();
	return Math.floor(now/8.64e7);
}

function getLongCountKin(){
  var epochKinLC = 65;
  var fullDaysSinceEpoch = daysSinceEpoch();
  var lcKinCnt = fullDaysSinceEpoch + epochKinLC;
  return lcKinCnt % 260;
}

function getLongCountKinHaab(){
    var offset = 149;
    var lcKin = getLongCountKin();
    var haabKin = lcKin + offset;
    return haabKin % 260;
}


function getDreamSpellKin(){
  var epochKinDS = 111;
  var fullDaysSinceEpoch = daysSinceEpoch();
  var dsKinCnt = fullDaysSinceEpoch + epochKinDS;
  return dsKinCnt % 260;
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

function getToneSeal(kin){

  var tone = kin % 13;
  if(tone===0){tone=13}
  var seal = kin % 20;
  if(seal==0){seal=20};
  var colour = seal % 4;
  if(colour===0){colour=4}

  return getColour(colour-1)+' '+getTone(tone-1)+' '+getSeal(seal-1)+' ';
}




function testAll(){
  console.log('testing all ..')
  console.log('daysSinceEpoch: ',daysSinceEpoch());
  console.log('getLongCountKin: ', getLongCountKin());
  console.log('getToneSeal LongCount Tzolkin: ',getToneSeal(getLongCountKin()));
  console.log('getDreamSpellKin: ', getDreamSpellKin());
  console.log('getToneSeal DreamSpell: ',getToneSeal(getDreamSpellKin()));
  console.log('getLongCountKinHaab: ', getLongCountKinHaab());
  console.log('getToneSeal LongCount Haab: ', getToneSeal(getLongCountKinHaab()));
  return document.write('console.logging tests');
}
