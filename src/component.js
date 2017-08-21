import style from './assets/index.css';
export default function() {
    const element = document.createElement('div')
    element.innerHTML = 'Hello word!!!'
    element.className = style.greenClass
    return element
}