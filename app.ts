
let result:string;


const clearBtn = document.querySelector('.clear') as HTMLButtonElement;

function generateButtons() {
    let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
    
      `
        <button
          class="btn"
          id='` + letter + `'
          onClick="GenerateLetter('` + letter + `')"
        >
          ` + letter + `
        </button>
      `).join('');
  
    document.querySelector('.letter').innerHTML += buttonsHTML;
  }


const GenerateLetter =(chosenLetter:any) =>{
    let i = '';
    console.log(i)

document.querySelector('.output').innerHTML += chosenLetter;

}
generateButtons()

clearBtn.addEventListener('click',()=>{
    document.querySelector('.output').innerHTML = "";
 
  })
