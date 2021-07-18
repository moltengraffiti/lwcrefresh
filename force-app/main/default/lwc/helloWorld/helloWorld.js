import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {

    //all client side logic in here
    @track dynamicGreeting = "World";

    greetingChangeHandler(e) {
        this.dynamicGreeting = e.target.value;
    }

}