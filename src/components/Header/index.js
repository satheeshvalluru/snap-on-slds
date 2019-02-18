import React, {Component} from 'react';
import {SLDSGlobalHeader, SLDSGlobalHeaderButton, SLDSGlobalHeaderProfile} from '@salesforce/design-system-react';

class Header extends Component {
    render() {
        return (
            <SLDSGlobalHeader logoSrc="/images/logo-noname.svg">
                <SLDSGlobalHeaderButton
                    assistiveText={{
                    icon: 'Setup'
                }}  
                    iconCategory="utility"
                    iconName="settings"
                    onClick={() => {
                    console.log('>>> onClick');
                }}/>
                <SLDSGlobalHeaderProfile
                    avatar="/images/avatar2.jpg"
                    onClick={() => {
                    console.log('>>> onClick');
                }}
                    onSelect={() => {
                    console.log('>>> onSelect');
                }}
                    options={[{
                        label: 'Profile Menu'
                    }
                ]}/>
            </SLDSGlobalHeader>
        )
    }
}

export default Header;