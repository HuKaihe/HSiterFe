import React from 'react';
import GlobalTop from '../../global/GlobalTop/GlobalTop';
import SignupForm from './SignupForm';
import SignupIntro from './SignupIntro';

function HsiterSignup() {
    return (
        <div className="hsiter-account">
            <GlobalTop />
            <div className="account-container">
                <div className="hsiter-signup">
                    <SignupIntro />
                    <SignupForm />
                </div>
            </div>

        </div>
    );
}

HsiterSignup.propTypes = {};
HsiterSignup.defaultProps = {};
export default HsiterSignup;
