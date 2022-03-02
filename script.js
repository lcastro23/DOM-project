//Make an empty HTML file, put an empty main tag inside the body. (DONE)
//In your JavaScript, use querySelector to get a reference to the main tag and save it in a variable named main. (DONE?)
const main = document.querySelector('main');
//Look up three good jokes and store them as separate variables in your JavaScript. (DONE)
const joke1="What pants do clouds wear? Thunder pants!"
const joke2="What is the best thing about Switzerland? I dunno know, but the flag is a big plus."
const joke3="I invented a new word! Plagiarism!"
//Define an HTML template with a template string. Make a heading for your template that says "My Jokes" and make a list of your three jokes, inserting the variables as items in the list.
const template = `
   <section>
      <h2>My Jokes</h2>
      <p> <li>${joke1}</li> <li>${joke2}</li> <li>${joke3}</li></p>
   </section>
`;
//Put the template inside the main tag.
main.innerHTML = template
//Make a paragraph tag with the document.createElement method and save it to a variable. (DONE)
const p = document.createElement('p');
//Add the text "That's all folks!" as text content to the newly created paragraph tag. (DONE)
p.textContent = "That's all folks!";
//Append the paragraph tag to the body tag of your HTML page. (DONE?)
document.body.appendChild(p);