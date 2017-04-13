export default ({dispatch}) => {
  return next => action => {
    //actual middlware goes here!!

    //if action does not have a payload or if it doesn't have a .then property (a property of all promises), then just send it on
    if(!action.payload || !action.payload.then){
      return next(action);
    }
    //make sure the action's payload (a promise) resolves. Once it has resolved, the .then() function fires, which tackles the new response data on to the action's payload, replacing the old promise data
    action.payload.then(function(response){
      const newAction = {...action, payload: response};
      dispatch(newAction);
    });

  }
}
