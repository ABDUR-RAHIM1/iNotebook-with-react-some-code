import Alert from 'react-bootstrap/Alert';

function Massege(props) {
    return (
        <>

            <Alert variant="danger">
                 {props.massege}
            </Alert>

        </>
    );
}

export default Massege;