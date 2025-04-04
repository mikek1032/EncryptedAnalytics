# EncryptedAnalytics

EncryptedAnalytics is a basic analytics tool that focuses on end-to-end encryption for tracking user data.

## Features
- **End-to-End Encryption**: Ensures that the data sent for analytics is encrypted before transmission and can only be decrypted by authorized parties.
- **Easy Integration**: Simple REST API to track events securely.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/mikek1032/EncryptedAnalytics.git
   ```
2. Navigate to the project directory:
   ```bash
   cd EncryptedAnalytics
   ```
3. Install the dependencies:
   ```bash
   npm install express body-parser
   ```
4. Run the application:
   ```bash
   node index.js
   ```

## Usage
To track an event, send a POST request to the `/track` endpoint with the encrypted data. 

### Example Request
```json
POST /track
Content-Type: application/json

{
  "data": {
    "iv": "<initialization_vector>",
    "encryptedData": "<encrypted_event_data>"
  }
}
```

## Contributing
Feel free to fork the repository and submit pull requests. Contributions and suggestions are welcome!

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

-- 
Feel free to enhance or adapt this README to better suit your needs!