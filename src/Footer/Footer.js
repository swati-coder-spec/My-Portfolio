import "./style.css"
const Footer =()=>{
        const curdate = new Date().getFullYear();    
return(
    <>
        <footer className="w-100 text-center">
            <p>© {curdate} Swati Gupta | Made From Heart And Brain</p>
        </footer>
    </>
)
};
export default Footer;