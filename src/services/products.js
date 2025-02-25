import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase/config";

export const getProducts = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "products"));
    let products = [];

    querySnapshot.forEach((doc) => {
      products.push({ ...doc.data(), id: doc.id });
    });

    console.log("Productos obtenidos:", products);
    return products; 
  } catch (error) {
    console.error("Error obteniendo productos:", error);
    throw error; 
  }
};