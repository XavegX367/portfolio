import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import MouseTracker from "./MouseTracker";
class Layout extends React.Component {
    render(){
        return (
        <>
            <Header />
            <MouseTracker/>
            <div className="h-screen">

                <div className="">
                    <main className="opacity-100 z-10">{this.props.children}</main>
                </div>
            </div>
            
            
            <Footer />
        </>
        )
    }
}
export default Layout;