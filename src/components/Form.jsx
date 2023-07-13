import GetRamdonNumber from "../utils/getRamdonNumber"


const Form = ({setIdLocation }) => {

  const handSubmit = e => {
     e.preventDefault()
     const inputValue =  e.target.inputId.value.trim()
     if (inputValue === '' || inputValue === '0') {
      setIdLocation( GetRamdonNumber(126)) 
     }else{
      setIdLocation(e.target.inputId.value.trim() )
     }
     e.target.inputId.value = ''
  }
  

  
  return (
   <form className="Input" onSubmit={handSubmit}>
    <input id="inputId" style={ { boxShadow: '1px 1px 10px'}} type="text" />
    <button style={ { backgroundColor: 'green' , color: 'white'}} >Search</button>
   </form>
  )
}

export default Form
 