import React, {Component} from 'react'
import {IconSettings, Card} from '@salesforce/design-system-react';

import Header from "components/Header";
import Navigation from "components/Navigation";

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
                                                    <div className="slds-media">
                                                        <div
                                                            className="slds-media__figure slds-media__figure_fixed-width slds-align_absolute-center">
                                                            <div className="slds-welcome-mat__tile-figure">
                                                                <div className="slds-welcome-mat__tile-icon-container">
                                                                    <span className="slds-icon_container slds-icon-utility-animal_and_nature">
                                                                        <svg className="slds-icon slds-icon-text-default" aria-hidden="true">
                                                                            <use xlinkHref="/icons/utility-sprite/svg/symbols.svg#animal_and_nature"></use>
                                                                        </svg>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="slds-media__body">
                                                            <div className="slds-welcome-mat__tile-body">
                                                                <h3 className="slds-welcome-mat__tile-title">Rackbot</h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="slds-welcome-mat__tile">
                                                    <div className="slds-media">
                                                        <div
                                                            className="slds-media__figure slds-media__figure_fixed-width slds-align_absolute-center">
                                                            <div className="slds-welcome-mat__tile-figure">
                                                                <div className="slds-welcome-mat__tile-icon-container">
                                                                    <span className="slds-icon_container slds-icon-utility-animal_and_nature">
                                                                        <svg className="slds-icon slds-icon-text-default" aria-hidden="true">
                                                                            <use xlinkHref="/icons/utility-sprite/svg/symbols.svg#animal_and_nature"></use>
                                                                        </svg>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="slds-media__body">
                                                            <div className="slds-welcome-mat__tile-body">
                                                                <h3 className="slds-welcome-mat__tile-title">VMware vSphere</h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="slds-welcome-mat__tile">
                                                    <div className="slds-media">
                                                        <div
                                                            className="slds-media__figure slds-media__figure_fixed-width slds-align_absolute-center">
                                                            <div className="slds-welcome-mat__tile-figure">
                                                                <div className="slds-welcome-mat__tile-icon-container">
                                                                    <span className="slds-icon_container slds-icon-utility-animal_and_nature">
                                                                        <svg className="slds-icon slds-icon-text-default" aria-hidden="true">
                                                                            <use xlinkHref="/icons/utility-sprite/svg/symbols.svg#animal_and_nature"></use>
                                                                        </svg>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="slds-media__body">
                                                            <div className="slds-welcome-mat__tile-body">
                                                                <h3 className="slds-welcome-mat__tile-title">OpenStack</h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="slds-welcome-mat__tile">
                                                    <div className="slds-media">
                                                        <div
                                                            className="slds-media__figure slds-media__figure_fixed-width slds-align_absolute-center">
                                                            <div className="slds-welcome-mat__tile-figure">
                                                                <div className="slds-welcome-mat__tile-icon-container">
                                                                    <span className="slds-icon_container slds-icon-utility-animal_and_nature">
                                                                        <svg className="slds-icon slds-icon-text-default" aria-hidden="true">
                                                                            <use xlinkHref="/icons/utility-sprite/svg/symbols.svg#animal_and_nature"></use>
                                                                        </svg>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="slds-media__body">
                                                            <div className="slds-welcome-mat__tile-body">
                                                                <h3 className="slds-welcome-mat__tile-title">Kubernetes</h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="slds-col slds-size_1-of-2">
                                            <ul className="slds-welcome-mat__tiles">
                                                <li className="slds-welcome-mat__tile">
                                                    <div className="slds-media">
                                                        <div
                                                            className="slds-media__figure slds-media__figure_fixed-width slds-align_absolute-center">
                                                            <div className="slds-welcome-mat__tile-figure">
                                                                <div className="slds-welcome-mat__tile-icon-container">
                                                                    <span className="slds-icon_container slds-icon-utility-animal_and_nature">
                                                                        <svg className="slds-icon slds-icon-text-default" aria-hidden="true">
                                                                            <use xlinkHref="/icons/utility-sprite/svg/symbols.svg#animal_and_nature"></use>
                                                                        </svg>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="slds-media__body">
                                                            <div className="slds-welcome-mat__tile-body">
                                                                <h3 className="slds-welcome-mat__tile-title">AWS</h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="slds-welcome-mat__tile">
                                                    <div className="slds-media">
                                                        <div
                                                            className="slds-media__figure slds-media__figure_fixed-width slds-align_absolute-center">
                                                            <div className="slds-welcome-mat__tile-figure">
                                                                <div className="slds-welcome-mat__tile-icon-container">
                                                                    <span className="slds-icon_container slds-icon-utility-animal_and_nature">
                                                                        <svg className="slds-icon slds-icon-text-default" aria-hidden="true">
                                                                            <use xlinkHref="/icons/utility-sprite/svg/symbols.svg#animal_and_nature"></use>
                                                                        </svg>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="slds-media__body">
                                                            <div className="slds-welcome-mat__tile-body">
                                                                <h3 className="slds-welcome-mat__tile-title">GCP</h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="slds-welcome-mat__tile">
                                                    <div className="slds-media">
                                                        <div
                                                            className="slds-media__figure slds-media__figure_fixed-width slds-align_absolute-center">
                                                            <div className="slds-welcome-mat__tile-figure">
                                                                <div className="slds-welcome-mat__tile-icon-container">
                                                                    <span className="slds-icon_container slds-icon-utility-animal_and_nature">
                                                                        <svg className="slds-icon slds-icon-text-default" aria-hidden="true">
                                                                            <use xlinkHref="/icons/utility-sprite/svg/symbols.svg#animal_and_nature"></use>
                                                                        </svg>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="slds-media__body">
                                                            <div className="slds-welcome-mat__tile-body">
                                                                <h3 className="slds-welcome-mat__tile-title">Azure</h3>
                                                            </div>
                                                        </div>
                                                    </div>
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
                                            <div className="slds-media">
                                                <div
                                                    className="slds-media__figure slds-media__figure_fixed-width slds-align_absolute-center">
                                                    <div className="slds-welcome-mat__tile-figure">
                                                        <div className="slds-welcome-mat__tile-icon-container">
                                                            <span className="slds-icon_container slds-icon-utility-animal_and_nature">
                                                                <svg className="slds-icon slds-icon-text-default" aria-hidden="true">
                                                                    <use xlinkHref="/icons/utility-sprite/svg/symbols.svg#animal_and_nature"></use>
                                                                </svg>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="slds-media__body">
                                                    <div className="slds-welcome-mat__tile-body">
                                                        <h3 className="slds-welcome-mat__tile-title">Service Intent Designer</h3>
                                                    </div>
                                                </div>
                                            </div>
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
                                            <div className="slds-media">
                                                <div
                                                    className="slds-media__figure slds-media__figure_fixed-width slds-align_absolute-center">
                                                    <div className="slds-welcome-mat__tile-figure">
                                                        <div className="slds-welcome-mat__tile-icon-container">
                                                            <span className="slds-icon_container slds-icon-utility-animal_and_nature">
                                                                <svg className="slds-icon slds-icon-text-default" aria-hidden="true">
                                                                    <use xlinkHref="/icons/utility-sprite/svg/symbols.svg#animal_and_nature"></use>
                                                                </svg>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="slds-media__body">
                                                    <div className="slds-welcome-mat__tile-body">
                                                        <h3 className="slds-welcome-mat__tile-title">Y-Axis</h3>
                                                    </div>
                                                </div>
                                            </div>
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