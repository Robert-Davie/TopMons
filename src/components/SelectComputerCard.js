import React, { useState } from 'react';
/**
 * Creates a clickable field for the Bot's Stats for attack.
 * Once clicked it changes the background colour and the colour of the button's text.
 * 
 *
*@param {string} initialText
*@param {string} initialColor
*@param {number} size
*@param {string} initialTextColor
*@returns {JSX.Element} Clickable field

 */
function SelectedComputerCard({ initialText, initialColor, size, initialTextColor }) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div
      onClick={handleClick}
      style={{
        width: size || '100%',
        height: '25%',
        backgroundColor: clicked ? 'lightcoral' : initialColor || 'transparent',
        position: 'relative',
        textAlign: 'center',
        lineHeight: '100px',
        fontSize: '20px',
        color: clicked ? 'black' : initialTextColor || 'red',
        //THIS IS SO COOL
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <span>{clicked ? 'ATTACK' : initialText || SelectComputerCard()} </span>
      <span></span>

    </div>
  );
}

export default SelectedComputerCard;


/**
 *Creates 5 cards and picks a random card.
 *Focuses only on the attack stat.
 *
 *NOT COMPLETE!!!!!!!!
 @returns {String} - Details of the randomly selected card.
 */

function SelectComputerCard(){ 
  
      /**
       * 
       * Creates a dataclass to store the various card stats.
      *@param {string} name
      *@param {number} id
      *@param {number} size
      *@param {number} attack
      *@param {number} defense
      *@param {number} hp
      *@param {number} speed

       * 
       * 
       */

   function Card(name, id, attack, defense, hp, speed) {
        this.name = name;
        this.id = id;
        this.attack = attack;
        this.defense = defense;
        this.hp = hp;
        this.speed = speed;
    };


    let card1 = new Card("Meowth", 2, 45, 35, 40, 90);
    let card2 = new Card("Squirtle", 3, 48, 65, 44, 43);
    let card3 = new Card("Pikachu", 4, 55, 30, 35, 90);
    let card4 = new Card("Bulbasaur", 5, 49, 49, 45, 45);
    let card5 = new Card("Lapras", 6, 85, 80, 130, 60);
    let deck = [card1, card2, card3, card4, card5]

    let randomNumber = Math.floor(Math.random()* 5);
    let output = "name = " + deck[randomNumber].name + "\nid = " + deck[randomNumber].id + "\nattack = " + deck[randomNumber].attack + "\ndefense = " + deck[randomNumber].defense + "\nhp = " + deck[randomNumber].hp + "\nspeed =" + deck[randomNumber].speed ;

    return output;
};


