import axiosInstance from "./axios";

interface Note {
    title: string;
}

export const addNote  = async (note : Note)=>{
    const response = await axiosInstance.post('note/createNote', note);
    return response;
}

export const allNotes = async ()=>{
    const response = await axiosInstance.get('note/allNotes');
    return response;
}