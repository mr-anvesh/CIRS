const getUniversityFromEmail = (email = '') => {
    if (!email || !email.includes('@')) return null;
    const parts = email.split('@');
    const domain = parts[1];
    return domain;
};

module.exports = { getUniversityFromEmail };

