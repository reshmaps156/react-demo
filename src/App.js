
import './App.css';
import styles from './myStyles.module.css'


function App() {
  //js code 
  const h1Style = {color:'blue',fontSize : '70px'}
  return (
    //html code
    <>
      <div>
        <h1 style={h1Style}>my first react application.............</h1>
        <h2>demo</h2>
      </div>
      <h1 className={styles.fondFifty}>component</h1>
      <p className={[styles.myStyle,styles.styleBlue].join(' ')}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque laboriosam dolor, voluptatem placeat corporis illum sed temporibus perferendis, dolorem iste asperiores sunt officiis quas distinctio fugit nihil at quasi maxime nulla numquam! Placeat voluptatem dolorum sapiente sed optio odit iste. Aspernatur dolor laborum iste saepe aliquid recusandae aut, perferendis reprehenderit? Nam et animi repudiandae, laudantium reiciendis repellendus doloremque officia sint quam officiis aspernatur maxime quidem dolorem vel nulla labore ea vero voluptate fuga voluptatum eius aperiam! Repudiandae, inventore excepturi mollitia commodi aliquid amet aut quos quasi alias distinctio nisi cupiditate atque ad, eius impedit? Reiciendis possimus iusto fuga distinctio laboriosam.</p>
  
      
    </>
  );
}

export default App;
