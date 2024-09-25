import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
//importar un modulo 
// import './topics/01-basic-types.ts'
import './topics/02-object-interfaces.ts'
import './topics/03-fuctions.ts'
import './topics/04-homework-types.ts'
import './topics/05-basic-destructuring.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a>
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a>
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
