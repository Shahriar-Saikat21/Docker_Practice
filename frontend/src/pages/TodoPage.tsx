import Todolist from '../components/Todolist'
import AddNote from '../components/AddNote'

const TodoPage = () => {
  return (
    <div className='flex flex-col bg-[#F8FAFC] w-full h-[100vh] justify-start items-center pt-[80px]'>
      <AddNote/>
      <h2 className=' text-5xl text-green-600 font-semibold mb-5'>Your Notes</h2>
      <Todolist/>
    </div>
  )
}

export default TodoPage
