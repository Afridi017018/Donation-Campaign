import React from 'react';



const Card = ({element}) => {
    // console.log(element)


    return (
        <>
        { element &&
            <div className={`inline-block rounded-t-md rounded-b-md w-72 h-72 cursor-pointer`} style={{ backgroundColor: element.card_bg }} >
            <div>
                <img className='h-52 w-full rounded-t-md' src={element.pic} alt="" />
            </div>
            <div>
                <div className='m-2'>
                    <p className={`inline text-sm font-semibold px-1 rounded-sm capitalize`} style={{ backgroundColor: element.category_bg, color: element.textBtnColor }}>{element.category}</p>
                </div>
                <div className='m-2'>
                    <h3 className={`text-lg font-semibold inline`} style={{color: element.textBtnColor}}>{element.title}</h3>
                </div>
            </div>
        </div>
        }
        </>
    );
};

export default Card;