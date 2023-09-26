import React from 'react';
import { useNavigate } from 'react-router-dom';

const DonationCard = ({ element, id }) => {

    const navigate = useNavigate();

    return (
        <div className='rounded-lg shadow-xl' style={{ backgroundColor: element.card_bg }}>
            <div className='flex'>
                <div>
                    <img className='h-44 md:h-44 w-40 md:w-52 rounded-l-lg' src={element.pic} alt="" />
                </div>

                <div className='flex flex-1 flex-col justify-center gap-2 pl-5'>
                    <div>
                        <p className={`inline text-sm font-semibold px-1 rounded-sm capitalize`} style={{ backgroundColor: element.category_bg, color: element.textBtnColor }} >{element.category}</p>
                    </div>
                    <div>
                        <h3 className='text-xl font-semibold'>{element.title}</h3>
                    </div>
                    <div>
                        <p className='text-sm font-semibold text-blue-800' style={{ color: element.textBtnColor }} >$230</p>
                    </div>
                    <div>
                        <button className='px-3 py-1 rounded text-white' style={{ backgroundColor: element.textBtnColor }} onClick={() => navigate(`/donate/${id}`)}>View Details</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default DonationCard;