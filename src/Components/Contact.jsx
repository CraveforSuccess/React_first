import React from 'react'
import '../Styles/contact.scss';
// import '../Styles/mediaqueries.scss';
import '../Styles/Contact_media.scss'

const Contact = () => {
    return (
        <div className='contact_div'>
            <main>
                <h1>Contact us</h1>
                    <form>
                        <div>
                            <label >Name</label>
                            <input type="text" required placeholder='Name' />
                        </div>
                        <div>
                            <label >Email</label>
                            <input type="email" required placeholder='Email Please' />
                        </div>
                        <div>
                            <label >Message</label>
                            <input type="text" required placeholder='Enter Your Message' />
                        </div>

                        <button type='submit'>Submit</button>
                    </form>
                
            </main>

        </div>
    )
}

export default Contact
