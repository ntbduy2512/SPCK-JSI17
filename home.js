import { firestore } from "./initApp.js";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  getDoc,
  deleteDoc,
  doc,
} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

document.title = "Home";

// lap trinh nut tao du lieu
const submit = document.getElementById("submit");
const handleSubmit = async (db) => {
  const name = document.getElementById("Name").value;
  const birthday = document.getElementById("birthday").value;
  const member = document.getElementById("member").value;
  const image = document.getElementById("image").value;

  // validation
  if (name == "" || name == undefined) {
    alert("Please fill form");
    return;
  }
  if (birthday == "" || birthday == undefined) {
    alert("Please fill form");
    return;
  }
  if (member == "" || member == undefined) {
    alert("Please fill form");
    return;
  }
  if (image == "" || image == undefined) {
    alert("Please fill form");
    return;
  }

  //create data for firestore and reload page to update posts
  try {
    const docRef = await addDoc(collection(db, "birthdays"), {
      name: name,
      member: member,
      birthday: birthday,
      Url: image,
    });
    alert("Create data successfully: ", await docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
// bat su kien cho nut submit
submit.addEventListener("click", async (e) => {
  e.preventDefault(); // neu khong co dong nay no se tu dong reload
  await handleSubmit(firestore);
  location.reload();
});

// lay du lieu va hien thi ra home
const posts = document.getElementById("posts");

const getData = async (db) => {
  let postList = ``;
  const querySnapshot = await getDocs(collection(firestore, "birthdays"));
  // tao div post cho moi phan tu va luu vao bien postList
  querySnapshot.forEach((doc) => {
    postList += `<div class="post">
      <h2>${doc.data().member}</h2>
      <img src="${doc.data().Url}" alt="img">
      <p class="name">${doc.data().name}</p>
      <p class="bday">${doc.data().birthday}</p>
    </div>`;
  });
  return postList;
};
// gan du lieu vao post list
posts.innerHTML += await getData(firestore);

// delete data
const deleteDataById = async (db, id) => {
  await deleteDoc(doc(db, "birthdays", id));
  location.reload();
};
