import {useForm} from 'react-hook-form'
import { addNote } from '../endpoints/api';

interface FormData {
    title : string;
}

const AddNote = () => {
  const {register, handleSubmit, formState:{errors}, reset} = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      const result = await addNote({ title: data.title });
      if(result.data.status ===200){
        alert("Note Added Successfully");
      } else{
        alert("Note Added unsuccessful");
      }    
    } catch (error) {
      console.error('Error adding note:', error);
      alert("Error occured...please try later..");
    }
    reset();
  };

  return (
    <div className="w-full max-w-md p-6 rounded-2xl mb-2">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
                <input
                    type="text"
                    {...register('title', { required: 'Add note is required' })}
                    className="mt-1 w-full p-2 border border-gray-300 rounded-md"
                />
                {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
            </div>
            <button type="submit" className="w-full p-2 bg-blue-600 text-white rounded-md cursor-pointer">Add</button>
        </form>
    </div>
  )
}

export default AddNote
