import { LightningElement, track } from 'lwc';

export default class Calculator extends LightningElement {

    @track currentResult;
    @track previousResults = [];
    @track showPreviousResults = false;

    firstNumber;
    secondNumber;

    numberChangeHandler(e) {
        const inputBoxName = e.target.name;
        if (inputBoxName === "firstNumber") {
            this.firstNumber = e.target.value;
        }
        else if (
            inputBoxName === "secondNumber") {
            this.secondNumber = e.target.value;
        }

    }


    addHandler() {
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);
        // let addResult = firstN + secondN;
        // this.currentResult = `Adding ${firstN} to ${secondN} equals ${addResult}`;
        this.currentResult = `Adding ${firstN} to ${secondN} equals ${firstN + secondN}`;
        this.previousResults.push(this.currentResult);
    }

    subtractHandler(e) {
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);
        this.currentResult = `Subtracting ${secondN} from ${firstN} equals ${firstN - secondN}`;
        this.previousResults.push(this.currentResult);
    }
    multiplyHandler(e) {
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);
        this.currentResult = `Multiplying ${firstN} by ${secondN} equals ${firstN * secondN}`;
        this.previousResults.push(this.currentResult);
    }
    divideHandler(e) {
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);
        this.currentResult = `Dividing ${firstN} by ${secondN} equals ${firstN / secondN}`;
        this.previousResults.push(this.currentResult);
    }

    showPrevious(e) {
        this.showPreviousResults = e.target.checked;
    }
}

