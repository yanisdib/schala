import PropTypes from 'prop-types';


function WithLoading(Component) {
    return function ({ isLoading, ...props }) {
        if (isLoading) return <Component {...props} />;
        return <p>Loading... it won't take long.</p>;
    };
}


WithLoading.propTypes = {}


export default WithLoading;

