import	{useState} from 'react'
const useForm=(initialState)=>{
	const [form,setForm]=useState(initialState)

	const onChange = ({ target }) => {
		const {name,value}=target
		  setForm({...form,[name]:value});
		};
		const cleanFields=()=>{
			setForm(initialState)
		}
	return {form,onChange, cleanFields}
}
export default useForm;