import AWS from 'aws-sdk';

// Initialize AWS SDK
AWS.config.update({ region: 'us-east-1' }); // Set your region appropriately

const secretsManager = new AWS.SecretsManager();
const ssm = new AWS.SSM();

// Function to load secret from AWS Secrets Manager
export const loadSecret = async (secretName) => {
    try {
        const data = await secretsManager.getSecretValue({ SecretId: secretName }).promise();
        if ('SecretString' in data) {
            return data.SecretString;
        }
        return null;
    } catch (err) {
        console.error('Unable to get secret:', err);
        throw err;
    }
};

// Function to load parameter from AWS Parameter Store
export const loadParameter = async (parameterName) => {
    try {
        const data = await ssm.getParameter({ Name: parameterName, WithDecryption: true }).promise();
        return data.Parameter.Value;
    } catch (err) {
        console.error('Unable to get parameter:', err);
        throw err;
    }
};
