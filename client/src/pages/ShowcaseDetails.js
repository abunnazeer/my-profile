import { useParams } from 'react-router-dom';
import { Fragment } from 'react';
import Layout from '../components/layout/Layout';
function ProjectDetails() {
  const params = useParams();
  return (
    <Fragment>
      <Layout />
      <h1> {params.Id}</h1>
    </Fragment>
  );
}

export default ProjectDetails;
