console.log('person 1:shows ticket');
console.log('person 2:shows ticket');

const preMovie = async() =>{

    const promiseWifeBringingTicks = new Promise((resolve,reject)=>{
        setTimeout(()=> resolve('ticket'),3000);
    });


    const getPopcorn = new Promise((resolve,reject) => resolve('popcorn'));

    const addBUTTER = new Promise((resolve,reject) => resolve('BUTTER'));

    let ticket = await promiseWifeBringingTicks;

    console.log(`wife: i have ${ticket}`);
    console.log('husband: we should go in');
    console.log('wife:no i m hungry');

    let Popcorn = await getPopcorn;

    console.log(`husband: i got some ${Popcorn}`);
    console.log('husband: we should go in');
    console.log('wife:i need butter');

    let Butter = await addBUTTER;
    console.log(`husband: i got some ${Butter}`);
   // console.log('wife:now lets go with ${preMovie}');

   
return ticket;//async function return promise
   
}
preMovie().then((m)=>console.log(`person3:shows ${m}`));