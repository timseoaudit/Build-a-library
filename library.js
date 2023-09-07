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
      if (this._isCheckedOut === false) {
        this._isCheckedOut = true;
      }
      else {
        this._isCheckedOut = false;
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
        super(title); // calling super on the title property
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
      class Movie extends Media { // creating a Movie class that extends Media
        constructor(title, director, runTime) { // Movie class constructor
          super(title); // calling super on the title property
          this._director = director; // director is a string
          this._runTime = runTime; // runTime is a number
        }
        get director() { // getter method for director
          return this._director;
        }
        get runTime() { // getter method for runTime
          return this._runTime;
        }
      }

      // CD Class
      class CD extends Media { // creating a CD class that extends Media
        constructor(title, artist, songs) { // CD class constructor
          super(title); //  calling super on the title property
          this._artist = artist // artist is a string
          this._songs = [songs] // songs is an array
        }
        get artist() { // getter method for artist
          return this._artist;
        }
        get songs() { // getter method for songs
          return this._songs;
        }
      }

      const historyOfEverything = new Book('A Short History of Nearly Everthing', 'Bill Bryson', 544) //create a book instance

// test couple of Book class methods
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());

const speed = new Movie('Speed', 'Jan de Bont', 116) // create a movie instance

// test couple of Movie class methods
speed.toggleCheckOutStatus()
console.log(speed.isCheckedOut);
speed.addRating(1)
speed.addRating(1)
speed.addRating(5)
console.log(speed.getAverageRating());

// spelling misstake