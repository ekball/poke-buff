// regex that defines an email address
export function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// function to pick a random number out of the max
export var randomize = function(max) {

    var value = Math.floor(Math.random() * max);
  
    return value;
  
};

export var capitalize = function(string) {

    var firstLetter = string.substring(0, 1);

    firstLetter.toUpperCase();

}