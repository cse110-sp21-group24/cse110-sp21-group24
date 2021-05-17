/**
 * This class contains a list of funny jokes that can be added and getted.
 */

class test {
    constructor(){
        this.jokes = [];
    }

    /**
     * Return a random joke from the inner list
     * 
     * @returns {String} A random joke
     */
    getRandomJoke() {
        return this.jokes[Math.floor(Math.random() * this.jokes.length)];
    }

    /**
     * Print on the console a random joke. I hope it is funny!
     */
    sayRandomJoke() {
        console.log(this.getRandomJoke);
    }

    /**
     * This function adds a joke into the inner array
     * 
     * @param {String} joke A funny joke maybe
     */
    addJoke(joke){
        this.jokes.push(joke);
    }

}