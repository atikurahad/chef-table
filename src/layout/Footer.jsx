
const Footer = () => {
    const date = new Date().getFullYear();
    return (
        <>

        <div className="grid grid-cols-3 justify-items-center	 bg-white h-46">
            <h1>CHEF-TABLE</h1>
            <p>&copy;{date} Code With Noob, All Rights Reserved</p>
            <section>

            </section>
        </div>
            
        </>
    );
};

export default Footer;