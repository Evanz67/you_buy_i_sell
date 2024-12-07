import { db } from "./firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

//export async function getDataUser(userId) {
//    const data = [];
//
//    try {
//        const dataList = query(collection(db, "users", userId, "products"));
//        const querySnapshot = await getDocs(dataList);
//
//        querySnapshot.forEach((doc) => {
//            data.push({
//                id: doc.id,
//                ...doc.data(),
//            });
//        });
//
//        
//    } catch (e) {
//        console.log(e);
//    }
//    return data; 
//
//}

export async function getData() {
    const data = [];

    try {
        const dataList = query(collection(db, "products"));
        const querySnapshot = await getDocs(dataList);

        querySnapshot.forEach((doc) => {
            data.push({
                id: doc.id,
                ...doc.data(),
            });
        });
        
    } catch (e) {
        throw new Error(`Failed: ${e.message}`);  
    }
    return data; 

}

export async function addData(product) {

    try {
        const docRef = await addDoc(collection(db, "products"), product);         
        return docRef.id;
    } catch (e) {
        throw new Error(`Failed: ${e.message}`);  
    }
}