## Redux - Concept

- Student can describe the role of redux
- Student can describe the following vocab in the context of redux: Store, reducer, action, action builder, connect
- Student can describe when to use Redux

## Redux - Stores & Reducers

- Student can setup redux passing a store into a reducer
- Student can create a reducer
- Student can create and dispatch actions
- Student can inititalize default state in a reducer
- Student can update state in a reducer

<img src="https://camo.githubusercontent.com/9de527b9432cc9244dc600875b46b43311918b59/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6d656469612d702e736c69642e65732f75706c6f6164732f3336343831322f696d616765732f323438343739302f415243482d5265647578322d657874656e6465642d7265616c2d6465636c657261746976652e676966"/>

<img src="https://camo.githubusercontent.com/8e97d05fcc88aa498fe610522c51da15161f687b/68747470733a2f2f656e637279707465642d74626e302e677374617469632e636f6d2f696d616765733f713d74626e3a414e64394763522d453874384d6658732d484d416b4772446d5746654a726b53565f5f755461477531595350704d54504f305a6558314237"/>

#Goals of Redux
- client side cache for serverside data
- prevent excessive props drilling

**Store**
a store is an object with a few methods, but particularly holds the application state

example:

```js
const initialState = {
    someState: {amount: 0, total: 0}
}
```

**Action**
an action is a plain object that represents an intention to change the state in your redux store

```js
{

    type: "ADD",
    payload: amount
}

```

**Reducer**
takes previous state and an action and returns the next state, they are used to reduce a collection of values down to one

```js
function reducer(state = initialState, action){
    switch(action.type){
        case "ADD":
            return { ...state.someState, amount: action.payload};
            default:
                return state;
    }
}

```

**Dispatch Function**
a function that accepts an action. it may or may not dispatch one or more actions to the store

```js

function addAmount(){
    store.dispatch({payload: amount, type: "ADD"});
}

```


**Action Creator**
an action creator is a function that creates an action

```js
function add(amount){
    return {
        type: "ADD",
        payload: amount
    }
}

```