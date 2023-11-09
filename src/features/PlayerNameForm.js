import { Formik, Form, Field, ErrorMessage } from 'formik';

const initialValues = {
    playerName: ''
}

const PlayerNameForm = () => {
    return (
        <>
            <h1>Who is playing?</h1>
            <Formik
                initialValues={initialValues}
            >
                <Form>
                    <Field type='playerName' name='playerName' />
                    <button type='submit'>Add</button>
                </Form>
            </Formik>
        </>
    );
};

export default PlayerNameForm;