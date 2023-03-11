const BLACKLISTED_KEY_CODES = [ 38 ];
const COMMANDS = {
    help:
    'Supported commands: <span class="code">about</span>, <span class="code">experience</span>, <span class="code">education</span>, <span class="code">skills</span>, <span class="code">certifications</span>, <span class="code">blog</span>, <span class="code">git</span>, <span class="code">project</span>, <span class="code">contact</span>',
    
    about:
    "▶️ Hello guys, I'm <a class='code'> Bhavin Kaloliya </a> <br>▶️ Completed Diploma in <a class='code'> Information Technology </a> from R.C.T.I. (Ahmedabad, India)<br>▶️ Currently doing BTech in <a class='code'> Cyber Security </a> from Silver Oak University (Ahmedabad, India)",
    
    skills:
    "▶️ Blogging</a><br>▶️ Digital Forensics<br>▶️ SOC Analyst<br>▶️ CTF Player",
    
    education:
    "Diploma -  Information Technology (Completed) <br> BTech - Computer Science & Engineering with Specialization in Cyber Security (Currently Studying)",
    
    experience:
    '▶️ Intern as Cyber Security Analyst at Hacker Bro Technologies (Present) <br> ▶️ Vice Chairperson of Creative Committee in IEEE SOU SB (2022 to 2023) <br> ▶️ Intern as Cyber Security Analyst at Techdefence (2 Months) <br> ▶️ Intern as Anti phishing intern at Anti Cyber Crime Society (25 days) <br> ▶️ Volunteering at Gujarat Police and CID Crime Gujarat (Present)',
  
    certifications: 
    "▶️ NDE - Network Defense Essentials<br>▶️ DFE - Digital Forensics Essentials<br>▶️ Police Hackathon conducted by SRMIST<br>▶️ Indian Army Cyber Security Hackathon conducted by Sainya-Ranakshetram 2021<br>And many more, you can check my <a href='https://www.linkedin.com/in/bhavin-kaloliya/' class='code'> LinkedIn </a> Profile.",
  
    blog:
    "You can read my blogs on <a href='https://medium.com/@bhavinkaloliya' class='code'>Medium</a>", 

    git:
    "You can find my <a href='https://github.com/cyber-bhavin' class='code'> Github </a>account here", 

    project:
    "Our team's project in last year of diploma --> <a href='https://jayrajs-git.github.io/3ncrypt10nw0rld.io/' class='code'> Encryption World </a>",
  
    contact:
    "You can contact me on Linkedin, Twitter or via the mail:<br><a href='https://www.linkedin.com/in/bhavin-kaloliya/' class='code'>▶️ Linkedin</a> <br> <a href='https://twitter.com/BhavinKaloliya' class='code'>▶️ Twitter</a> <br> <a href='https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRwPVlKncGbWtXqJCKHsnRvDjpVxhZMLppzXbmdrQnCqkdwlQrkLDFPJLfKCzNpSnBHxrGbb' class='code'>▶️ Mail</a>",
};
let userInput, terminalOutput;

const app = () => {
  userInput = document.getElementById("userInput");
  terminalOutput = document.getElementById("terminalOutput");
  document.getElementById("dummyKeyboard").focus();
  console.log("Application loaded");
};

const execute = function executeCommand(input) {
  let output;
  input = input.toLowerCase();
  if (input.length === 0) {
    return;
  }
  output = `<div class="terminal-line"><span class="success">➜</span> <span class="directory">~</span> ${input}</div>`;
  if (!COMMANDS.hasOwnProperty(input)) {
    output += `<div class="terminal-line">no such command: ${input}</div>`;
    console.log("Oops! no such command");
  } else {
    output += COMMANDS[input];
  }

  terminalOutput.innerHTML = `${
    terminalOutput.innerHTML
  }<div class="terminal-line">${output}</div>`;
  terminalOutput.scrollTop = terminalOutput.scrollHeight;
};

const key = function keyEvent(e) {
  const input = userInput.innerHTML;

  if (BLACKLISTED_KEY_CODES.includes(e.keyCode)) {
    return;
  }

  if (e.key === "Enter") {
    execute(input);
    userInput.innerHTML = "";
    return;
  }

  userInput.innerHTML = input + e.key;
};

const backspace = function backSpaceKeyEvent(e) {
  if (e.keyCode !== 8 && e.keyCode !== 46) {
    return;
  }
  userInput.innerHTML = userInput.innerHTML.slice(
    0,
    userInput.innerHTML.length - 1
  );
};

document.addEventListener("keydown", backspace);
document.addEventListener("keypress", key);
document.addEventListener("DOMContentLoaded", app);
