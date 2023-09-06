// Super Class
class Media { // creating super class
    constructor(keyOne) {
      this._title = keyOne // title is a string
      this._isCheckedOut = false; // isCheckedOut is a boolean
      this._ratings = [] // ratings is an array
    }
    get title() { // getter method for title
      return this._title;
    }
    get isCheckedOut() { // getter method for isCheckedOut
      return this._isCheckedOut;
    }
    get rating() { // getter method for rating
      return this._ratings
    }
    set isCheckedOut(yes) {// setter method for isCheckedOut

    }
    toggleCheckOutStatus() { // method that changes the value saved to the _isCheckedOut property
      if (this.isCheckedOut === false) {
        this.isCheckedOut = true;
      }
      else {
        this.isCheckedOut = false;
      }
    }
    getAverageRating() { // method that returns an average value of the ratings array
      let ratingsSum = this._ratings.reduce((currentSum, rating) => currentSum + rating, 0);
      avarageRating = ratingsSum / this._ratings.length;
    }
    addRating(newRating) { // method that adds a rating between 1 and 5 to the ratings array
      this._ratings.push(newRating);
    }
    };

    // Book Class
    class Book extends Media { // creating a Book class that extends Media
        constructor(title, author, pages) { // Book class constructor
        super(title) // calling super on the title property
        this._author = author; // author is a string
        this._pages = pages; // pages is a number
      }
      get author() { // getter method for author
        return this._author;
      }
      get pages() { // getter method for pages
        return this._pages;
      }
      }

      // Movie Class
  
    