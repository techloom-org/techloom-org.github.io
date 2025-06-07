import { Route } from 'react-router-dom';

// Route renderer component that handles route metadata and rendering
const RouteRenderer = ({ route }) => {
  const Component = route.component;

  return <Route path={route.path} element={<Component />} />;
};

export default RouteRenderer;
