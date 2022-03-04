
const main = document.querySelector('main');

const joke1="What pants do clouds wear? Thunder pants!"
const joke2="What is the best thing about Switzerland? I dunno know, but the flag is a big plus."
const joke3="I invented a new word! Plagiarism!"

const template = `
   <section>
      <h2>My Jokes</h2>
      <p> <li>${joke1}</li> <li>${joke2}</li> <li>${joke3}</li></p>
   </section>
`;

main.innerHTML = template
const p = document.createElement('p');
p.textContent = "That's all folks!";
document.body.appendChild(p);
