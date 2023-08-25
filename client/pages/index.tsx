import Link from 'next/link'
import React from 'react';

const index = () => {
    return (
        <div>
           <div><h1>Links</h1>
                <Link href={'/ru/MainPage'}>MainPage</Link>
            </div> 
        </div>
    );
};

export default index;