// @flow
import * as React from 'react';

const Card = ({dish}) => {
    const {id, dishName, owner, waitingPeriod, photo} = dish;
    return (
        <div key={id} className={'card'}>
            <img src={`/images/${photo}.jpg`} alt={"curry"} className={'w-full h-40 object-cover'}/>
            <div className={'m-4'}>
                <span className={'font-bold'}>{dishName}</span>
                <span className={'block'}>Recipe by {owner}</span>
            </div>
            <div className={'badge'}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-5 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{waitingPeriod} mins</span>
            </div>
        </div>
    );
};

export default Card;