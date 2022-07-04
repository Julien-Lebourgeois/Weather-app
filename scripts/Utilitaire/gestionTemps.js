const jourSemaine = [
  'Monday',
  'Tuesday',
  'wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

let ajd = new Date();
let options = { weekday: 'long' };
let jourActuel = ajd.toLocaleDateString('en-EN', options);
//console.log(jourActuel, ajd);

jourActuel = jourActuel.charAt(0).toUpperCase() + jourActuel.slice(1);

let tabJoursEnOrdre = jourSemaine
  .slice(jourSemaine.indexOf(jourActuel))
  .concat(jourSemaine.slice(0, jourSemaine.indexOf(jourActuel)));

//console.log(tabJoursEnOrdre);

export default tabJoursEnOrdre;
