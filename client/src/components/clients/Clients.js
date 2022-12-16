import React, { useEffect, useState } from 'react';
import ClientCard from './ClientCard';
import { Link } from 'react-router-dom';

function Client() {
  const Url = 'http://localhost:8000';
  const [client, setClient] = useState([]);
  async function clientData(url) {
    const response = await fetch(url + '/clients');
    const data = await response.json();
    setClient(data);
  }
  useEffect(() => {
    clientData(Url);
  }, []);
  return (
    <section className="clients__container">
      <div className="client__text">
        <h1 className="title">Clients</h1>
        <p>
          I design with our clients as much as I design for them. I am proud to
          have contributed to the success in there business
        </p>
      </div>
      <div className="clients__box">
        {client.map(items => {
          return <ClientCard img={items.imagePath} key={items.id} />;
        })}
      </div>
      <div>
        <Link to="/reviews" className="custom__btn">
          See what they've said
        </Link>
      </div>
    </section>
  );
}

export default Client;
