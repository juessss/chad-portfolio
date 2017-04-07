class TextString {
    constructor(string) {
        if (typeof string !== 'string') {
            throw new Error('value must be a string');
        }
        
        this.value = string;
    }
    
    toString() {
        return this.value;
    }
}