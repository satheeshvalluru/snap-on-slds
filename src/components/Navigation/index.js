import React, {Component} from 'react'

import {GlobalNavigationBar, 
        GlobalNavigationBarRegion, 
        GlobalNavigationBarLink,
        AppLauncher,
        AppLauncherSection,
        AppLauncherTile
    } from '@salesforce/design-system-react';

class Navigation extends Component {
    render() {
        return (
            <div
                className="navigation-bar"
                style={{
                marginTop: '55px'
            }}>
                <GlobalNavigationBar>
                    <GlobalNavigationBarRegion region="primary">
                    <AppLauncher
							triggerName="SNAP"
						>
                            <AppLauncherSection title="Tile Section">
								<AppLauncherTile
									title="SNAP Connect"
									iconText="SC"
									description="Lorem Ipsum Dipsum"
								/>
								<AppLauncherTile
									title="SNAP 365"
									description="Lorem Ipsum Dipsum"
									iconText="365"
								/>
							</AppLauncherSection>
                        </AppLauncher>
                    </GlobalNavigationBarRegion>
                    <GlobalNavigationBarRegion region="secondary" navigation>
                        <GlobalNavigationBarLink
                            href="javascript:void(0);"
                            label="Home"
                            active={true}
                            id="home-link"/>
                        <GlobalNavigationBarLink
                            href="javascript:void(0);"
                            label="Expose"
                            id="home-link"/>
                        <GlobalNavigationBarLink
                            href="javascript:void(0);"
                            label="Compose"
                              id="home-link"/>
                    </GlobalNavigationBarRegion>
                </GlobalNavigationBar>
            </div>

        )
    }
}

export default Navigation;