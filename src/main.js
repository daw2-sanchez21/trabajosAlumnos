// Import our custom CSS
import './scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

import { home } from './vistas/home'
import { prueba } from './vistas/prueba'
import { header } from './componentes/header'
import { footer } from './componentes/footer'

document.querySelector('header').innerHTML = header.template
document.querySelector('main').innerHTML = prueba.template
prueba.script()
document.querySelector('footer').innerHTML = footer.template
