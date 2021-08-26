import {useEffect, useState, memo, useMemo} from 'react';
import ReactDOM from "react-dom";
import './App.css';

// useEffect and useState hooks
// function App() {

//   const [{count, time}, setState] = useState({
//     count: 0,
//     time: new Date()
//   })

//    useEffect(() => {
//     const updateCount = () => setState({
//       count: count + 1,
//       time: new Date()
//   })
//     window.addEventListener('click', updateCount)
//     return () => {
//       window.removeEventListener('click', updateCount)
//     }
//    },[count])

//   return (
//     <div className="App">
//       <h1> {count} </h1>
//       <h2>{time.toLocaleTimeString()}</h2>
//     </div>
//   );
// }


// useMemo hook
// function App() {
//   const [age, setAge] = useState(10);
//   const guessAge = () => setAge(Math.round(Math.random() * 100));

//   const profileDetails = useMemo( () => ({ name: "Anna", profilePic: "🙎‍" }), []);

//   return (
//     <div className="App">
//       <Profile profileDetails={profileDetails} />
//       <p>Anna is probably {age} years old</p>
//       <buttton onClick={guessAge} className="guess">
//         Guess her age
//       </buttton>
//     </div>
//   );
// }

// const Profile = memo(({ profileDetails: { name, profilePic } }) => {
//   console.log("Profile app was rendered");

//   return (
//     <div>
//       <p className="pic">{profilePic}</p>
//       <p>Hello, {name}</p>
//     </div>
//   );
// });



// Fetch data
// function App() {
//   const stringifyData = data => JSON.stringify(data, null, 2);
//   const initialData = stringifyData({ data: null });
//   const [user, setUser] = useState(initialData);
//   const [gender, setGender] = useState("female");

//   useEffect(() => {

//     const fetchData = () => {
//       const uri = "https://randomuser.me/api/?gender=" + gender;
      
//       fetch(uri)
//         .then(res => res.json())
//         .then(({ results }) => {
//           const { name, gender, dob } = results[0];
//           const dataVal = stringifyData({
//             ...name,
//             gender,
//             age: dob.age
//           });

//           setUser(dataVal);
//         });
//     };

//     fetchData();
//   }, [gender]);

//   return (
// <div className="App">
//       <p>Click the buttons below to fetch data</p>
//       <button
//         onClick={() => setGender("male")}
//         style={{ outline: gender === "male" ? "1px solid" : 0 }}
//       >
//         Fetch Male User
//       </button>
//       <button
//         onClick={() => setGender("female")}
//         style={{ outline: gender === "female" ? "1px solid" : 0 }}
//       >
//         Fetch Female User
//       </button>

//       <section>
//         <pre>{user}</pre>
//       </section>
//     </div>
//   );
// }


// Custom hooks
function useRandomUser() {

  const stringifyData = data => JSON.stringify(data, null, 2);
  const initialData = stringifyData({ data: null });
  const [user, setUser] = useState(initialData);

  useEffect(() => {

    const fetchData = () => {
      const uri = "https://randomuser.me/api/";
      
      fetch(uri)
        .then(res => res.json())
        .then(({ results }) => {
          const { name, gender, dob } = results[0];
          const dataVal = stringifyData({
            ...name,
            gender,
            age: dob.age
          });

          setUser(dataVal);
        });
    };

    fetchData();
  }, []);
return user
}

function App() {
 const user = useRandomUser();
 
 return (
   <div className="App">
     <h2> User Data: </h2>
     <section>
       <pre>{user}</pre>
     </section>
   </div>
 );
}

export default App;
