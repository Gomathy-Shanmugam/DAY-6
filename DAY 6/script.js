// DAY-06 TASK
//3.Write a “person” class to hold all the details.

class Person {
    constructor (Name,Age,Qualification,MailID,District,State,Nationality,Batch,Phoneno){
          this.Name = Name;
          this.Age = Age;
          this.Qualification =Qualification ;
          this.MailID =MailID;
          this.District =District ;
          this.State =State ;
          this.Nationality =Nationality ;
          this.Batch =Batch ;
          this.Phoneno =Phoneno;
    }
    getPerson (){
          return `Hello! Good Afternoon , My Name is ${ this.Name } , I am ${ this.Age} old. I Completed my ${this.Qualification} in Kathir College of Engineering ,Coimbatore.I am Currently in ${this.District},${this.State} and I belong to the Nationality of ${this.Nationality}.Currently I am doing my Full Stack Development course in GUVI in the batch of ${this.Batch} at 9.00 to 11.30 AM from Monday to Friday and my MailID is ${this.MailID}`;
    }
}
var p1 = new Person("Gomathy","21","B.E(CSE)","gomathy17012002@gmail.com","Tiruppur","Tamil Nadu","Indian","FSD54WD","9004567744");
console.log(p1.getPerson());




//4.write a class to calculate the uber price.
class Uber{
      constructor(Basepair,Driverpair,Pairperkm){
            this.Basepair = Basepair;
            this.Driverpair = Driverpair;
            this.Pairperkm = Pairperkm;

      }
      getUber(){
            var kilometerprice = 1 * this.Pairperkm;
            return (this.Basepair + this.Driverpair * kilometerprice);
             
      }
}
var u1 = new Uber(50,50,10);
console.log(u1.getUber());


//1.The class Movie is stated below. An instance of class Movie represents a film. This class has the following three properties:

//title, which is a String representing the title of the movie
//studio, which is a String representing the studio that made the movie
//rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)
//a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.
class Movie{
      constructor (title,studio,rating){
            this.title = title;
            this.studio = studio;
            this.rating = rating;

      }
}
var myMovie = new Movie ("Leo","Seven screen studio",7.6)
console.log(myMovie);

//b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.
class Movie1{
      constructor (title,studio,rating = "PG"){
            this.title = title;
            this.studio = studio;
            this.rating = rating;

      }
}
var myMovie = new Movie1 ("Leo","Seven screen studio",)
console.log(myMovie);

//c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.
class Movie2{
      constructor (title,studio,rating = "PG" ){
            this.title = title;
            this.studio = studio;
            this.rating = rating;

      }
      static getPG(movie) {
            return movie.filter(movie => movie.rating === "PG");
        }
        
      }
var movie1 = new Movie2("Leo","Seven Screen Studio","PG");
var movie2 = new Movie2("Sardar","Red Giant Studio","");
var movie3 = new Movie2("Jailer","Seven Studio","PG");
var movieArray = [movie1,movie2,movie3];
var p1 =  Movie2.getPG(movieArray);
console.log(p1);


//d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”
class Movie3{
      constructor (title,studio,rating){
            this.title = title;
            this.studio = studio;
            this.rating = rating;

      }
}
var m2 = new Movie3 ("Casino Royale","Eon Productions","PG-­13")
console.log(m2);




//2.Convert the UML diagram to Typescript class. - use number for double
class Circle{
      constructor(radius ,color){
            this.radius = radius;
            this.color = color;
      }
      getRadius(){
            return (` ${this.radius.toFixed(1)}`);
      }
      setRadius(modifiedRadius){
      this.modifiedRadius=modifiedRadius;
      }
      getColor(){
            return(this.color);
      }
      setColor(modifiedColor){
            this.modifiedColor = modifiedColor;
      }
      toString(){
            return (`CIRCLE : radius = ${this.radius.toFixed(1)} , color = ${this.color}`);
      }
      getArea(){
          var area = 22/7 * this.radius *this.radius ;
          return (area.toFixed(2)); 
      }
      getCircumference(){
            var circumference = 2 * 22/7 * this.radius ;
            return (circumference.toFixed(2));
      }
}
var c1 = new Circle(1.0,"red");
console.log(c1);
console.log(`radius : ${c1.radius.toFixed(1)}`);
console.log(`radius : ${c1.radius.toFixed(1)}, color : ${c1.color}`);
console.log(c1.getRadius());
c1.setRadius = 1.5 ;
console.log(` radius : ${c1.setRadius.toFixed(1)}`);
console.log(c1.getColor());
c1.setColor = "Black";
console.log(`color : ${c1.setColor}`);
console.log(c1.toString());
var c2 = new Circle(2);
console.log(c2.getArea());
console.log(c2.getCircumference());

