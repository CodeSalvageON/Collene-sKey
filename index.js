// Collene's Key

const brainly_link = location.href;

function createShell () {
  const mode = prompt("Type 1 to use Skynet Unblocker. Type 2 to use the Google Proxy.");
  
  if (mode === "1") {
    alert("Alright, there will probably be an unsafe site warning. I know that the site is safe because I made the proxy myself. Now, simply click 'Show Details' and 'visit this unsafe site'.")
    ;
    location.href = "https://skynetunblocker.codesalvageon.repl.co/u/" + brainly_link;
  }
  
  else if (mode === "2") {
    location.href = "https://translate.google.com/translate?sl=auto&tl=es&u=" + brainly_link;
  }
  
  else {
    createShell();
  }
}

createShell();
