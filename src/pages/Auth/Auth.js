import { Outlet } from "react-router-dom";
import BaseLayout from '../../components/BaseLayout/BaseLayout';

const RegistrationPage = () => (
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

<BaseLayout>
  <div className="container">
    <div className="row">
      <div className="col-md-8">
        {/* Content on the right side */}
        <div className="content">Some Content</div>
      </div>
      <div className="col-md-4">
        {/* Toggle based on user logged in */}
        {isLoggedIn ? <UserProfile /> : (
          <div className="registration">
            <Outlet />
          </div>
        )}
      </div>
    </div>
  </div>
</BaseLayout>
);

export default RegistrationPage;
