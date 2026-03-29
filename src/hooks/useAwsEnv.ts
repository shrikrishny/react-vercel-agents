import { useEffect, useState } from 'react';

const useAwsEnv = () => {
    const [envValues, setEnvValues] = useState({});

    useEffect(() => {
        // Assuming your environment variables are accessible
        const fetchEnvVariables = () => {
            const variables = {
                AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
                AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
                AWS_REGION: process.env.AWS_REGION,
                // Add any other variables needed
            };
            setEnvValues(variables);
        };

        fetchEnvVariables();
    }, []);

    return envValues;
};

export default useAwsEnv;
