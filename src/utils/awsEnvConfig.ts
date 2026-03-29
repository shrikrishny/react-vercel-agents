// AWS Environment Configuration Utilities

export const awsEnvConfig = {
    region: process.env.AWS_REGION || 'us-west-2',
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    s3Bucket: process.env.S3_BUCKET || 'default-bucket',
};

export const getAWSCredentials = () => {
    return {
        accessKeyId: awsEnvConfig.accessKeyId,
        secretAccessKey: awsEnvConfig.secretAccessKey,
    };
};
