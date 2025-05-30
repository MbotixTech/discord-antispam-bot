# Discord Anti-Spam Bot

A simple yet effective Discord bot to detect and delete spam or scam content in Discord servers.

## 🚀 Features

- Detects and deletes messages containing common spam or scam keywords.
- Automatically removes messages with suspicious links (excluding trusted domains).
- Identifies Steam-related scam messages.
- Filters out mass mention spam like `@everyone` or `@here`.

## 📦 Requirements

- [Node.js](https://nodejs.org/) (v22.14.0 or higher recommended)
- A Discord bot token
- Discord server with bot invited and proper permissions

## ⚙️ Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/discord-antispam-bot.git
   cd discord-antispam-bot
````

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Create a `.env` file:**

   Inside the root directory, create a `.env` file and add your bot token:

   ```env
   BOT_TOKEN=your_discord_bot_token_here
   ```

4. **Run the bot:**

   ```bash
   node index.js
   ```

## 🔒 Whitelisted Domains

Messages containing links from these domains will be allowed:

* youtube.com
* facebook.com
* tiktok.com
* envy217.com

## 📁 Project Structure

```
discord-antispam-bot/
├── index.js
├── .env
├── README.md
├── package.json
```

## 🛡️ Permissions Required

Ensure your bot has the following permissions in your Discord server:

* Read Messages
* Manage Messages (to delete spam)
* Read Message History

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

> Feel free to contribute or report issues to improve this bot.

```
