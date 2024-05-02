import { websiteObjects } from "../../../js/websiteObjects.mjs";

const optionsHeader = document.querySelector('#optionsHeader');
const menuOptions = websiteObjects[0].menuOptionsObject;


export default function printHeaderOptions() {
    menuOptions.forEach(i => {
        const optionName = i.name.toLowerCase();

        const button = document.createElement('button');
        button.classList.add('options');
        button.id = `${optionName}Option`;

        const underclass = document.createElement('span');
        underclass.classList.add(`${i.underclass}`);

        const buttonText = document.createElement('span');
        buttonText.classList.add('text');
        buttonText.innerText = `${i.name}`;

        optionsHeader.appendChild(button);
        button.append(underclass, buttonText);
    });
}
