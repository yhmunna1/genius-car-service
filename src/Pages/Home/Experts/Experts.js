import React from 'react';
import expert1 from '../../../images/experts/expert-1.jpg'
import expert2 from '../../../images/experts/expert-2.jpg'
import expert3 from '../../../images/experts/expert-3.jpg'
import expert4 from '../../../images/experts/expert-4.jpg'
import expert5 from '../../../images/experts/expert-5.jpg'
import expert6 from '../../../images/experts/expert-6.png'
import Expart from '../Expert/Expart';

const experts = [
    { id: 1, name: 'Will Smith', img: expert1 },
    { id: 2, name: 'Jhon Smith', img: expert2 },
    { id: 3, name: 'Dwayne Summy', img: expert3 },
    { id: 4, name: 'Joe Root', img: expert4 },
    { id: 5, name: 'DJ Dravo', img: expert5 },
    { id: 6, name: 'Lili', img: expert6 },
]

const Experts = () => {
    return (
        <div id='experts' className='container'>
            <h2 className='text-primary text-center mt-5'>Our Experts</h2>
            <div className="row">
                {
                    experts.map(expert => <Expart
                        key={expert.id}
                        expert={expert}
                    ></Expart>)
                }
            </div>

        </div>
    );
};

export default Experts;