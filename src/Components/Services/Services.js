import React, { useEffect, useState } from 'react'
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
      fetch("services.json")
        .then((res) => res.json())
        .then((data) => setServices(data));
    }, []);
  return (
    <div>
        <h3 className='text-center font-bold text-primary text-4xl mt-10 mb-10'>Our Services</h3>
        <div className='services-content grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-5'>
            {
                services.map(service => <Service service={service} key={service.id}></Service>)
            }
        </div>
    </div>
  )
}

export default Services;