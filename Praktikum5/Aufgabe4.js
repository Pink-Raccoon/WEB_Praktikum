/*if(typeof Object.beget !== "function"){
    Object.beget = function (o){
        let F = function () {};
        F.prototype = o;
        return new F()
    }
}*/

const myObj = {
    city: "Madrid",
    greet(){
        console.log(`Greetings from ${this.city}`);
    },
}
console.log(Object.prototype.getPrototypeOf(myObj))