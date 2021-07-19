import { connect } from 'react-redux';
import Car from '../components/Car';

const mapStateToProps = (state) => {

    const props = {
        cars: state.cars
    };

    return props;
}

export default connect(mapStateToProps)(Car);