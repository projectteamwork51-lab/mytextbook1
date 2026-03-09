

function Button (){
     

     const  handleClick = (e) => e.target.textContent = "pukkaa";
    
return (<>
     <button onDoubleClick  = { (e) => handleClick(e)}>  click on me </button>
</>
);

}
export default Button 