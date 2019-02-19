import React, {Component} from 'react'
import {IconSettings} from '@salesforce/design-system-react';

import Header from "components/Header";
import Navigation from "components/Navigation";

import {ProductWrap} from "components/Widgets";

import './index.scss';

const PageHeader = props => {
    return (
        <article className="slds-card page-header">
            <div className="slds-card__body slds-grid">
                <div className="slds-col slds-size_1-of-3 logo">
                    <img src="/images/logo.svg" alt=""/>
                </div>
                <div className="slds-col slds-size_2-of-3 description">
                    <div className="slds-text-heading_medium slds-m-bottom_small">
                        A Network Integration Platform
                    </div>
                    <p className="slds-text-heading_small">The world’s first application-aware and
                        vendor-agnostic network automation solution, SNAP accelerates the journey to
                        automation by connecting and choreographing your infrastructure and
                        applications. At the intesection of software defined networking (SDN) and
                        Network Function Virtualization (NFV), SNAP brings the power of API-led
                        connectivity to network infrastructure.</p>
                </div>
            </div>
        </article>
    )
}
class Home extends Component {
    render() {
        return (
            <IconSettings iconPath="/icons">
                <Header></Header>
                <Navigation></Navigation>
                <main className="home slds-m-horizontal_x-small">
                    <PageHeader></PageHeader>
                    <div className="slds-grid slds-gutters slds-m-top_small products">
                        <div className="slds-col slds-size_1-of-3 product expose">
                            <div className="slds-card">
                                <div className="slds-card__header">
                                    <div className="slds-text-heading_medium slds-m-bottom_x-small">Expose</div>
                                    <div className="slds-text-heading_small slds-m-bottom_small">API's for Infrastructure Integration</div>
                                    <p className="slds-text-title">
                                        Access SNAP APIs to request Data Centre Resources, Create VPN, Migrate
                                        Configuration, move VMs and much more
                                    </p>
                                </div>
                                <div className="slds-card__body">
                                    <div className="slds-grid">
                                        <div className="slds-col slds-size_1-of-2">
                                            <ul className="slds-welcome-mat__tiles">
                                                <li className="slds-welcome-mat__tile">
                                                    <ProductWrap name="Rackbot"/>
                                                </li>
                                                <li className="slds-welcome-mat__tile">
                                                    <ProductWrap name="VMware vSphere" imageUrl="/images/thirdparty/vsphere.svg"/>
                                                </li>
                                                <li className="slds-welcome-mat__tile">
                                                    <ProductWrap name="Openstack" imageUrl="/images/thirdparty/openstack.svg"/>
                                                </li>
                                                <li className="slds-welcome-mat__tile">
                                                    <ProductWrap name="Kubernetes" imageUrl="/images/thirdparty/kubernetes.svg"/>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="slds-col slds-size_1-of-2">
                                            <ul className="slds-welcome-mat__tiles">
                                                <li className="slds-welcome-mat__tile">
                                                    <ProductWrap name="AWS" imageUrl="/images/thirdparty/aws.svg"/>
                                                </li>
                                                <li className="slds-welcome-mat__tile">
                                                    <ProductWrap name="GCP" imageUrl="/images/thirdparty/gcp.svg"/>
                                                </li>
                                                <li className="slds-welcome-mat__tile">
                                                    <ProductWrap name="Azure" imageUrl="/images/thirdparty/azure.svg"/>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="slds-col slds-size_1-of-3 product compose">
                            <div className="slds-card">
                                <div className="slds-card__header">
                                    <div className="slds-text-heading_medium slds-m-bottom_x-small">Compose</div>
                                    <div className="slds-text-heading_small slds-m-bottom_small">SNAP Customization</div>
                                    <p className="slds-text-title">
                                        Network and Infrastructure Architects can Conceptualize, Design, Develop
                                        Infrastructure Intents.
                                    </p>
                                </div>
                                <div className="slds-card__body slds-p-horizontal_small">
                                    <ul className="slds-welcome-mat__tiles">
                                        <li className="slds-welcome-mat__tile">
                                            <ProductWrap
                                                name="Service Intent Designer"
                                                imageUrl="/images/thirdparty/designer.svg"/>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="slds-col slds-size_1-of-3 product govern">
                            <div className="slds-card">
                                <div className="slds-card__header">
                                    <div className="slds-text-heading_medium slds-m-bottom_x-small">Govern</div>
                                    <div className="slds-text-heading_small slds-m-bottom_small">Context &amp; Operate</div>
                                    <p className="slds-text-title">
                                        Designed for SNAP administrators to set infrastructure, user context ( roles
                                        &amp; access privileages ) and Create, Edit, Modify Templates
                                    </p>
                                </div>
                                <div className="slds-card__body slds-p-horizontal_small">
                                    <ul className="slds-welcome-mat__tiles">
                                        <li className="slds-welcome-mat__tile">
                                            <ProductWrap name="Y Axis" imageUrl="/images/thirdparty/y-axis.svg"/>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </IconSettings>
        )
    }
}

export default Home;