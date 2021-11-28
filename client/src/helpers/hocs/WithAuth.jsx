import PropTypes from 'prop-types';


function WithAuth(Component) {
    return function ({ isLogged, ...props }) {
        if (isLogged) return <Component {...props} />;
        return <p>You don't have access to this page. Please sign in to your account.</p>;
    };
}


WithAuth.propTypes = {}


export default WithAuth;

