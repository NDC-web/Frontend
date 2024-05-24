import React from 'react'

export default function FAQ() {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <p style = {{fontSize:'27px'}}>Frequently Asked Questions</p>
                        <hr />
                        <p className="mt-5" style = {{fontSize:'22px'}}>Enrolling in the Consortium</p>
                        <p style={{ textAlign: 'justify', textJustify: 'inter-word' }}>It's $99 a year 3 years for $199 to Enroll in the
                            Consortium with Unlimited Drivers. Your Enrollment Certificate is Emailed Immediately, which is Proof for DOT
                            that your Company is in the Consortium. Once your Quest Diagnostics Account is setup (about 1 Business Day)
                            you will be able to order Drug Tests Online right from your Express Labs account. You will also receive Drug
                            Testing Forms from Quest Diagnostics within 1 week of Enrolling by FedEX.</p>
                        <hr />

                        <p className="mt-5" style = {{fontSize:'22px'}}>How are Drivers Added to the Random Pool</p>
                        <p style={{ textAlign: 'justify', textJustify: 'inter-word' }}> <b> During Enrollment </b>- DOT Allows Drivers to
                            Added to the Random Pool who have Negative DOT Pre-Employment Drug Test Results (In your Company Name) and
                            have been in a Random Pool within the Previous 30 Days.</p>
                        <p style={{ textAlign: 'justify', textJustify: 'inter-word' }}> <b> After Enrollment </b>- Drivers are Automatically
                            Added to the Random Pool and Allowed on the Road when Negative Pre-Employment Drug Test Results are Reported
                            by Express Labs Medical Review Officer (MRO).</p>
                        <hr />

                        <p className="mt-5" style = {{fontSize:'22px'}}>How does Express Labs Conduct Random Selections?</p>
                        <p style={{ textAlign: 'justify', textJustify: 'inter-word' }}>Express Labs Conducts 4 Computerized Quarterly
                            Selections during the Months of January, April, July & October. Express Labs is Mandated by DOT to have 50% of
                            Drivers Tested for Drugs & 10% Tested for Alcohol Yearly.</p>
                        <hr />
                    </div>
                </div>
            </div>


            <div className="container my-5">
                <hr />
            </div>
        </div>
    )
}
