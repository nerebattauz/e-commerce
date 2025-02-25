import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";

export const createOrder = async (name, uid) => {
  const doc = await addDoc(collection(db, "orders"), {
    uid,
    name,
  });
  console.log("Document written with ID: ", doc.id);
  return doc;
};
