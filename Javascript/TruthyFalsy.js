/*
        //Truthy value : control goes to if(true) block
        
        let age = 21;
        if (age) {
            console.log("Valid age");
        }
        else {
            console.log("Invalid age");
        }
            */

/*
        //undefined : Falsy value control goes to else block

        let age;
        console.log(age);  //undefined
        if (age) {
            console.log("Valid age");
        }
        else {
            console.log("Invalid age");
        }
            */

/*
        //empty string: Falsy value control goes to else block

        let age = '';
        if (age) {
            console.log("Valid age");
        }
        else {
            console.log("Invalid age");
        }
            */

/*
        //null value: Falsy value control goes to else block

        let age = null;
        if (age) {
            console.log("Valid age");
        }
        else {
            console.log("Invalid age");
        }
            */

/*
        //0 : Falsy value control goes to else block

        let age = 0;
        if (age) {
            console.log("Valid age");
        }
        else {
            console.log("Invalid age");
        }
            */

//NaN(Not a Number): Falsy value control goes to else block

let age = 5 / "abc";
console.log(age); //NaN
if (age) {
  console.log("Valid age");
} else {
  console.log("Invalid age");
}
