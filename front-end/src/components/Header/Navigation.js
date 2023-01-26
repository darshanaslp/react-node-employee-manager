import { ToastContainer } from 'react-toastify';

const Navigation = () => {
  return (
    <div>
      <ToastContainer />
      <nav className="navbar navbar-expand-lg navbar-dark nav-color">
        <div className="container">
          <a className="navbar-brand" href="/">Employee Manager</a>
        </div>
      </nav>
    </div>
  );

};
export default Navigation;