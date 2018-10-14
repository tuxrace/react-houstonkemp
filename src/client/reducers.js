import { fromJS } from "immutable";

const initialState = fromJS({
  entries: [
    {
      id: "2syc1fxzs0",
      date: new Date(),
      content: "I had a happy weekend this day haha",
      wordCount: 8
    }
  ],
  newEntries: []
});

const reducers = (state = initialState, action) => {
  console.log(state.toJS());
  switch (action.type) {
    case "SHOW_ENTRIES":
      return state.get("entries");
    case "ADD_ENTRY": {
      const entries = state.get("entries").toJS();
      const newEntries = state.get("newEntries").toJS();
      entries.push(action.data);
      newEntries.push(action.data.id);
      return state.withMutations((newState) => {
        newState.set("entries", fromJS(entries)).set("newEntries", fromJS(newEntries));
      });
    }
    case "CLEAR_NEW_ENTRIES":
      return state.set("newEntries", fromJS([]));
    case "DELETE_ENTRY":{
      const entries = state.get("entries").toJS();
      const filteredEntries = entries.filter(find => find.id !== action.id);
      return state.set('entries', fromJS(filteredEntries));
    }
    default:
      return state;
  }
};

export default reducers;
