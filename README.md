# WSS Cloud Server — Railway Deploy

TurboWarp cloud variable server, ready to deploy on Railway in ~2 minutes.
Railway handles SSL, WSS, and your public URL automatically.

---

## Deploy steps

### 1. Push to GitHub

Create a new GitHub repo and push this folder to it:

```bash
cd railway-cloud-server
git init
git add .
git commit -m "initial"
git remote add origin https://github.com/YOU/YOUR-REPO.git
git push -u origin main
```

### 2. Deploy on Railway

1. Go to [railway.app](https://railway.app) and log in with GitHub
2. Click **New Project → Deploy from GitHub repo**
3. Select your repo
4. Railway will detect Node.js and deploy automatically

That's it — no config needed. Railway injects `PORT` and handles HTTPS/WSS termination.

### 3. Get your WSS URL

In your Railway project: **Settings → Networking → Generate Domain**

Your endpoint will be:
```
wss://your-project.up.railway.app
```

---

## Connect to TurboWarp

```
https://turbowarp.org/?cloud_host=wss://your-project.up.railway.app
```

## Connect to Forkphorus

```
https://forkphorus.github.io/?chost=wss://your-project.up.railway.app
```

---

## Updates

Push to GitHub → Railway redeploys automatically (takes ~30 seconds, minimal downtime).

---

## Free tier notes

Railway's free tier gives you **$5 credit/month**. This server is very lightweight
and should stay well within that limit under normal use.
Watch your usage in the Railway dashboard under **Usage**.
