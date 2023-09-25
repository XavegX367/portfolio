import React from "react"
import Header from "./Header"
import Footer from "./Footer"
class Layout extends React.Component {
    render(){
        return (
        <>
            <Header />
            <div>

                <div className="">
                    <main className="opacity-100">{this.props.children}</main>
                </div>
            </div>
            
            
            <Footer />
        </>
        )
    }
}
export default Layout;