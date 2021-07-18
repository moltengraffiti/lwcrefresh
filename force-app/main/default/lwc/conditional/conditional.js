import { LightningElement, track } from 'lwc';

export default class Conditional extends LightningElement {
    @track displayDiv = false;
    @track cityList = ["Sydney", "Dublin", "Cork", "Dubai"];


    showDivHandler(e) {
        this.displayDiv = e.target.checked;

    }
}