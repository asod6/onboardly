# Onboardly - Smart Onboarding Platform

Onboardly is a comprehensive onboarding platform that streamlines the process of creating, managing, and tracking onboarding documents and forms. It features AI-powered assistance and smart form management.

## Features

- 🔐 Secure user authentication
- 📄 Document management
- 📝 Smart form creation and management
- 🤖 AI-powered assistance
- 📊 Analytics tracking
- 🔄 Real-time updates
- 📱 Responsive design

## Tech Stack

- **Frontend**: React, TypeScript, Material-UI
- **Backend**: Node.js, Express, TypeScript
- **Database**: MongoDB
- **Authentication**: JWT
- **Storage**: Google Cloud Storage
- **AI Integration**: OpenAI

## Prerequisites

- Node.js (v14 or higher)
- MongoDB
- Google Cloud account (for storage)
- OpenAI API key

## Installation

1. Clone the repository:
```bash
git clone https://github.com/asod6/onboardly.git
cd onboardly
```

2. Install backend dependencies:
```bash
cd server
npm install
```

3. Install frontend dependencies:
```bash
cd ../client
npm install
```

4. Set up environment variables:

Backend (.env in server directory):
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/onboardly
JWT_SECRET=your_jwt_secret_here
OPENAI_API_KEY=your_openai_api_key_here
GOOGLE_CLOUD_PROJECT_ID=your_project_id
GOOGLE_CLOUD_BUCKET_NAME=your_bucket_name
GOOGLE_CLOUD_KEY_FILE=path_to_your_key_file.json
```

Frontend (.env in client directory):
```
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_MIXPANEL_TOKEN=your_mixpanel_token
REACT_APP_AMPLITUDE_API_KEY=your_amplitude_key
```

## Development

1. Start the backend server:
```bash
cd server
npm run dev
```

2. Start the frontend development server:
```bash
cd client
npm start
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## Production Deployment

1. Build the frontend:
```bash
cd client
npm run build
```

2. Build the backend:
```bash
cd server
npm run build
```

3. Start the production server:
```bash
cd server
npm start
```

## API Documentation

### Authentication
- POST /api/auth/register - Register a new user
- POST /api/auth/login - Login user

### Documents
- GET /api/documents - Get all documents
- POST /api/documents - Create a new document
- GET /api/documents/:id - Get a specific document
- PATCH /api/documents/:id - Update a document
- DELETE /api/documents/:id - Delete a document

### Forms
- GET /api/forms - Get all forms
- POST /api/forms - Create a new form
- GET /api/forms/:id - Get a specific form
- PATCH /api/forms/:id - Update a form
- DELETE /api/forms/:id - Delete a form

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, email support@onboardly.com or open an issue in the GitHub repository.
