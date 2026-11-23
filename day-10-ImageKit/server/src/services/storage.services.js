import ImageKit from "imagekit";
import dotenv from "dotenv"
dotenv.config();

const storageInstance = new ImageKit({
    publicKey: process.env.IK_PUBLIC_KEY,
    privateKey: process.env.IK_PRIVATE_KEY,
    urlEndpoint: process.env.IK_URL,
});

export const sendFiles = async (file, fileName)=>{
    const obj = {
        file,
        fileName,
        folder:"Cohort-3",
    }
   return await storageInstance.upload(obj) 
}
