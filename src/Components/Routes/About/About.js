import Header from '../../Header/Header.js'
import Footer from '../../Footer/Footer.js'
import '../../../Cover.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function About(){
  return(
    <div className="d-flex h-100 text-center text-white bg-dark fill">
      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
      <Header />
      <div className="d-flex my-3 text-start flex-column">
        <h3>The Vocamax application</h3>
        <p>As of now, this website is a front-end prototype, i am a student who just ended the university on 8th April 2022, i'm on the way to increase my competences in front-end developement with React.</p>
        <p>The aim of this project is to propose an e-learning application based on the vocabulary learning.</p>
        <p>As i have always been passionate about languages, i felt the need to design an application which allows me to learn a maximum of vocabulary in a shortest possible time.</p>

        <h5>Main Functionnalities of the application</h5>
        <ul className="group-item">
          <li>Table the different kinds of words into differents types like verb, adjectives, ...</li>
          <li>Create context utilisation which cover family of words, like "Music", "Nature" or others</li>
          <li>Create a user system where a user and a word is associated with a score</li>
          <li>The intelligence of the application analyses the scores and adapt the difficulty to the user</li>
          <li>The add functionnality allows each user to add new vocabulary stuff, the new additions must be validated prior to enter the database</li>
        </ul>

        <p>I think the development of the application could take a very long time, so i will focused the different parts step by step and probably find new ideas in the meantime.</p>


        <h5>What are the next steps ?</h5>
        <ul className="group-item">
          <li>Increase advanced competences in CSS and improve the design</li>
          <li>Create a relationnal DataBase with MySQL in order to memorize the words, their translations, the users and the scores</li>
          <li>Implement the back-end and intelligent algorithms which target the weakness of the user and help him to progress</li>
          <li>And so many things i probably not realize at this time...</li>
        </ul>



      </div>
      <Footer />
      </div>
    </div>
  )
}

export default About
