//console.log("Exercise Number 10");

/*crete a business name generator by combining list of adjective and
 shop name and another word */

 /* list of adjectives: 
 crazy
 amazing 
 fire

 shop names:
 Foods
 Engine
 Garments

another words:
    bros
    hub
    limited
 */

    let  rand=Math.random();
    let first, second, third;

    //fisrt ganerate adjective
    if(rand<0.33){
        first="crazy";
    }
    else if(rand<0.66 && rand>=0.33){
        first="amazing";
    }
    else{
        first="fire";
    }
// second generate shop name
    rand=Math.random();
    if(rand<0.33){
        second="Foods"; 
    }
    else if(rand<0.66 && rand>=0.33){
        second="Engine";
    }
    else{
        second="Garments";
    }

    // third generate another word
    rand=Math.random();
    if(rand<0.33){
        third="bros";   
    }
    else if(rand<0.66 && rand>=0.33){
        third="hub";
    }
    else{
        third="limited";
    }
   console.log(`${first} ${second} ${third}`)