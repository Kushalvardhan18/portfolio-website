import React from "react";
import github from "../assets/github.png"
import mail from "../assets/mail.png"
import linkedIn from "../assets/linkedIn.png"
import twitter from "../assets/twitter.png"
import leetcode from "../assets/leetcode.png"

function Footer(){
return <div className="flex items-center justify-between mx-10 border-2 border-fuchsia-700 px-10 py-10">
    <p className="text-2xl">WEB DESIGNER AND SOFTWARE DEVELOPER</p>
    <div className="flex gap-10 items-center">
        <img src={github} alt="github" className="cursor-pointer transition-transform duration-300 ease-in-out hover:scale-120"/>
        <img src={mail} alt="mail" className="cursor-pointer transition-transform duration-300 ease-in-out hover:scale-120" />
        <img src={linkedIn} alt="linkedIn" className="cursor-pointer transition-transform duration-300 ease-in-out hover:scale-120"/>
        <img src={twitter} alt="twitter" className="cursor-pointer transition-transform duration-300 ease-in-out hover:scale-120"/>
        <img src={leetcode} alt="leetcode" className="cursor-pointer transition-transform duration-300 ease-in-out hover:scale-120"/>
    </div>
</div>
}

export default Footer