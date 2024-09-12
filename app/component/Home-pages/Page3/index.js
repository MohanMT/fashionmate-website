import React from 'react';
import Image from 'next/image';
// import styles from './page3.css'; // Ensure you use the correct path for your CSS module

const Page3 = () => {
  return (
    <div className='relative h-screen'>
      <div className={"absolute top-0 right-0 escAnimation p-4 md:p-16 lg:p-10"}>
        <Image src='/assets/images/esc.png' width={600} height={100} alt='ESC' />
      </div>
      <div className={"absolute bottom-5 left-0 newArrivalAnimation p-8 md:p-16 lg:p-24"}>
        <Image src='/assets/images/new-arr.png' width={670} height={100} alt='New Arrival' />
      </div>
    </div>
  );
}
export default Page3;