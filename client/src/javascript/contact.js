import React from 'react'

//import '../css/a_propos.css'

class Contact extends React.Component{
    // CopyText = () => {
    //     var copyText = document.getElementById("copy");
    //     copyText.select();
    //     copyText.setSelectionRange(0, 99999)
    //     document.execCommand("copy");
    //     alert("Copied the text: " + copyText.value);
    // }

    render(){
        document.title = "Contact Us | 7ArtCafe"
        return(
            <>
                <div className='corps_propos w3-container w3-center'>
                    <p>Are you interested in opening a 7 Art Café franchise ?</p>
                    <hr/>
                    <p>Do you want to participate in the Sunday Shows ?</p>
                    <hr/>
                    <p>Contact us on this email : <span><p id="copy">7artcafe7@gmail.com</p></span></p>
                </div>
            </>
        )
    }
}

export default Contact