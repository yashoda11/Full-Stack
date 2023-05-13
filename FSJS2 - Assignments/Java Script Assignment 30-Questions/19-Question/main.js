// 19. Create a countries.js file and store the countries name into this file, create a file web_techs.js and store the popular web technology names into this file. Access both file in a third file named main.js


// import the variables from countries.js
import { countryNames } from './countries.js';
// import the variables from web_techs.js
import { webTechnologyNames } from './web_techs.js';

// Print list of contry Names
document.getElementById("country2").innerText = countryNames.join(" , ");
document.getElementById("country2").style.color = "#6F1E51";

// Print list of Web Technology Names
document.getElementById("web2").innerText = webTechnologyNames.join(' , ');
document.getElementById("web2").style.color = "#6F1E51";