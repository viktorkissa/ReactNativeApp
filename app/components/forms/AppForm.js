import React from 'react';
import { Button } from 'react-native';
import { Formik } from 'formik';

function AppForm({ initialValues, onSubmit, validationSchema, children }) {
    return (
        <Formik 
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            { ({ handleSubmit }) => (
                <>
                    {children}
                    <Button onPress={handleSubmit} title="Submit" />
                </>
            ) }
        </Formik>
    );
}

export default AppForm;