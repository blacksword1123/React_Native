const site_name = "Information Technology";
const base_url = "http://it.tni.ac.th";
const color_theme = "blue";
const allow_signup = true;

console.log("Welcome to " + site_name);

let languages = ["JavaScript", "Python", "Ruby", "Java", "PHP"];
for (let i in languages) {
  let url = base_url + "lang/" + languages[i].toLowerCase();
  console.log(`- ${languages[i]} programming (${url})`);
}

console.log("Footer");

let footer = ["About", "Privacy"];
for (let i in footer) {
  let url = base_url + " " + footer[i].toLowerCase();
  console.log(`- ${footer[i]} (${url})`);
}

if (allow_signup) {
  console.log("[Sign up for new settle]");
}

console.log(`© ${new Date().getFullYear()} ${site_name}`);
