import { connect } from 'react-redux';
import Dashboard from '../components/Dashboard';
import { removeCar } from '../redux/actions';

const mapStateToProps = (state) => {

    const props = {
        cars: state.cars,
        user: state.user
    };
    console.log(props);
    return props;
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeCar: (index) => dispatch(removeCar(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);