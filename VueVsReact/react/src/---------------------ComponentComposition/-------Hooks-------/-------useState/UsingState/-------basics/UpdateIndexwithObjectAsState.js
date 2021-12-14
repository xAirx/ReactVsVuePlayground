/* How to Use the Object Spread Operator for Updating State in JavaScript

When it comes to using state in React, we have a couple options:


we can create many state variables with the useState hook for

individual primitive values

or manage multiple values within one state variable using an object.


In the example below, we have a signup page where we are keeping track of current users' username, email, and password.

When they submit the signup form, we validate the form contents they typed in and handle signing up the user.

 */

/* If anyone is searching for useState() hooks update for object

    Through Input
 */

//stackoverflow.com/questions/55342406/updating-and-merging-state-object-using-react-usestate-hook

https: export default App = () => {
  const [state, setState] = useState({ fName: "", lName: "" });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <input
        value={state.fName}
        type="text"
        onChange={handleChange}
        name="fName"
      />
      <input
        value={state.lName}
        type="text"
        onChange={handleChange}
        name="lName"
      />
    </>
  );
};

/*  Through onSubmit or button click */

setState((prevState) => ({
  ...prevState,
  fName: "your updated value here",
}));

/* Using the Spread Operator with setState() for Setting the Nested State

Let's suppose, you need to use the setState() method to update your component state.
Since the setState() may work asynchronously in manu cases for performance reasons.
You would need to write the following code: */

this.setState((state) => ({
  state1: state.state1 + 1,
}));

/* The state1 variable which is part of our component state will be incremented by one.

Now, let's suppose we have a state with a nested object in our component: */

this.state = {
  stateObj: {
    attr1: "",
    attr2: "",
  },
};

/*
You can use the Spread syntax to update the nested state object.
 */

this.setState((state) => ({
  person: {
    ...state.stateObj,
    attr1: "value1",
    attr2: "value2",
  },
}));

// More examples:

const [name, setName] = React.useState("");

const [list, setList] = React.useState([
  { id: "1", name: "Apple", count: 5 },
  { id: "2", name: "Banana", count: 3 },
  { id: "3", name: "Peach", count: 10 },
]);

const [sort, setSort] = React.useState({
  property: "name",
  isReverse: false,
});

function handleSortName() {
  const isReverse = sort.property === "name" && !sort.isReverse;
  setSort({ property: "name", isReverse });
}

function handleSortCount() {
  const isReverse = sort.property === "count" && !sort.isReverse;
  setSort({ property: "count", isReverse });
}
