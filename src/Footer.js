const Footer =()=>{
        const curdate = new Date().getFullYear();    
return(
    <>
        <footer className="w-100 text-center">
            <p>© {curdate} Swati Gupta. All Rights reserved |terms and conditions</p>
        </footer>
    </>
)
};
export default Footer;