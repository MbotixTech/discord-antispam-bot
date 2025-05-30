# 🤖 Discord Anti-Spam Bot

A lightweight and effective Discord bot that detects and removes spam or scam messages to keep your community safe.

---

## 🚀 Features

- Detect and delete messages containing spam or scam keywords.
- Remove messages with suspicious links (excluding trusted domains).
- Identify Steam-related scam messages.
- Filter mass mentions like `@everyone` and `@here`.

---

## 📦 Requirements

- [Node.js](https://nodejs.org/) (v22.14.0 or higher recommended)
- A valid Discord bot token
- A Discord server with proper bot permissions

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/discord-antispam-bot.git
cd discord-antispam-bot
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory:

```env
BOT_TOKEN=your_discord_bot_token_here
```

### 4. Run the Bot

```bash
node index.js
```

---

## 🔒 Whitelisted Domains

Messages containing links from these domains will be allowed:

* youtube.com
* facebook.com
* tiktok.com
* envy217.com

---

## 📁 Project Structure

```
discord-antispam-bot/
├── index.js       # Main bot script
├── .env.example   # change name to .env
├── README.md      # Documentation
├── package.json   # Dependencies and metadata
```

---

## 🛡️ Permissions Required

Make sure your bot has the following permissions in your Discord server:

* ✅ Read Messages
* ✅ Manage Messages (to delete spam)
* ✅ Read Message History

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 🔗 Invite the Bot

Click the link below to invite the bot to your server:

👉 [Invite the Anti-Spam Bot](https://discord.com/oauth2/authorize?client_id=1372146543670460436&permissions=17179943984&integration_type=0&scope=bot)

Make sure to give it the required permissions for full functionality.

💡 **Contributions Welcome!**
Feel free to fork this repository, open pull requests, or report any issues to help improve the bot.
