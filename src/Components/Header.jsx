import {NavLink} from 'react-router-dom'

function Header(){
    return(
        <>
            <header style={styles.header}>
                <div style={styles.logo}>MyApp</div>
                <nav style={styles.nav}>
                    <NavLink to="/" style={({isActive})=> isActive?styles.activeLink:styles.link} >
                        Home
                    </NavLink>
                    
                    <NavLink to="/about" style={({isActive})=> isActive?styles.activeLink:styles.link} >
                        About
                    </NavLink>
                    
                    <NavLink to="/contact" style={({isActive})=> isActive?styles.activeLink:styles.link}>
                        Contact
                    </NavLink>
                </nav>
            </header>
        
        
        </>

        
    )
}

const styles={
    header:{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px 40px",
        borderBottom: "1px solid #ddd",
        backgroundColor: "#ffffff",
    },
    logo: {
        fontSize: "22px",
        fontWeight: "bold",
    },
    nav:{
        display:"flex",
        gap:"20px"

    },
    link: {
        textDecoration: "none",
        color: "#352121",
        padding: "6px 4px",
        
    
       
    },
    activeLink: {
        borderBottom:"2px solid #ff2929",
        textDecoration: "none",
        padding: "6px 4px",
        paddingBottom:"4px"

        
    }

}
export default Header;