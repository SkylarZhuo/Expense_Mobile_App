import { async } from "@firebase/util"
import {collection, addDoc,doc,deleteDoc,updateDoc} from "firebase/firestore"
import {firestore} from "./firebase_setup";




export const writeToDb = async(data)=>{
    try{
        await addDoc(collection(firestore,"Expense"),data);
    }catch(err){
        console.log(err);
    }
}

export async function deleteFromDb(key) {
    try {
      await deleteDoc(doc(firestore, "Expense", key));
    } catch (err) {
      console.log(err);
    }
  }

export async function updateToDb(key, status) {
    try {
      const docRef = doc(firestore, "Expense", key);
      const data = {
        isImportant:status
      }
      await updateDoc(docRef,data);
    } catch (err) {
      console.log(err);
    }
  }