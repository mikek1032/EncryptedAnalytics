const express = require('express');
const crypto = require('crypto');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Encryption and Decryption Logic
const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32); // key should be kept secure
const iv = crypto.randomBytes(16);

function encrypt(text) {
    let cipher = crypto.createCipheriv(algorithm, Buffer.from(key), iv);
    let encrypted = cipher.update(text);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return { iv: iv.toString('hex'), encryptedData: encrypted.toString('hex') };
}

function decrypt(text) {
    let iv = Buffer.from(text.iv, 'hex');
    let encryptedText = Buffer.from(text.encryptedData, 'hex');
    let decipher = crypto.createDecipheriv(algorithm, Buffer.from(key), iv);
    let decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString();
}

// Middleware
app.use(bodyParser.json());

// Endpoint to accept encrypted data
app.post('/track', (req, res) => {
    const { data } = req.body;
    const decryptedData = decrypt(data);
    console.log(decryptedData);
    res.json({ status: 'success', data: decryptedData });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});