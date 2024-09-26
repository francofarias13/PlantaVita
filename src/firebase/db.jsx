import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  addDoc,
  query,
  where,
} from "firebase/firestore";
import { app } from "./config";

const db = getFirestore(app);

export const getProducts = async (setProduct, categoryId) => {
  let q = collection(db, "products");

  if (categoryId) {
    q = query(q, where("category", "==", categoryId));
  }

  const querySnapshot = await getDocs(q);
  const products = [];
  querySnapshot.forEach((doc) => {
    products.push({ id: doc.id, ...doc.data() });
  });

  setProduct(products);
};

export const getSingleProduct = async (itemId, setProduct) => {
  const docRef = doc(db, "products", itemId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    setProduct({ id: docSnap.id, ...docSnap.data() });
  } else {
    console.log("No such document!");
  }
};

export const addOrderToFirebase = async (order) => {
  const docRef = await addDoc(collection(db, "orders"), order);
  return docRef.id;
};
