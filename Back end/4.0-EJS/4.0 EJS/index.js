import express from 'express';

const app = express();
const port=3000;

app.get('/', (req, res) => {
    const d = new Date();
    const day = d.getDay();
    console.log(day);
    let Type = 'a weekday ';
    let adv = 'its time to work';
    if(day === 0 || day === 6){
      Type = 'weekend';
      adv = 'Its time to relax';
    }
    res.render('index.ejs',{
    dayType: Type,
    advice: adv,    
})
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});