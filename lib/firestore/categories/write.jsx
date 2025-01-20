import { db, storage } from "@/lib/firebase";
import { doc } from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";

export const createNewCategory = async (data, image) => {
  if (!image) {
    throw new Error("Image is required");
  }
  if (!data.name) {
    throw new Error("Name is required");
  }
  if (!data.slug) {
    throw new Error("Slug is required");
  }

  const newId = doc(collection(db, `ids`)).id;
  let imageRef = ref(storage, `categories/${newId}`);
  await uploadBytes(imageRef, image);
  const imageURL = await getDownloadURL(imageRef);

  await setDoc(doc(db, `categories/${newId}`), {
    ...data,
    image: imageURL,
    id: newId,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
};

//* this function will create a new category in the firestore database. It will throw an error if the image, name, or slug is missing. It will also upload the image to the storage and get the download URL of the image. Finally, it will create a new document in the categories collection with the data provided.
