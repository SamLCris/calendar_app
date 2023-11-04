import {useForm} from 'react-hook-form';
import { createTask } from '../api/task.api';
import {useNavigate} from 'react-router-dom';

export function TaskFormPage() {
     const {register, handleSubmit} = useForm();
     const navigate = useNavigate();
     const onSubmit = handleSubmit( async data => {
          await createTask(data);
          navigate('/tasks');

     });

     return (
        <div>
            <form onSubmit={onSubmit}>
                <input type='text' placeholder='title' {...register('title',{required: true})} name='title'/>
                <textarea rows="3" placeholder='description' {...register('description', {required:true})} name='description'></textarea>
                <button >Create Task</button>
            </form>
        </div>
     )
}
  