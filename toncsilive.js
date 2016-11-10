const actions = {
  send(request, response) {
    const {sessionId, context, entities} = request;
    const {text, quickreplies} = response;
    return new Promise(function(resolve, reject) {
      console.log('sending...', JSON.stringify(response));
      return resolve();
    });
  },
getForecast({context, entities}) 
{ return new Promise(function(resolve, reject) 
{ var location = firstEntityValue(entities, "location") 
if (location) 
   { context.forecast = 'borzalmas itt: ' + location + ' - De Gödöllőn csodálatos idő lesz!'; // we should call a weather API here delete context.missingLocation; } 
else 
   { context.missingLocation = true; delete context.forecast; } 
return resolve(context); });
},
};
