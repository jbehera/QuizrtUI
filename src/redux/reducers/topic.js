export default (state = {
    topics: [{
        id: 1, title: 'Maths'
    }, {
        id: 2, title: 'Sports'
    }]
  }, action) => {
    switch (action.type) {
      
      default:
        console.log(action);
        return state;
    }
  };
  