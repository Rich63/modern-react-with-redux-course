console.clear();

// People dropping off a form (action creator)
const createPolicy = (name, amount) => {
  return { // Action (a form in our analogy)
    type: "CREATE_POLICY", // Conventional using uppercase and underscore
    payload: {
      name: name,
      amount: amount
    }
  };
};

const deletePolicy = (name) => {
  return { // Action (a form in our analogy)
    type: "DELETE_POLICY", // Conventional using uppercase and underscore
    payload: {
      name: name,
    }
  };
};

const createClaim = (name, amountOfMoneyToCollect) => {
  return { // Action (a form in our analogy)
    type: "CREATE_CLAIM", // Conventional using uppercase and underscore
    payload: {
      name: name,
      amountOfMoneyToCollect: amountOfMoneyToCollect
    }
  };
};

// Reducers (Departments)
const claimsHistory = (oldListOfClaims = [], action) => {
  if (action.type === "CREATE_CLAIM") {
    // we care about this action (FORM)
    return [...oldListOfClaims, action.payload];
  }
    // we don't care the action (FORM!!)
    return oldListOfClaims;
};

// Reducers (Departments)
const accounting = (bagOfMoney = 100, action) => {
  if (action.type === "CREATE_CLAIM") {
    // we care about this action (FORM)
    return bagOfMoney - action.payload.amountOfMoneyToCollect;
  } else if (action.type === "CREATE_POLICY") {
    return bagOfMoney + action.payload.amount
  }
    // we don't care the action (FORM!!)
    return bagOfMoney;
};

// Reducers (Departments)
const policies = (listOfPolicies = [], action) => {
  if (action.type === "CREATE_POLICY") {
    return [...listOfPolicies, action.payload.name];
  } else if (action.type === "DELETE_POLICY") {
    return listOfPolicies.filter(name => name !== action.payload.name);
  }
    return listOfPolicies;
};

// Now it's time for Redux

// get the needed methods from Redux
const { createStore, combineReducers } = Redux;

const ourDepartments = combineReducers({
  accounting: accounting,
  claimsHistory: claimsHistory,
  policies: policies
});

const store = createStore(ourDepartments);

store.dispatch(createPolicy("Richard", 100));
store.dispatch(createPolicy("Jesse", 150));
store.dispatch(createPolicy("Kylie", 120));

store.dispatch(createClaim("Richard", 50));
store.dispatch(createClaim("Kylie", 20));

// store.dispatch(deletePolicy("Jesse"));

console.log(store.getState());

/* 
In the last section we finally finished writing code to model our insurance company.
So in this video I want to do a wrap up on some of the big things that we learned to YOUR about redux
at this point.
I don't really expect you to memorize a lot of the intricate details here.
I just wanted to have an overall idea of how the redux library worked.
So let's get to it.
All right so first things first we're going to start to really learn this redux cycle this redux cycle
that you see right here has all the same boxes inside of it as the diagram that we're looking at just
a second ago.
So you can now remember from our analogy the purpose of the action creator that's like a person dropping
off for the purpose of our action purpose of dispatch and so on.
so with the redux cycle we essentially start off at the very top up here.
Any time we want to change the state or the data of our application we're going to call an action creator
calling an action creator is going to produce an action object this action object describes exactly
how we want to change data inside of application that action object gets fed to the dispatch function
which in turn is going to make copies.
We can imagine of the action object and feed those copies to each of our different reducers in turn.
The producers are going to run.
They're going to process those actions are the forms that came in modify their data and then eventually
return some new data that data that gets returned gets forint into some new state object.
So then we wait until we need to somehow updates our state again at some point in the future.
So now we have a somewhat reasonable idea of the purpose of each of these steps inside this diagram.
I want to give you some more insight about what's going on inside of redux now.
So you can flip back over to my code over here.
All right so the first thing I want tell you about was the purpose of this combine it reducers call.
Remember the different readers we put together were simple functions.
All these different functions need to be somehow wired up together.
We wire up all the different reducers together by making use of the combine reducers function.
You'll notice that we have different keys on here of accounting claims history and policies because
we used these very specific key names.
We ended up with a state object.
Remember that's what's being called a logged right here.
That's the result of the con. log of stored get state.
We ended up with properties on our state object equal to those key names so we can absolutely feed keys
into this object right here with names different from our reducer.
For example if I wanted to I can change this key of accounting to money we have and now in this example
reruns you'll see that my state object now has a different key for the accounting reducer and now says
money we have is 20.
We do not always have to name these reducers exactly after the Keys but usually by convention we're
going to have them be very similar.
So you know you can change the keys right there if you ever want to end up with different state property
names are going to change that back to accounting like I had before.
Now the next thing I want you to understand is that each dispatch that we're doing here is essentially
running one of these entire cycles.
So recalling an action creator getting an action fit into dispatch that runs or reducers and we get
out some each state so each the lines of code that you see here for each of these dispatches is a second
separate execution of that entire cycle.
We can printout our state object in total in between each of those dispatches.
We don't have to run all the dispatches and then only after that get access to our state object.
Likewise even after we do get state code like you see right here we can still continue to modify our
state object after that.
So if I wanted to I can move that log of store Dockett state to right here after where we created the
policy for Alex.
And now we'll see that our current state at that point in time has just policy for Alex and we only
have $120 in the bank we could then move that again to after we create all three policies.
And now we'll see that we're back to the $190 and we've got policies for Alex Jim and Bob.
And then just as we did before we could remove the consulate down pat down here as well.
And we'll see our final state where we only have $20 and we've only got policies for two people.
So at any point in time along our application we can take this store object and pull our state out of
it and read the current state where the current data for our application.
Now one thing about redux that is very interesting is that we can only modify this state object for
this kind of assembly of all the data through the use of that dispatch function and the action creators
and actions that you've now seen.
There is no way that we can somehow manually reach into this store and modify the state in there manually.
In other words you are not going to ever write some code that looks like stort state DOT accounting
minus 100 or something like that.
We cannot get direct access to our state property and modify it in some meaningful way.
We're only ever going to modify our state by dispatching an action that has been created by an action
creator All right.
So I think those point in time we've got a pretty reasonable idea of some of the basics around redux.
Now you might be thinking at this point you know like I had said much earlier in this section I had
said you know here's our difficulty curve.
So right now we're still kind of up here where we might be thinking Wow this seems way more complicated
than it needs to be.
So let me tell you why everything is set up this way.
You see in a traditional application without redux as an app gets bigger and bigger like more complexity
more lines of code usually ends up that the code that we write ends up being more and more complex and
harder to understand.
And this grows nonlinearly over time.
So as our app gets larger it usually ends up that as we grow in size the app gets dramatically more
and more complicated.
3Dfx we get into a little bit flatter a curve like this right here.
The initial complexity of our application certainly starts higher than if we did not use Regex.
Notice how on this diagram I started the initial complexity way down here.
So it's Reducto you've got some higher initial complexity but because we can only change our data through
the use of action creators our application is kind of self-documenting.
It makes it really clear to other engineers who start work in your project that different ways in which
they can modify the data of your application.
People can only modify data inside of your app by calling these different action creators.
And so if someone walks onto your application and starts working on it on day one they will look at
these action crater's and understand OK I can create a policy I can delete a policy and I can create
a claim that's the only ways I can modify data inside of this application.
And so one of the ideas behind redox is to get a much more stable or steady curve here of complexity
as your app starts to grow.
Even though it initially starts out a lot more complex as your app starts to grow you're going to get
this much more stable much smaller and much more linear growth in complexity.
In theory at least that's how we make use of redux as opposed to just trying to handle things with react
by itself.
We want to only have a very small set number of ways of modifying our data.
*/