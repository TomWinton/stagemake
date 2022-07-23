import {inputWithLabel} from "../utils/lazy"
export class createSectionItem
{
    rowInput: HTMLInputElement;
    seatLengthInput: HTMLInputElement;
    createButton: HTMLButtonElement;
    Container: HTMLDivElement
    constructor(createButton: HTMLButtonElement)
    {
       const row =  inputWithLabel("rowCount","row Count","4");
       this.rowInput = row.getElementsByTagName("input")[0];

       const seat =  inputWithLabel("seatCount","Seat Length","10");
       this.seatLengthInput = row.getElementsByTagName("input")[0];
        this.Container =<HTMLDivElement>(document.createElement('div'));
        const titleLegend  =<HTMLLegendElement>(document.createElement('legend'));
        titleLegend.innerHTML="Add Section:"
        this.Container.appendChild(titleLegend);
        const inputContainer =<HTMLDivElement>(document.createElement('div'));
        inputContainer.appendChild(seat);
        inputContainer.appendChild(row);
        const buttonContainer =<HTMLDivElement>(document.createElement('div'));
        buttonContainer.style.clear = "both";
        buttonContainer.appendChild(createButton)
        this.Container.appendChild(inputContainer);
        this.Container.appendChild(buttonContainer);
        this.Container.id = "createButtonContainer";
        this.Container.className = "buttonSection";
    }
}