# KumoTalk Frontend

This is the frontend for the **Real-Time Chat Application** using **React**, **Socket.IO**, and **Tailwind CSS**. The frontend allows users to join the chat, send messages, and switch between group chat and private chat with online users.

## Features

- **Group Chat**: Communicate with all connected users in a global chat room.
- **Private Messaging**: Direct message individual users in real-time.
- **Typing Indicator**: See when another user is typing a message.
- **Online Users List**: Display of all connected users and allows selecting a user for private chat.
- **Dark Mode Support**: Switch between light and dark modes seamlessly.
- **Modular Components**: Chat UI broken down into reusable components.

## Technologies Used

- **React** (with hooks)
- **Socket.IO Client** (for real-time communication)
- **Tailwind CSS** (for styling)
- **Dark Mode** (using Tailwind's `dark` mode feature)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js** and **npm** installed on your local machine.
- A backend server running Socket.IO for real-time messaging (details in the backend repository).
- A valid **JWT Token** (the frontend will fetch the token from `localStorage`).

## Getting Started

### 1. Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/mohamedkaif10/chat-frontend.git
cd chat-frontend
```

### 2. Install Dependencies

Once you're in the project directory, install the required dependencies:

```bash
npm install
```

### 3. Configure Environment Variables

You may need to configure some environment variables. You can do this by creating a \`.env\` file in the project root.

```bash
# .env
REACT_APP_SOCKET_ENDPOINT=http://localhost:8000
```

### 4. Run the Application

To start the application, run the following command:

```bash
npm run dev
```

This will start the development server, and the app should be accessible at \`http://localhost:3000\`.

### 5. Backend Integration

Ensure that the backend server (Socket.IO) is running on the same endpoint (\`http://localhost:8000\`) or update the \`ENDPOINT\` variable in the \`Chat.js\` file if your backend is hosted elsewhere.



## Usage

### Group Chat
- After logging in, you can send messages to all connected users via the group chat.
- Messages appear immediately in the chat window, and you can see who is online.

### Private Chat
- To start a private chat, click on any user in the **Online Users** list.
- You can return to the group chat at any time by clicking the "Back to Group Chat" button.

### Typing Indicator
- When someone is typing, a "user is typing..." indicator will appear below the chat window.

## Troubleshooting

- **Socket Connection Issues**: Make sure the backend server is running and the \`ENDPOINT\` is configured correctly in the frontend.
- **Token Issues**: Ensure the JWT token is stored in \`localStorage\` under the key \`token\` and is valid.
  
# Mohamed Kaif , Indian Institute Of Technoology Hyderabad , Industrial chemistry
