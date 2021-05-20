 /**
     * Return a random joke from the inner list
     * 
     * @returns {String} A random joke
     */
  getRandomJoke() {
    return this.jokes[Math.floor(Math.random() * this.jokes.length)];
}