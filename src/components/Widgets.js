import React from 'react'

const ProductWrap = props => {
    return (
        <div className="slds-media">
            <div
                className="slds-media__figure slds-media__figure_fixed-width slds-align_absolute-center">
                {
                    props.imageUrl ? 
                    <img className="" src={props.imageUrl} alt={props.name}/> :
                    <span class="slds-avatar slds-avatar_large slds-align_absolute-center slds-icon-custom-27">
                        {props.name.slice(0,2)}
                    </span>
                }
                
            </div>
            <div className="slds-media__body">
                <div className="slds-welcome-mat__tile-body">
                    <h3 className="slds-welcome-mat__tile-title">{props.name}</h3>
                </div>
            </div>
        </div>
    )
}

export {ProductWrap}