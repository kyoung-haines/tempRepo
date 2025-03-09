// secret is a local variable (will not be exported)
const secret = 'SUPER SECRET!';

// these are being shared (exported)
const john = 'john';
const peter = 'peter';

module.exports = {
    john,
    peter
};