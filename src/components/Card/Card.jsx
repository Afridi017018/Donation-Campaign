import React from 'react';


const Card = ({element}) => {
    console.log(element)

    return (
        <div className={`${element.card_bg} inline-block rounded-t-md rounded-b-md w-72 h-72 cursor-pointer`}>
            <div>
                <img className='h-52 w-full rounded-t-md' src={element.pic} alt="" />
            </div>
            <div>
                <div className='m-2'>
                    <p className={`${element.category_bg} ${element.text_and_button_bg} inline text-sm font-semibold px-1 rounded-sm capitalize`}>{element.category}</p>
                </div>
                <div className='m-2'>
                    <h3 className={`text-lg font-semibold ${element.text_and_button_bg} inline`}>{element.title}</h3>
                </div>
            </div>
        </div>
    );
};

export default Card;