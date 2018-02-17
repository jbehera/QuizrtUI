export default (state = {
    players: [
        {
            name:'Juice Man',
            score: '10'
        }, 
        {
            name:'Security',
            score: '11'
        },
        {
            name:'Milk Man',
            score: '23'
        },
        {
            name:'Plumber',
            score: '50'
        }
    ]
  }, action) => {
    switch (action.type) {
      
      default:
        console.log(action);
        return state;
    }
  };
  