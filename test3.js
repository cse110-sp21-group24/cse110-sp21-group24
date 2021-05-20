 /**
     * Returns something
     * 
     * @returns {Something} A random joke
     */
  getRandomJoke() {
    return this.jokes[Math.floor(Math.random() * this.jokes.length)];
}