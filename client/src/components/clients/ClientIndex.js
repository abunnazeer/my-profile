import { Fragment, useState, useEffect } from 'react';

import IndexCard from '../../administration/IndexCard';

import IndexHeader from '../../administration/IndexHeader';

const Url = 'http://localhost:8000';
function ClientIndex() {
  const [client, setClient] = useState([]);
  async function clientdata(url) {
    const response = await fetch(url + '/clients');
    const data = await response.json();
    setClient(data);
  }
  useEffect(() => {
    clientdata(Url);
  }, []);
  return (
    <Fragment>
      <IndexHeader />

      {client.map(function (item, id) {
        return <IndexCard name={item.clientName} img={item.logo} key={id} />;
      })}
    </Fragment>
  );
}
export default ClientIndex;
