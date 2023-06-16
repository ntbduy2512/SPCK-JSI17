// import { user } from "./index.js";
import { getFirestore, collection, getDocs, addDoc, getDoc, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore-lite.js";
import { firebaseDatabase } from "./initApp.js";




const submit = document.getElementById("submit")

const  handleSubmit = () => { 
    const name = document.getElementById("Name").value;
    const birthday = document.getElementById("birthday").value;
    const gender = document.getElementById("gender").value;
    const image = document.getElementById("image").value;
    console.log(name);
    console.log(birthday);
    console.log(gender);
    console.log(image);
};

// console.log( await user)


const getData = async (db) => {
    const querySnapshot = await getDocs(collection(db, "birthdays"));
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    });

}

console.log(await getData(firebaseDatabase).then(rs => rs));
document.title = "Home"
// create data
const createData = async (db,obj) => {
    try {
        const docRef = await addDoc(collection(db, "birthdays"), {
          name: obj.Name,
          member: obj.Member,
          birthday: obj.Birthday,
          url: obj.Url
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}

// delete data
const deleteDataById = async (db,id) => {
    await deleteDoc(doc(db, "birthdays",id))
    location.reload();
}

const obj = {Name: "DUY", Member: "Brother", Birthday:"25/12/2007"}
await createData(firebaseDatabase,obj)