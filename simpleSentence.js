var colors = require('./colors.js');
var helpers = require('./helpers.js');
var verbs = require('./verbs.js');

function getRandomFromArray(array){
  var size = array.length;
  var random = Math.floor(Math.random() * size);
  return array[random];
}

function getRandomNoun(){
  return getRandomFromArray(colors.COLORS_ARR);
}

function getNominalPhrase(nounObj){
  var article = (nounObj.femenine) ? //el ? es un if y : es un else
    getRandomFromArray(helpers.FEMENINE_ARTICLES) :
    getRandomFromArray(helpers.MASCULINE_ARTICLES);

    return `${article} ${nounObj.name}`;
  // console.log(nounObj.name);
  // console.log(article);
}

function getVerbalPhrase(){
  var verb = getRandomFromArray(verbs.VERBS_ARR);
  var verbalTime = getRandomFromArray(helpers.VERBAL_TIMES);
  var conjugatedVerb = conjugateVerb(verb.name, verbalTime);
  var verbalNoun = getRandomNoun();
  var nominalPhrase = getNominalPhrase(verbalNoun);

  if(verb.preposition){
    nominalPhrase = addPreposition(nominalPhrase);
  }

  return `${conjugatedVerb} ${nominalPhrase}`

  // console.log(conjugatedVerb);
  // console.log(nominalPhrase);
}

function conjugateVerb(verb, verbalTime){
  var ending = verb.substr(verb.length - 2); //le dices que acceda como un nivel mas adentro
  var possibleEndings = helpers.VERBAL_TERMINATIONS[verbalTime];
  var newEnding = possibleEndings[ending];
  return verb.replace(ending, newEnding);

  // console.log(verb);
  // console.log(verbalTime);
}

function addPreposition(nominalPhrase){
  if(nominalPhrase.startsWith("el")){
    return 'al' + nominalPhrase.replace('el', '');
  }

  return `a ${nominalPhrase}`;
}

exports.simpleSentence = function(){
  var subjectNoun = getRandomNoun();
  var nominalPhrase = getNominalPhrase(subjectNoun);
  var verbalPhrase = getVerbalPhrase();

  return "Si te gusta " + `${nominalPhrase} ` + "entonces " + `${verbalPhrase}`
  // var noun = getRandomFromArray(nouns.NOUNS_ARR);
  // console.log(noun);
}

// buildSimpleSentence();
